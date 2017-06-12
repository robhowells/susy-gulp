var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss')
      .pipe(sass({
          includePaths: ['node_modules/susy/sass']
      }).on('error', sass.logError))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function() {
	gulp.src('src/**/*.html')
	.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('./src/**/*.scss', ['sass'])
	gulp.watch('./src/**/*.html', ['copy'])
});
