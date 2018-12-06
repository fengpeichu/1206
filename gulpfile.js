var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
var bcss = require('gulp-clean-css');
var fs = require('fs');
var path = require('path');
//将scss转化为css
gulp.task('SASS', function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(bcss())
        .pipe(gulp.dest('./src/css'))
});
//监听
gulp.task('watch', function() {
    gulp.watch('./src/scss/style.scss', gulp.series('SASS'))
});
//起服务
gulp.task('serVer', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9090,
            middleware: function(req, res, next) {
                // var path = req.parse(req.url).pathname;
                // console.log(path);
                // if (path === '/') {
                //     res.send(fs.readFileSync(path.join(__dirname, 'src', 'index.html')));
                // }
            }
        }))
})