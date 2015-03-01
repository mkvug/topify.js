# topify.js

topify.js is a jQuery plugin that adds scroll based interactivity with ease.

## Usage

### Basic Usage

Setting up a simple *scroll to top* button is a breeze with topify.js.

```js
$('#to-the-top').topify();
```

```css
#to-the-top {
	background: #2a7ae2;
	bottom: 2em;
	color: #fdfdfd;
	opacity: 0;
	padding: .5em;
	position: fixed;
	right: 2em;
	-webkit-transition: opacity .3s ease;
	transition: opacity .3s ease;
}
#to-the-top.show {
	cursor: pointer;
	opacity: 1;
}
```

### Advanced Usage

For advanced usage the following options are available:

```js
$('#to-the-top').topify({
	el: $('body'),			// The element which the initial offset is based
	offset: 50,				// The number of pixels that must be scrolled before topify.js assigns its class
	classToAssign: null,	// Name of the custom class to assign
	clickable: true 		// Boolean of whether or not the element should be clickable
});
```

## License

Copyright (c) 2015 Chris Neigh. Licensed under the [MIT license](https://github.com/imakewebthings/waypoints/blob/master/licenses.txt).