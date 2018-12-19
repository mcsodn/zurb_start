module.exports = function () {
	$.gulp.task('stylus', function () {
	return $.gulp.src('src/static/stylus/main.styl')
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.stylus({
			'include css':true
		}))
		
		.on("error", $.gp.notify.onError({	        
	        title: "style"
      	}))
		.pipe($.gp.csso())
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest('build/static/css/'))		
		.pipe($.bs.reload({
			stream:true
		}));
	});
}