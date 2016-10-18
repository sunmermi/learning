#03. 자바스크립트 데이터 유형 (Data Type)

##정보분석 : 올바른 데이터 유형을 체크하는 방법 
    - typeof
    - instanceof
    - constructor
    - 사용자 정의 헬퍼 함수 isDataType()

1. typeof 키워드
    - `typeof 확인할데이터값`
    - `typeof(); // 확인할 데이터값을 묶어줄때 사용` : 함수가 아님
    - **설계 오류**
        + null, Array를 올바르게 인식하지 못한다 : 셜계오류
        + ==> 둘 다 모두 'object'를 반환
        ```
        var num, str, boo, fnc, arr, obj;

        num = 10;
        str = 'javascript';
        boo = !false;
        fnc = function(){};
        arr = [];
        obj = {};

        console.log('typeof num:', typeof num);             // 'number'
        console.log('typeof str:', typeof str);             // 'string'
        console.log('typeof boo:', typeof boo);             // 'boolean'
        console.log('typeof fnc:', typeof fnc);             // 'function'
        console.log('typeof arr:', typeof arr);             // 'array' ??  ==> 'object'
        console.log('typeof obj:', typeof obj);             // 'object'
        console.log('typeof undefined:', typeof undefined); // 'undefined'
        console.log('typeof null:', typeof null);           // 'null' ??  ==> 'object'
        
        // typeof() 사용
        var a = 99; 
        a + ''; // 문자열 숫자 '99' 출력
        console.log('typeof a:', typeof(a+'1'));  //'string'           
        ```



2. instanceof 키워드
    - 실체화된 객체(instance) 
    - `{실체화된 객체:데이터값} instanceof [객체를 생성하는 생성자 : 데이터유형]`
    - 이 객체는 이 생성자로 부터 만들어진 조각이니? (객체이니?, 생성된 아이니?)
    - **참고**
        + 데이터 유형이 무엇인지 대충 알아야 값의 유형을 확인 할 수 있음
        ``` 
        var num, str, boo, fnc, arr, obj;

        num = 10;                   // new Number(10)
        str = 'java vs javascript'; // new String('java vs javascript')
        boo = !false;               // new Boolean(true)
        fnc = function() {};        // new Function()
        arr = [];                   // new Array()
        obj = {};                   // new Object()

        // typeof로 데이터유형 확인
        console.log('typeof arr:', typeof arr); // object

        // instanceof로 데이터유형 확인
        // playlist는 Array틑 통해서 만들어진 조각이니?
        console.log( arr instanceof Array ); // true

        ```
    - **사용시 주의**
        + `arr instanceof Array`  ,  `arr instanceof Object` 모두 true 출력
            * 헐,, 인제서야 배열을 배열답게 보는줄 알았는데,,,
            * 왜? object는 모든 객체의 조상(모체)이기 때문에 거슬러 올라가면 진실이 맞음
            * 상속됨을 알수 있다.
            * 예를 들면 인간의 태생을 거슬러 올라가보면 결국 단일 세포가 모체였다는,,
        + 원시데이터 유형은 올바르게 체크할수가 없다.
            * 왜? 변수에 담긴건 값이기 때문에,,
            ```
            console.log('num instanceof Number : ', num instanceof Number);
            console.log('boo instanceof Boolean : ', boo instanceof Boolean);
            console.log('str instanceof String : ', str instanceof String);
            // 모두 false 출력됨
            //

            // 해결방법 : 생성자 함수로 감싸서 체크
            var new_num = new Number(10);
            console.log('new_num instanceof Number : ', new_num instanceof Number);
            ```
        + null, undefined 유형은 instanceof 키워드를 사용하여 데이터 체크가 불가능
            * 왜? instanceof 키워드는 객체만 판별이 가능!!!
            * ==> 객체가 아닌 것들(null, undefined)에는 사용할 수 없다
            * `null instanceof Null`  => ReferenceError : Null is not defined
        + ==> 그래서 실제 사용이 잘 안됨.

