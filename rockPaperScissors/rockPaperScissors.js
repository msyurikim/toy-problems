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
// var results = [];
// var rockPaperScissors = function() {
// 	var result = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		result[0] = arr[i];
// 		for (var j = 0; j < arr.length; j++) {
// 			result[1] = arr[j];
// 			for (var k = 0; k < arr.length; k++) {
// 				result[2] = arr[k];
// 				results.push(result.join(""));
// 			}
// 		}
// 	}
// 	return results;
// };
// console.log(rockPaperScissors());

var rockPaperScissors = function(rounds) {
	var rounds = rounds || 3;
	var combos = [];

	var playRounds = function (playedSoFar) {
		playedSoFar = playedSoFar || "";

		if (playedSoFar.length === rounds) {
			combos.push(playedSoFar);
			return;
		}

		["R", "P", "S"].forEach(function(currentPlay) {
			playRounds(playedSoFar + currentPlay);
		});
	};

	playRounds();
	return combos;
};

rockPaperScissors(3);
rockPaperScissors(5);