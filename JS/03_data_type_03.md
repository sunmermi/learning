#03. 자바스크립트 데이터 유형 (Data Type)

##정보분석 : 올바른 데이터 유형을 체크하는 방법 
- 데이터 타입체크

1. typeof 키워드
- `typeof 확인할데이터값`
- `typeof(); // 확인할 데이터값을 묶어줄때 사용` : 함수가 아님
- **셜계오류**
    + null, Array를 올바르게 인식하지 못한다 : 셜계오류
    + 둘 다 모두 'object'를 반환
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



2. instanceof
- `데이터값 instanceof 데이터유형`
- 데이터값은 데이터유형의 조각이니? (객체이니? 생성된아이니?)
- **참고**
    + 데이터 유형이 무엇인지 대충 알아야 값의 유형을 확인 할 수 있음
    ```
    var playlist = new Array();

    // typeof로 데이터유형 확인
    console.log('typeof playlist:', typeof playlist); // object

    // instanceof로 데이터유형 확인
    // playlist는 Array틑 통해서 만들어진 조각이니?
    console.log( playlist instanceof Array ); // true

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

