const gulp = require('gulp');
const del = require('del');

gulp.task('clean', function () {
  return del(['build']);
});

gulp.task('copy', ['clean'], function () {
  return gulp.src([
    'src/contentscript.css',
    'src/manifest.json',
  ], { base: './src' })
  .pipe(gulp.dest('build'));
});

gulp.task('default', ['clean', 'copy']);
