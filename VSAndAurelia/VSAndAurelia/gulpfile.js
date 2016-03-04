var gulp = require('gulp'); gulp.task('copy-typings', function () {
	return gulp.src('jspm_packages/**/*.d.ts')
	.pipe(gulp.dest('scripts/typings/jspm_packages/'));
});