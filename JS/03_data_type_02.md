#02. 자바스크립트 데이터 유형 (Data Type)
- 변수에 참조형 데이터 값을 할당할 경우 복사가 아닌 값이 참조 됨
- 참조한 데이터가 변경이 되면 변수도 값이 변경 : 참조하고 있기 때문에,,,

##참조 데이터 유형 (자료형 데이터)
1. 배열(Array Object)
  - ['사관','포도','귤']

2. 함수(Function Object)
  - function(){...};

3. 객체(Plain Object)
  - {'name': 'sseom', 'age':'20'...}

---

###함수(Function Object)
- 함수 정의 3가지 방법
  + `new Function('함수 실행 코드');` // 생성자
  + `var fn = function(){};` // 표현식 : 이름없이 변수에 값 자체를 담아서 사용
  + `function fn(){};` // 선언식 : function 키워드와 함게 이름 선언

  ```
  // 생성자 정의
  var ff = new Function('함수 실행 코드 구문');
  var fun = Function('함수 실행 코드 구문');
  //--------- 주의 -----------
  // new 키워드를 붙이나 안 붙이나 같음 : 오류 


  //이름이 있는 함수(기명 함수) vs 이름이 없는 함수(무명, 익명 함수)

  // 함수 값(표현식) : 익명함수 - 이름이 없는 함수
  var getSomeMoney = function(){}; 

  // 함수 선언식 : 기명함수 - 이름이 정의(선언)된 함수  : 함수 이름은 카멜케이스 표기법 사용
  function isNumber(value) {
    return !isNaN(value);
  }

  // 만약
  function(){}  
  // 이렇게 출력하면
  // 함수는 실행을 위한 참조형 데이터 인데 
  // 이름이 없으면 문법에러가 생김 변수에 담아야지만 에러가 안생이고 
  // 아니면 이름이 있는 함수로 만들어야 한다.

  //-------- 참고 ---------
  // 함수 정의시 세미콜론 사용
  // 변수에 정의된건 세미콜론으로 끝
  // 선언식 정의는 세미콜론 안붙임
  ```

###배열(Array Object)
- 배열은 여러개의 데이터를 저장하고 기억할수 있는 동간을 제공하는 객체이다.
- 생성된 배열 객체는 기억하기 위해 변수에 할당해서 사용한다.
- 배열의 큰 특징중 하나가 length 를 가진다.
  + 배열인지를 확인할때도 유용하다.
  + length는 1,2,3,,,,, 로 갯수를 센다.
- 배열은 인덱스 번호로 데이터 값을 꺼내서 사용한다.
  + `arr[인덱스 번호];` => 인덱스 번호는 0번부터 시작
- pop() , push() 메서드
  + pop() : 배열의 맨 뒤 데이터를 빼버림
  + push() : 배열의 맨뒤로 데이터를 추가 함 : 데이터 추가시 푸쉬 메서드 권장
- 배열을 사용하지 않을때 VS 배열을 사용할때
  ```
  //배열을 사용하지 않았을 때 연관된 복수 데이터 관리가 어렵다.
  var navigation_items_01 = 'home';
  var navigation_items_02 = 'about';
  var navigation_items_03 = 'works';
  var navigation_items_04 = 'products';
  var navigation_items_05 = 'contact';

  //배열을 사용할 때 연관된 복수 데이터 관리가 쉽다.
  var navi_items = new Array('Home', 'About', 'Works', 'Products', 'Contact');

  // 데이터추가
  // navi_items[5] = 'board';
  // navi_items[6] = 'favorites';
  // ===> nono  왜??
  // 만약 중간 인덱스를 빼먹고 navi_items[9] 를 입력해서 데이터를 넣을경우
  // 자동으로 7,8번 인덱스 공간이 생겨버린다. 그 공간엔 값이 undefind 할당

  // 데이터 추가시 push() 매서드 사용을 권장함!! : 자동으로 데이터 순서가 뒤로 붙음
  navi_items.push('board');
  navi_items.push('favorites');

  //------- 최종 권장 방법 : 리터럴방식 : 간단명료 ----------
  var navi_items = [];
  navi_items.push('home');
  navi_items.push('about');
  navi_items.push('works');
  navi_items.push('products');
  navi_items.push('contact');

  // var navi_items = ['home', 'about', 'works', 'products', 'contact'];

  ```

