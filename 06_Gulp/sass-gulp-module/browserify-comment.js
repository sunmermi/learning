
// ----------------- 브라우저리파이 : JS 번들링 ------------------

// ----------------- gulpfile.js ----------------- 

// // Browserify 번들링
// var browserify  = require('browserify');
// var source      = require('vinyl-source-stream');
// var buffer      = require('vinyl-buffer');

//browserify 는 gulp 플러그인이 아니기 때문에, browserify 의 스트림을 걸프에서 사용하는 vinyl 객체로 변경해줘야 하며, 이 용도로 vinyl-source-stream 모듈이 추가로 필요하다.


// // 빌드 설정 (초기 값: false)  :브라우저리파이때,,
// global.process.build = false;

//---------------------------------------------------------------


// // 관찰(Watch) 업무
// gulp.task('watch', function() {
//   // gulp.watch( 이곳이 변경이 생길때 마다, ['이 일을 수행해']);
//   gulp.watch(config.paths.browserify.watch_files, ['browserify'] );
// });

//---------------------------------------------------------------

// // Browserify 업무(빌드 실행 시)
// gulp.task('build:browserify', function() {
//   // 시스템 프로세스 변수 값을 변경해서 처리를 할겁니다.
//   global.process.build = true;
//   // console.log( global.process.build );
//   gulp.start( 'browserify' );
// });

// // Browserify 업무
// gulp.task('browserify', function() {
//   var bsr = browserify( config.options.browserify );
//   bsr
//     .bundle()
//     .pipe( source( config.paths.browserify.output_filename ) )
//     .pipe( buffer() )
//     .pipe( sourcemaps.init({ loadMaps: config.paths.browserify.debugging }) )
//     .pipe( gulp_if( global.process.build , uglify()) )
//     .on( 'error', gutil.log )
//     .pipe( sourcemaps.write( config.paths.browserify.map_location ) )
//     .pipe( gulp.dest( config.paths.browserify.dest ) );
// });


//---------------------------------------------------------------

// ----------------- gulp.config.js -----------------------


// var paths = {
  // 'browserify': {
  //   'src':             project.source + 'js/app.js',
  //   'watch_files':     project.source + 'js/*.js',
  //   'dest':            project.destination + 'js/bundle/',
  //   'output_filename': 'app.js',
  //   'debugging':       true,
  //   'map_location':    './'
  // }
// };

/**
 * -------------------------------------
 * option
 * -------------------------------------
 */
// var options = {
  // 'browserify': {
  //   'entries': paths.browserify.src,
  //   'debug':   paths.browserify.debugging
  // }
// };

//---------------------------------------------------------------


// ----------------- package.json ----------------- 

// 브라우저리파이 사용시 추가할것들
// package.json 파일내에 주석은 오류를 발생한다.

// {
//   "devDependencies": {
//     "browserify": "^12.0.1", //Browserify
//     "browserify-shim": "^3.8.11", //Browserify
//     "modernizr": "^3.2.0", // 밑에 브라우저 때문에 설치한듯한데,,모르겠음
//     "process": "^0.11.2", //Browserify
//     "requirejs": "^2.1.22", // ??? 
//     "vinyl-buffer": "^1.0.0", //Browserify
//     "vinyl-source-stream": "^1.1.0"//Browserify
//   },
//   "dependencies": {},
//   "browserify": {
//     "transform": [
//       "browserify-shim"
//     ]
//   },
//   "browser": { //??????????? 뭔지 모르겠음
//     "jquery": "./src/components/jquery/dist/jquery.min.js",
//     "modernizr": "./src/components/modernizr-min/dist/modernizr.min.js",
//     "angular": "./src/components/angular/angular.min.js",
//     "angular-route": "./src/components/angular-route/angular-route.min.js",
//     "angular-animate": "./src/components/angular-animate/angular-animate.min.js"
//   },
//   "browserify-shim": {
//     "jquery": {
//       "exports": "$"
//     },
//     "angular": {
//       "exports": "angular"
//     }
//   }
// }


