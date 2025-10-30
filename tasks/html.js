import nunjucksRender from 'gulp-nunjucks-render';
import prettify from 'gulp-prettify';
import pkgGulp from 'gulp';
const { src, dest } = pkgGulp;

export default function nunjucks2html(cb) {

    return src('src/template/pages/*.njk')
        .pipe(nunjucksRender({
            path: ['src/template/'],
        }))
        .pipe(prettify({ indent_inner_html: true, indent_size: 4 }))
        .pipe(dest('build'))
};