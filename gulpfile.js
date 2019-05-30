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
				},
				rdoc: { src: './project-dev/web-dev/rocforjs-docs', dest: './docs' }
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
				rw: {
					css: [ `${dir.rocfor.dest}/rocforcss/rocfor-${version}.min.css`, `${dir.rweb.temp}/css/rocforweb.css` ],
					js: [
						`${dir.rocfor.dest}/rocforjs/rocfor-${version}.min.js`,
						`${dir.rweb.temp}/js/SimpleComponent/simplecomponent.js`,
						`${dir.rweb.temp}/js/Todo/todo.js`,
						`${dir.rweb.temp}/js/Countdown/countdown.js`,
						`${dir.rweb.temp}/js/assets/contents/contents.js`,
						`${dir.rweb.temp}/js/assets/main.js`,
						`${dir.rweb.temp}/js/assets/spaindex.js`,
						`${dir.rweb.temp}/js/assets/index.js`
					],
					html: `${dir.rweb.temp}/index.html`,
					cssmin: 'styles.min.css',
					jsmin: 'index.min.js',
					static: `${dir.rweb.src}/static/*.*`,
					img: [`${dir.rweb.src}/img/favicon.*`, `${dir.rweb.src}/img/apple-touch-icon.png`, `${dir.rweb.src}/img/rocforjs.svg`]
				}
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
				autoprefixer: { browsers: ['last 5 versions'], cascade: false },
				postcss: { plugins: [ uncss( { html: [`${dir.rweb.temp}/index.html`] } ) ] },
				htmlmin: { collapseWhitespace: true }
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

gulp.task('rw-css', () => {
	return gulp
						.src( files.rw.css )
						.pipe( concat( files.rw.cssmin ) )
						.pipe( postcss( opt.postcss.plugins ) )
						.pipe( cleancss() )
						.pipe( gulp.dest( `${dir.rweb.dist}/css` ))
});
gulp.task('rw-js', () => {
	return gulp
						.src( files.rw.js )
						.pipe( concat( files.rw.jsmin ) )
						.pipe( uglify() )
						.pipe( gulp.dest(`${dir.rweb.dist}/js`) )
});
gulp.task('rw-html', () => {
	return gulp
						.src( files.rw.html )
						.pipe( useref() )
						// .pipe( htmlmin( opt.htmlmin ) )
						.pipe( gulp.dest('./') )
});
gulp.task('rw-static', () => {
	return gulp
						.src( files.rw.static )
						.pipe( gulp.dest( './' ) )
});
gulp.task('rw-img', () => {
	return gulp
						.src( files.rw.img )
						.pipe( gulp.dest( `${dir.rweb.dist}/img` ) )
});
gulp.task('rw-vendor', () => {
	return gulp
						.src( `${dir.rweb.src}/vendors/fonts/fonts/*.*` )
						.pipe( gulp.dest( `${dir.rweb.dist}/css/fonts` ) )
});

// Gulp Rocfor-docs tasks
gulp.task('docs-html', () => {
	return gulp
						.src( `${dir.rdoc.src}/*.html` )
						.pipe( useref() )
						.pipe( gulp.dest( dir.rdoc.dest ) )
});
gulp.task('docs', () => {
	return gulp
						.src( `${dir.rdoc.src}/**/` )
						.pipe( gulp.dest( dir.rdoc.dest ) )
});