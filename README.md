#JQClocks
***
####JQClocks is a collection of clocks for any web content and is powered by jQuery.

### How it works
***
#### Requirements

You need jQuery to run JQClocks. Add this code to your web page:
```html
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
```

#### HTML
To add a clock to your page, add the following HTML code after the `<body>` tag:
```html
<div id="jQClockContainer"></div>
```

#### Javascript
To start a clock, add the following Javascript code inside the `<script>` tag:

````js
$(window).load(function() {
    $('#jQClockContainer').jQClocks();
}
````

### Options
-------

The settings you can change are:
```js
{
    type	         : type of clock (DEFAULT ''),
	dimension        : clock dimension (DEFAULT 150),
	font_family      : digit font (DEFAULT Tahoma),
	font_color       : digit color (DEFAULT '#000000'),
	font_em          : digit em (DEFAULT 2),
	circle_color     : circle color (DEFAULT '#00FF00'),
	circle_lineWidth : circle line dimension (DEFAULT 5),
	auto_position	 : set a false if you have a problem with absolute position (DEFAULT true)
}
```

### License
----

Made available under a MIT License    