**주의 : [] 각괄호로 문자유형의 속성을 배열객체에 추가**
```
// 배열 선언
var drinks = [];
//배열에 문자유형의 테이터 추가
drinks.push('milk');
drinks.push('juice');
drinks.push('soju');

console.log(drinks); // ["milk", "juice", "soju"]
console.log(drinks.length); // 데이터 갯수 : 3

// [] 각괄호로 문자유형 속성을 추가 
drinks['clear'] = '음료 원샷';
console.log(drinks); 
//==> ["milk", "juice", "soju", clear: "음료를비워"]
//배열에 속성:값 이 추가됨
console.log(drinks.length); 
// 하지만 데이터 갯수 : 3 
// [] 각괄호로 문자열 속성을 추가하면 인덱스번호에 추가되지 않는다.

console.dir(drinks); 
// 디렉토리 안에 clear 속성이 들어가있음 
// 인덱스 번호로 접근할수 없는 문제가 생기니까 저런식으로 쓰지마
// 눈에 안보이잖아 
// --------------- dir 출력값 ---------------
// Array[3]
// 0: "milk"
// 1: "juice"
// 2: "soju"
// clear: "음료를비워"
// length: 3
// __proto__: Array[0]


// 객체의 속성에 접근하는 표기법
// 1. 쩜기호를 통한 접근
console.log(drinks.clear);

// 2. 각괄호를 사용한 접근
// (각괄호 내부에 문자열을 넣어줘야 함)
// 일반적으로 자주 사용되지는 않지만,
// 반복문(Loop) 내부에서 특정 변수 값을
// 순환할 때 종종 사용된다.
console.log(drinks['clear']);

//---------------------------------------
//결국 배열도 객체
//왜? 속성을 가질수 있잖아.

```

**연관배열**
- 배열처럼 보이지만 진짜 배열이 아님 == 유사배열 Array Like Object 
- DOM(문서객체모델)의 노드리스트도 유사배열
  + `[<h2>....</h2>, <h2>....</h2>, <h2>....</h2>]`
- 배열인지 확인하는 방법
  + `pop()` 사용해서 실험 오류나면 배열이 아님

###객체(Plain Object)
- 객체는 속성과 값을 가진다.
- 속성은 키 라고도 불린다. `{키:값, 키:값, 키:값}`
- 속성(키)은 혿타옴표를 사용해서 묶는걸 권장한다
  + 왜? 엄격모드에선 필수적인것 이고 
  + 'font-size'같은 속성일 때 하이픈 사용해야 하기 때문
  ```
  //객체 선언
  var ss = {};

  //선언된 객체에 데이터값 할당
  //객체.속성명 = 값; 
  ss.name = 'sseom';
  ss.age = 20;

  //객체 속성에 접근방법
  //1. 쩜 표기법으로 접근
  ss.name
  //2. 각괄호로 접근 : 괄호 안에는 문자열이어야함
  ss['name']

  //각괄호 접근방식을 이용시 
  //속성을 변수로 담아서 사용 가능하다.
  var nick_name = 'name';
  ss[nick_name];
  // 속성값이 변경될수 있는 경우 : 어떤값이 들어올지 모를때 사용하면 유용함

  ```

- 객체 리터럴 표현식 : 다른 언어에선 map이라고 불린다.
  ```
  // CSS 문법과 유사해 보이는 객체 리터럴 표현식
  var css_props = {
    'font-size': '24px',
    'color': '#000',
    'border-top-color': 'currentColor'
  };
  ```

- delete 키워드 
  + delete 키워드를 사용하면 객체의 속성을 제거할 수 있다.
  + 단, 전역(Global Scope) 변수는 지울 수 없다. : 그래서 전역변수는 사용을 자제하는것이 좋다.
  + 그래서 변수는 모듈레이션(모듈)을 만들어서 사용한다.??????
  ```
  delete css_props.color; // color 속성이 제거된다.
  delete css_props; 
  // css_props 는 제거되지 않는다. 
  // css_props는 전역 변수이니까.
  ```
  + **참고**
    * null, undefind 를 변수에 값을 할당하면 삭제가 아님
    * 이전값을 지우거나 참조된 것을 끊어버리거나 공간만 비워버리는것이다.

