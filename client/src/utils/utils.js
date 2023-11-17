export const getName = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

export const getPageNumber = (page) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(page);
};
