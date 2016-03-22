class: center, middle

# HTML/CSS Advanced
## Lection 2
### Gulp
---
class: center, middle

<p class="center">
  <img width="100%" src="/images/gulp.png" />
</p>
---
# Gulp
## Install
```bash
$ npm install -g gulp-cli
$ npm install gulp --save
```
## gulpfile.js
```js
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```
---
# A little of Javascript
## Functions
```js
function myFunction(x1, x2) {
 return x1 * x2;
}

console.log(myFunction(2, 3)); // 6
```

---
# A little of Javascript
## Callbacks
```js
// define our function with callback argument (usually - last one)
function some_function(arg1, arg2, callback) {
    var my_number = arg1 * arg2;

    // now we are ready to call our callback
    callback(my_number);
}
// call our cool function
some_function(5, 15, function (num) {
    // this anonymous function will be called after some_function will call it
    console.log("callback called! " + num);
});
```
---
# Gulp tasks
## Structure
```js
gulp.task('TASK_NAME', function(){
  gulp.src(['app/files/file1.dat', 'app/files/file2.dat'])
    .pipe(something())
    .pipe(gulp.dest('DESTINATION_PATH'));
});
```
## Real example
```js
gulp.task('styles', function(){
  gulp.src(['app/css/style1.css', 'app/css/style2.css'])
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./public/css'));
});
```
---
# Let's code something
```bash
$ npm install --save gulp-concat
```
```js
var gulp    = require('gulp'),
    concat  = require('gulp-concat');

gulp.task('styles', function(){
  gulp.src('bower_components/bootstrap/dist/css/bootstrap.css')
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('public/assets/css'));
});

gulp.task('fonts', function(){
  gulp.src('bower_components/bootstrap/dist/fonts/*')
    .pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('html', function(){
  gulp.src('index.html')
      .pipe(gulp.dest('public'));
});

gulp.task('default', ['styles', 'fonts', 'html']);
```
---
# Edit your index.html
```html
<link rel="stylesheet" href="assets/css/vendor.css">
```
![](/images/correct_html.png)
---
class: center, middle

# Project structure
---
```
firstapp/
|
|– app/
|   |– assets/      # Assets files
|   |   |– css/     # Styles
|   |   |– fonts/   # Fonts
|   |   |– images/  # Images
|   |   |- ...      # Etc.
|   |
|   |
|   |- ...
|   |– index.html   # Entry point
|
|
|
|– public/          # Public folder
|   |– assets/
|   |   |– css/
|   |   |– fonts/
|   |   |– images/
|   |
|   |- ...
|   |– index.html
|
|
|-bower_components
|-node_modules
|-.gitignore
|-gulpfile.js
|-bower.json
|-package.json
|-...
```
---
class: center, middle
<p class="center">
  <img width="40%" src="/images/livereload.jpg" />
</p>
# LiveReload
---
# Gulp Watch
### gulpfile.js
```js
gulp.task('watch', function(){
  gulp.watch('index.html', ['html']);
});
```
---
class: center, middle

![](/images/browser-sync.jpg)
---
# BrowserSync
```bash
$ npm install --save browser-sync
```
```js
var browserSync = require('browser-sync').create();

var css_files = [
  "app/assets/css/*.css"
];

gulp.task('server', function(){
  browserSync.init({
	  server: {
		  baseDir: 'public'
	  }
  });

  gulp.watch("app/index.html", ['html']).on('change', browserSync.reload);
  gulp.watch(css_files, ['styles']).on('change', browserSync.reload);
});

gulp.task('serve', ['default', 'server']);
```
---
class: center, middle

# Review
## gulpfile.js
---
# gulpfile.js (part 1)
```js
var gulp    		= require('gulp'),
    concat  		= require('gulp-concat');
    browserSync 	= require('browser-sync').create();

var css_files = [
	  'bower_components/bootstrap/dist/css/bootstrap.css',
	  'app/assets/css/*.css'
	],
	js_files = [
	  'bower_components/jquery/dist/jquery.js',
	  'bower_components/bootstrap/dist/js/bootstrap.js'
	],
	font_files = ['bower_components/bootstrap/dist/fonts/*'];

gulp.task('server', function(){
  browserSync.init({
	  server: {
		  baseDir: 'public'
	  }
  });

  gulp.watch('app/index.html', ['html']).on('change', browserSync.reload);
  gulp.watch(css_files, ['styles']).on('change', browserSync.reload);
});

```
---
# gulpfile.js (part 2)
```js
gulp.task('styles', function(){
  gulp.src(css_files)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('public/assets/css'));
});

gulp.task('fonts', function(){
  gulp.src(font_files)
    .pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('scripts', function(){
  gulp.src(js_files)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('public/assets/js'));
});

gulp.task('html', function(){
  gulp.src('index.html')
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['html', 'fonts', 'styles', 'scripts']);
gulp.task('serve', ['default', 'server']);

```
---
class: center, middle

# We have come to
# HTML/CSS course,
# where is HTML or CSS?
---
# index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>First app</title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <h1>
    Hello world! <br>
    I'm passionate Web developer
  </h1>

  <script src="assets/js/scripts.js"></script>
</body>
</html>
```
---
# And we're all set. Almost.
###.gitignore
```bash
.DS_Store
node_modules
bower_components
*.log
public
.idea/
```
```bash
[OPTIONAL]
$ git init
$ git remote add origin https://github.com/USERNAME/firstapp
$ git remote -v

[MUST HAVE]
$ git status
$ git add -A
$ git commit -m 'Added gulp boilerplate. Restructurized project.'
$ git push origin master
```
---
class: center, middle

<p class="center">
  <img width="20%" src="/images/bootstrap-icon.png" />
</p>
# Bootstrap
# [getbootstrap.com](https://getbootstrap.com)
---

# Modal window
```html
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
	Launch demo modal
</button>

<div id="myModal" class="modal fade" tabindex="-1" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title">Modal title</h4>
			</div>
			<div class="modal-body">
				<p>One fine body&hellip;</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal-dialog -->
</div><!-- /.modal -->
```
---
class: center, middle

## Time for your code
# Write html for this
---
<p class="center">
  <img width="100%" src="/images/task.png" />
</p>
---
## Gulp is good, but we have also:
<p class="center">
  <img width="100%" src="/images/bundlers.png" />
</p>
---
# Home Task (2 weeks)
1. **Grunt** <br>
Open [gruntjs.com](http://gruntjs.com/) and read documentation.

2. **Bootstrap** <br>
Finish your class task

3. Write your own **`gruntfile.js`** <br>
New grunt tasks, new grunt libs. All new. Just read documentation, best practices or google it.

4. **Git** <br>
Create other project with Grunt as bundler. Name it 'grunt-project' and share with [me](https://vk.com/alexey_mazurik).

5. **Hints** <br>
For hints you can write to me also. <br>
**Bootstrap**: you should write own CSS in **`styles.css`** <br>
**Gruntfile.js**: [Getting started with Grunt](http://gruntjs.com/getting-started) <br>
**Tasks**: Pay attention to *paths* you want to handle with.
---
class: center, middle

## Thanks for your attention.
# Questions?

