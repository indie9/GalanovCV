import webpack from "webpack-stream";

export const js = () => {
    console.log('myscript.js injected');
    return app.gulp.src(app.path.src.js, {sourcemap: true})
        .pipe(webpack({
            mode: "development",
            output: {
                filename: 'app.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream())};