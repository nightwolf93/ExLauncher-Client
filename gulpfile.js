var gulp = require('gulp'),
    watch = require('gulp-watch'),
    notifier = require('node-notifier'),
    sass = require('gulp-sass')
    concat = require('gulp-concat')
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify')
    ts = require('gulp-typescript');

gulp.task('watch', function() {

  watch('scss/**/*.scss', function () {
    notifier.notify({
      'title': 'Gulp SCSS',
      'message': 'SCSS Compiled'
    });
    gulp.src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./css'));
  });

  watch('ts/**/*.ts', function () {
    notifier.notify({
      'title': 'Gulp TS',
      'message': 'TypeScript Compiled'
    });
    var tsResult = gulp.src('ts/**/*.ts')
    .pipe(plumber())
    .pipe(ts({
        noImplicitAny: true,
        out: 'app.js'
      }));
    return tsResult.js.pipe(gulp.dest('./'));
  });

});
