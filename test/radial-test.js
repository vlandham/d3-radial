var tape = require("tape"),
    radial = require("../");

tape("radial() creation", function(test) {
  var rad = radial.radial().start(0);
  test.equal(rad.start(), 0);
  rad.start(90);
  test.equal(rad.start(), 90);

  rad.center([20,30]);
  test.deepEqual(rad.center(), [20,30]);

  test.equal(rad.taper(), 0);

  rad.width(200);
  test.equal(rad.width(), 200);

  rad.height(300);
  test.equal(rad.height(), 300);


  test.end();
});

tape("radial() application", function(test) {
  var rad = radial.radial().start(0);
  var data = [{'name':'a'}, {'name':'b'}];

  rad(data);

  // test.equal(data[0].x, 20);
  test.end();
});
