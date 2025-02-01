import { Client } from '@notionhq/client';

class NotionProjectsConfig {
  private readonly notion: Client;
  private readonly databaseId: string;

  constructor() {
    this.notion = new Client({ auth: process.env.NOTION_API_KEY });
    this.databaseId = process.env.NOTION_DATABASE_ID ?? '';
  }

  getClient(): Client {
    return this.notion;
  }

  getDatabaseId(): string {
    return this.databaseId;
  }
}

export default NotionProjectsConfig;
