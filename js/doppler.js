/*
Class for handling Doppler effect simulation
--------------------------------------------
Constructor:
Takes image object as input
*/
var Doppler = function(_imageObj) {
    this.imageObj = _imageObj;
};

/*
function: simulate
------------------
Takes valocity input within range [-100 to 100]
*/
Doppler.prototype.simulate = function(velocity) {
    var f = new Filterous(this.imageObj);
    f.filterImage('rgbHue', velocity);
    f.render();
}