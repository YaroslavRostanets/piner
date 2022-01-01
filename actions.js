const browserify = require('browserify');
const browser = require('browser-run');

const startAction = () => {
    try {
        const inst = browser();
        browserify('script.js').bundle().pipe(inst).pipe(process.stdout);
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    startAction
}