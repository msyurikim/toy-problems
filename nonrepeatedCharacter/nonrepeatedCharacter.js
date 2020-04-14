/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

//alternative approach: double loop, for every letter --> find indexof that letter in rest of string

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var unique = [];
  var repeated = [];
  for (var i = 0; i < string.length; i++) {
    if (repeated.includes(string[i])) {
      continue;
    } else if (unique.includes(string[i])) {
      var index = unique.indexOf(string[i]);
      unique.splice(index, 1);
      repeated.push(string[i]);
    } else {
      unique.push(string[i]);
    }

  }
  return unique.shift();
};

console.log(firstNonRepeatedCharacter('ABA'));
console.log(firstNonRepeatedCharacter('AACBDB'));