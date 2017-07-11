'use strict';

//nodejs引用模块方式
//commonjs规范同步
var gulp =require('gulp');

//创建任务
//编译sass
var sass = require('gulp-sass');
gulp.task('compileSass',()=>{
	// 匹配（查找）sass文件
	// 文档流：
	gulp.src('./src/sass/*.scss')

		// 编译
		.pipe(sass({
			outputStyle:'expanded'//compact,expanded,compressed
		}).on('error', sass.logError))

		// 输出
		.pipe(gulp.dest('./src/css/'))
});

// * 浏览器同步
// * 自动刷新
// browser-sync
var browserSync = require('browser-sync');
gulp.task('myserver',()=>{
	// 开启服务器
	browserSync({
		// server:'./src/',

		// 代理服务器
		proxy:'http://localhost/JS/yintai/src/',
		

		// 端口
		port:1100,

		files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
	});

	// 监听sass文件修改
	gulp.watch('./src/**/*.scss',['compileSass']);
});














