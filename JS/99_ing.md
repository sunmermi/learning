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

##문서 객체 접근
- 부모에서 자식으로 찾아 들어가
```
// 루트 -> 바디 -> 아이디 -> 태그네임 -> 클래스네임

// 루트엘리먼트 가져옴
document.documentElement;
// 바디
document.body; 
// 아이디로
var page = document.getElementById('page'); 
// 태그네임으로
page.getElementsByTagName('h1'); 
// 클래스네임으로 최신만 가능
page.getElementsByClassName('page-child');

```

##노드리스트(Nodelist)
- get..s..()   ==> 집합으로 빠짐
  + 실제 배열이 아님. 유사하게 보이는것이고 배열인척 하는것임
  + [ <데이터>, <데이터>,,, ] 이렇게 수집된다.
    + 집합 내에서 대상 객체를 뽑아내야만 제어가 가능하다.
    + 데이터가 단 한개더라도 뽑아서 사용해야한다.

##DOM으로 스타일 제어 어려워서 벌어지는 현상  
  - 스타일 제어를 할때 인라인 스타일로 요소에 덕지 덕지 붙여버림
    + 인라인으로 접근하게되면 JS에선 스타일제어가 쉬움 
    + 그러나 css 외부파일로 적용된 스타일들은 무시가 되어 레이아웃이 무너지게됨. ==> NO
  
  - 접근방법
    + 표준 W3C Standard Method
      * `window.getComputedStyle(h1).fontSize;`
      * getComputedStyle(데이터) : 데이터의 스타일을 산출해서 가져오다.
    + 비표준 Microsoft Non Standard Method : IE지원
      * `h1.currentStyle.fontSize;`
      * 데이터.currentStyle.스타일속성 : 데이터의.현재스타일을 가져오다.

---

##이벤트 
- 이벤트의 초기 값은 null
- 코드가 실행되는 시점(Event)을 감지하여 코드를 처리
- Event property, Event handler, binding
  > 문서대상객체.이벤트속성=이벤트핸들러(함수)
  > document.onclick = function(){...}; 

```
// 윈도우 객체의 이벤트 속성(Event Property)
window.onload = function(){ 이벤트 발생시 실행 구문 }

// 이벤트 추가/제거 예제
// [추가, 연결] 이벤트 속성에 함수(핸들러)를 설정
var oneClick = function() {
  console.log('clicked document');
  // [제거] 이벤트 속성에 초기 값인 null을 대입
  // 1회 클릭 후, 이벤트 속성에서 핸들러를 제거한다.
  doc.onclick = null;
};

// 1회 클릭 시 처리될 함수 연결
document.onclick = oneClick; 


//------------ 중요한 차이 --------------------
document.onclick = oneClick; VS document.onclick = oneClick(); 

document.onclick = oneClick() ;
// oneClick()이란 함수가 바로 실행후 document.onclick에 담김
// 즉, 클릭이란 이벤트가 발생전에 함수가 실행을 해버리게 되는 격임
// 그래서 아무리 클릭을 해도 이미 실행이 됐기때문에 실행이 안됨
```

