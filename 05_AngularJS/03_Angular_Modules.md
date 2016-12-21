##AngularJS Modules

###AngularJS Applications
1. modules : 모듈 생성
    - `var app = angular.module('myApp', []);` 
    - angular : AngularJS
    - myApp : 어플리케이션 이름
    - [] : 의존상태(Dependencies)
        + 의존 모듈이 있다면 ['module1', 'module2'.....]
2. controllers 
    - 컨트롤러는 함수와 값을 정의하여 앱의 동작을 정의하는 곳.
    - `app.controller('myCtrl', function($scope) { }`
    - 컨트롤러가 앱에 연결되어 있음을 알 수 있습니다.

3. 컨트롤러에 모듈을 추가하는 방법 2가지
    - 정의된 모듈을 참조하는 app변수에 컨트롤러를 연결
        ```
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function($scope) {...});
        ```
    - angular.module( ) 에 모듈이름을 전달한 모듈에 컨트롤러 연결
        ```
        angular.module('myApp', []);
        //angular.module( )을 통한 모듈참조
        angular.module(‘myApp')
           .myApp.controller(‘myController', function($scope) {...});
        ```
    - 정의된 함수를 컨트롤러에 연결한후 모듈에 참조 연결
        ```
        angular.module('myApp', []);
        function myController($scope) {...}
        angular.module('myApp').controller('myController', myController);
        ```

4. Example
```
//---------------- AngularJS Example 1 ------------------

// ------------ HTML ------------ 

//ng-app 지시자는 앵귤러 응용 프로그램을 정의하고 
//ng-controller 지시자는 제어를 정의한다.
<div data-ng-app="myApp" data-ng-controller="myCtrl">
    First Name: <input type="text" data-ng-model="firstName"><br>
    Last Name:  <input type="text" data-ng-model="lastName"><br>
    Full Name:  {{firstName + " " + lastName}}
</div>
<!-- 1. 앵귤러 호출 -->
<script src="https://....."></script>
<!-- 2. app.js 호출 -->
<script src="js/app.js"></script>

// ------------- app.js ------------ 

// AngularJS Module define : 모듈생성
var app = angular.module('myApp', []);

// AngularJS Controller control
// 컨트롤러를 모듈에 추가
app.controller('myCtrl', function($scope) {
    $scope.firstName= "yun";
    $scope.lastName= "sseom";
});

// HTML에 ng-init 지시자를 사용하는것은 좋은 코드가 아니다. ==> controller 사용

```

```

//---------------- AngularJS Example 2 ------------------

// data-ng-controller= "컨트롤러 네임 as 별칭"
<div data-ng-app="myApp" data-ng-controller="myCtrl as person">
    First Name:  {{person.sum.firstName}}<br>
    Last Name:  {{person.sum.lastName}}
</div>
<!-- 1. 앵귤러 호출 -->
<!-- 2. app.js 호출 -->

// ------------- app.js ------------ 

//AngularJS Module define
var app = angular.module('myApp', []);

//AngularJS Controller control
app.controller('myCtrl', function() {
    // 나의 sum에 ss를 참조
    this.sum = ss;
});
// 객체가 할당된 변수
var ss= {
    firstName :  "yun",
    lastName : "sseom"
};

```
