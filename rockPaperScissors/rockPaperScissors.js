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

var arr = ["R","P","S"];
var result = new Array(3);
var results = [];

var rockPaperScissors = function (arr, len, startPosition, result) {
  if (len === 0){
    //console.log(result);
    results.push(result.join(''));
    console.log(results);
  }
  for (var i = startPosition; i < 27; i++){ //was arr.length -len
    result[3 - len] = arr[i]; //3 --> result.length
    //console.log(result);
    rockPaperScissors(arr, len-1, i+1, result);
  }
  return results;
};

rockPaperScissors(arr, 3, 0, result);