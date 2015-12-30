# d3-radial

Simple layout for positioning things along a circle or ellipse.

## Installing

If you use NPM, `npm install d3-radial`. Otherwise, download the [latest release](https://github.com/vlandham/d3-radial/releases/latest).

## API Reference


### Radial

<img src="https://raw.githubusercontent.com/vlandham/d3-radial/master/img/radial.png" width="400" alt="radial">

Simple layout for positioning things along a circle or ellipse.

```js
var radial = d3_radial.radial()
  .center([200, 200]);

radial(data);

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
