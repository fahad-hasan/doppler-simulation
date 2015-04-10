/*
Extending Filterous plugin for creating a Hue effect
----------------------------------------------------
Inputs:
pixels: array - image pixel data
value: number - range [-100,100]
*/
Filterous.prototype.rgbHue = function(pixels, value){
    var d = pixels.data;
    if (value > 0) { //Increase Red [1 to 100]
        for (var i = 0; i < d.length; i +=4) {
            //Check how much red can be boosted and calculate new red value
            var range = 255 - d[i];
            red = d[i] + Math.floor(value / 100 * range);
            d[i] = red;
        }
    } else if (value < 0) { //Increase Blue [-100 to -1]
        for (var i = 0; i < d.length; i +=4) {
            //Check how much blue can be boosted and calculate new blue value
            var range = 255 - d[i+2];
            blue = d[i+2] + Math.floor(Math.abs(value) / 100 * range);
            d[i+2] = blue;
        }
    }
    
    return pixels;
};