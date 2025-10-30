import pkgGulp from 'gulp';
const { src, dest } = pkgGulp;
import cleanCSS from 'gulp-clean-css';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import plumber from 'gulp-plumber';

const sass = gulpSass(dartSass)

// копиляция Sass
export default function styles() {
    return src('src/styles/style.scss')
        .pipe(plumber())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(dest('build/css'))
};
