##AngularJS Data Binding
- HTML View 2가지 방법.
    1. ng-bind 지시자 사용
        - 다른 문자열과 결합이 불가능해서 span요소에 지시자를 설정해야한다.
    2. {{ Expression }} 이중중괄호(바인딩마크업) 사용
        - 다른 문자열과 결합해서 사용할수 있다.
- ng-model directive를 사용해서 모델의 데이터의 변화값을 뷰에 나타낸다.

###AngularJS Expressions(표현식)
- 값이 될 한 단위로서의 코드조각을 말한다.
- 앵귤러의 표현식은 JS의 표현식과 대부분이 같다.
    + 리터럴(Number, String, Object, Array, Boolean), 연산자(+,-,/,*,==...등), 변수
- 객체에 접근할때 앵귤러는 스코프(영역) 안에서 표현식을 찾는다.
    ```
    <div data-ng-app >
      <p>Name: <input type="text" data-ng-model="name"></p>
      <p>나의 이름은 : <span data-ng-bind="name"></span></p>
      <p>나의 이름은 : {{name}}</p>
    </div>

    // ==> 지시자 또는 이중중괄호 방식 모두 같은 값.

    //---------------------- AngularJS Numbers ------------------------

    <div data-ng-app data-ng-init="num=1; number=5">
        <p>Total : <span data-ng-bind="num * number"></span></p>
        <p>Total : {{ num * number }}</p>
    </div>

    // ==> HTML에 ng-init 지시자를 사용하는것은 좋은 코드가 아니다.
    // ===> controller 를 사용하는 것이 좋은 코드

    //---------------------- AngularJS Strings ------------------------

    <div data-ng-app data-ng-init="firstName='yun'; lastName='sseom'">

        <p>The name is <span data-ng-bind="firstName + ' ' + lastName"></span></p>
        <p>The name is {{ firstName + " " + lastName }}</p>

    </div>

    //---------------------- AngularJS Objects ------------------------

    <div data-ng-app data-ng-init="person={firstName:'yun', lastName:'sseom'}">
        <p>The name is <span data-ng-bind="person.lastName"></span></p>
        <p>The name is {{ person.lastName }}</p>
    </div>

    //---------------------- AngularJS Arrays ------------------------

    <div data-ng-app data-ng-init="arr=[a, b, c, d]">
        <p> result : <span ndata-g-bind="arr[2]"></span></p>
        <p> result : {{ arr[2] }}</p>
    </div>


    ```

