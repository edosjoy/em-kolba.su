import pkgGulp from 'gulp';
const { watch, series, src } = pkgGulp;

import styles from './styles.js';
import script from './script.js';
import nunjucks2html from './html.js';
import images from './images.js';

import { create } from 'browser-sync';
const server = create();

function readyReload(cb) {
    server.reload()
    cb()
}

export default function serve(cb) {
    server.init({
        server: 'build',
        notify: false,
        open: false,
        cors: true
    })

    watch('src/styles/**/*.scss', series(styles, cb => src('build/css').pipe(server.stream()).on('end', cb)))
    watch('src/js/**/*.js', series(script, readyReload))
    watch('src/template/**/*.njk', series(nunjucks2html, readyReload))
    watch('src/images/**/*', series(images, readyReload))

    return cb()
}
