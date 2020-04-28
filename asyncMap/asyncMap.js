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


var asyncMap = function(tasks, callback) {
  var results = [];

  // var prom1 = new Promise( () => tasks[0](cb) );
  // var prom2 = new Promise( () => tasks[1](cb) );

  var prom1 = new Promise( () => tasks[0]( str => { results[0] = str; }) );
  var prom2 = prom1.then(new Promise( () => tasks[1]( str => { results[1] = str; }) ));

  //when these are done
  async function doTasks() {
    await prom2.catch(e => {console.log(e)});
    callback(results);
  }
  doTasks();

  return results;
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