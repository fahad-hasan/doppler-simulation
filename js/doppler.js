/*
Class for handling Doppler effect simulation
--------------------------------------------
Constructor:
Takes image object as input
*/
var Doppler = function(_imageObj) {
    this.imageObj = _imageObj;
    this.debug = false;
};

/*
function: setDebug
------------------
Sets the debug flag to TRUE | FALSE
Default: FALSE
*/
Doppler.prototype.setDebug = function(idebug) {
	this.debug = idebug;
}

/*
function: simulate
------------------
Takes valocity input within range [-100 to 100]
*/
Doppler.prototype.simulate = function(ivelocity) {
	velocity = this.getVelocity(ivelocity);

	if (this.debug) {
		console.log("Actual slider input: " + ivelocity + " converted to: " + velocity);
	}

    var f = new Filterous(this.imageObj);
    f.filterImage('rgbHue', velocity);
    f.render();
}

/*
function getVelocity
-------------------
Takes number input and converts it to exponential scale
*/
Doppler.prototype.getVelocity = function(input) {
	var mul = input < 0 ? -1 : 1;

	//Lets decide the exponent range between -2 and 2 where input range is between -100 and 100
	var expon = Math.abs(input) / 50; 
	var velocity = Math.pow(10, expon) * mul;
	return velocity;
}