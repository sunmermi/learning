#Angular JS
- [Angular](https://angularjs.org/)
- [Angular w3schools](http://www.w3schools.com/angular/default.asp)
- 앵귤러는 자바스크립트로 만들어진 프레임워크다.
- 단점
    + 속도가 느리다 => 프론트단에서 뷰를 완성하기 때문에 속도가 느리다.
    + 비표준이다
    + IE 9이상 지원
        * IE 이하버전 에서 사용해야 한다면 
        * 최신버전 NO => Legacy 1.2.x 버전

- **앵귤러를 선호하는 이유**
    - Single Page Application에 최적화된 프레임워크
        + 처음 페이지 로딩후
        + 페이지 전체를 다시 받아서 페이지를 다시 그리는것이 아니고
        + 서버로부터 전송받은 일부분의 데이터를 변경해서 현재 페이지에 다른 뷰를 렌더링
    - 양방향 데이터 바인딩 (Two way binding) : 뷰와 모델이 지속적인 관찰로 변형감지 
        + 데이터가 자동 업데이트 ==> 데이터 중심개발
    - MVC구조
    - 코드의 일관성유지
    - 코드양 감소 : 데이터바인딩을 사용함으로
    - 코드 재사용 
    - 다양한 모듈 확장 

- **JS와 Angular의 다른점**
    - 객체에 접근할때 JS는 윈도우에서 부터 찾고 앵귤러는 스코프(영역) 안에서 표현식을 찾는다.
    - 또한 undefind, null 값은 앵귤러에서는 무시한다.
    - JS는 script요소 안에 작성을 해야하지만 앵귤러는 HTML코드에 속성으로 작성하면 된다.

###AngularJS Extends HTML
- 앵귤러는 HTML에 'ng-' 를 붙여서 확장해서 사용한다. 즉, 새로운것을 사용하는 것이 아니라 알고있는 HTML에다가 속성추가만 하면서 기능을 확장한다.!!!
    + ng-app  
        * 이 부분은 앵귤러의 응용프로그램 이란걸 정의!!!!!
    + ng-model 
        * 응용데이터를 HTML컨트롤에 바인딩
        * 쉽게 생각하면 데이터(바뀔수도 있는)
    + ng-bind 
        * ng-model에서 바인딩된 데이터를 브라우져를 통해 보여줌(뷰)
        * 쉽게 생각하면 바뀐 데이터 뷰

```
<!-- 앵귤러(Legacy) CDN  -->
<!-- script 요소를 사용해서 앵귤러 호출 -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.32/angular.min.js"></script>

// --------------------------------------------

// 앵귤러 응용프로그램이다.
<div ng-app >
    // 모델
    <p>Name: <input type="text" ng-model="text"></p>
    // 바인딩
    <p ng-bind="text"></p>
</div>

```


