'use strict';
const gulp = require('gulp'),
			sass = require('gulp-sass'),
			autoprefixer = require('gulp-autoprefixer'),
			cleancss = require('gulp-clean-css'),
			rename = require('gulp-rename'),
			uglify = require('gulp-uglify'),

			pug = require('gulp-pug'),
			babel = require('gulp-babel'),
			useref = require('gulp-useref'),
			concat = require('gulp-concat'),
			postcss = require('gulp-postcss'),
			uncss = require('postcss-uncss'),
			gulpif = require('gulp-if'),
			htmlmin = require('gulp-htmlmin'),

			version = '1.0.0',
			dir = {
				rocfor: { src: './project-dev', dest: './project-dist' },
				rweb: {
					src: './project-dev/web-dev/rocforjs-web',
					temp: './project-dev/web-dev/rocforjs-web/tempweb',
					dist: './assets'
				}
			},
			files = {
				sass: [ `../../../../project-dist/rocforcss/rocfor-${version}.min.css`, './css/rocforweb.css' ],
				es6: [
					`../../../../project-dist/rocforjs/rocfor-${version}.min.js`,
					'./js/SimpleComponent/simplecomponent.js',
					'./js/Todo/todo.js',
					'./js/Countdown/countdown.js',
					'./js/assets/contents/contents.js',
					'./js/assets/main.js',
					'./js/assets/spaindex.js',
					'./js/assets/index.js'
				],
			},
			opt = {
				pug: {
					pretty: true,
					locals: {
						title: 'Rocfor.js',
						files: files
					}
				},
				sass: { outputStyle: 'expanded' },
				es6 : { presets : ['@babel/env'] },
				autoprefixer: { browsers: ['last 5 versions'], cascade: false }
			}

// Gulp Rocfor tasks
gulp.task('r-sass', () => {
	return gulp
						.src( `${dir.rocfor.src}/rocforcss-dev/rocstyle.sass` )
						.pipe( sass( opt.sass ) )
						.pipe( autoprefixer( opt.autoprefixer ) )
						.pipe( rename( `rocfor-${version}.css` ) )
						.pipe( gulp.dest( `${dir.rocfor.dest}/rocforcss` ))
});
gulp.task('r-css', () => {
	return gulp
						.src( `${dir.rocfor.dest}/rocforcss/rocfor-${version}.css` )
						.pipe( cleancss() )
						.pipe( rename(`rocfor-${version}.min.css`) )
						.pipe( gulp.dest( `${dir.rocfor.dest}/rocforcss` ))
});
gulp.task('r-js', () => {
	return gulp
						.src( `${dir.rocfor.src}/rocforjs-dev/Rocfor.js` )
						.pipe( rename( `rocfor-${version}.js` ) )
						.pipe( gulp.dest( `${dir.rocfor.dest}/rocforjs` ))
});
gulp.task('r-jsmin', () => {
	return gulp
						.src( `${dir.rocfor.src}/rocforjs-dev/Rocfor.js` )
						.pipe( uglify() )
						.pipe( rename( `rocfor-${version}.min.js` ) )
						.pipe( gulp.dest( `${dir.rocfor.dest}/rocforjs` ) )
});

// Gulp Rocfor-web tasks
gulp.task('rw-pug', done => {
	gulp
		.src( `${dir.rweb.src}/pug/index.pug` )
		.pipe( pug( opt.pug ) )
		.pipe( gulp.dest( dir.rweb.temp ) )
		done()
});
gulp.task('rw-sass', () => {
	return gulp
						.src( `${dir.rweb.src}/sass/rocforweb.sass` )
						.pipe( sass( opt.sass ) )
						.pipe( autoprefixer( opt.autoprefixer ) )
						.pipe( gulp.dest( `${dir.rweb.temp}/css` ) )
});
gulp.task('rw-es6', done => {
	gulp
		.src( `${dir.rweb.src}/es6/**/*.js` )
		.pipe( babel( opt.es6 ) )
		.pipe( gulp.dest( `${dir.rweb.temp}/js` ) )
		done()
});