3. .constructor 속성 (프로퍼티)
    - 객체를 생성하는 생성자(constructor)
    - 자바스크립트에 존재하는 실체화된 모든 객체(Instance Object)는 기본적으로 가지고 있는 속성이다.
    - 오류없음 완벽함  
    - 그러나 여전히 null, undefined 체크 불가 => TypeError
    ```
    console.log('num.constructor : ', num.constructor ); 
    //function Number() { [native code] }
    console.log('str.constructor : ', str.constructor );
    console.log('boo.constructor : ', boo.constructor );
    console.log('fnc.constructor : ', fnc.constructor );
    console.log('arr.constructor : ', arr.constructor );
    console.log('obj.constructor : ', obj.constructor );

    // 불리언값으로 반환 ==> 모두 true 출
    console.log('num.constructor === Number : ', num.constructor =력== Number);
    
    // null, undefined 체크 불가
    console.log('null.constructor : ', null.constructor);
    console.log('undefined.constructor : ', undefined.constructor);
    // ==> TypeError: Cannot read property 'constructor' of undefined
    ```

4. 사용자 정의 헬퍼 함수 : isDataType()
    - 데이터 유형을 올바르게 체크해주는 헬퍼 함수 
    - 만든이유 ==> 객체가 아닌 null, undefined 정확한 타입체크를 위해
    - Object.prototype 속성을 이용 ==> **메서드 빌려쓰기 패턴**
        + 모든 객체의 조상인 Object 생성자함수 이용
        + 생성자 함수는 .prototype 속성을 가지고 있음
        + 객체의 프로토타입으로 접근해서 그 안의 기능을 빌려 쓸꺼임
        + `Object.prototype.toString.call(data)`
        + ==> 객체의 프로토타입 기능 중 투스트링을 빌려쓸께
        + toString은 그 객체를 설명해주는 문자열을 리턴한다.
        + ==> data가 어떤 형태를 가지고 있는지 데이터 유형을 문자열로 반환
        + .call() ==> call 메서드는 다른 객체 대신 메서드를 호출하는 데 사용
        ```
        console.dir(Object.prototype); // {}

        console.log(typeof Object.prototype.toString); // function

        // 1. 객체의 프로토타입 기능 중 투스트링을 사용해서 데이터의 유형을 문자열로 반환
        Object.prototype.toString.call(data)
        // ==> 반환값 : "[Object {Date}]"

        // 2. 문자열에서 해당 데이터 타입 이름만 잘라내야 한다. ==> slice()사용
        Object.prototype.toString.call(data).slice(8, -1)
        // slice(시작인덱스번호, 끝인덱스번호); 시작 ~ 끝인덱스번호 전까지 잘라서 반환
        // 인덱스 : 0, 1, 2, 3, 4, 5, 6, 7, 8,  ,  ,  , -1
        // 문자열 : [, O, b, j, e, c, t,  , N, u, l, l, ]
        
        // 데이터 타입 맨앞글자가 대문자로 반환
        // 3. 문자열을 소문자로 변환 ==> toLowerCase()
        Object.prototype.toString.call(data).slice(8, -1).toLowerCase()

        //------------------------헬퍼 함수------------------------
        function isDataType(data) {
          return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
        }

        isDataType(null);  // null 반환

        ```



---

###NaN
- global object의 속성
- NaN 속성(property)은 Not-A-Number(숫자가 아님)을 나타내는 값(경고)
- typeof : `typeof NaN  ==> number 출력`
    + **주의** `null+NaN ==> NaN 출력 : 타입은 number라면서 null 이랑 연산되지 않음`

###isNaN(데이터) 
- 데이터 값이 NaN인지 아닌지 확인  : 숫자가 아니지??
    + `isNaN(testValue)`
        * true : 숫자가 아님
        * false : 숫자야!! 숫자라구
        ```
        isNaN(NaN);       // true
        isNaN(undefined); // true
        isNaN({});        // true

        isNaN(true);      // false
        isNaN(null);      // false  : null은 0이기도 하니까.
        isNaN(37);        // false
        ```
  
    + 헷갈리지 않기 위해 `!isNaN(testValue)` 이렇게 사용하기도 함
        * true : 숫자
        * false : 숫자아님
        ```
        !isNaN(NaN);       // false
        !isNaN(undefined); // false
        !isNaN({});        // false

        !isNaN(true);      // true
        !isNaN(null);      // true  : null은 0이기도 하니까.
        !isNaN(37);        // true
        ```

    + 아니면 사용자 정의 함수 만들어 : isNaN() 함수 사용이 혼란을 가져와서 헬퍼함수 만들어 사용
        * true : 숫자
        * false : 숫자아님
        ```
        function isNumber(value) {
            return !isNaN(value);
        }

        // isNumber(value);
        // 숫자니? 
        isNumber(NaN);       // false
        isNumber(undefined); // false
        isNumber({});        // false

        isNumber(true);      // true
        isNumber(null);      // true  : null은 0이기도 하니까.
        isNumber(37);        // true
        ```

