#자바스크립트 기본

###주석
- // 한줄
- /*   */  여러줄 주석

###엄격모드 발동 
: 문법이 엄격함 지키지않으면 오류발생
```
'use strict';
```

###dot syntax
```
//자바스립트 문장은 점으로 연결되어 이루어진다.
주어.동사('목적어');
console.log('뭐야');
```

###스크립트 로딩시 주의
- head나 body 요소 안에 작성
    + head나 body 요소밖에 작성해도 동작은 되지만 웹표준에 어긋남
- body 요소 안 끝부분에 선언 
    + html문서가 다 읽히고 나서 스크립트 읽어서 실행 되어야 모두 동작
    + 상단에 들어가면 html문서가 읽히고 출력은 되어보이지만 실제적으론 스크립트 구문이 먼저 읽힐 당시엔 html문서를 찾을수 없어서 실행이 안됨
- 블러오는 순서가 매우 중요 
```
//변수
<script src="js/var.js"></script>
//
<script src="js/write.js"></script>
```

##자바스크립트 호출 실행 흐름
```
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Comㅌpatible" content="IE=Edge">
    <script>alert('title 위에서 실행');</script> 
    <title>자바스크립트 호출 실행 흐름</title>
    <style type="text/css">
      body{background-color: pink; color: #4C4C4C;}
    </style>
    <script>alert('style 아래에서 실행');</script> 
  </head>
  <body>
    <h1>요소 먼저 읽지만 js구문 만나서 출력하지 않고 js끝나고 화면에 출력</h1>
    <script>alert('body 시작지점에서 실행');</script> 
    <h2>javascript</h2>
    <script>alert('h2 뒤에서 실행');</script> 
    <p>Lorem ipsum dolor sit amet.</p>
    <script>alert('p 뒤에서 실행');</script> 
  </body>
</html>
```

##스크립트 파일 분리 
- HTML:구조, CSS:표현, JS:동작
- 인라인으로 사용하지 않는다. : 코드더러워짐 유지보수 어려움
```
<button 
    type="button"
    onclick="document.body.style.background='#EA92FF';"
    style="padding: 1rem; background: #220D44; color: #fff; border: none; border-radius: 5px;"
>
  click
</button>
```

- css , script 내부로 분리 : 그래도 코드 더러움
```
<style>...</style>

<button typr="button" id="target"> GOOD click </button>

<script>
  document.getElementById('target').onclick = function(){
    document.body.style.background="#C6ABFF";
  }
</script> 
```

- css, script 외부파일로 모두 분리 : 깔끔!!
```
<link rel="stylesheet" type="text/css" href="css/marge-style.css">
<button typr="button" id="target"> GOOD click </button>
<script src="js/marge-app.js"></script>
```

- marge-app.js 코드
```
//marge-app.js

//문서 객체를 찾아 변수에 할당
var body = document.body;
var button = document.getElementById('target');

// 수행할 일(기능==function)을 참조하는 변수 선언
var btnClick =  function(){ 
  body.style.background="#C6ABFF";
}

// 기능이 참조된 변수를 실행
button.onclick = btnClick;

```

**PLUS**
- 바디요소 접근
  + `document.body;`
- 아이디 접근
  + `document.getElementById('아이디명');`


---

##상수와 변수

상수
- 변하지 않는 수
- 변경이 없음 숫자 10은 10이다  값이 바뀔일이 없음

변수
- 자료를 담는 공간(그릇)
- 변하는 수 : 어떤값을 넣느냐에 따라 값이 변동됨
- var 키워드로 변수 선언

##변수 선언 방식
1. 한개의 var 키워드에 변수선언
```
 var x, y, z; 
```
2. 변수선언 : 일반적으로 많이 쓰는 방법
```
var x;
var y;
var z;
```

3. 변수선언과 동시에 값을 할당 : 일반적으로 많이 쓰는 방법
```
var x = 10;
var y = 50;
```

4. var singleton pattern : var 키워드를 한번만 사용하는 코딩 패턴(방법) 
```
var a=1, b=2, c=9;
```
  - 개행가능
```
var a=1,
    b=2,
    c=9;
```

##변수명 작성 규칙
1. 이름 앞에 숫자 No 하지만 뒤는 Ok
  - => `var 999qkqj;`  Error
  - => `var qkqj999;`  Ok
