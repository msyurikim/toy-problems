/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  //var index = 0;

  var recursiveSearch = (index, array) => {
    if (array.length <= 1) {
      if (array[0] === target) {
        return index;
      }
      return null;
    } else {
      var mid = Math.floor(array.length / 2);
      if (target === array[mid]) {
        return index + mid;
      } else if (target > array[mid]) {
        return recursiveSearch(mid + 1, array.slice(mid + 1));
      } else {
        return recursiveSearch(index, array.slice(0, mid));
      }
    }
  };

  return recursiveSearch(0, array);

  //return index;
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // 3
var index1 = binarySearch([1, 2, 3, 4, 5], 8);
console.log(index1); // null