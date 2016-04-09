class: center, middle

# HTML/CSS Advanced
## Lection 3
### Sass, Flexbox
---
class: center, middle

<p class="center">
  <img width="40%" src="/images/sass.png" />
</p>
---
# CSS Preprocessing
## Write
```sass
.parent
	.child
		display: block
```
## Got
```css
.parent .child { display: block; }
```
---
# Sass vs SCSS syntax
## Sass
```sass
.super-class
	.less-super-class
		display: none
```
## SCSS
```scss
.super-class {
	.less-super-class {
		dispaly: none;
	}
}
```
---
# Variables
### SCSS
```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
### CSS
```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```
---
# Nesting
.columns[.column[
#### SCSS
```scss
nav {
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li { display: inline-block; }

	a {
		display: block;
		padding: 6px 12px;
		text-decoration: none;
	}
}```
].column[
#### CSS
```css
nav ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

nav li {
	display: inline-block;
}

nav a {
	display: block;
	padding: 6px 12px;
	text-decoration: none;
}
```]
]
---
# Partials
## Filename convention
```bash
_reset.scss
_partial.scss
main.scss
```
## Importing
```scss
@import 'reset';
@import 'partial';
```
---
# Mixins. SCSS
#### SCSS
```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```
#### CSS
```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```
---
# Mixins. Sass
#### Sass
```sass
=border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius:    $radius
  -ms-border-radius:     $radius
  border-radius:         $radius

.box
  +border-radius(10px)
```
#### CSS
```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```
---
# Extend / Inheritance (SCSS)
```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```
---
# Extend / Inheritance (CSS)
```css
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```
---
# Operators
## SCSS
```scss
.container { width: 100%; }


article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```
---
# Operators
## CSS
```css
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complementary"] {
  float: right;
  width: 31.25%;
}
```
---
class: middle, center

# Sass Project Structure
---
### Basic sass project
```bash
stylesheets/
|
|-- layouts/              # Different layouts
|   |-- _news.scss        # News page
|   |-- _sports.scss      # Sports page
|   ...                   # etc.
|
|-- base/              # Common modules
|   |-- _base.scss        # imports for all mixins + global project variables
|   |-- _typography.scss  # typography (fonts etc.)
|   |-- _reset.scss       # reset
|   |-- _mixins.scss      # mixins
|   |-- _variables.scss   # variables
|   ...
|
|-- partials/             # Partials
|   |-- _buttons.scss     # buttons
|   |-- _grids.scss       # grids
|   ...
|
|-- vendor/               # CSS or Sass from other projects (use NPM instead)
|   |-- _colorpicker.scss
|   |-- _jquery.ui.core.scss
|   ...
|
`-- main.scss            # primary Sass file
```
---
# main.scss
```scss
// Modules and Variables
@import "partials/base";

// Partials
@import "partials/reset";
@import "partials/buttons";
@import "partials/grids";
// ...

// Layouts
@import "layouts/news";
@import "layouts/sports";
// ...

// Third-party
@import "vendor/colorpicker";
@import "vendor/jquery.ui.core";
```
---
class: middle, center

# Compass
http://compass-style.org/
---
class: middle, center

# Flexbox
http://flexboxfroggy.com/
---
# Flexbox guides
1. RU: http://frontender.info/a-guide-to-flexbox/
2. ENG: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
---
# Homework
<a href="/images/test-chat.png" class="center">
  <img width="100%" src="/images/test-chat.png" />
</a>
---
class: center, middle

<p class="center">
  <img width="70%" src="/images/sasha_grey.jpg" />
</p>
## **ATTENTION**: prepare previous tasks
---
# Hometask
1. Read more about sass here: <br>
http://sass-lang.com/documentation/file.SASS_REFERENCE.html
2. Learn **flex-box** for test task
3. Use Gulp to convert sass to css: <br>
https://www.npmjs.com/package/gulp-sass
4. Push your project to git
5. Feel free to ask me
---
class: middle, center

# Thank you for your attention
###.grey[P.S. Prepare your homework. I'm not kidding]

