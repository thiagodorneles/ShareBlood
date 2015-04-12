var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    watch  = require('gulp-watch');

gulp.task('css', function(){
    gulp.src('./assets/sass/styles.scss')
        .pipe(sass())
        .pipe(concat('output.css'))
        .pipe(gulp.dest('./assets/dist'));

});

gulp.task('watch', function(){
    gulp.watch('./assets/sass/.scss', ['css']);
});

gulp.task('default', ['css']);