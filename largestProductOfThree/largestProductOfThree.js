/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  array.sort(compare);
  return array[0] * array[1] * array[2];
};

var compare = (a, b) => {
  return b - a;
};

console.log(largestProductOfThree([2, 1, 3, 7])); // === 42