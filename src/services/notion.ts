'use server';

import { Client } from '@notionhq/client';
import { NotionDatabaseResponse } from './types';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID ?? '';

export async function getAllPosts(): Promise<
  | {
      id: string;
      title: string;
      slug: string;
      date: string;
      author: string;
      avatar: string;
      tags: string;
    }[]
  | []
> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
          {
            property: 'avaible',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });

    const typedResponse = response as unknown as NotionDatabaseResponse;

    const posts = typedResponse.results.map((post) => {
      return {
        id: post.id,
        title: post.properties.page.title[0].text.content,
        slug: post.properties.slug.rich_text[0].plain_text,
        date: post.properties.date.date.start,
        author: post.properties.author.people[0].name,
        avatar: post.properties.author.people[0].avatar_url,
        tags: post.properties.tags.multi_select[0].name,
      };
    });

    return posts;
  } catch (err) {
    console.warn(
      `Failed to load Notion posts, have you run the create-table script?`
    );
    return [];
  }
}

export async function getPost(slug: string): Promise<any> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
          {
            property: 'slug',
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    });

    const pageId = response.results[0].id;
    const n2m = new NotionToMarkdown({ notionClient: notion });

    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);
    return { content: mdString.parent };
  } catch (err) {
    console.warn(
      `Failed to load the post, have you run the create-table script?`
    );
    return [];
  }
}

export async function getPostsByTag(tag: string, slug: string): Promise<any> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
          {
            property: 'tags',
            multi_select: {
              contains: tag,
            },
          },
        ],
        and: [
          {
            property: 'avaible',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'slug',
            rich_text: {
              does_not_equal: slug,
            },
          },
        ],
      },
    });

    const typedResponse = response as unknown as NotionDatabaseResponse;

    const posts = typedResponse.results.map((post) => {
      return {
        id: post.id,
        title: post.properties.page.title[0].text.content,
        slug: post.properties.slug.rich_text[0].plain_text,
        date: post.properties.date.date.start,
        author: post.properties.author.people[0].name,
        avatar: post.properties.author.people[0].avatar_url,
        tags: post.properties.tags.multi_select[0].name,
      };
    });

    return posts;
  } catch (err) {
    console.warn(
      `Failed to load the post, have you run the create-table script?`
    );
    return [];
  }
}
