var gulp  = require('gulp'),
rename    = require('gulp-rename'),
htmlmin   = require('gulp-htmlmin'),
minifyCSS = require('gulp-minify-css'),
concat    = require('gulp-concat'),
imagemin  = require('gulp-imagemin');



var pathsDev = {
  html: ['./dev/*.html'],
  styles: ['./dev/assets/css/*.css'],
  image: ['./dev/assets/img/*.*']
};


// task for minifier .html
gulp.task('minifyhtml', function() {
  gulp.src(pathsDev.html)
    .pipe(htmlmin({collapseWhitespace: true, removeComments:true, removeCommentsFromCDATA:true}))
    .pipe(gulp.dest('./build/'));
});


// Task for minifier the images
gulp.task('imagemin',function () {
  gulp.src(pathsDev.image)
    .pipe(imagemin())
    .pipe(gulp.dest('./build/assets/img/'));
})


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
gulp.task('default', ['imagemin', 'minifyhtml', 'concat-min-css', 'watch'], function(){
	console.log('gulp ok!');
});





