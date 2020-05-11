'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

// var asyncMap = function(tasks, callback) {
//   var results = [];

//   // var prom1 = () => tasks[0]( str => { results[0] = str; });
//   // var prom2 = () => tasks[1]( str => { results[1] = str; });

//   var prom1 = () => tasks[0]( str => { results.push(str); });
//   var prom2 = () => tasks[1]( str => { results.push(str); });

//   prom1();
//   while (results.length === 0) {
//     console.log('waiting for first task');
//   }
//   prom2();
//   while (results.length === 1) {
//     console.log('waiting for second task');
//   }
//   callback(results);
//   return results;
// };

var asyncMap = function(tasks, callback) {

  var resultsArray = [];
  var resultsCount = 0;

  for (var i = 0; i < tasks.length; i++) {
    (function (i) {
      tasks[i](function (val) {
        resultsArray[i] = val;
        resultsCount++;
        if (resultsCount === tasks.length) {
          callback(resultsArray);
        }
      });
    })(i);
  }
  };


var results = asyncMap([
  function(cb){
    setTimeout(function(){
    cb('one');
  }, 200);
},
 function(cb){
   setTimeout(function(){
      cb('two');
    }, 100);
  }
  ],
 function(results){
   // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
      console.log(results); // ['one', 'two']
 });

setTimeout(()=> console.log('results', results), 1000);