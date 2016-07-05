'use strict';

var gulp = require("gulp"),
	shell = require('gulp-shell');

var ts = require("gulp-typescript"),
    tsconfigPath = "tsconfig.json";
var sourcemaps = require('gulp-sourcemaps');

gulp.task("typescript-compile", function () {
    gulp.src("app/**/*.ts")
        .pipe(ts(ts.createProject(tsconfigPath),{
            sortOutput: true
        }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.', { sourceRoot: ''}))
        .pipe(gulp.dest("app"));
    gulp.src("specs/**/*.ts")
        .pipe(ts(ts.createProject(tsconfigPath),{
            sortOutput: true
        }))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.', { sourceRoot: ''}))
        .pipe(gulp.dest("specs"));
    
});
gulp.task('karma', shell.task('powershell -Command "./karma.ps1"'));
