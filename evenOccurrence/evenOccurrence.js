/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  var evenTimes = {};
  //traverse original array
  for (var i = 0; i < arr.length; i++) {
    var numString = '"'+ arr[i] + '"';
    if (evenTimes[numString] === undefined) {
      evenTimes[numString] = 1;
    } else {
      evenTimes[numString] += 1;
    }
  }
  //traverse object
  for (var i = 0; i < Object.keys(evenTimes).length; i++) {
    var key = Object.keys(evenTimes)[i];
    var keyValue = key.slice(1, key.length-1);
    if (!isNaN(Number(keyValue)) && typeof Number(keyValue) === 'number') {
    //parseInt throws error bc non-numbers will eval to NaN, which is type 'number'
      if (evenTimes[key] % 2 === 0) {
        return Number(keyValue);
      }
    } else if (evenTimes[key] % 2 === 0) {
      console.log(keyValue);
      return keyValue;
    }
  }
  return null;
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
var onlyEven2 = evenOccurrence(['cat', 'dog', 'dig', 'cat']);
console.log(typeof onlyEven); //  number
console.log(onlyEven); //4
console.log(onlyEven2); //  cat