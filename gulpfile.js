var gulp = require('gulp'),
	gutil = require('gulp-util'),

	less = require('gulp-less'),
	pump = require('pump'),
	path = require('path'),
	watch = require('gulp-watch')


// compile all less files
gulp.task('less', function () {
  return gulp.src('./src/less/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('./dist/style'))

    .pipe(browserSync.stream())
	
});


// compile less on save
gulp.task('watch', function() {
	// watch scss files
	gulp.watch('./src/less/**/*.less', function() {
		gulp.run('less')
	});
	
});





// like init
gulp.task('default', ['less'])