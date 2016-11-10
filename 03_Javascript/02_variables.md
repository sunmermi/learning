##상수와 변수

상수(Constant)
- 변하지 않는 수
- 변경이 없음 숫자 10은 10이다  값이 바뀔일이 없음
- 변수와 구분하기 위한 목적으로 상수의 이름은 모두 대문자로 작성 표기
- 코드가 실행 중인 상황에서 값을 변경할 수 없다
- 상수를 공식적으로 지원하는 것은 ECMAScript 2015 버전부터 지원함
  + 이전까진 IE에선 상수를 지원하지 않아서 굳이 사용하지 않았음.
  + 앞으로 상수가 얼마나 활발하게 사용이 될진 아직 모름

변수 (Variables)
- 자료를 담는 공간(그릇) == 메모리 공간
- 변수의 값은 메모리cpu에 저장됨
- 한개의 값만 저장 할 수 있다.
- 변하는 수 : 어떤값을 넣느냐에 따라 값이 변동됨
- 데이터 유형에 따라 값을 복사를 할수도 있고 참조 할수도 있다.
- 변수는 값이 담긴 데이터로 접근하도록 하는 식별자이다.
- var 키워드로 변수 선언  `var 변수이름 = 정보유형;`

```
// 변수(Variable) VS 상수(Constant)
var bim = 'LG bim';
const HOUR = 60;

// 변수는 실행 중인 상황에서 값을 변경할 수 있는 반면
console.log('bim', bim);
// 상수는 실행 중인 상황에서 값을 변경할 수 없다
console.log('HOUR', HOUR);

//값 변경
bim = 'samsung';  
HOUR = 120;  

console.log('bim', bim); //바뀜
console.log('HOUR', HOUR); //오류발생
```


##변수 할당(대입)
1. =  할당의 의미
  - `var a = 10;` => 숫자10을 변수 a에 값을 할당하다.
  - 언제든지 값은 변할수 있다.
  - `a = 7 + 2;`  a의 값은 9로 변경됨

##변수 정의 패턴
1. 한개의 var 키워드에 변수선언
  ```
   var x, y, z; 
   // 값을 할당하지 않고 선언만 하는 경우 
   // undefined 원시 데이터 유형 값으로 변수에 할당(복제)된다.
  ```

2. var 키워드를 변수 이름마다 사용해서 선언 : 일반적으로 많이 쓰는 방법
  ```
  var x;
  var y;
  var z;
  
  // 선언 이후에 값(Data)을 변수에 할당한다.
  x = '바버';
  y = 999;
  z = null;
  
  ```

3. 변수 선언과 동시에 값을 할당 : 일반적으로 많이 쓰는 방법
  ```
  var x = 10;
  var y = 50;
  ```

4. var singleton pattern : var 키워드를 한번만 사용하는 코딩 패턴(방법) 
  ```
  var a=1, b=2, c=9;
  
  // 아래와 같이 개행 가능
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

**참고 및 주의사항**
  - 한국어도 가능하지만 크롬말고 다른 브라우저는 인식 못할수도 있음
  - 예약어 사용 안됨


#변수 값의 복사, 참조의 구분
1. 값 복사 : 데이터가 원시데이터형일 때 복사가 된다.
  - 원시 데이터(Primitive Data Type) 유형 5가지
    - undefined , null , Number , String , Boolean
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

2. 참조 : 주소를 가르키고있다 개념으로 자료형 데이터 일때 참조됨
  - 참조형 데이터(Reference Data Type) == 자료형데이터
    - 객체(Object), 함수(Function Object), 배열(Array Object)

- 변수 값 참조 예제 1
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

- 변수 값 참조 예제 2
  - [비개발자를 위한 Javascript 알아가기 #1에서 16장 참고](http://www.slideshare.net/ibare/javascript-1-33928468?ref=http://m.cafe.daum.net/aspdotnet/5zmE/153?boardType=U&q=D_wmj6O-wN3vs0&)
```
var a = 10;
var b = a;
var c = {x: a};
var d = c; // c에 참조된 객체를 d도 참조함.

console.log('a:',a);
console.log('b:',b);
console.log('c:',c);
console.log('d:',d);


//변수 데이터값 변경
a = 100;
b = 200;
c.x = 300;

console.log('a:',a);
console.log('b:',b);
console.log('c.x:',c.x);
console.log('d.x:',d.x); // c에 참조된 객체를 d도 참조하고 있기에 값이 변경됨.

//---------------- 중요한 개념 ----------------------
// 변수c가 참조하고 있는 객체에서 키인 x는 객체가 아님 
// x라는 이름을 가진 변수 라서 데이터 값이 복사됨. 
// 대신 변수d는 변수c의 객체를 참조 하고 있기에 c의 키인 x가 변경되면 변경된 값을 가지고있음

```


---

###그외

- CPU
  + cpu는 계산담당(cache는 cpu를 위한 저장공간)
  + ram은 기억담당(비싼 호텔! 저장하는 주소, 방 많이 가지고 있음) : 계산할 값을 저장하고 있음
  + hdd/sdd는 영구적으로 데이터 저장
  + cpu--cache--ram--hdd 순으로 데이터가 이동함
  + gpu 모니터에서 랜더링되는 화면을 연산
  + cpu-직렬처리/ gpu-병렬처리 로 작동방식, 목적이 다름
  + cpu i-5, i-7(쿼드코어) 같은거, 노트북과 데스크탑 cpu는 좀 다름...
  + gpu 는 동시에 여러 코드를 처리 가능.-테슬러 자동차 처럼 여러 센서가 대규모 데이터 주는거 처리할 때 사용하기도 함
  + cpu작동 방식은 잘 모르겠다!! 여러 코드를 여러개의 cpu가 처리하지 못함
  + 32bit os는 ram 4기가 이상 쓸 수 없다, 인식 못함.

- undefined는 예약어 아님. 변수이름으로 쓸 수 있지만 값이 실제로 담기지는 않음
