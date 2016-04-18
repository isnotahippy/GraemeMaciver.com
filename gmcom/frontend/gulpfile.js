var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


var paths = {
	scripts: ['js/**/*.js'],
	css: ['css/**/*.scss'],
	images: ['images/**/*.*']
}

gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(gulp.dest('../static/'));
});

gulp.task('sass', function () {
    return gulp.src('./css/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../static/'));
});

gulp.task('images', function(){
    // the base option sets the relative root for the set of files,
    // preserving the folder structure
    gulp.src(paths.images)
    .pipe(gulp.dest('../static/images/'));
});
 
gulp.task('watch', function () {
    gulp.watch(paths.css, ['sass']);
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.images, ['images']);
});



gulp.task('default', function() {
  // place code for your default task here
});