/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  var deepEqualsHelper = (obj1, obj2) => {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
    for (var key in obj1) {
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }
      if (typeof obj1[key] === 'object' && obj1[key] !== null) {
        return deepEqualsHelper(obj1[key], obj2[key]);
      } else if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
        console.log(JSON.stringify(obj1[key]));
        console.log(JSON.stringify(obj2[key]));
        return false;
      }
    }
    return true;
  };
  return deepEqualsHelper(apple, orange);
  // return true;
  // var appleStr = JSON.stringify(apple);
  // var orangeStr = JSON.stringify(orange);
  // return appleStr === orangeStr;
};

console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
var a = { b: { c: { d: { e: 'potato' } } }, foo: 1 };
var b = { foo: 1, b: { c: { d: { e: 'potato' } } } };
console.log(deepEquals(a, b));  //true