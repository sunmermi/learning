
##Sass-Gulp-module
- Sass, JS bundle Project Startkit with Gulp
- [소스보기](https://github.com/sseom/learning/tree/master/06_Gulp/sass-gulp-module)
- 사용방법
    + [Sass-Gulp-module 다운](https://github.com/sseom/learning/blob/master/06_Gulp/sass-gulp-module.zip)
    + 압축해제 후 파일 확인
        + package.json, gulpfile.js, gulp.config.js, csscomb.json
    + 실행방법 : 
        1. gulp 설치
        2. 의존 모듈을 모두 설치 `$ npm install`
- [Gulp란?](https://github.com/sseom/learning/blob/master/06_Gulp/01_gulp.md)

####Project kit에 사용한 plugin
- gulp
- gulp-autoprefixer : CSS3 브라우저 벤더 프리픽스를 설정에 따라 자동으로 적용 처리.
- gulp-combine-mq : 미디어쿼리(MediaQueries) 병합
- gulp-concat : Javascript 파일 병합
- gulp-csscomb : CSS 문서 포멧 정리 및 속성 별로 정렬
- gulp-csso : CSS 파일 압축
- gulp-htmlmin : HTML 코드 압축
- gulp-if : 조건에 따른 업무 처리
- gulp-imagemin : 이미지 포멧(`GIF`, `JPG`, `PNG`, `SVG`) 최적화
- gulp-rename : 리네임
- gulp-sass : sass 모듈을 로드
- gulp-sourcemaps : 개발 시, Debug 용으로 사용할 소스맵을 생성.
- gulp-uglify : Javascript 압축
- gulp-util : 플러그인 용 유틸리티 함수
- browser-sync : 서버 환경.

####수행하는 일
- Sass -> css로 컴파일
    + 미디어쿼리구문 병합
    + 자동으로 벤더프리픽스 붙여줌
    + css속성 csscomb.json에 정의된대로 정렬
- 모든 자바스크립트 파일 병합.
- JS, CSS 번들링 된 파일과 압축된 파일이 2가지가 생성됨.
- HTML, CSS, JS 코드압축
    + JS, CSS 압축 후 접미사 '.min' 자동으로 붙임 (gulp-rename)
    + 압축을 수행하지 않으려면 task 에서 해당 pipe 삭제나 주석처리
    + 또한 리네임부분도 삭제나 주석처리 할 것!
- 이미지 최적화
- 서버 자동으로 띄우고 파일 변경시 새로고침 안해도 자동으로 리로드됨


