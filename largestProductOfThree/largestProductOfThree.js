/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var negatives = [];
  var positives = [];
  // var product = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      negatives.push(array[i]);
    } else {
      positives.push(array[i]);
    }
  }
  //both, biggest (abs) value first
  positives.sort((a, b) => b - a);
  negatives.sort((a, b) => a - b);
  var neglen = negatives.length;
  var poslen = positives.length;

  if (positives.length === 0) {
    return negatives[neglen - 1] * negatives[neglen - 2] * negatives[neglen - 3];
  } else if (positives.length === 1) {
    return positives[0] * negatives[neglen-1] * negatives[neglen-2];
  } else if (positives.length === 2) {
    let mixed = positives[0] * positives[1] * negatives[neglen-1];
    let neg = negatives[neglen - 1] * negatives[neglen - 2] * negatives[neglen - 3];
    return mixed > neg ? mixed : neg;
  } else if (negatives.length < 2) {
    return positives[0] * positives[1] * positives[2];
  } else {
    let mixed = positives[0] * negatives[0] * negatives[1];
    let pos = positives[0] * positives[1] * positives[2];
    return pos > mixed ? pos : mixed;
  }

  // array.sort(compare);
  // return array[0] * array[1] * array[2];
};

// var compare = (a, b) => {
//   return b - a;
// };

console.log(largestProductOfThree([2, 1, 3, 7])); // === 42
console.log(largestProductOfThree([2, 3, -11, 7, 5, -13])); //1001
console.log(largestProductOfThree([-31, 41, 34, -37, -17, 29]));  //(47027)
console.log(largestProductOfThree([-1, -2, -3, -4, -5, -6])); //-6
