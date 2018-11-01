var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

// 建立js任务，进行代码检查
gulp.task('jshint', function(){
  return gulp.src(['./public/js/*.js', './public/js/services/*.js'])  // 检查文件：js目录下所有的js文件
      .pipe(jshint())       // 进行检查
      .pipe(jshint.reporter('default'))  // 对代码进行报错提示
});

// gulp.task('concat', function(){
//   gulp.src(['./js/services/*.js'])
//   .pipe(concat('service.bundle.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest('./assert/js'));
//   gulp.src(['./js/controllers/*.js'])
//   .pipe(concat('controller.bundle.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest('./assert/js'));
//   gulp.src(['./lib/async.min.js',
//             './lib/angular-websocket.min.js',
//             './lib/ionic-toast.bundle.min.js',
//             './lib/lodash.min.js',
//             './lib/moment.min.js',
//             './lib/crypto-js.js',
//           ])
//   .pipe(concat('lib.bundle.js'))
//   // .pipe(uglify())
//   .pipe(gulp.dest('./assert/js'));

//   gulp.src(['./js/app.js', './js/routes.js'])
//   .pipe(concat('app.bundle.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest('./assert/js'));
//   gulp.src(['./js/filter.js', './js/directives.js'])
//   .pipe(concat('app.extend.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest('./assert/js'));
// })

//复制 vender 的js文件到指定的目录下
// gulp.task('copy-vender',function(){
//     return gulp.src(['./vender/lodash/dist/lodash.core.min.js',
//         './vender/lodash/dist/lodash.min.js',
//         './vender/ionic/release/js/ionic.bundle.min.js',
//         './vender/angular-websocket/dist/angular-websocket.min.js',
//         './vender/ionic-toast/dist/ionic-toast.bundle.min.js',
//         './vender/async/dist/async.min.js',
//         './vender/moment/min/moment.min.js',
//         './vender/moment/min/moment.min.js',
//         './vender/crypto-js/crypto-js.js',
//         ])
//         .pipe(gulp.dest('./lib'));
// });

gulp.task('copy-vender',function(){
    gulp.src([
      './node_modules/admin-lte/dist/**'])
        .pipe(gulp.dest('./public/lib/admin-lte'));
    gulp.src([
        './node_modules/admin-lte/plugins/**'])
        .pipe(gulp.dest('./public/lib/admin-lte/plugins'));
    gulp.src([
        './node_modules/yfpmc-ng1/dist/*'])
        .pipe(gulp.dest('./public/lib/yfpmc-ng1'));
    gulp.src([
        './node_modules/admin-lte/bower_components/jquery/dist/*.min.*'])
        .pipe(gulp.dest('./public/lib/jquery'));
    gulp.src([
        './node_modules/echarts/dist/*/*', './node_modules/echarts/dist/*.min.*'])
        .pipe(gulp.dest('./public/lib/echarts'));
    gulp.src([
        './node_modules/sweetalert2/dist/*'])
        .pipe(gulp.dest('./public/lib/sweetalert2'));
    gulp.src([
        './node_modules/admin-lte/bower_components/font-awesome/*/*'])
        .pipe(gulp.dest('./public/lib/font-awesome'));
    gulp.src([
        './node_modules/admin-lte/bower_components/bootstrap/dist/*/*'])
        .pipe(gulp.dest('./public/lib/bootstrap'));
    gulp.src([
        './node_modules/admin-lte/bower_components/fastclick/lib/*'])
        .pipe(gulp.dest('./public/lib/fastclick'));
    gulp.src([
        './node_modules/admin-lte/bower_components/jquery-slimscroll/*.min.js'])
        .pipe(gulp.dest('./public/lib/jquery-slimscroll'));
});
// gulp.task('default', ['jshint', 'copy-vender', 'copy-fonts']);
gulp.task('default', [ 'jshint', 'copy-vender']);
