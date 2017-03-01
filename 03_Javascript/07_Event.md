#이벤트 

1. 이벤트를 추가
  - 이벤트의 초기 값은 null
  - 코드가 실행되는 시점(Event)을 감지하여 코드를 처리
  - Event property, Event handler(==이벤트리스너), binding(묶다)
      + 문서대상객체.이벤트속성=이벤트핸들러(함수)
      + document.onclick = function(){...}; 
      + target.addEventListener(event type, listener[, useCapture]);
        * useCapture 옵션 : default는 false
        * true면, Capturing 방식으로 이벤트가 전달
        * false면, Bubling 방식으로 이벤트가 전달된다.
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

###이벤트 객체의 주요 프로퍼티와 메소드 
- event.target
  + 현재 이벤트가 발생한 엘리먼트

- event.currentTarget
  + 현재 이벤트가 발생한 현재 DOM 엘리먼트. 일반적으로 this와 같다.

- event.preventDefault()
  + 현재 이벤트의 기본 동작을 중단한다.

- event.stopPropagation()
  + 현재 이벤트가 상위로 전파되지 않도록 중단한다.


###이벤트 전파 현상
1. 이벤트 버블(false), 이벤트 캡쳐(true)
    -  false 버블링 (Event Bubbling) : 기본값
        +  버블링(false)는 이벤트가 발생한 target element부터 부모한테까지 이벤트가 순차적으로 전파
        +  가장 자식 노드인 c의 이벤트가 먼저 발생하고 부모인 b, a순서로 이벤트가 순차적으로 발생
    - true 이벤트 캡처링(Event Capturing)
        + 이벤트가 발생한 target element의 최상위 부모부터 target element까지 순차적으로 내려오면서 이벤트가 전달되는 방식. 즉, 캡쳐링은 버블링과 반대로 부모노드에서 자식노드로 이벤트가 전파됩니다.
        + 가장 부모인 a에서 자식인 b, c로 이벤트가 순차적으로 발생
2. **이벤트 차단**
    - 다층 구조의 노드가 모두 이벤트를 가지고 있을 때 특정 위치에서 이벤트를 차단 방법
    - `event.stopPropagation()`

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

---

###이벤트위임
- 부모에게 이벤트를 줬을 때 자식이 그 이벤트를 위임한다.
- `$('부모요소').on('이벤트타입', '자식요소', function(){});`
- 부모객체에 이벤트가 일어나면 부모의 a요소로 이벤트가 전달되서 펑션실행
```
//--------------------- HTML ---------------------------
<ul class="demo">
  <li><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
</ul>

//--------------------- JS ---------------------------

var tabList = document.querySelector('.demo');

function eventMenu(event) {
    console.log(event.target);
    console.log(this);
}

tabList.addEventListener('click', eventMenu);

//--------------------- Jq ---------------------------

// 데모의 모든 a 에 이벤트를 각 각 추가하는방식 
$('.demo a').on('click', function(){});

//이벤트 위임
$('.demo').on('click', 'a', function(){});
//부모한테 이벤트를 한번 주고 자식들한테 전달 하는방식
//성능에 더 좋음


```

### `<a>` 요소에 이벤트 
- a 요소는 본래 `href="#"` 속성을 가지고 있는데 이 속성은 웹브라우저에게 a 요소 클릭시 이동해야 할 페이지를 가르킨다.
- a 요소에 이벤트를 걸게 되면 ==> 결국 a 요소는 2개의 동작을 하게 됨
  1. 클릭 이벤트 발생
  2. href가 가르키고 있는 브라우져로 이동
- 이것을 방지 방법
  1. **`event.preventDefault();`** 사용
  2. `return false;`
  + e.preventDefault(), return false; 를 사용하면
  + a요소에 href속성에 #안붙이고 클릭만 실행하고 페이지 이동은 하지말아라 라는 설정값을 안넣어도 됨
- preventDefault(); 와 return false; 의 차이점
  + [참고 블러그](http://mobicon.tistory.com/246)
    * 자바스크립트에선 return false는 `preventDefault();` 와 같은 기능을 함
      - 브라우져 이동만 막아줌
    * 제이쿼리에선 return false는 stopPropagation() 와 preventDefault() 가 동시에 적용됨
      - 브라우져 이동과 동시에 버블링까지 막아줌


**궁금?**
- a요소에 이벤트 안걸고 li요소에 이벤트를 걸면??
  + li 요소엔 포커싱이 안간다 접근성이 떨어져서 a요소에 이벤트를 걸어 주는 것이 좋다  


####이벤트 관련 참고블러그
- [참고블러그](http://poiemaweb.com/js-event)

