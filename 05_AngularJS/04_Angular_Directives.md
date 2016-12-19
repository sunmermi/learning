##AngularJS Directives
- 정적인 HTML은 앵귤러에서 제공하는 'ng-' 접두어가 붙은 지시자를 통해 동적으로 확장한다.
- 웹표준 준수하기 위해 'ng' 접두사 앞에 'data-' 접두사 붙여서 사용 
- 즉, 'data-ng-'

###Directives 종류
- 문서객체모델조작
    + ng-show, ng-hide, ng-view,,,,등
- 모듈/컨트롤러 
    + ng-app, ng-controller,,,,등
- 데이터바인딩 (Data Binding)
    + ng-init, ng-model, ng-bind,,,,등
- 이벤트
    + ng-click, ng-mouseenter, ng-keydown,,,등


###Directives
1. ng-app 
    - 이 부분은 앵귤러의 응용프로그램 이란걸 정의
    - 한개의 문서 내에 여러개의 응용프로그램을 포함 할수 있다.
    - 속성값으로 모듈 코드를 연결할수있다. `data-ng-app ="myApp"`

2. ng-init 
    - 변수 초기화 (변수에 값을 할당)
    - not very common => controllers 또는 module을 사용해서 데이터 초기화.
    ```
    <div data-ng-app data-ng-init="userName='sseom'">
        <!-- Data Binding -->
        <p>The name is <span data-ng-bind="userName"></span></p>
        <p>The name is {{ userName }}</p>
    </div>
    ```

3. ng-model
    - 앵귤러 응용프로그램에게 HTML 컨트롤러의(input, select, textarea) 값을 바인드한다.
    - 또 다른
        + data(number, email, required) 유효성 검사
        + data(invalid, dirty, touched, error) 같은 상태제공
        + HTML 요소의 CSS classes 제공
        + HTML폼에 HTML요소를 바인딩한다.

4. ng-repeat 
    - Repeating HTML Elements : 배열 또는 객체의 갯수만큼 각 항목을(요소를) 반복한다.
    - JS에서 for문, while문과 역활은 같다.
    ```
    // 배열
    <div data-ng-app data-ng-init="names=['Jani','Hege','Kai']">
      <ul>
        <li data-ng-repeat="x in names">
          {{ x }}
        </li>
      </ul>
    </div>

    //객체
    <div data-ng-app data-ng-init="names=[
        {name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}]">

        <ul>
          <li data-ng-repeat="x in names">
            {{ x.name + ', ' + x.country }}
          </li>
        </ul>

    </div>

    ```

5. Create New Directives
    - `app.directive('이름', function(){ return {}; });` 함수를 사용해서 지시자를 직접 만들 수 있다.
        + restrict (제한)
            * 기본적 값은 요소 이름과 속성 이름 모두가 지시문을 호출 할 수 있음.
            * E : Element name
            * A : Attribute
            * C : Class
            * M : Comment
        + template : 문서내에 나타날 코드작성.
    - 방법
        1. 스크립트 구문에 .directive 함수로 지시자 이름과 함수 만든다.
        2. 새로운 지시자를 호출하려면 새 지시자와 동일한 이름으로 HTML 요소를 만든다.
            - 지시자 호출 여러가지 방법 ==> 모두 같은 화면을 보여준다. 
                + directive()에 값의 설정에 따라 작성해야한다.
                + Element name
                + Attribute
                + Class
                + Comment
        3. 지시자 이름을 지정할 때는 testDirective라는 낙타표기법을 사용. 
        4. HTML문서에서 호출 할 때는 -(하이픈)으로 이름 분리한다. test-directive

    - Element, Attribute Example
    ```
    <body data-ng-app="myApp">

    <!-- Element name -->
    <test-directive></test-directive>

    <!-- Attribute -->
    <div w3-test-directive></div>

    <script>
    // 모듈
    var app = angular.module("myApp", []);

    // directive() 
    app.directive("testDirective", function() {
        return {
            // 기본값 restrict : "EA",
            // E for Element name, A for Attribute
            // 기본값은 EA(요소와 속성)이다.
            template : "<h1>Made by a directive!</h1>"
        };
    });
    </script>
    </body>

    ```

    - Class Example
    ```
    <body data-ng-app="myApp">

    <!-- Class -->
    <div class="w3-test-directive"></div>

    <script>
    // 모듈
    var app = angular.module("myApp", []);

    // directive() 
    app.directive("testDirective", function() {
        return {
            restrict : "C",
            template : "<h1>Made by a directive!</h1>"
        };
    });
    </script>
    </body>

    ```

    - Comment Example 
    ```
    <body data-ng-app="myApp">

    <!-- Comment -->
    <!-- directive: w3-test-directive -->

    <script>
    // 모듈
    var app = angular.module("myApp", []);

    // directive() 
    app.directive("testDirective", function() {
        return {
            restrict : "M",
            template : "<h1>Made by a directive!</h1>"
        };
    });
    </script>
    </body>

    ```

        