var promise = require('es6-promise').polyfill();
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var historyApiFallback = require('connect-history-api-fallback');
var notify = require('gulp-notify');
var minify = require('gulp-minify');

// =====================================
// scripts
// =====================================

gulp.task('scripts', function(){
    browserify({
        entries: ['./js/main.js'],
        debug: true,
        transform: [babelify.configure({
            'presets': ['es2015', 'react']
        })]
    })
        .bundle()
        .on('error', function(){
            var args = Array.prototype.slice.call(arguments);
            notify.onError({
                title: 'Compile Error',
                message: '<%= error.message %>'
            }).apply(this, args);
            this.emit('end'); // Stop gulp from hanging on this task
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./js'));
});

// =====================================
// style
// =====================================

gulp.task('style', function(){
    gulp.src('./css/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
            // includePaths: ['node_modules/foundation-sites/scss/']
        })
        .on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3', 'last 3 iOS versions']
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./css/compiled'));
});

// =====================================
// watch
// =====================================

gulp.task('default', ['scripts', 'style'], function(){
    gulp.watch(['./js/main.js', './js/src/*.*',], ['scripts']);
    gulp.watch('./css/sass/**/*.scss',['style']);
});

// =====================================
// run this before launch
// =====================================

gulp.task('compress', function() {
  gulp.src('./js/bundle.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('js/dist'))
});