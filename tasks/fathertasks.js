var gulp   = require('gulp');


// Taks default gulp! 
gulp.task('default', function(){
	gulp.start('mycharts:dev');
});


//task for build hotsite
gulp.task('mycharts:build', [
          'copyindex',
          'copyimage', 
          'copyfont',
          'css',
          'js',
          'jade']);



//task for developer hotsite
gulp.task('mycharts:dev', [
          'mycharts:build',
          'watch']);


//task for prepare deploy
gulp.task('mycharts:production',[
          'mycharts:build',
          'imagemin']);