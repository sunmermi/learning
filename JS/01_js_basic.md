#자바스크립트 기본

###주석
- // 한줄
- /*   */  여러줄 주석

###엄격모드 발동 
: 문법이 엄격함 지키지않으면 오류발생
```
'use strict';
```

###dot syntax
```
//자바스립트 문장은 점으로 연결되어 이루어진다.
주어.동사('목적어');
console.log('뭐야');
```

###스크립트 로딩시 주의
- JS는 통역언어 : 브라우져 엔진이 읽어서 가져오는언어 그래서 느려
- head나 body 요소 안에 작성
    + head나 body 요소밖에 작성해도 동작은 되지만 웹표준에 어긋남
- body 요소 안 끝부분에 선언 
    + html문서가 다 읽히고 나서 스크립트 읽어서 실행 되어야 모두 동작
    + 상단에 들어가면 html문서가 읽히고 출력은 되어보이지만 실제적으론 스크립트 구문이 먼저 읽힐 당시엔 html문서를 찾을수 없어서 실행이 안됨
    + 만약 무조건 head 안에 작성해야 한다면 불러올 스크립트에 onlode 이벤트 발생 시켜야함
    ` window.onload = function(){}; `
- 블러오는 순서가 매우 중요 
```
// 변수만 모아 놓은 파일
<script src="js/var.js"></script>
// 실행문들,, : 이것이 변수파일보다 위로 올라간다면 변수를 읽어오지 못해서 변수를 찾을수 없음
<script src="js/write.js"></script>
```

##자바스크립트 호출 실행 흐름
```
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Comㅌpatible" content="IE=Edge">
    <script>alert('title 위에서 실행');</script> 
    <title>자바스크립트 호출 실행 흐름</title>
    <style type="text/css">
      body{background-color: pink; color: #4C4C4C;}
    </style>
    <script>alert('style 아래에서 실행');</script> 
  </head>
  <body>
    <h1>요소 먼저 읽지만 js구문 만나서 출력하지 않고 js끝나고 화면에 출력</h1>
    <script>alert('body 시작지점에서 실행');</script> 
    <h2>javascript</h2>
    <script>alert('h2 뒤에서 실행');</script> 
    <p>Lorem ipsum dolor sit amet.</p>
    <script>alert('p 뒤에서 실행');</script> 
  </body>
</html>
```

##스크립트 파일 분리 
- HTML:구조, CSS:표현, JS:동작
- 인라인으로 사용하지 않는다. : 코드더러워짐 유지보수 어려움
```
<button 
    type="button"
    onclick="document.body.style.background='#EA92FF';"
    style="padding: 1rem; background: #220D44; color: #fff; border: none; border-radius: 5px;"
>
  click
</button>
```

- css , script 내부로 분리 : 그래도 코드 더러움
```
<style>...</style>

<button typr="button" id="target"> GOOD click </button>

<script>
  document.getElementById('target').onclick = function(){
    document.body.style.background="#C6ABFF";
  }
</script> 
```

- css, script 외부파일로 모두 분리 : 깔끔!!
```
<link rel="stylesheet" type="text/css" href="css/marge-style.css">
<button typr="button" id="target"> GOOD click </button>
<script src="js/marge-app.js"></script>
```

- marge-app.js 코드
```
//marge-app.js

//문서 객체를 찾아 변수에 할당
var body = document.body;
var button = document.getElementById('target');

// 수행할 일(기능==function)을 참조하는 변수 선언
var btnClick =  function(){ 
  body.style.background="#C6ABFF";
}

// 기능이 참조된 변수를 실행
button.onclick = btnClick;

```

**Learn later,,,,**
- 바디요소 접근
  + `document.body;`
- 아이디 접근
  + `document.getElementById('아이디명');`

