var tape = require("tape"),
    radial = require("../");

tape("spiral() creation", function(test) {
  var rad = radial.spiral().center([200,200]);
  test.equal(rad.center()[0], 200);
  rad.center([90,90]);
  test.equal(rad.center()[1], 90);


  test.end();
});

tape("spiral() application", function(test) {
  var rad = radial.spiral().center([200,200]);
  var data = [{'name':'a'}, {'name':'b'}];

  rad(data);

  // test.equal(data[0].x, 20);
  test.end();
});
