import pkgGulp from 'gulp';
const { parallel, series } = pkgGulp;

import serve from './tasks/serve.js';
import nunjucks2html from './tasks/html.js';
import styles from './tasks/styles.js';
import script from './tasks/script.js';
import clean from './tasks/clean.js';
import images from './tasks/images.js'

export const dev = parallel(nunjucks2html, styles, script, images);

export const build = series(clean, dev);

export const start = series(build, serve);
