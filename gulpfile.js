var gulp  = require('gulp'),
rename    = require('gulp-rename'),
htmlmin   = require('gulp-htmlmin'),
minifyCSS = require('gulp-minify-css'),
concat    = require('gulp-concat');



var pathsDev = {
  html: ['./dev/*.html'],
  styles: ['./dev/assets/css/*.css'],
  svg:['./dev/assets/svg/*.*']
};


// task for minifier .html
gulp.task('minifyhtml', function() {
  gulp.src(pathsDev.html)
    .pipe(htmlmin({collapseWhitespace: true, removeComments:true, removeCommentsFromCDATA:true}))
    .pipe(gulp.dest('./build/'));
});


// Task for concat and minfier  and convert sass to css files 
gulp.task('concat-min-css', function() {
  gulp.src(pathsDev.styles)
    .pipe(concat('main.css'))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/assets/css/'));
});


gulp.task('watch',function(){
    gulp.watch(pathsDev.html,  ['minifyhtml']);
    gulp.watch(pathsDev.styles, ['concat-min-css']);
});

// Taks default gulp! 
gulp.task('default', ['minifyhtml', 'concat-min-css', 'watch'], function(){
	console.log('gulp ok!');
});





