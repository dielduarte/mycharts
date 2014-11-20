var gulp  = require('gulp'),
rename    = require('gulp-rename'),
htmlmin   = require('gulp-htmlmin');



var pathsDev = {
  html: ['./dev/*.html']
};


// task for minifier .html
gulp.task('minifyhtml', function() {
  gulp.src(pathsDev.html)
    .pipe(htmlmin({collapseWhitespace: true, removeComments:true, removeCommentsFromCDATA:true}))
    .pipe(gulp.dest('./build/'));
});


gulp.task('watch',function(){
    gulp.watch(pathsDev.html,  ['minifyhtml']);
});

// Taks default gulp! 
gulp.task('default', ['minifyhtml', 'watch'], function(){
	console.log('gulp ok!');
});





