# d3-radial

Simple layout for positioning things along a circle or ellipse.

## Installing

If you use NPM, `npm install d3-radial`. Otherwise, download the [latest release](https://github.com/vlandham/d3-radial/releases/latest).

## API Reference


### Radial

Simple layout for positioning things along a circle or ellipse.

<img src="https://raw.githubusercontent.com/vlandham/d3-radial/master/img/radial.png" width="400" alt="radial">

Adds or modifies `x` and `y` values of a provided dataset to define location around ellipse.

```js
var radial = d3_radial.radial()
  .center([200, 200]);

svg.selectAll('circle')
  .data(radial(data)).enter()
  .append("circle")
  .attr("cx", function(d) { return d.x; })
  .attr("cy", function(d) { return d.y; })
  .attr("r", 5)
  .attr("fill", "#664466");

```

<a name="radial_center" href="#radial_center">#</a> <i>radial</i>.<b>center</b>([<i>center</i>])

If *center* is specified, sets center position which radial layout radiates from.

Center is expected to be an array with an *x* and *y* value.

```js
var radial = d3_radial.radial()
  .center([200, 200]);
```

If no center is provided, current center of layout is returned.

<a name="radial_size" href="#radial_size">#</a> <i>radial</i>.<b>size</b>([<i>size</i>])

If *size* is specified, sets the width and height of ellipse shape. If the width and height are equal, layout positions entities in a circle.

The input *size* is expected to be an array with an *width* and *height* value.

```js
var radial = d3_radial.radial()
  .size([40, 40]);
```

If no size is provided, current size of layout is returned.

<a name="radial_start" href="#radial_start">#</a> <i>radial</i>.<b>start</b>(<i>position</i>)

If *position* is specified, sets the position along the ellipse to start at when placing entities.  

Position is expected to be in **degrees**.

```js
var radial = d3_radial.radial()
  .position(180);
```

If no position is provided, current starting position of layout is returned.

### Spiral

Simple layout for positioning things along a spiral.

<img src="https://raw.githubusercontent.com/vlandham/d3-radial/master/img/spiral.png" width="400" alt="spiral">

Adds or modifies `x` and `y` values of a provided dataset to define location around in spiral layout.

Positions start at the center of the spiral and emanate out.

```js
var spiral = d3_radial.spiral()
  .center([200, 200]);

svg.selectAll('circle')
  .data(spiral(data)).enter()
  .append("circle")
  .attr("cx", function(d) { return d.x; })
  .attr("cy", function(d) { return d.y; })
  .attr("r", 5)
  .attr("fill", "#664466");

```

<a name="spiral_center" href="#spiral_center">#</a> <i>spiral</i>.<b>center</b>([<i>center</i>])

If *center* is specified, sets center position which spiral radiates from.

Center is expected to be an array with an *x* and *y* value.

```js
var spiral = d3_radial.spiral()
  .center([200, 200]);
```

If no center is provided, current center of layout is returned.

<a name="spiral_coil" href="#spiral_coil">#</a> <i>spiral</i>.<b>coil</b>(<i>coil</i>)

If *coil* is specified, sets the compactness of the spiral. A lower value results in a tighter coil.

```js
var spiral = d3_radial.spiral()
  .coil(40);
```

If no coil is provided, current coil of layout is returned.

<a name="spiral_increment" href="#spiral_increment">#</a> <i>spiral</i>.<b>increment</b>(<i>increment</i>)

If *increment* is specified, sets spacing of elements of spiral

```js
var spiral = d3_radial.spiral()
  .increment(10);
```

If no increment is provided, current increment of layout is returned.
