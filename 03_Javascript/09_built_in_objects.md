#Standard built-in objects : 내장객체
- 자바스크립트 코어 라이브러리
  + 자바스크립트가 기본적으로 제공해주는 기능능들
- [MDN 내장객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects)
- 자바스크립트에는 많은 내장 객체가 있다. 
  + 수학, 데이타, 제이슨, 정규표현식,,, 등등
  + 모든 객체들을 외우려고 하지말고 필요할 때 잘 찾아 쓸것

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

---

##method
- 기능을 가진 함수
- 동사형태(); 
- 객체.동작(전달인자) == 오브젝트.메서드(아규먼트);
- 친구가.선물하다('커피');

###alert()
- 웹브라우져에 경고창 띄움(== 알림창) : 오늘날 잘 사용안함
- `window.alert('hahah');`

###console.log()
- 웹브라우져 검사 도구로 들어가서 콘솔에서 확인 : 디버깅용
- 콘솔(console)에 기록(log)하고 싶다.
  ```
  console.log(   '기록'    );
  console.info(  '정보표시'  );
  console.error( '에러 출력' );
  console.dir(   '분석'    );
  ```

###document.write()
- body영역에 출력
- 요소(Element) 기입 가능

###trim()
- 공백제거
  + 따옴표 안에서 글자공백을 제거하는데 모든 공백을 제거 하는것이 아니라
  + `'     hahaha  haha   hah  hum,,,,   '`
  + ==> `'hahaha  haha   hah  hum,,,,'`  출력
  + 따옴표와 문장 사이의 불필요한 공백을 제거해줌 
