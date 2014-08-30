HappyTypo
=========

[![Build Status](https://travis-ci.org/ChristianSch/HappyTypo.svg?branch=master)](https://travis-ci.org/ChristianSch/HappyTypo)
[![devDependency Status](https://david-dm.org/ChristianSch/HappyTypo/dev-status.svg?branch=master)](https://david-dm.org/ChristianSch/HappyTypo#info=devDependencies)
[![Stories in Ready](https://badge.waffle.io/ChristianSch/HappyTypo.svg?label=ready&title=Ready)](http://waffle.io/ChristianSch/HappyTypo)

Lightweight angular module for fixing micro typography issues in german texts.

## Details
HyppTypo replaces typographically wrong used symbols with their html symbol pedants. At the moment there is only support for dashes (mdash: `--` and ndash: `-`) and the ellipse (`...`).

## Usage
Download the [latest version](https://github.com/ChristianSch/HappyTypo/releases/latest) and extract the `.zip` file. This contains a minified version of HappyTypo and a source map for debugging. Just include the HappyTypo javascript file in your angular app and use the filters (see below for examples).

### Filters
* Replace m dashes (`&mdash;`)
	```
	<p>{{ text | replaceMDashes }}</p>
	```

* Replace n dashes (`&ndash;`)
	```
	<p>{{ text | replaceNDashes }}</p>
	```

* Replace all dashes (`&mdash;` and `&ndash;`)
	```
	<p>{{ text | replaceDashes }}</p>
	```

	Please note that first m dashes are replaced and then n dashes. So `--` ends up as mdas, and **not** as an n dash. If this behavior is undesired, please look below for chaining filters.

* Replace ellipse (`&hellip;`)
	```
	<p>{{ text | replaceEllipse }}</p>
	```

You can chain the filters if you want to replace several wrong symbols
```
<p>{{ text | replaceDashes | replaceEllipse }}</p>
```

Please note that if you use `ng-bind-html` you’d also need something like a `trustHtml` filter. This is intended behavior of AngularJS for security reasons.

## License
This project is licensed under the MIT license.

```
The MIT License (MIT)

Copyright (c) 2014 Christian Schulze

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```