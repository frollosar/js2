var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglifyes'),
    watch = require('gulp-watch')
;

let jsPath='script/script.js';
let jsPathDest='script';

gulp.task('js', function() {
    gulp.src(jsPath)
         .pipe(rename({suffix: '.min'}))
         .pipe(uglify().on('error', function (e) {
             console.log(e);
        }))
        .pipe(gulp.dest(jsPathDest));
});

gulp.task('default', function () {
    gulp.start('js');

    watch(jsPath, function (event, cb) {
        gulp.start('js');

    });
});