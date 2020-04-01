/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// var arr = ["R","P","S"];
// var result = new Array(3);
// var results = [];

// var rockPaperScissors = function (arr, len, startPosition, result) {
//   if (len === 0){
//     //console.log(result);
//     results.push(result.join(''));
//     console.log(results);
//   }
//   for (var i = startPosition; i < 3; i++){ //was arr.length -len
//     result[3 - len] = arr[i]; //3 --> result.length
//     //console.log(result);
//     rockPaperScissors(arr, len-1, i+1, result);
//   }
//   return results;
// };

// var rockPaperScissors = function(rounds) {
//   var arr = ["R","P","S"];
//   //var result = new Array(3);
//   var results = [];
//   var rounds = rounds;
//   var games = Math.pow(arr.length, rounds);
//   return play(0, 0, rounds, games, []);
// };

// var play = function(numRound, numGame, rounds, games, result) {
//   if (numGame === games) {
//     results.push(result.join(''));
//     return results;
//   }

//   for (var i = 0; i < arr.length; i++) {
//     // if (numRound === rounds) {
//     //   console.log(result);
//     //   results.push(result.join(''));
//     //   //result = new Array(3);
//     //   numRound = 0;
//     //   numGame += 1;
//     //   return play(numGame, numRound, rounds, games, []);
//     // } else {
//       result[numRound] = arr[i];
//       console.log(numRound);
//       numRound += 1;
//     //}
//   }

//   if (numRound === rounds) {
//     console.log(result);
//     results.push(result.join(''));
//     //result = new Array(3);
//     console.log(results);
//     numRound = 0;
//     numGame += 1;
//     return play(numGame, numRound, rounds, games, []);
//   }

// };

// console.log(rockPaperScissors(3));

var arr = ["R","P","S"];
var results = [];
var rockPaperScissors = function() {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result[0] = arr[i];
    for (var j = 0; j < arr.length; j++) {
      result[1] = arr[j];
      for (var k = 0; k < arr.length; k++) {
        result[2] = arr[k];
        results.push(result.join(''));
      }
    }
  }
  return results;
}
console.log(rockPaperScissors());