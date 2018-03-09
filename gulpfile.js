var gulp = require('gulp'),
rename = require("gulp-rename"),
notify = require("gulp-notify"),
autoprefixer = require('gulp-autoprefixer'),
livereload = require('gulp-livereload'),
connect = require('gulp-connect'),
sass = require('gulp-sass'),
minifyCSS = require('gulp-minify-css');


// server connect
gulp.task('connect', function(){
  connect.server({
    root: 'dist',
    livereload: true
  });
});

// css
gulp.task('css', function() {
  gulp.src('app/sass/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS(''))
  .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest('dist/css'))
  .pipe(connect.reload())
  .pipe(notify('Done!'));
});

//html
gulp.task('html', function(){
  gulp.src('dist/index.html')
  .pipe(connect.reload());
});

//watch
gulp.task('watch', function(){
  gulp.watch('app/sass/*.sass', ['css']);
  gulp.watch('dist/index.html', ['html']);
});

//default
gulp.task('default', ['connect', 'html', 'css', 'watch']);
