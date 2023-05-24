const {src, dest} = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    src("src/scss/app.scss") // Identificamos el archivo SASS
    .pipe(sass()) // Compilarlo
    .pipe(dest("build/css")) // Almacenarla en el discoduro

    done(); // Callback que avisa a gulp cuando llegamos al final
}

exports.css = css;