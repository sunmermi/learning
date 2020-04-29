# vue 

## 온란인 강의
- [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/dashboard)

#### 섹션 3. Todo App - 애플리케이션 구조 개선하기
- 컨테이너 컴포넌트에서만 데이터 조작 (App.vue)
- 하위 컴포넌트들에선 마크업 UI적인 표현만 관리 (TodoList, Todoinput..)
- 강의자 경험상 하위컴포넌트를 재사용 하기위해 각각의 컴포넌트에서 데이터 조작하는것을 분리해야만 했다 그래서 하위컴포넌트는 표현만 하고 이벤트를 상위로 올려서 상위에서 받아서 데이터 조작..? 중앙관리식 데이터 관리 

#### 섹션 6. ES6 for Vue.js - 오리엔테이션
- 바벨 : ES6 문법을 각 브라우저 호환이 가능한 ES5로 변환하는 컴파일러
- 강의에서 배울것 : const & let, 화살표함수, Enhanced Object Literals, Modules
- ES6로 주로 사용하는 기능은 const & let, 화살표함수 그외 기타는 디스트럭처링, spread 연산자 정도...
  - [const & let](https://poiemaweb.com/es6-block-scope)
  - [화살표함수](https://poiemaweb.com/es6-arrow-function)
  - [디스트럭처링](https://poiemaweb.com/es6-destructuring)
  - [spread 연산자](https://poiemaweb.com/es6-extended-parameter-handling)

#### 섹션 7. ES6 for Vue.js - const & let
- 새로운 변수 선언 방식, 기본 var을 const, let으로 사용.
- 기존 : 유연함,애매모호함 
  - 변수 재선언 가능 
  - 변수 재할당 가능 
  - 호이스팅 로직의위치에 상관없이 어디는 들어가고 안들어감.
- 블록단위 {} 로 변수의 범위가 제한되었음
- const : 한번 선언한 값에 대해서 변경할 수 없음 (상수 개념)
- let : 한번 선언한 값에 대해서 다시 선언할 수 없음
   
*const & let*
~~~
// 기존 js의 유연함
var a = 10;
a = 20; // 재할당 가능 

// ES6
let b = 10;
let b = 20; // error 이미 선언되었음 다시 정의 못함
b = 20; // 값 재할당 가능

const c = 10;
c = 20; // error 한 번 할당 하면 끝

// const : 객체나 배열의 내부는 변경가능
// 프로퍼티 접근이나 인덱스 조작을 통해 값을 바꿀 수 있다.
const d = {};
d.num = 10; // 넘이라는 프로퍼티 생성 해서 10을 넣음
console.log(d); // {num: 10}

const d = [];
d.push(20); // 배열에 요소 추가
console.log(d); // [20]
~~~
   
*변수 스코프와 호이스팅*
- 스코프 
  - 기존 : 블록 {} 에 상관없이 스코프가 설정됨
  ~~~
  var sum = 0;
  for(var i = 1; i <= 5; i++){
    sum = sum + i;
  }
  console.log(sum); // 15
  console.log(i); // 6 for문이 끝나고 나서고i에 접근이 가능..
  ~~~
  - ES6 {} 단위로 변수의 범위가 제한됨
  ~~~
  let sum = 0;
  for(let i = 1; i <= 5; i++){
    sum = sum + i;
  }
  console.log(sum); // 10
  console.log(i); // i is not defined => for문이 끝나고 나면 접근이 안됨
  ~~~
- 호이스팅
  - 선언한 함수, 변수를 가장 상단에 있는 것처럼 인식
  - js해석기는 코드의 라인 순서와 상관없이 함수선언식과 변수를 위한 메모리 공간을 먼저 확보한다.
  ~~~
  // 함수 선언식
  function a(){
    return 10;
  }
  a(); // 5
  function a(){
    return 5;
  }
  ~~~
    
- ex. js 해석기가 어떻게 코드 순서를 재조정할까요?
~~~
var sum = 5;
sum = sum + i; // 5
function sumAllNumbers(){
  // ...
} 
var i = 10;

// 순서
// 1. 함수선언식과 변수 선언을 호이스팅
var sum;
function sumAllNumbers(){
  // ...
} 
var i;

// 2. 변수 대입 및 할당
sum = 5;
sum = sum + i;
i = 10;
~~~