'use server';

import { NotionDatabaseResponse } from './types';
import NotionToMarkdownAdapter from '@/adapters/notion-to-markdown.adapter';
import NotionConfig from '@/config/notion.config';

const notionBlogConfig = new NotionConfig(
  process.env.NOTION_DATABASE_PROJECT_ID ?? ''
);

export async function getAllProjects(): Promise<
  | {
      id: string;
      title: string;
      slug: string;
      date: string;
      author: string;
      avatar: string;
      tags: string;
      lang?: string;
      description?: string;
    }[]
  | []
> {
  try {
    const response = await notionBlogConfig.getClient().databases.query({
      database_id: notionBlogConfig.getDatabaseId(),
      filter: {
        or: [
          {
            property: 'available',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });

    const typedResponse = response as unknown as NotionDatabaseResponse;

    const projects = typedResponse.results.map((post) => {
      return {
        id: post.id,
        title: post.properties.page.title[0].text.content,
        slug: post.properties.slug.rich_text[0].plain_text,
        date: post.properties.date.date.start,
        author: post.properties.author.people[0].name,
        avatar: post.properties.author.people[0].avatar_url,
        tags: post.properties.tags.multi_select[0].name,
        lang: post.properties.lang.rich_text[0].plain_text,
      };
    });

    return projects;
  } catch (err) {
    console.error('Error fetching posts:', err);
    console.warn(
      `Failed to load Notion posts, have you run the create-table script?`
    );
    return [];
  }
}

export async function getProject(slug: string, lang: string): Promise<any> {
  try {
    const response = await notionBlogConfig.getClient().databases.query({
      database_id: notionBlogConfig.getDatabaseId(),
      filter: {
        and: [
          {
            property: 'slug',
            rich_text: {
              equals: slug,
            },
          },
          {
            property: 'available',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'lang',
            rich_text: {
              equals: lang,
            },
          },
        ],
      },
    });

    const typedResponse = response as unknown as NotionDatabaseResponse;

    const projectObject = {
      title: typedResponse.results[0].properties.page.title[0].text.content,
      slug: typedResponse.results[0].properties.slug.rich_text[0].plain_text,
      date: typedResponse.results[0].properties.date.date.start,
      author: typedResponse.results[0].properties.author.people[0].name,
      avatar: typedResponse.results[0].properties.author.people[0].avatar_url,
      tags: typedResponse.results[0].properties.tags.multi_select[0].name,
      lang: typedResponse.results[0].properties.lang.rich_text[0].plain_text,
    };

    const pageId = typedResponse.results[0].id;

    const n2mAdapter = new NotionToMarkdownAdapter({
      notionClient: notionBlogConfig.getClient(),
    });

    const mdString = await n2mAdapter.pageToMarkdownAndString(pageId);

    const dto = { content: mdString.parent, project: projectObject };

    return dto;
  } catch (err) {
    return [];
  }
}
