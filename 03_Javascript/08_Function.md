#Function  함수

###함수 만드는 방법
  1. 함수를 정의하는 방법 = 리터럴방식
    - `function fun(){ console.log('잼나'); }`
  2. 함수 표현식을 변수에 참조하는 방법 = 익명함수
    - `var funny = function(){ console.log('재밌네'); };`
    - 세미콜론 붙여야함.
  3. 즉시실행함수
    - 한번만 실행하고 없어짐 메모리 절약
    - `( function(){ 실행문; } )();`
  4. 함수 생성자 방식 
    - `var ss = new Function(인수, 실행문);`

###함수 호출
  - 함수이름 호출(실행) `fun();`
    + undefind ==> return 값이 없어서 undefined 반환
  - 함수를 참조!! `fun;` ==> 실행아님, 호출 아님
    + function

###함수 return 
  - return은 함수를 즉각 종료시킨다. 그리고 종료하면서 값을 반환한다.
  - return을 안써주면 동작만하고 끝. 그냥 함수일뿐
  - return을 써주면 그 값을 밖으로 빼서 쓸수 있음
  ```
  //return이 있을 때
  function aa(num){
    return num*2;
  }
  aa(3); // 6 반환

  //return이 없을때
  function aa(num){
   num*2;
  }
  aa(3); // 값을 반환하지 않음 undefined 가 됨

  ```


###IIFE(즉시 실행 함수) : Immediately-Invoked Function Expression
  - 함수를 활용하여 언어 차원에서 지원하지 않았던 모듈을 구현.
  - 일반 함수가 아닌, 즉시 실행 함수 패턴을 활용
  - 젼역 영역(Global Scope)를 오염 시키지 않기 위해 사용
    + 변수를 전역(global scope)으로 선언하는 것을 피하기 위해
  ```
  // 캡슐화
  ( function(){ console.log('IIFE Pattern'); }() ); // 권장
  ( function(){ console.log('IIFE Pattern'); } )();

  // 아래와 같은 선언방법은 권장하지 않음 
  +function (){ console.log('IIFE Pattern'); }(); 
  !function (){ console.log('IIFE Pattern'); }();
  ~function (){ console.log('IIFE Pattern'); }();
  ```

---

##스코프, 클로져, 호이스팅
> -- 원리 --
> 함수를 작성하면 메모리에서 글로벌 context를 만듬
> 함수를 실행하면 context 에서 scope를 만들어냄
> scope는 영역을 뜻하는데 변수의 생존 범위임
> 만약 값을 찾는데 없으면 그 값을 찾아 부모를 타고 올라가는 현상을 스코프체인이라고 함

###Context 콘텍스트
- 변수 및 함수를 만들면 메모리 공간을 만든다. 그것을 context라고 부른다.
- 전체 영역을 global context( 랩같은거 )라 하고
- 그 안으로 각 각의 함수 또는 변수들이 자기들만의(지역) context를 만든다.
- context : 1.(문장·내용의)문맥 2.전후 관계 3.배경 4.상황
  + 문맥을 알면 다음 상황을 선택할 수가 있다.
  + 문맥으로 전후를 판단을 할 수 있다.

###Scope 스코프 : 영역
- 함수가 실행되면 생김
- scope는 영역, 지역을 뜻하고 변수의 생존범위 영역
- 함수 만이 전역(글로벌영역)과 구분되는 스코프를 생성할수 있다.
- 또한 밖(전역)에선 접근 못하지만 안(지역)에선 밖(전역)으로 접근이 가능하다.

####스코프체인
- 자신에게 없는 값을 찾아서 부모를 타고 올라가는 현상을 스코프체인이라고 부른다.
- 하지만 계속 타고 올라가서 찾는 방법은 성능저하일으킴 좋지 안은 코드
- 해결 방법 
  + 전역변수보단 지역변수를 활용
  + 처음부터 window.변수명; 을 해서 전역변수를 찾게 만들면 돼

####새로 생긴 블럭스코프 
- 글로벌 안에서 함수와 변수를 사용하지 않고도 { } 괄호로 블럭을 생성할수있다.
- let 키워드를 사용해서 `{  let ss = “hi ”   }`
- 이 ss 변수는  {  } 안에서만 사용이 가능하다
- 하지만 { } 의 밖으로 넘어가면 저 변수는 사용하지 못한다.

###Closures 클로져 : 종료
- 함수가 종료되고 컨텍스트가 사라져도 거기에 스코프로 연결이 되어있어서 값을 참조할수있는 것
- [MDN : Closures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures)

####클로져함수
- 함수는 값이 리턴이 되면서 종료되고 콘텍스트도 사라짐 그러나 스코프 체인을 통해서 내부 함수가 외부함수의 변수 또는 인자값을 알수있다. 
- 하지만 그것을 아는 애들은 내부에 있는 함수 밖에 없다. 즉, 자신이 만들어졌던 콘텍스트를 본인만 기억해서 찾아간다. ==> 이것을 클로져 함수라고 한다.

- **클로저는 3가지 스코프 체인을 가진다.**
  + 클로저 자신에 대한 접근(자신의 블럭내에 정의된 변수)
  + 외부 함수의 변수에 대한 접근
  + 전역 변수에 대한 접근.

###Hoistiong 호이스팅 : 끌어올리다
- 변수와 함수가 어디에 있든 상관없이 그것을 위로 끌어올려서 읽는다.
- 하지만 처음엔 변수와 함수의 공간만 저장하고 값을 넣어놓진 않는다. 

