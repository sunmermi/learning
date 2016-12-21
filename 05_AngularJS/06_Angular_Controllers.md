##AngularJS Controllers
- 컨트롤러는 JS 객체생성자로 만들어지는 객체이다.
- controller() 메서드는 속성과, 메서드 정의한다.
- 컨트롤러는 앵귤러 어플리케이션의 데이터를 변경 / 제거 / 제어하는 ​​JavaScript 함수입니다.
    + 뷰에서 데이터를 감춤, 보임 조작
    + 뷰로부터 이벤트 감지, 작동 조작
    + 데이터 읽고 쓰기
- ng-controller 지시자로 컨트롤러를 정의한다.
    + ng-controller="이름" 지시자의 값으로 컨트롤러 객체 이름을 지정한다.
- $scope 객체 사용해서 뷰와 상호작용
    + $scope는 html에서 window객체와 유사하며
    + $scope는 앵귤러 응용 프로그램(변수 및 함수의 소유자) 객체이다.
```
<div ng-app="myApp" ng-controller="personCtrl">

    First Name: <input type="text" ng-model="firstName"><br>
    Last Name: <input type="text" ng-model="lastName"><br>
    <br>
    Full Name: {{fullName()}}

</div>

<!-- 컨트롤러 파일 분리 -->
<script src="personController.js"></script>

// ---------------------------- JS ----------------------------

var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    // 프로퍼티 (속성)
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    // 프로퍼티엔 함수가 할당될수도 있다 ==> 메서드
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    };
});

```

- 배열객체
    + 이러한 방법으로 데이터베이스와 연동해서 화면에 데이터를 뽀릴수 있다.
    ```

    <div ng-app="myApp" ng-controller="namesCtrl">
        <ul>
          <li ng-repeat="x in names">
            {{ x.name + ', ' + x.country }}
          </li>
        </ul>
    </div>

    <!-- 컨트롤러 파일 분리 -->
    <script src="namesController.js"></script>

    // ---------------------------- JS ----------------------------

    angular.module('myApp', []).controller('namesCtrl', function($scope) {
        $scope.names = [
            {name:'Jani',country:'Norway'},
            {name:'Hege',country:'Sweden'},
            {name:'Kai',country:'Denmark'}
        ];
    });
    ```



##AngularJS Scope

####Scope
- 스코프는 영역
- HTML(뷰)와 JavaScript(컨트롤러)를 연결하는 매개체 이다.
- $scope는 뷰와 컨트롤러 모두에 사용할 수있는 자바스크립트 객체다.
    + 컨트롤러에서 만들어진 속성과 메서드는 뷰에서 참조 할수있다.
- 모델과 컨트롤러의 값이 바뀌면 뷰도 바뀐다.
- 앵귤러 응용프로그램에서 컨트롤러를 정의하면 $scope로 그 객체의 인자로 전달한다.
```
<div ng-app="myApp" ng-controller="myCtrl">
    <h1>{{carname}}</h1>
</div>

<script>
    var app = angular.module('myApp', []);

    app.controller('myCtrl', function($scope) {
        $scope.carname = "Volvo";
    });

    // app.controller('myCtrl', function($scope) {  });
    // myCtrl가 정의될때 주체자인 응용프로그램 앱의 객체를 함수의 인자로($scope) 넘김(약속되어진기능)

</script>
```


####Root Scope
- 전역변수와 비슷한 개념
```
<body ng-app="myApp">

    <p>The rootScope's favorite color:</p>
    <h1>{{color}}</h1>  // blue

    <div ng-controller="myCtrl">
        <p>The scope of the controller's favorite color:</p>
        <h1>{{color}}</h1> //red
    </div>

    <p>The rootScope's favorite color is still:</p>
    <h1>{{color}}</h1> //blue

    // ---------------------------- JS ----------------------------

    <script>
        var app = angular.module('myApp', []);

        // $rootScope의 범위는 전역(앵귤러 응용프로그램)
        app.run(function($rootScope) {
            $rootScope.color = 'blue';
        });
        // $scope의 범위는 지역(컨트롤러가 정의된 공간)
        app.controller('myCtrl', function($scope) {
            $scope.color = "red";
        });
    </script>
</body>
```


####컨트롤러파일로 분리해서 데이터를 ng-repeat 지시자로 반복
```
<div ng-app="myApp" ng-controller="myCtrl">
    <ul>
        <li ng-repeat="x in names">{{x}}</li>
    </ul>
</div>


<!-- 컨트롤러 파일 분리 -->
<script src="myCtrl.js"></script>

// ---------------------------- JS ----------------------------

    var app = angular.module('myApp', []);

    app.controller('myCtrl', function($scope) {
        $scope.names = ["Emil", "Tobias", "Linus"];
    });

// ------- 결과 화면 --------
    Emil
    Tobias
    Linus

```



####$scope 객체를 사용하지 않고 컨트롤러와 뷰연결 방법
- controller 내부에 this를 참조
- 단, as문법 과 별칭을 써줘야 한다.
```
<div ng-app="myApp" ng-controller="myCtrl as ctrl">
    <h1>{{ctrl.carname}}</h1>
</div>

<script>
    var app = angular.module('myApp', []);

    app.controller('myCtrl', function() {
        this.carname = "Volvo";
    });
</script>
```





