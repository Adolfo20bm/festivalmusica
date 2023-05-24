const {src, dest, watch} = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css(done) {
    src("src/scss/**/*.scss") // Identificamos el archivo SASS
    .pipe(plumber())
    .pipe(sass()) // Compilarlo
    .pipe(dest("build/css")) // Almacenarla en el discoduro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

function dev(done){
    watch("src/scss/**/*.scss",css)
    done();
}

exports.css = css;
exports.dev = dev;