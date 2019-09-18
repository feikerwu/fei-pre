const regHttpScheme = /^http/g;

export const isValidHttpUrl = (url: string): boolean => {
  return regHttpScheme.test(url);
};

export const getValidHttpRequest = (url: string): string => {
  return isValidHttpUrl(url) ? url : url.replace(/(?=^)/, 'https://');
};
