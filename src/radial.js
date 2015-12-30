/**
* Simple layout for positioning data along a radial ellipse.
*
* Expects an array of objects that need positioning.
* Will add x and y values so that the objects are equally spaced around a
* circle or ellipse (depending on width and height).
*/
export default function() {
  var increment = 0;
  var width = 500;
  var height = 500;
  var taper = 0;
  var center = [0,0];
  var start = -90;

  var current = start;

  var radialLocation = function(center, angle, width, height, taper) {
    return {"x":(center[0] + (width * Math.cos(angle * Math.PI / 180) - taper)),
            "y": (center[1] + (height * Math.sin(angle * Math.PI / 180) + taper))};
  };

  var place = function(obj) {
    var value = radialLocation(center, current, width, height, taper);

    // now it just adds attributes to the object.
    obj.x = value.x;
    obj.y = value.y;
    obj.angle = current;

    current += increment;
    taper += increment;
    taper = Math.min(taper, 0);
    return value;
  };

  var placement = function(objs) {
    increment = 360 / objs.length;

    objs.forEach(function(obj) {
      place(obj);
    });

    return objs;
  };

  placement.center = function(_) {
    if (!arguments.length) {
      return center;
    }
    center = _;
    return placement;
  };

  placement.size = function(_) {
    if (!arguments.length) {
      return [width, height];
    }

    width = _[0];
    height = _[1];

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

  placement.taper = function(_) {
    if (!arguments.length) {
      return taper;
    }

    taper = _;
    return placement;
  };

  return placement;
}
