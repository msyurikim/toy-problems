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
  if (array.length <= 1) {
    return array;
  }
  for (var i = 0; i <= array.length; i++) {
    if (i === array.length) {
      console.log(arrCopy1);
      console.log(array[pivot]);
      console.log(arrCopy2);
      arrCopy1 = quicksort(arrCopy1);
      arrCopy2 = quicksort(arrCopy2);
    } else if (array[i] < array[pivot]) {
      arrCopy1.push(array[i]);

    } else if (array[i] > array[pivot]) {
      arrCopy2.push(array[i]);

    }
  }

  return [...arrCopy1, array[pivot], ...arrCopy2];
};

console.log(quicksort([4, 2, 3, 4, 1]));

var result = quicksort([8, 7, 3, 6, 9, 2, 4, 5, 1]);
console.log(result);
    // result.should.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
