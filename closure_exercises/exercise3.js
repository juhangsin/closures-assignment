
// Multiple arguments!

var sandwiches = 2,
		burgers = 3;

function theUsual() {
	return getUsualOrderFunction(2, 3);
}
// YOUR CODE HERE ------------------------

function getUsualOrderFunction(item1, item2) {
	console.log("We'll get " + item1 + " sandwiches and " + item2 + " burgers")
}


// ---------------------------------------

theUsual(); // We'll get 2 sandwiches and 3 burgers.
sandwiches = 0;
burgers = 1;
theUsual(); // We'll get 2 sandwiches and 3 burgers.
