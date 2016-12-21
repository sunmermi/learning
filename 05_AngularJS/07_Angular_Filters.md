##AngularJS Filters
- 디렉티브 또는 표현식에 파이프 캐릭터(|)를 사용해서 필터링 할 수 있다.
    + 데이터를 걸러내거나 정렬하거나 형식에맞춰 변경하거나...

####종류
- currency : 통화
    + `{{ Expression | currency:'$' }}`
- date     : 날짜 및 시간
    + `{{ Expression | date:'yyyy년 MM월 dd일' }}`
- filter   : (선택한 모델의) 배열에서 데이터를 걸러내다.
    + `{{ Expression | filter: 걸러 낼 문자 }}`
    + `{{ Expression | filter: 모델 이름 }}`
- json     : 객체를 JSON데이터로 포맷
    + `{{ Expression | json }}`
- limitTo  : 배열, 문자열 데이터를 지정한 숫자만큼 또는 문자로 제한한다.
    + `{{ Expression | limitTo:3 }}`
- lowercase : 소문자
- number    : Format a number to a string.
- orderBy   : 표현식의 배열을 정렬
    + `{{ Expression | orderBy:’key값' }}`
- uppercase : 대문자


####User Input 필터 
- input요소에 ng-model 지시자 설정 하면 인풋의 입력값을 표현식에 뿌려진 데이터를 필터링 할수있다.
```
<div ng-app="myApp" ng-controller="namesCtrl">

    <p><input type="text" ng-model="test"></p>

    <ul>
      <li ng-repeat="x in names | filter : test">
        {{ x }}
      </li>
    </ul>
</div>

<script>
angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
});
</script>
```

####User Input Sort(분류,정렬) 
- 예제 기능: Name 클릭하거나, Country 클릭하면 해당하는 속성으로 오름차순 정렬
```
<div ng-app="myApp" ng-controller="namesCtrl">

    <table border="1" width="100%">
      <tr>
        <th ng-click="orderByMe('name')">Name</th>
        <th ng-click="orderByMe('country')">Country</th>
      </tr>
      <tr ng-repeat="x in names | orderBy:myOrderBy">
        <td>{{x.name}}</td>
        <td>{{x.country}}</td>
      </tr>
    </table>

</div>

<script>
    angular.module('myApp', []).controller('namesCtrl', function($scope) {
      $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
      ];
      $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
      }
    });
</script>
```

####사용자 정의 필터
- 사용자가 직접 필터를 만들어서 사용할수 있다.
- filter() 함수 사용
```
<ul ng-app="myApp" ng-controller="namesCtrl">
    <li ng-repeat="x in names">
        {{x | myFormat}}
    </li>
</ul>

<script>
var app = angular.module('myApp', []);

// 사용자 정의 필터 만들기
// 기능 : 문자열 홀수번째는 대문자로 필터링.
app.filter('myFormat', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            //네임의 인덱스 한글자씩 c에 할당
            c = x[i];
            // 만약 i의 나머지값이 0과 같다면
            // === 홀수번째와 같다면 (나머지값 0은 홀수번째, 1은 짝수번째)
            if (i % 2 == 0) {
                // 나머지값이 0과 같은 c는 대문자로 변경
                c = c.toUpperCase();
            }
            // c의 값을 txt에 추가적으로 할당
            txt += c;
        }
        // txt값 반환
        return txt;
    };
});
app.controller('namesCtrl', function($scope) {
    $scope.names = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai'];
});
</script>
```
