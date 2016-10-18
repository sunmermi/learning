#이벤트 

1. 이벤트를 추가
- 이벤트의 초기 값은 null
- 코드가 실행되는 시점(Event)을 감지하여 코드를 처리
- Event property, Event handler, binding
    + 문서대상객체.이벤트속성=이벤트핸들러(함수)
    + document.onclick = function(){...}; 
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


###이벤트 전파 현상
1. 이벤트 버블(false), 이벤트 캡쳐(true)
    -  false 버블링 (Event Bubbling)
        +  버블링(false)는 자식노드부터 이벤트가 발생하여 부모로 이벤트가 전파
        +  가장 자식 노드인 c의 이벤트가 먼저 발생하고 부모인 b, a순서로 이벤트가 순차적으로 발생합니다.
    - true 이벤트 캡처링(Event Capturing)
        + 캡쳐링은 버블링과 반대로 부모노드에서 자식노드로 이벤트가 전파됩니다.
        + 캡쳐링(true)옵션을 주면 가장 부모인 a에서 자식인 b, c로 이벤트가 순차적으로 발생
2. **이벤트 차단**
    - 다층 구조의 노드가 모두 이벤트를 가지고 있을 때 특정 위치에서 이벤트를 차단 방법
    - 

**※이벤트 전파 현상 예제**
```

//---------------------- HTML ------------------------------
<div id="page" lang="en">
  <div class="article">
    <h1 class="brand">JS is Awesome</h1>
    <p class="slogan">JS is Event I/O System</p>
  </div>
</div>

//---------------------- JS ------------------------------

var page, article, brand, slogan, mouseEventHandler;
//문서 요소 객체를 선택하여 각 변수에 참조
page = document.querySelector('#page');
article = document.querySelector('.article');
brand = document.querySelector('.brand');
slogan = document.querySelector('.slogan');

//참조된 문서요소 객체에 각 각 이벤트 연결 (Binding)
// page.onclick    = function(){console.log('page');};
// article.onclick = function(){console.log('article');};
// brand.onclick   = function(){console.log('brand');};
// slogan.onclick  = function(){console.log('slogan');};

// 이벤트 전파현상이 벌어짐
// page 클릭 : page 출력
// article 클릭 : article 출력 후 -> page 출력 됨
// brand 클릭 : brand 출력 후 -> article -> page 출력 됨
// slogan 클릭 : slogan 출력 후 -> article -> page 출력 됨
```


[이벤트 차단 참고 블러그](http://cheolguso.com/javascript-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81%EA%B3%BC-%EA%B8%B0%EB%B3%B8-%EB%8F%99%EC%9E%91-%EC%A4%91%EB%8B%A8%ED%95%98%EA%B8%B0/)
