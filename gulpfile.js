var gulp = require('gulp'),
    pug = require('gulp-pug'),
    scss = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    del = require('del');

gulp.task('delete', function () {
    return del.sync('build');
});

gulp.task('pug', function () {
    return gulp.src('app/pug/*.pug')
        .pipe(pug({
            pretty: '\t'
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('scss', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(scss({
            includePaths: ['node_modules/foundation-sites/scss'],
            outputStyle: 'expanded'
        }))
        .pipe(autoprefixer({
            browsers: ['> 5%',
                'Firefox >= 15',
                'ie >= 8',
                'iOS 7']
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
    return gulp.src('app/js/**/*.js')
        .pipe(gulp.dest('build/js'));
});

gulp.task('upload', function () {
    return gulp.src('app/upload/**/*')
        .pipe(gulp.dest('build/upload'))
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: 'build'
        }
    });
});

gulp.task('watch', ['delete', 'browser-sync', 'upload', 'js', 'scss', 'pug'], function () {
    gulp.watch('app/pug/**/*.pug', ['pug']);
    gulp.watch('app/scss/**/*.scss', ['scss']);
    gulp.watch('app/js/**/*.js', ['js']);
    gulp.watch('app/upload/**/*', ['upload']);
    gulp.watch('build/index.html', browserSync.reload);
    gulp.watch('build/js/script.js', browserSync.reload);
});

gulp.task('default', ['watch']);