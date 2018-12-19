module.exports = function () {
	$.gulp.task('inky', ['stylus'], function () {
	return $.gulp.src('src/mail.html')
		.pipe($.gp.inlinesource())
		.pipe($.gp.inky())
		.pipe($.gp.inlineCss({
			preserveMediaQueries: true,
			removeLinkTags: false
		}))

		.pipe($.gulp.dest('build/'))		
		.pipe($.bs.reload({
			stream:true
		}));
	});
}