- **실행순서**
  1. 자바스크립트 엔진이 코드를 한번 쫙 훑는다. 
  2. 그리고 움직임
  3. 변수와 함수를 먼저 메모리에 저장 (값이 아닌 변수 이름의 공간을 만들어 놓음)  
  4. 위에서 아래로 코드를 읽어내려 오면서 값을 인식해서 할당.
  + ==> 결국은 변수와 함수가 어디에 있든 상관없이 있다고 인식해서 오류가 안난다.
  하지만 처음 공간 만들어 놓을때의 값은 코트가 읽힐때까지 언디파인드다.

---
###재귀함수
- 자신을 다시 호출하는 함수
```
function loop(i){
  if(i >= 10){ return; }
  // 자신을 다시 호출
  i = i+1;
  console.log(i);
  loop(i);
}
loop(2);  // 3,4,5,6,7,8,9,10 그리고 정지 

// 애니메이션 사용때 
// 셋인터벌안쓰고 안에서 셋타임아웃을 사용할수 있다.
// 어떠한 조건이 될때까지 셋타임아웃을 실행할수 있겠지?

```

###콜백함수
- 다른 함수의 인자로 전달된 외부 함수
```
// map(a, f)
// 첫번째 인자 : 처리를 할 배열(집합)
// 두번째 인자 : 첫번째 인자인 배열의 각 원소에 뭔가를 처리하는 함수
// 반환 값은 처리된 배열을 반환하는 함수

function map(a, f) {
  var result = []; // 함수 실행 초기에 반환될 배열 생성
  for (var i = 0, l = a.length; i<l; i++) {
    result.push( f(a[i]) );
  }
  return result;
}

var my_list = [ 4, 9, 12, 7 ];
var excuteFn = function(n) {
  return ( n * n );
};

var result_excute_map = map(my_list, excuteFn);

console.log(result_excute_map); // [16, 81, 144, 49]

// 순서
// 반복문이 a.length 니까 4번 돌겠지 i는 0,1,2,3 까지
// 전달된 콜백함수 f() == excuteFn() 실행
// 전달인자가 excuteFn 한수의 인자로 전달되서 n * n
// f(a[i]) == f(a[0]) == f(4)  == 4 * 4  = 16
// f(a[i]) == f(a[1]) == f(9)  == 9 * 9  = 81
// f(a[i]) == f(a[2]) == f(12) == 12 * 12 == 144
// f(a[i]) == f(a[3]) == f(7)  == 7 * 7 == 49
// 반환된 값들 result 변수에 push
// [16, 81, 144, 49]
```


---

##그밖의 특징

###함수안의 또 다른 함수
  ```
  function outer(){
    function inner(){
       실행문;
  }
    return inner();
  }

  outer();
  ```


###arguments
- 함수를 실행할 때, 함수 안에는 arguments라는 변수가 자동으로 만들어 진다.
```
function func(arg){
  console.log('log:'+ arguments );
  return arg;
}
func("hi");

// 반환 
// log: [ object Arguments ]  => 배열로 저장
// "hi"


function func(arg){
  console.log('log:'+arguments[0]); // "hi"
  return arg; // "hi"
}
func("hi");

function func(arg){
  console.log('log:'+arguments.length ); // 1 
  return arg; // "hi"
}
func("hi");

//------------- 차이 ----------------
arguments.length
// 함수 안에 전달한 인자의 갯수 : func(여기 전달한 인자 수);
func.legnht; 
// 선언했을때의 매개변수의 갯수 : function func(여기 매개변수 갯수){}
```

####전달인자 예제
```
// 상황
// 매개변수는 2개
// 전달된 인자는 한개 뿐이 없을때

function add(a,b){
  return a+b;
}
add(10);
// 출력값  => NaN  
// 왜?? 전달인자가 2개 있어야하는데
// 한개밖에 없을때
// a는 10 이 되는데 b는 undefind 가 나옴 
// 이 둘이 합쳐져서 NaN이 나옴 


function add(a,b){
  //만약 b가 전달되지 않았다면 == 없다면 
  if(typeOf b === ‘undefind’){
    // a의 값이 b에 할당
    b = a;
  }
  return a+b;
}
add(10);
// 출력 => 20;  ==> 좀더 명시적인 코드임


// ==== or연산자를 사용하면 코드를 단축할 수 있다. ====
function add (a,b){
  b = b || a; 
  return a+b;
}
add(10;)
// 출력 => 20;

// ||
// b나 a중 하나가 트루면 그 값이 저장
// b가 트루면 b값이 먼저 할당
// 만약 b가 없고 a가 트루면 a값 할당
```

---

##생성자(constructor ) 함수 + 프로토타입으로 속성만들기
- 자바스크립트는 모두 생성자함수로 되어있고 사용자가 만들어서 사용할 수 있음
```
// 생성자 함수 만들기
function User(name, age){
  this.name = name;
  this.age = age;
}

// 객체 만들기
var ss = new User('썸', 20);

ss;
// ==> 출력 User {name: "썸", age: 20}

User.prototype
// ==> 출력
// > Object {}
//    > constructor : User(name, age) 
//    > __proto__ : Object 

//프로토 타입으로 속성만들기
User.prototype.greeting = function(){console.log('hi');}

ss.greeting();
// ==> 출력 hi

User.prototype
// ==> 출력
// > Object {}
//    > constructor : User(name, age) 
//    > greeting: function()
//    > __proto__ : Object 


// 키와 값 추가
ss.kg = 45;

ss;
//==> 출력 User {name: "썸", age: 30, kg: 45}
```