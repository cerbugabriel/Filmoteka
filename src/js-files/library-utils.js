export function getIds(arr) {
  const arrIds = [];
  arr.forEach(movie => {
    arrIds.push(movie.id);
  });
  return arrIds;
}
