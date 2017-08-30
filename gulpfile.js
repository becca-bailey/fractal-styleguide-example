'use strict';

const gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

const fractal = require('./fractal.js');
const logger = fractal.cli.console;

gulp.task('fractal:start', function(){
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/styles.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/css'));
});

gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass'));

gulp.task('default', gulp.parallel('sass', 'fractal:start'));
