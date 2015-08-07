var gulp = require('gulp');
var karma = require('gulp-karma');

/**
 * Run test once and exit
 */
var testFiles = [
    'public/bower_components/angular/angular.min.js',
    'node_modules/angular-mocks/angular-mocks.js',
    'bower_components/angular-route/angular-route.min.js',
    'app/modules/**/*.js',
    'app/config/**/*.js',
    'app/directives/**/*.js',
    'app/services/**/*.js',
    'app/factorys/**/*.js',
    'app/controllers/**/*.js',
    'test/*.js'
];
 
gulp.task('test', function() {
  // Be sure to return the stream 
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero 
      throw err;
    });
});