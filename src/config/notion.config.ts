'use server';

import { Client } from '@notionhq/client';

class NotionConfig {
  private readonly notion: Client;
  private readonly databaseId: string;

  constructor(databaseId: string) {
    this.notion = new Client({ auth: process.env.NOTION_API_KEY });
    this.databaseId = databaseId;
  }

  getClient(): Client {
    return this.notion;
  }

  getDatabaseId(): string {
    return this.databaseId;
  }
}

export default NotionConfig;
