#Standard built-in objects : 내장객체
- 자바스크립트 코어 라이브러리
  + 자바스크립트가 기본적으로 제공해주는 기능능들
- [MDN 내장객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects)
- 자바스크립트에는 많은 내장 객체가 있다. 
  + 수학, 데이타, 제이슨, 정규표현식,,, 등등
  + 모든 객체들을 외우려고 하지말고 필요할 때 잘 찾아 쓸것
- window {} 객체의 메소드
- [JavaScript Built-in Functions](https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm)

###Math : 수학관련 기능을 가진 기본 객체
  - Math.PI : 3.141592653589793 
  - Math.random() : 랜덤한 실수 0 ~ 0.999999 까지 (1은 포함이 안됨)
    + 왜? 1은 포함하지 않는 걸까??
  - Math.ceil(), Math.round(), Math.floor() : 올림, 반올림, 내림
    + floor 와 ceil, round 뭘 써야할까 이슈가 있음
    + floor() : 1이 나올 확율이 없음 
      * 왜? 소숫점을 부조건 절삭하니까
    + ceil() : 0이 나올 확율이 엄청 낮음
      * 왜? 소숫점 무조건 올림 하니까, 하지만 딱 0이 나올 활율이 있다는거!
  - Math.max(), Math.min() : 최대값, 최소값
  ```
  function add(a,b){
    var max = Math.max(a,b);
    var min = Math.min(a,b);
    var result = Math.round((Math.random()* (max-min)))+min;
    return result;
  }
  add(2,4);
  // 2

  //------------------------------------------------------
  // 1 ~ 3 반환을 원한다면

  Math.floor((Math.random()*3 +1);
  // - random에서 0 이 나오면 + 1 =  1
  // - random에서 1 이 나오면 + 2 =  2
  // - random에서 2 이 나오면 + 3 =  3

  Math.ceil((Math.random()*3);
  // 그러나 확율이 낮은 0이 나올수 있음 그러니 ceil 보단 floor사용 권장

  Math.round((Math.random()*3 +1);
  // round 는 1 ~ 4를 반환하게됨, +1이 없을땐 0 ~ 3을 반환

  ```


###Data
###String
###Array

###타이머함수
- 일정 주기(Interval) 마다 반복하여 실행되는 함수
  - setInterval
    - while () {} 느낌
    - callback: 실행 함수
    - ms: 주기, 밀리초 (1초 === 1000밀리초)
    - `window.setInterval(callback, ms);`
  - clearInterval : 주기에 따른 반복 실행을 멈추고 싶을때 사용
- 특정 시간(Event)에 되면, 1회만 실행되는 함수
  - setTimeout
    + if () {} 느낌
    + callback: 실행 함수
    + ms: 주기, 밀리초 (1초 === 1000밀리초)
    + `window.setTimeout(callback, ms);`
  - clearTimeout 
  ```

  // 실행 함수
  function callMe(){console.log('call me');}

  window.setInterval(callMe, 1000); // 1초뒤 실행. 계속 1초간격으로 실행
  window.setTimeout(callMe, 1000); // 1초뒤 한번만 실행

  //----------------------------------------------------

  // 주기에 따른 반복 실행을 멈추고 싶을때
  // 아이디값 반환받아서 clearInterval() 사용
  var interval_id = window.setInterval(callMe, 1000);
  window.clearInterval(interval_id);

  ```

- 이 함수들은 숫자값이 반환됨 반환되는 숫자는 아이디값이라 하는데
나중에 제어를 위해( 혹은 제거 하려면) 필요하다.

- setInterval()은 씨피유 부담이 간다. setTimeout() 사용을 권장.
  ```
  // 애니메이션 사용때
  // setInterval안쓰고 안에서 setTimeout을 사용할수 있다.
  // 어떠한 조건이 될때까지 setTimeout을 실행!

  var timeout_id = 0;
  var start_count = 0;
  var start_time = 1000;

  // 재귀함수 : 자신을 다시 호출하는 함수
  function start() {
    console.log('start : ',start_count++);
    timeout_id = window.setTimeout(start, start_time);
  }

  //콜백함수 : 특정조건이(시간이) 되면 실행해라.
  function end(callback) {
    window.clearInterval(timeout_id);
  }
  
  //-----------------------------------------------------
  // setTimeout 실행
  start();

  // 콜백 함수 사용
  // 특정조건이(5초뒤) 되면 실행해라
  window.setTimeout(function () {
    end();
    console.log('time out');
  }, 5000);

  ```

- [예제]()
  ```
  // play animation
  function playAnimation(callback, time) {
    return window.setInterval(callback, time);
  }
  // stop animation 
  function stopAnimation(id) {
    window.clearInterval(id);
  }

  var ball = null;
  // init
  function initBallMoving() {
    ball =  document.querySelector('.ball');
    console.log(ball); // <div class="ball"></div>
    console.dir(ball);
    console.log(ball.clienLeft); 
    // 콘텍스트 안에 있는 
    // clienLeft, offsetLeft 같은 것들은 
    // 값을 가져오거나 읽을수 있지만 사용자가 설정할수 없다.

    // 인라인스타일로 값을 설정을 할 수 있다.

    // ball 이동
    movingBall();
    ball.onclick = playBall;
  }

  function playBall() {
    playAnimation(movingBall, 100);
  }

  function movingBall() {
    // ball 의 현재 위치 값은?
    // offsetLeft 
    var current_ball_pos_x = ball.offsetLeft;
    console.log('before : ', current_ball_pos_x);

    ball.style.left = current_ball_pos_x + 100 +'px';
    console.log('after :', ball.offsetLeft);
  }


  // window load 상태가 완료되면 실행.
  window.onload = initBallMoving;
  ```


