var gulp = require('gulp');
var del = require('del');

var src = 'app/';
var dist = 'dist/public/';


gulp.task('default', ['clean-dist','copy-lib','build-copy']);

gulp.task('build', ['clean-dist','copy-lib','build-copy']);


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

    //angular core
    gulp.src(['node_modules/angular/angular.js'])
            .pipe(gulp.dest(dist + 'lib/angular'));

    //angular animate
    gulp.src('node_modules/angular-animate/angular-animate.min.js')
        .pipe(gulp.dest(dist + '/lib/angular-animate/'));

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

gulp.task('clean-dist', function() {
    del(dist, dist);
});

gulp.task('clean-lib', function () {
    del([dist + '/lib/**/*']);
});
