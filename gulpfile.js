var gulp = require('gulp');
var del = require('del');
var bump = require('gulp-bump');
var args = require('yargs').argv;
var replace = require('gulp-replace');
var fs = require('fs');
var gutil = require('gulp-util');
var CacheBuster = require('gulp-cachebust');

var src = 'app/';
var dist = 'dist/public/';
var cachebust = new CacheBuster();


gulp.task('default', ['clean','copy-lib','build-copy']);

gulp.task('build', ['clean','copy-lib','build-copy']);

gulp.task('build-copy', function () {
    gulp.src([src + 'js/*.js'])
        .pipe(cachebust.resources())
        .pipe(gulp.dest(dist +'/js'));

    gulp.src([src + 'css/*.css'])
        .pipe(cachebust.resources())
        .pipe(gulp.dest(dist + '/css'));

    gulp.src([src + 'img/*'])
        .pipe(gulp.dest(dist + '/img'));

    gulp.src([src + 'partials/*.html'])
        .pipe(gulp.dest(dist + '/partials'));

    gulp.src([src + 'data/*.json'])
            .pipe(gulp.dest(dist + '/data'));

    gulp.src([src + 'index.html'])
        .pipe(cachebust.references())
        .pipe(gulp.dest(dist));
});


gulp.task('copy-lib', function() {

    //angular core
    gulp.src(['node_modules/angular/angular.min.js'])
        .pipe(gulp.dest(dist + 'lib/angular'));

    //angular core
    gulp.src(['node_modules/angular/angular.js'])
            .pipe(gulp.dest(dist + 'lib/angular'));

    //angular animate
    gulp.src('node_modules/angular-animate/angular-animate.js')
            .pipe(gulp.dest(dist + '/lib/angular-animate/'));

    //flexslider
    gulp.src('node_modules/flexslider/*')
            .pipe(gulp.dest(dist + '/lib/flexslider/'));

    //flexslider
    gulp.src('node_modules/flexslider/fonts/*')
                    .pipe(gulp.dest(dist + '/lib/flexslider/fonts/'));

    //angular-flexslider
    gulp.src('node_modules/angular-flexslider/angular-flexslider.js')
        .pipe(gulp.dest(dist + '/lib/angular-flexslider/'));

    //angular resource
    gulp.src('node_modules/angular-resource/angular-resource.min.js')
        .pipe(gulp.dest(dist + '/lib/angular-resource/'));

    //angular resource
    gulp.src('node_modules/angular-resource/angular-resource.js')
            .pipe(gulp.dest(dist + '/lib/angular-resource/'));

    //angular ui bootstrap
    gulp.src('node_modules/angular-ui-bootstrap/dist/**')
        .pipe(gulp.dest(dist + '/lib/angular-ui-bootstrap/'));

    // angular ui router
    gulp.src('node_modules/angular-ui-router/release/**')
        .pipe(gulp.dest(dist + '/lib/angular-ui-router/release/'));

    //bootstrap
    gulp.src('node_modules/bootstrap/dist/**')
        .pipe(gulp.dest(dist + '/lib/bootstrap/dist/'));

    //components-font-awesome
    gulp.src('node_modules/components-font-awesome/**')
        .pipe(gulp.dest(dist + '/lib/components-font-awesome/'));

    // jQuery
    gulp.src('node_modules/jquery/dist/**')
        .pipe(gulp.dest(dist + '/lib/jquery/dist/'));

    //ui-navbar
    gulp.src('node_modules/ui-navbar/**')
        .pipe(gulp.dest(dist + '/lib/ui-navbar/'));

});

gulp.task('clean', function() {
    del(dist, dist);
});

gulp.task('bump', function () {
    /// <summary>
    /// It bumps revisions
    /// Usage:
    /// 1. gulp bump : bumps the package.json and bower.json to the next minor revision.
    ///   i.e. from 0.1.1 to 0.1.2
    /// 2. gulp bump --version 1.1.1 : bumps/sets the package.json and bower.json to the
    ///    specified revision.
    /// 3. gulp bump --type major       : bumps 1.0.0
    ///    gulp bump --type minor       : bumps 0.1.0
    ///    gulp bump --type patch       : bumps 0.0.2
    ///    gulp bump --type prerelease  : bumps 0.0.1-2
    /// </summary>

    var type = args.type;
    var version = args.version;
    var options = {};
    if (version) {
        options.version = version;
        ///msg += ' to ' + version;
    } else {
        options.type = type;
        ///msg += ' for a ' + type;
    }


    return gulp
        .src(['package.json'])
        .pipe(bump(options))
        .pipe(gulp.dest(''));
});
