import _ from "lodash";

export function paginate(items, pageNumber, perPage) {
  const startIndex = (pageNumber - 1) * perPage;
  return _(items)
    .slice(startIndex)
    .take(perPage)
    .value();
}

// My original implementation
// export function paginate(items, pageNumber, perPage) {
//   return items.filter(
//     item => Math.ceil((items.indexOf(item) + 1) / perPage) === pageNumber
//   );
// }