2. 이름 사이의 공백 No  공백대신 언더바
  - => `var my name;` Error
  - => `var my_name;` Ok
3. 이름 앞에 특수문자는 $, _ 만 가능
  - => `var ^^#@_name;` Error
  - => `var $name;`  Ok : $가 붙은 변수는 주로 제이쿼리를 담은 변수를 나타냄 
4. 변수명이 모두를 대문자로 사용하지 않는다.
  - => 오류가 발생하는 것은 아니지만 이름이 전부 대문자이면 관례적으로 상수로 인식한다.
  - => `var SMART_PHONE;`  ==> 상수로 인식
  - => 상수선언은 `const 이름 = '값';`  ==>  `const STORAGE;`

5. 카멜 케이스(camelCase) 표기법
  - 대문자를 변수 이름에 사용하는 경우는 카멜 케이스 표기법을 따르는 경우가 많다.
  - `var smartPhone;`


#변수 값의 할당, 복사, 참조의 구분

1. =  할당의 의미
  - `var a = 10;` => 숫자10을 변수 a에 값을 할당하다.
  - 언제든지 값은 변할수 있다.
  - `a = 7 + 2;`  a의 값은 9로 변경됨

2. 복사 : 원시데이터형 
```
// 실행구문 1
// x에 10을 대입
x = 10;

// x의 변수값 복사
y = x;

console.log('x: ',x);  // 10
console.log('y: ',y);  // 10

// 실행구문 2 (x값 변동, y의 값은?? )
// x 변수의 상태가 변경 ( === 값이 변경)
x = 5;

// z에 연산된 값 할당 
z = x * y -150;

console.log('x: ',x);  // 5
console.log('y: ',y);  // 10  ==> y값은 변동되지 않음 처음 복사한값 그대로 
console.log('z: ',z);  // -100

// 실행구문 3  (x값 변동, y값 연산된 값은??, z의 값은???)
// x 변수의 상태가 변경 ( === 값이 변경)
x = -15;

// y의 연산결과 : y = -15 + 10
y = x + 10;

console.log('x: ',x); // -15
console.log('y: ',y); // -5
console.log('z: ',z); // -100  
//==> z의연산의 위치는 변수x,y의 값이 바뀌기전임 그래서 위의 z값과 같음


```

3. 참조 : 복합데이터 일때 : 주소를 가르키고있다 개념
```
// tea_time 변수에 배열데이터 할당
// == tea_time 변수가 배열테이터 참조
var tea_time = ['cake', 'coffee'];
// food 변수가 tea_time에 할당된 값을 참조.
var food = tea_time;

console.log('tea_time:', tea_time); // ['cake', 'coffee']
console.log('food:', food); // ['cake', 'coffee']

//실행구문 2
tea_time[2] = 'ice-cream';

console.log(tea_time); // ["cake", "coffee", "ice-cream"]
console.log(food); // ["cake", "coffee", "ice-cream"]

// => 참조된값이 바뀌면 변경된다.

```


---

#자바스크립트 데이터 유형

##원시 데이터 유형
1. 문자 String
  - 안녕, hi ...
2. 숫자 Number
  - 1 , 3.14... , -18 , ... 
3. 불리언 Boolean, 논리 
  - true, false

##복합 데이터 유형
1. 배열(Array)
  - ['사관','포도','귤']
2. 함수(Function)
  - function(){...};
3. 객체(Object)
  - {'name': 'sseom', 'age':'20'...}


---

#연산자

##더하기 + 
- 결합 더하기
```
var lang = 'Language', fun='잼';

document.write('<h1>'+ lang + fun +'</h1>');

// 출력 : Language잼
```

---

#method
- 기능을 가진 함수
- 동사형태(); 
- 객체.동작(전달인자) == 오브젝트.메서드(아규먼트);
- 친구가.선물하다('커피');

###alert()
- 웹브라우져에 경고창 띄움(== 알림창) : 오늘날 잘 사용안함
- `window.alert('hahah');`

###console.log()
- 웹브라우져 검사 도구로 들어가서 콘솔에서 확인 : 디버깅용
- 콘솔(console)에 기록(log)하고 싶다.

###document.write()
- body영역에 출력
- 요소(Element) 기입 가능

