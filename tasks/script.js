import pkgGulp from 'gulp';
const { src, dest } = pkgGulp;

import pkgSourcemaps from 'gulp-sourcemaps';
const { init, write } = pkgSourcemaps;

import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import terser from 'gulp-terser';

// работа со скриптами
export default function script() {
    return src([
        'src/js/components/*.js',
        'src/js/*.js'
    ])
        .pipe(plumber())
        .pipe(init())
        .pipe(concat('script.js'))
        .pipe(terser({
            mangle: {
                toplevel: true
            },
            compress: {
                comparisons: false,
                conditionals: false,
                drop_console: false,
                hoist_props: false,
                join_vars: false,
                sequences: 0
            },
            output: {
                ecma: '2015',
                keep_numbers: true
            }
        }))
        .pipe(write('./'))
        .pipe(dest('build/js'))
};
