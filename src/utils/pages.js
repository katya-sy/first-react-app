export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
  let pageArray = [];
  for (let index = 0; index < totalPages; index++) {
    pageArray.push(index + 1);
  }
  return pageArray;
};
