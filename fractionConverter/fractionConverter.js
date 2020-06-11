/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

/**
 * O: string, digit / digit
 * I: decimal
 * C: none
 * E: whole number --> /1
 */

// convert input to string
	// everything up to the decimal --> whole number
	// everything after decimal --> fraction

// if fraction = 0 --> whole number / 1
// if fraction = 5 --> / 2
	// whole number * 2 + 1 --> first digit


var toFraction = function(number) {
	// Your code here
	var numStr = number.toString();
	var decimalIndex = numStr.indexOf('.');
	var whole, fraction;
	if (decimalIndex === -1) {
		whole = numStr;
		fraction = '0';
	} else {
		whole = numStr.slice(0, decimalIndex);
		fraction = numStr.slice(decimalIndex + 1);
	}

	var output = '/';

	if (fraction === '0') {
		output = output + '1';
		output = whole + output;
	} else if (fraction === '5') {
		output = output + '2';
		var first = (whole * 2) + 1;
		output = first + output;
	}

	return output;
};

console.log(toFraction(0.5));
console.log(toFraction(3.0));
console.log(toFraction(2.5));