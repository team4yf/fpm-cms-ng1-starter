var gulp = require('gulp');
var merge = require('merge-stream');
// var concat = require('gulp-concat');
// var sass = require('gulp-sass');
// var minifyCss = require('gulp-minify-css');
// var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
// var uglify = require('gulp-uglify');

// 建立js任务，进行代码检查
gulp.task('jshint', function(){
  return gulp.src(['./public/js/*.js',
    './public/js/controller/*.js'])  // 检查文件：js目录下所有的js文件
    .pipe(jshint())       // 进行检查
    .pipe(jshint.reporter('default'))  // 对代码进行报错提示
});

gulp.task('copy-vender',function(){
    const adminLte = gulp.src([
      './node_modules/admin-lte/dist/**'])
      .pipe(gulp.dest('./public/lib/admin-lte'));

    const adminLtePlugin = gulp.src([
      './node_modules/admin-lte/plugins/**'])
      .pipe(gulp.dest('./public/lib/admin-lte/plugins'));

    const yfpmcNg1 = gulp.src([
      './node_modules/yfpmc-ng1/dist/*'])
      .pipe(gulp.dest('./public/lib/yfpmc-ng1'));

    const jquery = gulp.src([
      './node_modules/admin-lte/bower_components/jquery/dist/*.min.*'])
      .pipe(gulp.dest('./public/lib/jquery'));

    const echarts = gulp.src([
      './node_modules/echarts/dist/*/*', './node_modules/echarts/dist/*.min.*'])
      .pipe(gulp.dest('./public/lib/echarts'));

    const sweetalert2 = gulp.src([
      './node_modules/sweetalert2/dist/*'])
      .pipe(gulp.dest('./public/lib/sweetalert2'));

    const fa = gulp.src([
      './node_modules/admin-lte/bower_components/font-awesome/*/*'])
      .pipe(gulp.dest('./public/lib/font-awesome'));

    const bootstrap = gulp.src([
      './node_modules/admin-lte/bower_components/bootstrap/dist/*/*'])
      .pipe(gulp.dest('./public/lib/bootstrap'));

    const fastclick = gulp.src([
      './node_modules/admin-lte/bower_components/fastclick/lib/*'])
      .pipe(gulp.dest('./public/lib/fastclick'));

    const jquerySlimscroll = gulp.src([
      './node_modules/admin-lte/bower_components/jquery-slimscroll/*.min.js'])
      .pipe(gulp.dest('./public/lib/jquery-slimscroll'));

    return merge(adminLte, adminLtePlugin, jquery, yfpmcNg1, echarts, sweetalert2, fa, bootstrap, fastclick, jquerySlimscroll);
});
gulp.task('default', gulp.parallel( 'jshint', 'copy-vender', function(done){
    done();

}));