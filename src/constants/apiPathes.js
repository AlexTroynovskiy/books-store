export const apiPath = 'http://localhost:4000';
export const filterPath = (categories) => categories.reduce((acc, elem) => `${acc}&category_like=${elem}`, ``);
export const bookPath = (page, search, limit, categories = []) => {
  return !categories.length
    ? `products?_limit=${limit}&_page=${page}&title_like=^${search}`
    : `products?_limit=${limit}&_page=${page}&title_like=^${search}${filterPath(categories)}`;
};
export const categoriesPath = 'categories';
export const cartPath = (ids) => {
  const url = ids
    .reduce((acc, curr) => {
      acc += `&id=${curr}`;
      return acc;
    }, '')
    .slice(1);

  return `products?${url}`;
};
export const favouritesPath = (ids) =>
  ids.reduce((acc, curr) => {
    acc += `&id=${curr}`;
    return acc;
  }, '');
