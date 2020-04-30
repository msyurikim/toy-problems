/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var subsets = [''];

  var letters = str.split('');
  subsets.push(...letters);

  var findSet = function(set, letters, allLetters) {
    if (letters.length < 2) {
      subsets.push(letters);
    } //else
    for (var i = 0; i < letters.length; i++) {

      findSet(start, rest);
    }
  }

  findSet('', letters, letters);
  return subsets;
};

// var findSet = function(set, remainder) {
//   if (remainder.length === 0) {
//     subsets.push(set);
//   }
//   for (var i = 0; i < remainder.length; i++) {
//     var start = remainder[i];
//     var rest = remainder.slice(0, i) + remainder.slice(i + 1);
//     findSet(start, rest);
//   }
// }