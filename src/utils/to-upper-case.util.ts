export const toUppercaseUtil = (element: string[] | string) => {
  if (Array.isArray(element)) {
    return element.map((el) => {
      const firstChar = el.charAt(0).toUpperCase();
      const sliced = el.slice(1);
      return `${firstChar}${sliced}`;
    });
  } else {
    const firstChar = element.charAt(0).toUpperCase();
    const sliced = element.slice(1);
    return `${firstChar}${sliced}`;
  }
};