###변수, 함수 => 속성, 메소드 구분
- 변수, 함수 를 객체가 가지게 된다면 모두 객체의 속성이 된다.
- 그러나 변수는 객체의 속성일뿐이지만 함수는 속성임과 동시에 메소드 라고 불리게 된다.
- 변수, 함수
```
// 변수 
var eyes = '눈';
var ears = '귀';
// 함수 
var crying = function() {
 console.log('울다');
};
// 객체
var person = {};

// 변수와 함수를 객체가 소유하게 되면
// 변수는 객체의 `속성`이라고 불리게 된다.
// 함수는 객체의 속성임과 동시에 특별히 `메소드`라고 부른다.
person.eyes = eyes;     // 속성(멤버변수) == 변수  : 복사
person.crying = crying; // 메소드(멤버함수) == 함수 : 참조

//디렉토리 확인 : 숨겨진 값을 확인할수 있다.
console.dir(person);

```


---

###생성자(Constructor) 함수
- 객체를 생성하는 권한을 가진 함수 
  + 자식을 생성을 할 수 있는 권한을 부여받은 함수
  + ECMAJS2015부턴 클래스가 지원됨 
  + 이름이 대문자로 시작하면 생성자함수
  + `Number(), String(), Boolean() .....` : 이들은 자식을 생성할수 있음
- 문법 `new Creater('person');` 
  + new라는 키워드를 붙여서 생성함
  + 이름 맨 첫글자는 대문자 시작
- 생성자시 문제점이 있어서 사용하지 않는것이 좋다.
  ```
  // 배열 [10] 생성하고 싶음
  new Array(10);
  // [undefind * 10] 생성 ==> 갯수가 설정되어버림
  // 이와 같은 오류 때문에 생성자 방식보단 리터럴 방식 권장
  ```

**Constructor 와 Instance**
- 생성자(Constructor) 
  + 설계 도면
  + 다른 언어에선 class 라고 불림
  + 스케치 프로그램으로 비유하면 심볼
- Instance
  + 생성된 객체
  + 조각(실체화된 객체)
  + 만들어진 애들

**생성자와 객체 Sketch 비유**
```
// Sketch 데모의 사례를 코드로 구현하자면
// var page1_ins = new CircleHack();
// var page2_ins = new CircleHack();
// var page3_ins = new CircleHack();

// 한개의 생성자 함수 new CircleHack()으로 ==> 스케치에선 심볼등록한것
// 여러개의 변수에 할당 ==> 스케치에선 심볼을 드래그한것

// 키워드 new 를  == 스케치에서 심볼을 드래그 한 상황으로 비유

// 생성자함수를 통해서 인스턴스가 만들어져서 변수에 담김
// 설계도면을 통해서 객체가 만들어져서 변수에 담김

```


---

###Native Code
- 미리 정의 되어 있는 빌트인 코드
- `Number(), String(), Boolean() .....` 

###리터럴 표현식
- 값 그 자체를 말한다 : 간단한 방법으로 종의 할수 있음
- 999 는 숫자, 하하하 는 문자 이런식의 변형이 안되는 값
```
// 빈 객체를 생성 : 리터럴방식
var obj = {};
// 생성자 방식
var obj = new Object();

// 배열을 생성 : 리터럴방식
var arr = [];
// 생성자 방식
var arr = new Array();
```

- 자바스크립트에 내장된 객체들은 생성하는 구문보다는 리터럴을 바로 사용하는 것이 좋다.
  ```
  //숫자, 문자, 불리언, 함수, 배열, 일반 객체
  var num, str, boo, fnc, arr, obj;

  num = 10;
  str = 'java vs javascript';
  boo = !false;
  fnc = function() {};
  arr = [];
  obj = {};

  ```


###length
- 배열, 문자형데이터, 유사배열 은 갯수를 가지고 있다.
