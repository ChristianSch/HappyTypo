HappyTypo
=========

[![Build Status](https://travis-ci.org/ChristianSch/HappyTypo.svg?branch=master)](https://travis-ci.org/ChristianSch/HappyTypo)
[![devDependency Status](https://david-dm.org/ChristianSch/HappyTypo/dev-status.svg?branch=master)](https://david-dm.org/ChristianSch/HappyTypo#info=devDependencies)
[![Stories in Ready](https://badge.waffle.io/ChristianSch/HappyTypo.svg?label=ready&title=Ready)](http://waffle.io/ChristianSch/HappyTypo)

Lightweight angular module for fixing micro typography issues in german texts.

## Details
HyppTypo replaces typographically wrong used symbols with their html symbol pedants. At the moment there is only support for dashes (mdash: `--` and ndash: `-`) and the ellipse (`...`).

## Usage
Just include the HappyTypo javascript file in your angular app and use the filters.

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
This project is licensed under the MIT license. (See `LICENSE` for details).
