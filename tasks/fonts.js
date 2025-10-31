import pkgGulp from 'gulp';
const { src, dest } = pkgGulp;

export default function fonts(cb) {
    return src('src/fonts/*')
        .pipe(dest('build/fonts'));
};
