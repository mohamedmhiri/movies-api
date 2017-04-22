const gulp = require('gulp')
const concat = require('gulp-concat')
const deporder = require('gulp-deporder')
const stripdebug = require('gulp-strip-debug')
const uglify = require('gulp-uglify')

const mocha = require('gulp-mocha')
 
// development mode?
  devBuild = (process.env.NODE_ENV !== 'production'),

  // folders
  folder = {
    src: 'lib/',
    build: 'build/',
    test: 'test/'
  }

// JavaScript processing
/*gulp.task('js', function() {

  var jsbuild = gulp.src(folder.src + 'js/**//**')
    .pipe(deporder())
    .pipe(concat('main.js'))

  if (!devBuild) {
    jsbuild = jsbuild
      .pipe(stripdebug())
      .pipe(uglify())
  }

  return jsbuild.pipe(gulp.dest(folder.build + 'js/'))

})*/

// Run test once and exit
gulp.task('test', (done) => {
  gulp.src(`${ folder.test }*.js`, {read: false})
        // `gulp-mocha` needs filepaths so you can't have any plugins before it 
        .pipe(mocha({reporter: 'nyan'}))
        .once('error', () => {
            process.exit(1);
        })
        .once('end', () => {
            process.exit();
        })
})
/*gulp.task('start', () => {

})*/
gulp.task( 'default', [ 'test' ] )