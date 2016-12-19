##AngularJS Modules

###AngularJS Applications
1. modules
    - `var app = angular.module('myApp', []);`
    - angular : AngularJS
    - myApp : 어플리케이션 이름
    - [] : 의존상태(Dependencies)
2. controllers
    - 컨트롤러는 함수와 값을 정의하여 앱의 동작을 정의하는 곳.
    - `app.controller('myCtrl', function($scope) { }`
    - 컨트롤러가 앱에 연결되어 있음을 알 수 있습니다.

3. Example
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

//AngularJS Module define
var app = angular.module('myApp', []);

//AngularJS Controller control
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
