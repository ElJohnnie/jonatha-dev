import { NotionToMarkdown } from 'notion-to-md';

export default class NotionToMarkdownAdapter {
  private readonly notionToMarkdown: NotionToMarkdown;

  constructor({ notionClient }: { notionClient: any }) {
    this.notionToMarkdown = new NotionToMarkdown({
      notionClient: notionClient,
    });
  }

  async pageToMarkdownAndString(pageId: string) {
    const mdblocks = await this.notionToMarkdown.pageToMarkdown(pageId);
    return this.notionToMarkdown.toMarkdownString(mdblocks);
  }
}
