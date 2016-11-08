#method
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

---

##attribute property 차이
- attribute : HTML의 속성을 취급 
  + 값이 모두 String 으로 넘어옴.
  + 변하지 않고 초기 (default)값을 전달한다는 것은 의미
  + el.getAttribute( 'checked' ) // 'checked'
  + $( el ).attr( 'href' ) // 값을 문자열로 반환
- property : HTML DOM 트리에 있는 것
  + JavaScript 프로파티을 취급 
    * boolean, date, function 등 반환값을 가져옴
  + HTML properties는 변할 수 있다
  + el.checked // true or false
  + $( el ).prop( 'href' ) // 값과 절대주소 반환 
- **참고 블러그**
  + [attr() Vs prop()](http://webclub.tistory.com/118)
