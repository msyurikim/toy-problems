/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.
var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }

  return transform;
};

var insertionSort = function(array) {
  for (var i = 1; i < array.length; i++) {
    console.log(array);
    for (var j = 0; j <= i; j++) {
      console.log(j);
      if (i === j) {  //array[i] > array[j], and reach end of sorted part of array
        break;
      } else if (array[i].value < array[j].value) {
        var current = array.splice(i, 1);
        console.log(current);
        array.splice(j, 0, current[0]);
        console.log(array);
      } else if (array[i].value === array[j].value) {
        //i > j , so leave the order
        continue;
      }
    }
  }
  return array;
};

//console.log(insertionSort([{value: 2}, {value: 1}, {value: 3}]));
// var array = testingTransform([3, 2, 1]);
// var result = insertionSort(array);


var array = testingTransform([1, 5, 1, 5]);
var result = insertionSort(array);
//array.should.eql([{ value: 1, i: 0 }, { value: 1, i: 2 }, { value: 5, i: 1 }, { value: 5, i: 3 }]);
//console.log(array);
console.log(result);