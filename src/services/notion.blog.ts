'use server';

import { NotionDatabaseResponse } from './types';
import NotionToMarkdownAdapter from '@/adapters/notion-to-markdown.adapter';
import NotionBlogConfig from '@/config/notion-blog.config';

const notionBlogConfig = new NotionBlogConfig();

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
    const response = await notionBlogConfig.getClient().databases.query({
      database_id: notionBlogConfig.getDatabaseId(),
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

    console.log('Notion response:', response);

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

    console.log('Parsed posts:', posts);

    return posts;
  } catch (err) {
    console.error('Error fetching posts:', err);
    console.warn(
      `Failed to load Notion posts, have you run the create-table script?`
    );
    return [];
  }
}

export async function getPost(slug: string): Promise<any> {
  try {
    const response = await notionBlogConfig.getClient().databases.query({
      database_id: notionBlogConfig.getDatabaseId(),
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

    console.log('Notion response for getPost:', response);

    const pageId = response.results[0].id;
    const n2mAdapter = new NotionToMarkdownAdapter({
      notionClient: notionBlogConfig.getClient(),
    });

    const mdString = await n2mAdapter.pageToMarkdownAndString(pageId);
    return { content: mdString.parent };
  } catch (err) {
    console.error('Error fetching post:', err);
    console.warn(
      `Failed to load the post, have you run the create-table script?`
    );
    return [];
  }
}

export async function getPostsByTag(tag: string, slug: string): Promise<any> {
  try {
    const response = await notionBlogConfig.getClient().databases.query({
      database_id: notionBlogConfig.getDatabaseId(),
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

    console.log('Notion response for getPostsByTag:', response);

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

    console.log('Parsed posts by tag:', posts);

    return posts;
  } catch (err) {
    console.error('Error fetching posts by tag:', err);
    console.warn(
      `Failed to load the post, have you run the create-table script?`
    );
    return [];
  }
}
