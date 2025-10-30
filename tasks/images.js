import pkgGulp from 'gulp';
const { src, dest } = pkgGulp;

export default function images(cb) {
    return src('src/images/**/*')
        .pipe(dest('build/images'));
};
