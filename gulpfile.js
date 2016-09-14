var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('web', function() {
    gulp.src('app')
        .pipe(server({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});