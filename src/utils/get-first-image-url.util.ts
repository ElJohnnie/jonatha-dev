/**
 * Extrai a URL da primeira imagem em uma string de markdown.
 *
 * @param markdown - A string contendo markdown.
 * @returns A URL da primeira imagem encontrada ou undefined.
 */
export default function getFirstImageUrl(markdown: string): string | undefined {
  // RegEx que captura o conteúdo dentro de parênteses após ![...]
  const regex = /!\[.*?\]\((.*?)\)/;
  const match = regex.exec(markdown);
  return match ? match[1] : undefined;
}
