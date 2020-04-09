/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  //var pivot = Math.floor(Math.random() * array.length);
  var pivot = Math.floor(array.length / 2);
  var arrCopy1 = [];
  var arrCopy2 = [];

  //base cases
  if (array.length === 1) {
    return [array[0]];
  } else if (array.length === 2) {
    if (array[0] < array[1]) {
      return [array[0], array[1]];
    } else {
      return [array[1], array[0]];
    }
  }
  for (var i = 0; i <= array.length; i++) {
    if (i === array.length) {
      arrCopy1 = quicksort(arrCopy1);
      arrCopy2 = quicksort(arrCopy2);
      console.log(arrCopy1);
      console.log(pivot);
      console.log(arrCopy2);
    } else if (array[i] < array[pivot]) {
      arrCopy1.push(array[i]);

    } else if (array[i] > array[pivot]) {
      arrCopy2.push(array[i]);

    }
  }

  // arrCopy1 = quicksort(arrCopy1);
  // arrCopy2 = quicksort(arrCopy2);

  return [...arrCopy1, array[pivot], ...arrCopy2];
};

console.log(quicksort([4, 2, 3, 4, 1]));
