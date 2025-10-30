import del from 'del';

async function clean(cb) {
    await del('build')
    cb()
}

export default clean;