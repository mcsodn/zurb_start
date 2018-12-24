module.exports = function () {
	$.gulp.task('emailBuilder', function () {
	return $.gulp.src('build/mail.html')
				
		.pipe($.gp.emailBuilder().build())		

		.on("error", $.gp.notify.onError({	        
	        title: "emailBuilder"
      	}))

		.pipe($.gulp.dest('build/min'));
		/*.pipe($.bs.reload({
			stream:true
		}));*/
	});

}