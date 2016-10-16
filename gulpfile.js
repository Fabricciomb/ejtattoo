var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//task gulp-sass
gulp.task('sass', function () {
 return gulp.src('assets/sass/**/*.sass')
   .pipe(sass({outputStyle: 'compressed'})
   .on('error', sass.logError))
   .pipe(gulp.dest(''))
})

//task gulp-watch
gulp.task('watch', function () {
  gulp.watch('assets/sass/**/*.sass', ['sass'])
})

gulp.task('default', ['sass', 'watch'])