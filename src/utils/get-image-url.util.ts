export function getFirstImageUrl(markdown: string): string | undefined {
  const regex = /!\[.*?\]\((.*?)\)/;
  const match = regex.exec(markdown);
  return match ? match[1] : undefined;
}

export function getAllImageUrls(markdown: string): string[] {
  const regex = /!\[.*?\]\((.*?)\)/g;
  const images: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = regex.exec(markdown)) !== null) {
    const url = match[1];
    if (/\.(png|jpe?g|gif|svg)(\?.*)?$/i.test(url)) {
      images.push(url);
    }
  }

  return images;
}

export function removeImagesFromMarkdown(markdown: string): string {
  const imageRegex = /!\[.*?\]\((.*?)\)/g;

  return markdown.replace(imageRegex, '');
}
