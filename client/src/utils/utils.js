export const getParams = (name) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};
