/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

// var allAnagrams = function(string) {
// 	// Your code here.
// 	var anagrams = [];  //storage for result

// 	var anagramHelper = function(anagram, remainder) {
// 		if (remainder.length === 0) {
// 			anagrams.push(anagram);
// 		}
// 		for (var i = 0; i < remainder.length; i++) {
// 			var start = remainder[i];
// 			var rest = remainder.slice(0, i) + remainder.slice(i + 1);
// 			anagramHelper(anagram + start, rest);
// 		}
// 	};

// 	anagramHelper("", string);
// 	return anagrams;
// };

var allAnagrams = function(string) {
	// Your code here.

	var uniqueOutput = {};

	(function anagram (ana, str) {
		if (str === "") { uniqueOutput[ana] = 1; }

		for (var i = 0; i < str.length; i++) {
			anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
		}
	})("", string);

	return Object.keys(uniqueOutput);
};


// var anagrams = allAnagrams('ab');
// console.log(anagrams); // [ 'ab', 'ba']

var anagrams = allAnagrams("abc");
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]