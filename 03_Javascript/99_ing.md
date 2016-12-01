###코드 모듈화 할때,,

1. 초기화 단계
- 사용자가 요청하면 서버에서 데이터를 다운받아서 엔진이 해석을 하고 화면에 렌더링이 되는데 그 단계가 초기화단계이다.

```
// index.html 코드

<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title></title>
    <script src="js/script.js"></script>  ==> ERROR
  </head>
  <body>
    <script src="js/script.js"></script>
  </body>
</html>
```

- 지금 코드는 스크립트 코드를 body요소 하단에 선언했는데
- head안에 스크립트 코드를 선언하면 렌더링이 되지 않은 상태여서 스크립트는 대상들을 못찾음. (변수들은 비어있음.)
  + **해결은 : onload 이벤트**
  + 초기화 할 대상들을 함수로 묶어줘(그룹화) 그리고 
  + 웹부라우져에 실행문서가 다 로딩된 시점에 온로드 이벤트를 걸어서 함수 실행

```
// js/script.js 코드

//윈도우가 로드가 되는 시점에 init함수를 실행하라
window.onload = init;

// 초기화(Init, Initialization)
// init() 함수는 원래 기존에 있던 코드들을 그룹화만 했을뿐이다.
function init() { }

// ==> head안에 스크립트 코드를 선언해도 잘 작동한다.
```

--- 

###자바스로 스타일을 설정할때

1. 방법 1
  ```
  대상.style.fontSize = 20px;
  대상.style.color = #fff;
  대상.style.width = 20px;

  // 값은 문자열로!!! 
  // 단위가 있다면 단위 붙여야함!! 
  // 스타일 속성은 낙타표기법으로!!
  ```

2. 방법 2 : 한번에 작성 하는 방법 : 구버전은 개행이 안됨  한줄로 써야함
`대상.style.cssText = ' width: auto; height: auto; margin: 0; ';`

3. 방법 3 : join() 사용해야함.
  ```
  대상.style.cssText = [
    'width:  auto;',
    'height: auto;',
    'margin: 0;'
  ].join();
  ```

4. `` 자바스 최신기술 백택 : 크로스브라우징안됨
  ```
  대상.style.cssText = `
    width:    auto;
    height:   auto;
    margin:   0;
  `;
  ```



