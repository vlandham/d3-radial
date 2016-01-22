/**
* Simple layout for positioning data along a radial ellipse.
*
* Expects an array of objects that need positioning.
* Will add x and y values so that the objects are equally spaced around a
* circle or ellipse (depending on width and height).
*/
export default function() {
  var increment = 10;
  var center = [0,0];
  var current = 0;
  var coil = 30;


  var spiralLocation = function(center, angle, coil) {
    var rAngle = angle * Math.PI / 180;
    var rSep = coil / (2 * Math.PI);
    return {"x":(center[0] + ((rSep * rAngle) * Math.cos(rAngle) )),
            "y": (center[1] + ((rSep * rAngle) * Math.sin(rAngle) ))};
  };

  var place = function(obj) {
    var value = spiralLocation(center, current, coil);

    // now it just adds attributes to the object.
    obj.x = value.x;
    obj.y = value.y;
    obj.angle = current;

    current += increment;
    return value;
  };

  var placement = function(objs) {
    current = 0;

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

  placement.increment = function(_) {
    if (!arguments.length) {
      return increment;
    }

    increment = _;
    return placement;
  };

  placement.coil = function(_) {
    if (!arguments.length) {
      return coil;
    }

    coil = _;
    return placement;
  };

  return placement;
}
