/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
	// TODO: Your code here
	obj.on = function (event, cb) {
		if (obj.hasOwnProperty(event)) {
			obj[event].push(cb);
		} else {
			obj[event] = [cb];
		}
	};
	obj.trigger = function(event) {
		if (arguments.length > 1) {
			for (var i = 0; i < arguments.length; i++) {
				for (var j = 0; j < obj[arguments[i]].length; j++) {
					obj[arguments[i]][j]();
				}
			}
			// events = [...arguments];
			// events.forEach( event => obj[event].forEach(cb => cb()));
		} else {
			// obj[events].forEach(cb => cb())
			for (var k = 0; k < obj[event].length; k++) {
				obj[event][k]();
			}

		}
	};
	return obj;
};


// var obj = mixEvents({ name: "Alice", age: 30 });
// obj.on("ageChange", function(){ // On takes an event name and a callback function
// 	console.log("Age changed");
// });
// obj.age++;
// obj.trigger("ageChange"); // This should call our callback! Should log 'age changed'.

var car = mixEvents({
	color: "red",
	"insurance-premium": "costly",
	speed: 0,
	radio: "off"
});

// Both of these should get called when we trigger 'green-light'.
car.on("green-light", function() {
	car.speed = 100;
});

car.on("green-light", function() {
	car.radio = "blaring";
});

// car.speed.should.equal(0);
// car.radio.should.equal('off');

car.trigger("green-light");
console.log("speed: ", car.speed);	//100
console.log("radio: ", car.radio);	//blaring
