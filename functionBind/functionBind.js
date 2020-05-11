/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

// var bind = function(func, newThis) {
//   // TODO: Your code here
//   var funcStr = "" + func;

//   funcStr = funcStr.replace(/this/g, newThis);
//   funcStr = funcStr.replace('function', '');

//   var begParam = funcStr.indexOf('(');
//   var endParam = funcStr.indexOf(')');
//   params = funcStr.slice(begParam + 1, endParam);
//   var paramArr = params.split(',');

//   var begBody = funcStr.indexOf('{');
//   var endBody = funcStr.lastIndexOf('}');
//   funcBody = funcStr.slice(begBody + 1, endBody);
//   func = new Function(...paramArr, funcBody);

//   return func;
// };

var bind = function (fn, context) {
	var outerArgs = Array.prototype.slice.call(arguments, 2);
	console.log(arguments);
	console.log(outerArgs);
	return function () {
		var innerArgs = Array.prototype.slice.call(arguments);
		console.log(innerArgs);
		var totalArgs = Array.prototype.concat( outerArgs, innerArgs );
		console.log(totalArgs);
		return fn.apply(context, totalArgs);
		// return fn.apply(context);
	};
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

//only from solution
Function.prototype.bind = function( context ) {
	// TODO: Your code here

	var previousArgs = Array.prototype.slice.call(arguments, 1);
	var func = this;

	return function() {
		var args = Array.prototype.slice.call(arguments);
		args = previousArgs.concat(args);

		return func.apply(context, args);
	};
};

var alice = {
	name: "alice",
	shout: function(){
		alert(this.name);
	}
};
console.log("hi");
var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: "bob"});
boundShout(); // alerts 'bob'

// example 2:

// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'foo');
// var result = boundFunc('bar');
// result === 'foobar'; // true