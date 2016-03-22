var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    del           = require('del'),
    concat        = require('gulp-concat'),
    browserSync   = require('browser-sync').create(),
    paths         = require('./gulp/dependencies.js');


// STATIC

gulp.task('clean', function(){
  del("dist")
});

gulp.task('images', function(){
  gulp.src(paths.images, { base: 'app/assets/images' })
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function(){
  gulp.src(paths.fonts)
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('html', function(){
  gulp.src(paths.filesToMove, { base: 'app' })
    .pipe(gulp.dest('dist'));
});

// SCRIPTS

gulp.task('vendor-js', function(){
  gulp.src(paths.vendorJS)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts', function(){
  gulp.src(paths.scripts)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/js'));
});

// STYLES

gulp.task('sass', function(){
  gulp.src(paths.sass.toCompile)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('vendor-css', function(){
  gulp.src(paths.vendorCSS)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist/css'));
});

// SERVER

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch(paths.sass.toWatch, ['sass']).on('change', browserSync.reload);
  gulp.watch(paths.filesToMove, ['html']).on('change', browserSync.reload);
});

gulp.task('favicon', function(){
	gulp.src('app/favicon.ico')
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', [
  'vendor-css',
  'vendor-js',
  'scripts',
  'sass',
  'html',
	'favicon',
  'fonts',
  'images'
]);

gulp.task('build', ['default']);
gulp.task('serve', ['default', 'server']);
