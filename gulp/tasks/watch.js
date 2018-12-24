module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/mail.html', $.gulp.series('inky'));
        $.gulp.watch('src/main.styl', $.gulp.series('stylus'));
    })
}