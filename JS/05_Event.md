#이벤트 
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