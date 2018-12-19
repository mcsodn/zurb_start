module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('src/static/mail.html', $.gulp.series('inky'));
        $.gulp.watch('src/static/main.stylus', $.gulp.series('stylus'));
    })
}