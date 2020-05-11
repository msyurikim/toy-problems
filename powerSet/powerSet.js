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

// var powerSet = function(str) {
//   var subsets = [''];

//   var letters = str.split('');
//   subsets.push(...letters);

//   var findSet = function(set, letters, allLetters) {
//     if (letters.length < 2) {
//       subsets.push(letters);
//     } //else
//     for (var i = 0; i < letters.length; i++) {

//       findSet(start, rest);
//     }
//   }

//   findSet('', letters, letters);
//   return subsets;
// };

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

var powerSet = function(str) {

	var set = [];
	var hash = {};
	if (!str) { str = ""; }
	str = str.split("").sort();

	// remove duplicates
	for (var i = 1; i < str.length; i++) {
		if (str[i - 1] === str[i]) {
			str.splice(i, 1);
			i--;
		}
	}

	// recursive through the sub sets
	var recurse = function(strSet) {
		var joined = strSet.join("");

		// check if we have visited this combo
		if (hash[joined]) { return; }
		hash[joined] = true;
		set.push(joined);

		// don't recurse to empty set - add it once at the end
		if (strSet.length === 1) { return; }

		// recurse all subsets
		for (var i = 0; i < strSet.length; i++) {
			var subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
			recurse(subSet);
		}
	};
	recurse(str);
	set.push(""); // the power set, by definition, includes the empty set

	return set;
};