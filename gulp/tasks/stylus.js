module.exports = function () {
	$.gulp.task('stylus', function () {
	return $.gulp.src('src/main.styl')
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.stylus({
			'include css':true
		}))
		.on("error", $.gp.notify.onError({	        
	        title: "style"
      	}))		
		.pipe($.gulp.dest('src/'))		
		.pipe($.bs.reload({
			stream:true
		}));
	});
}