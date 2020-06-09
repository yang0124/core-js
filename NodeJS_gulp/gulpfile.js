const gulp=require("gulp");
var cleanCSS = require('gulp-clean-css');

//gulp.task("default",()=>{
//	console.log("默认");
//})
//gulp.task("eat",()=>{
//	console.log("吃");
//})
//gulp.task("dance",()=>{
//	console.log("跳舞");
//})
//gulp.task("sleep",()=>{
//	console.log("睡觉");
//})

gulp.task("copycss",()=>{
	return gulp.src("src/css/*.css")
		.pipe(cleanCSS())
		.pipe(gulp.dest("dist"));
})
