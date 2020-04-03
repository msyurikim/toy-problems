/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {

    this.storage = [];

  // add an item to the top of the stack
    this.push = function(value) {
      this.storage.push(value);
    };

  // remove an item from the top of the stack
    this.pop = function() {
      this.storage.pop();
    };

  // return the number of items in the stack
    this.size = function() {
      return this.storage.length;
    };

  // return the minimum value in the stack
    this.min = function() {
      var copy = this.sort();
      return copy[0];
    };

    this.sort = function() {
      var copy = this.storage.slice();
      copy.sort((prev, val) => prev - val);
      return copy;
    }

  };

var example = new Stack();
example.push(4);
example.push(3);
console.log(example.min()); //=== 3
example.push(3);
example.push(2);
example.push(2);
console.log(example.min()); //=== 2

var stack = new Stack();
stack.push(200);
console.log(stack.min()); //200
//stack.min().should.be.equal(200);

stack.push(100);
//stack.min().should.be.equal(100);
console.log(stack.min()); //100

stack.pop();
console.log(stack.min()); //200
//stack.min().should.be.equal(200);

stack.push(50);
stack.push(50);
console.log(stack.min()); //50
//stack.min().should.be.equal(50);
stack.pop();
console.log(stack.min()); //50
//stack.min().should.be.equal(50);
