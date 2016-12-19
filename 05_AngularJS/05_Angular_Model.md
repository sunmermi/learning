##AngularJS ng-model Directive
- 앵귤러 응용프로그램에게 HTML 컨트롤러의(input, select, textarea) 값을 바인드한다.
- 또 다른
    + data(number, email, required) 유효성 검사
    + data(invalid, dirty, touched, error) 같은 상태제공
    + HTML 요소의 CSS classes 제공
    + HTML폼에 HTML요소를 바인딩한다.

1. ng-model
    - 입력 필드 값을 AngularJS로 만든 변수에 바인딩 할 수 있다.
```
<div data-ng-app="myApp" data-ng-controller="myCtrl">
    Name: <input data-ng-model="name">
</div>

<script>
var app = angular.module('myApp', []);

// 앵귤러 응용프로그램에서 myCtrl의 이름을 가진 컨트롤러 부분을 컨트롤 할께.
app.controller('myCtrl', function($scope) {
    $scope.name = "John Doe";
});
</script>
```

2. Two-Way Binding(양방향 데이터 바인딩)
    - 뷰와 모델이 지속적인 관찰로 변형감지 
    - 데이터가 자동 업데이트 ==> 데이터 중심개발
    ```
    <div data-ng-app="myApp" data-ng-controller="myCtrl">
        // 사용자가 입력 필드 안의 값을 변경하면 뷰 값도 변경됨.
        Name: <input data-ng-model="name">
        <h1>You entered: {{name}}</h1>
    </div>
    ```

3. Validate User Input (사용자 입력 유효성 검사)
    - data(number, email, required) 유효성 검사
    ```
    <form data-ng-app name="myForm">
        Email:
        <input type="email" name="myAddress" data-ng-model="text">
        <span data-ng-show="myForm.myAddress.$error.email">Not a valid e-mail address</span>
        // data-ng-show 속성의 표현식이 true를 반환하는 경우에만 범위가 표시됩니다.
    </form>

    ```

4. Application Status ?????
    - data(invalid, dirty, touched, error) 같은 상태제공
    ```
    <form data-ng-app name="myForm" data-ng-init="myText = 'post@myweb.com'">
        Email:
        <input type="email" name="myAddress" data-ng-model="myText" required>
        <h1>Status</h1>
        {{myForm.myAddress.$valid}}
        {{myForm.myAddress.$dirty}}
        {{myForm.myAddress.$touched}}
    </form>
    ```

5. CSS Classes????
    - HTML 요소의 CSS classes 제공
    ```
    <style>
    input.data-ng-invalid {
        background-color: lightblue;
    }
    </style>
    <body>

    <form data-ng-app name="myForm">
        Enter your name:
        <input name="myName" data-ng-model="myText" required>
    </form>

    // 아래와 같은 클래스 추가 및 제거
    // data-ng-empty
    // data-ng-not-empty
    // data-ng-touched
    // data-ng-untouched
    // data-ng-valid
    // data-ng-invalid
    // data-ng-dirty
    // data-ng-pending
    // data-ng-pristine
    ```


