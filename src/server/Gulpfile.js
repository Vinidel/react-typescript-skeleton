'use strict';

const gulp = require('gulp');
const ignore = require('gulp-ignore');
const nodemon = require('gulp-nodemon');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', () => {
  const tsResult = tsProject.src()
    .pipe(ignore.exclude('test/**/*.ts')) // exclude 'test' folder as test related code should not get compiled with non-test code
    .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('dist'));
});

// gulp.task('copy', () => {
//   return gulp.src(['./server/**/*.handlebars',
//     './server/**/*.css',
//     './server/**/*.ico',
//     './server/**/*.eot',
//     './server/**/*.svg',
//     './server/**/*.ttf',
//     './server/**/*.woff',
//     './server/**/*.woff2',
//     './server/**/*.ttf',
//     '!./dist',
//     '!./dist/**',
//     '!./node_modules',
//     '!./node_modules/**'])
//     .pipe(gulp.dest('./dist'));
// });

gulp.task('watch', ['compile'], () => {
  return nodemon({
    script: './dist/main', // run
    ext: 'ts',
    ignore: [
      './dist',
      './test',
      './node_modules'
    ],
    tasks: ['compile'] // compile synchronously onChange
  })
});

gulp.task('default', ['watch']);
