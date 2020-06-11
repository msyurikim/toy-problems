/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.

O: reversed digits
I: positive integer
C: convert into a string/array
E: single digit --> return the digit, leading zeros are ignored?
1 --> 1
100 --> 001 ? 1
150 --> 15
2345 --> 5432

input: 521
ones: % 10 --> 1
tens: ((input - ones) % 100) / 10 --> 20 --> 2
hundreds: ((input - tens - ones) % 1000) / 100 --> 500 --> 5

keep track of: modulo, modulo / 10, number, digit --> modulo, number

keep track of digits = [];

recursive helper function (modulo, [extracted numbers])
  while (input - ([extracted numbers]) > 0)
    input - ([extracted numbers]) % modulo = number
    push number into [extracted numbers]
    number / (modulo/10) --> push digit into digits
    call recursive helper(modulo * 10, [extracted numbers])
  return;
recursive helper (10, []);

var reversed = 0;
reverse digits array
i = 0
for loop, iterating through digits array (starting from the end)
  10 ^ i * digits[i] --> add to reversed

return reversed;
*
*/

function reverseInteger(number){
  // TODO: Implement this function!

}
