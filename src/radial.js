import {map, keys} from "d3-array";

export default function() {
  var values = map();
  var increment = 20;
  var radius = 200;
  var width = 500;
  var height = 300;
  var tapper = -50;
  var center = {"x":0, "y":0};
  var start = -90;

  var current = start;

  var radialLocation = function(center, angle, width, height, tapper) {
    return {"x":(center.x + (width * Math.cos(angle * Math.PI / 180) - tapper)),
            "y": (center.y + (height * Math.sin(angle * Math.PI / 180) + tapper))};
  };

  var place = function(obj) {
    var value = radialLocation(center, current, width, height, tapper);
    // now it just adds attributes to the object. DANGEROUS
    obj.x = value.x;
    obj.y = value.y;
    obj.angle = current;
    // values.set(obj,value);
    current += increment;
    tapper += increment;
    tapper = Math.min(tapper, 0);
    return value;
  };

  var placement = function(keys) {
    values = map();
    increment = 360 / keys.length;

    keys.forEach(function(k) {
      place(k);
    });
  };

  placement.keys = function(_) {
    if (!arguments.length) {
      return keys(values);
    }
    // setKeys(_);
    return placement;
  };

   placement.center = function(_) {
    if (!arguments.length) {
      return center;
    }
    center = _;
    return placement;
   };

   placement.width = function(_) {
     if (!arguments.length) {
       return width;
     }

     width = _;
     return placement;
   };

   placement.height = function(_) {
     if (!arguments.length) {
       return height;
     }

     height = _;
     return placement;
   };

   placement.start = function(_) {
     if (!arguments.length) {
       return start;
     }
     start = _;
     return placement;
   };

  return placement;
}
