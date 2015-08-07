var gulp = require('gulp');
var karma = require('gulp-karma');

/**
 * Run test once and exit
 */
gulp.task('test', function () {
    return karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    });
});