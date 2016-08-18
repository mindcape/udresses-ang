var gulp = require('gulp');

var src = '';
var dist = 'dist/public/';


gulp.task('default', ['copy-lib','build-copy']);

gulp.task('build', ['copy-lib','build-copy']);


gulp.task('build-copy', function () {
    gulp.src([src + 'js/*.js'])
        .pipe(gulp.dest(dist +'/js'));

    gulp.src([src + 'css/*.css'])
        .pipe(gulp.dest(dist + '/css'));

    gulp.src([src + 'img/*'])
        .pipe(gulp.dest(dist + '/img'));

    gulp.src([src + 'partials/*.html'])
        .pipe(gulp.dest(dist + '/partials'));

    gulp.src([src + 'data/*.json'])
            .pipe(gulp.dest(dist + '/data'));

    return gulp.src([src + 'index.html'])
        .pipe(gulp.dest(dist));
});


gulp.task('copy-lib', function() {

    //angular core
    gulp.src(['node_modules/angular/angular.min.js'])
        .pipe(gulp.dest(dist + 'lib/angular'));

    //angular animate
    gulp.src('node_modules/angular-animate/angular-animate.min.js')
        .pipe(gulp.dest(dist + '/lib/angular-animate/'));

    //flexslider
    gulp.src('node_modules/angular-flexslider/angular-flexslider.js')
        .pipe(gulp.dest(dist + '/lib/angular-flexslider/'));

    //angular resource
    gulp.src('node_modules/angular-resource/angular-resource.min.js')
        .pipe(gulp.dest(dist + '/lib/angular-resource/'));

    //angular ui bootstrap
    gulp.src('node_modules/angular-ui-bootstrap/dist/**')
        .pipe(gulp.dest(dist + '/lib/angular-ui-bootstrap/dist/'));

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
