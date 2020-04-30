/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {
  // var currency = {
  //   1: ,
  //   2: ,
  //   5: ,
  //   10: ,
  //   50: ,
  //   100: ,
  //   200:
  // };
  var currency = [1, 2, 5, 10, 50, 100, 200];
  var max = currency.length - 1;
  var count = 0;

  for (var i = 0; i < currency.length; i++) { //finding max quotient
    if (total < currency[i]) {
      max = i - 1;
      break;
    }
  }

  var changeHelper = function(total, max) {
    for (var j = max; j >= 0; j--) {  //changing the max divisor: currency[j]
      var quotient = Math.floor(total / currency[j]); //quotient = how many times divisor can fit
      while (quotient > 0) {
        var remainder = total - (currency[j] * quotient);//%
        if (remainder === 0) {
          count++;  //count quotient * currency[j]
        } else {
          count += changeHelper(remainder, max - 1);
        }
        quotient--;
        console.log(count);
      }
    }
    return count;
  };

  changeHelper(total, max, count);

  return count;
};


// console.log(makeChange(1)); //1
// console.log(makeChange(2)); //2
console.log(makeChange(5)); //4
// console.log(makeChange(10));  //11