---

## 메서드, 속성

###method
- 기능을 가진 함수
- 동사형태(); 
- 객체.동작(전달인자) == 오브젝트.메서드(아규먼트);
- 친구가.선물하다('커피');

####출력 메서드
- alert()
  - 웹브라우져에 경고창 띄움(== 알림창) : 오늘날 잘 사용안함
  - `window.alert('hahah');`

- document.write()
  - body영역에 출력
  - 요소(Element) 기입 가능

- console.log()
  - 웹브라우져 검사 도구로 들어가서 콘솔에서 확인 : 디버깅용
  - 콘솔(console)에 기록(log)하고 싶다.
  ```
  console.log(   '기록'    );
  console.info(  '정보표시'  );
  console.error( '에러 출력' );
  console.dir(   '분석'    );
  ```

####공백제거
- trim()
  + 따옴표 안에서 글자공백을 제거하는데 모든 공백을 제거 하는것이 아니라
  + `'     hahaha  haha   hah  hum,,,,   '`
  + ==> `'hahaha  haha   hah  hum,,,,'`  출력
  + 따옴표와 문장 사이의 불필요한 공백을 제거해줌 

####문서 객체 접근 메서드
- querySelector()    : 한개만 수집해옴. 단수. 
- querySelectorAll() : 마크업순서대로 수집하는데 집합으로 가져옴 .
==> IE8이상 지원
- getElementById() : 아이디로
- getElementsByTagName() : 태그네임으로
- getElementsByClassName() : 클래스네임으로 최신만 가능

####문서 객체 생성
- createElement('요소명'); 

####속성 접근 메서드
- setAttribute('속성명', '설정값') : 속성및 속성값 설정
- getAttribute('속성명') : 속성명을 가진 값을 가져옴

####클래스 접근
- classList
  + javascript는 클래스를 선택, 추가, 삭제 하거나 존재 여부를 확인이 복잡했음
  + jQuery의 hasClass(),addClass,removeClass의 기능과 같음
  + ==> ie 10 이상 지원 == 크로스 브라우징 이슈가 있다.
  + 삭제
    * 요소의.classList.remove('클래스명');
  + 추가
    * 요소.classList.add('클래스명');
  + 존재여부 확인 
    * 요소.classList.contains('클래스명'); -> 불리언값 반
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div class="classname"></div>
  <!-- <div class="classname addclass"></div> -->
  <div class="classname"></div>

  <script type="text/javascript">
    // javascript 방법
     var node = document.querySelector(".classname");
     var class_node = node.getAttribute('class', 'classname');

     if(class_node.indexOf("addclass") == -1){
       node.setAttribute('class', class_node + " " + 'addclass');
     } else {
       class_node.replace("addclass", " ");
     }

    // classList 사용 방법
    var node = document.querySelector(".classname");
    if(node.classList.contains('addclass')){
      node.classList.remove('addclass');
    }else{
      node.classList.add('addclass');
    }
  </script>
</body>
</html>
```

###속성
####텍스트를 바꿀때
- textContent 
  + 텍스트를 바꿀때 사용 그러나 파폭에서 크로스브라우징 안됨
- innerHTML 
  + < > ~ </ > 코드와 텍스트를 모두 변경 가능

#### 대상의 너비, 높이값
- clientWidth 
  + css의 width값이랑 같다. 너비값을 가져옴
- clientHeight
  + css의 height값이랑 같다. 너비값을 가져옴
 
###DOM get VS set
 - 요소.style.width 값을 설정할때 == set
 - 요소.clientWidth 값을 가져올때 == get

1. 요소.clientWidth
  - **clientWidth의 콘텐츠의 너비는 어디까지?**
    + content-box + padding-box 까지의 폭을 반환한다
  - 만약
    + css에서 `box-sizing: border-box;` 를 준다면,,, 
      * 원래 박스의 크기는 100인데 + 패딩 10 + 보더 10하면 = 총 140 인데 
      * box-sizing 속성을 주면 콘텐츠 60 + 패딩 10 + 보더 10까지 = 총 100으로 만든다.
      * ie8이상 지원됨 (ie 7때문에 모든 기능을 포기해야함??? NO!! 7은 점유률도 낮음.)
    + **clientWidth는 박스사이징의 영향을 받는다.**
      * 단, 가져오는 값은 콘텐츠 + 패딩 값이다.
      * 콘텐츠 60 + 패딩양옆 10씩 = 총 80이 됨

2. 요소.style.width
  - 인라인으로 된 스타일만 가져올 수 있다.
  - 인라인 스타일 속성이 설정되어 있지 않을 경우는 빈 문자열 ''을 반환.
  - ==> 그래서 개발자들은 인라인스타일을 좋아함. 가져오기 편하니까,,, 하지만 css디자이너가 한 스타일이 무너짐 다른 방법을 사용해야지!!!
    * html 인라인 방법을 사용하지 않고도 스타일값 가져오는 방법
      1. 표준 W3C Standard Method
        - `window.getComputedStyle(h1).fontSize;`
      2. 비표준 Microsoft Non Standard Method : IE지원
        - `h1.currentStyle.fontSize;`


