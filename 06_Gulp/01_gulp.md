##Gulp

####Gulp란?
- 빌드 자동화 툴
- 반복적인 잡다구리 명령을 자동화,  CSS, JS, 및 IMAGE 의 파일 크기를 최소화 시키는 과정과 파일의 변경을 감시, 파일을 수정 할 때마다 서버를 재시작 귀찮
- ==> 귀차니즘을 해결하기 위한 도구가 바로 gulp.

####사전 준비
- node.js, npm
- 노드버전은 4.x.x 사용 (최신버전은 안되더라는,,)

####package.json 생성
```
$ npm init

// 만들어 놓은 package.json 가지고 있다면 아래와 같이 의존 모듈을 모두 설치
$ npm install
```

####gulp 모듈을 설치
```
// 전역설치
$ npm install --global gulp   또는(축약)  npm install -g gulp

// 개발할때만 필요하면
$ npm install --save-dev gulp
```

####gulp plugin
- gulp
- gulp-autoprefixer
- gulp-combine-mq
- gulp-imagemin
- gulp-sass
- ,,,,,,, 등등 프로젝트에 필요한 [플러그인](http://gulpjs.com/plugins/) 찾아 사용

####plugin 설치
```
$ npm install --save-dev gulp-sass
```
- Gulp 의존성 패키지들과 플러그인을 설치할때 `--save-dev` 옵션을 주는 이유는
    + 개발시에만 필요하기 때문에
    + 그리고 각 항목이 package.json 파일 내 devDependencies 목록에 만들어진다.

####plugin 제거
```
$ npm uninstall --save-dev gulp-rev
```

####gulp 4가지의 주요 API
- gulp.task
    + `gulp.task(name [, deps, fn]) `
    + gulp가 수행할 일(task) 등록
    + name은 string 형태로서 task의 이름
    + deps와 fn 은 옵셥 인수(생략가능한 인수)
    + deps는 task name의 배열 형태이며 이 인수가 전달 되면, 이 배열 안에 있는 task들을 순서대로 실행 한다음, 함수형태로 전달되는 fn 을 실행.
    ```
    // gulp.task('테스크네임', function(){ gulp.run('compile:css'); });
    // gulp.task('default', [ 배열로 던져 등록된 순서대로 수행됨 ]);
    ```
- gulp.src
    + `gulp.src( )`
    + 어떤 파일을 읽을지 지정(개발소스).
    + src() 함수가 리턴한 객체에서는 .pipe를 통하여 다른 플러그인을 사용할수 있다.
- gulp.dest
    + `gulp.dest( )`
    + 빌드할 파일들을 저장할 곳 지정.
    + dest() 함수가 리턴한 객체에서는 .pipe를 통하여 다른 플러그인을 사용할수 있다.
- gulp.watch
    + `gulp.watch( 이곳이 변경이 생길때 마다, ['이 일을 수행해']);`
    +  파일들을 주시하고있다가, 변동이 있을 시 tasks를 실행.
    +  watch() 함수가 리턴한 객체에서는 .pipe를 통하여 다른 플러그인을 사용할수 있다.

####실행
```
$ gulp task-name

// gulp 명령어를 실행 할 때, name을 작성하지 않으면 default task가 실행.
$ gulp
```
