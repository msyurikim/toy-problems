/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
	0: "0",
	1: "1",
	2: "ABC",
	3: "DEF",
	4: "GHI",
	5: "JKL",
	6: "MNO",
	7: "PQRS",
	8: "TUV",
	9: "WXYZ"
};


// var telephoneWords = function(digitString) {
// 	// TODO: return every combination that can be spelled on a phone with these digits
// 	var digitArr = digitString.split("");
// 	var permutations = [];
// 	var word = "";
// 	var letterIndex = 0;

// 	var findWord = function(letterIndex) {
// 		for (var i = 0; i < digitArr.length; i++) {
// 			word += findLetter(digitArr[i], letterIndex);
// 			console.log(word);
// 			if (word.length === digitArr.length) {
// 				permutations.push(word);
// 				word = "";
// 				if (letterIndex < phoneDigitsToLetters[i].length - 1) {
// 					return findWord(letterIndex + 1);
// 				}
// 				return;
// 			}
// 		}
// 	};
// 	findWord(0);
// 	return permutations;
// };

// var findLetter = function(digit, letterIndex) {
// 	if (digit === "0") {
// 		return "0";
// 	} else if (digit === "1") {
// 		return "1";
// 	} else {
// 		return phoneDigitsToLetters[digit][letterIndex];
// 	}
// };

var telephoneWords = function(digitString) {
	// TODO: return every combination that can be spelled on a phone with these digits

	var words = [];

	var lettersForDigits = function (word, digits) {
		if (digits.length === 0) {
			words.push(word);
			return;
		}
		// Solution note: during solution review, refactor currentDigit and remainDigits
		// They are shown here for clarity of the solution progression
		var currentDigit = digits[0];
		var remainDigits = digits.slice(1);
		var letters = phoneDigitsToLetters[currentDigit].split("");
		for (var i = 0; i < letters.length; i++) {
			lettersForDigits(word + letters[i], remainDigits);
		}
	};
	lettersForDigits("", digitString.split(""));

	return words;
};

// console.log(telephoneWords("0002"))
// [ "000A", "000B", "000C" ]

console.log(telephoneWords("1123"));
// [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]