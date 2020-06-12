# vue s

## 온란인 강의
- [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/dashboard)

#### 섹션 3. Todo App - 애플리케이션 구조 개선하기
- 컨테이너 컴포넌트에서만 데이터 조작 (App.vue)
- 하위 컴포넌트들에선 마크업 UI적인 표현만 관리 (TodoList, Todoinput..)
- 강의자 경험상 하위컴포넌트를 재사용 하기위해 각각의 컴포넌트에서 데이터 조작하는것을 분리해야만 했다 그래서 하위컴포넌트는 표현만 하고 이벤트를 상위로 올려서 상위에서 받아서 데이터 조작..? 중앙관리식 데이터 관리 

#### 섹션 6. ES6 for Vue.js - 오리엔테이션
- 바벨 : ES6 문법을 각 브라우저 호환이 가능한 ES5로 변환하는 컴파일러
  - [ Babel 온라인 에디터 링크](http://bitly.kr/fFcezSKq2)
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
   
#### 섹션 8. ES6 for Vue.js - 화살표 함수
- 함수를 정의할 때 function 이라는 키워드를 사용하지 않고 `=>` 로 대체
- 콜백함수의 문법을 간결화 ? 
~~~
// ES5 
var sum = function(a,b){
  return a+b;
}
// ES6
var sum =  (a,b) => {
  return a+b;
}

// 인자가 하나일 경우 괄호 없이 사용 가능
var sum =  val => {
  return a+b;
}
~~~

#### 섹션 9. ES6 for Vue.js - Enhanced Object Literals
- 향상된 객체 리터럴
- 객체의 속성을 메서드로 사용할때 function 예약어를 생략하고 생성 가능
~~~
var dictionary = {
  words: 100,
  // ES5
  looup: function(){
    console.log('ES5');
  },
  // ES6
  looup() {
    console.log('ES6');
  },
}

// 속성명 축약
var dictionary: {
  // 'TodoHeader': TodoHeader,
  // 'TodoInput': TodoInput,
  TodoHeader,
  TodoInput,
},
~~~
    
#### 섹션 10. ES6 for Vue.js - Modules
- JS ES5는 모듈화 방법이 없었음. 파일을 나눈다고해서 스코프가 분리되지 않았음. 
- 모듈화란? 특정기술을 수행하는 한 묶음 덩어리.
- 모듈화 하는 이유? 재사용성이 뛰어난 기능들을 묶어서 필요할때마다 가져다 쓰기 위해
- ES6는 자바스크립트 모듈 로더 라이브러리(AMD, Commons JS) 기능을 js언어 자체에서 지원
~~~
// math.js
export function sum(a,b){
  return a + b;
}

// main.js
import {sum} from 'math.js';
sum(1,2); // 3



// Vue에서 export default : 한개의 파일에선 한번밖에 쓸수 없음
// math.js
export function sum(a,b){
  return a + b;
}

// 같은 파일을 다른 이름으로 부여해서 사용할수있음
// main.js
import {util} from 'math.js';
util(1,2); // 3

// app.js
import {hi} from 'math.js';
hi(1,2); // 3
~~~
   
#### 섹션 11. Vuex - 소개
- Vuex 소개 : 상태 관리 라이브러리
  - 복잡한 애플리케이션의 컴포넌트 들을 효율적으로 관리하는 Veux 라이브러리 => 상태관리 패턴
- Vuex 학습 목차
  - Vuex 란
  - Flux패턴 : 컴포넌트가 많아졌을때 어떻게 관리 할것인가? Flux패턴 도입
  - Veux 컨셉과 구조
  - Veux 설치 밒 시작하기
  - Veux 기술요소 state(데이터), getters(컴퓨티드), mutations(메서드), actions(비동기메서드)
  - Veux Helper : Veux 더쉽게  Helper 기능소개
  - Veux로 프로젝트 구조화 미 모듈화하는 방법
   
*Flux와 MVC 패턴 소개 및 Flux 등장 배경*
- Vuex란? 
  - 무수히 많은 컴포넌트의 데이터를 관리하기 위한 상태 관리 패턴이자 라이브러리
  - 리액트의 Flux 패턴에서 기인함 
  - Vue.js 중고급 개발자로 성정하기 위한 필수 관문
- Flux란?
  - MVC 패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴
    - 페북 : 한개의 뷰가 바꼈을때 다른뷰에서 데이터를 추적하기 힘들다 워낙에 거대한 앱이기때문에.. 그래서 플럭스를 만듬
    - 오래전부터 개발된 패턴 양방향
    - 3개의 주요 요소들 : controller -> model -> <- view
      - 모든 데이터가 모델에 담겨있고
      - 컨트롤러는 모델과 뷰를 제어하는 역할 : 데이터 처리가 여러가지방향으로 일어남??
    - 문제점
      - 기능 추가 및 변경에 따라 생기는 분제점을 예측할수가 없음 (예. 페북 채팅화면)
      - 앱이 복잡해 지면서 생기는 업데이트 루프 : 컨트롤러는 한나가 있고 모델과 뷰가 엄청 많고.. 
      - ![Flux 공식 이미지 | 복잡한 MVC 패턴](https://www.huskyhoochu.com/flux-architecture/complex_mvc.png)
  - 데이터의 흐름이 한방향으로만 흐른다. (뷰예.부모에서 자식한테만 데이터를 내림. 한방향)
  - action, dispatcher, model, view : 단방향!! 예측가능!!
    - action : 화면에서 발생하는 이벤트 또는 사용자의 입렵
    - dispatcher : 데이터를 변경하는 방법, 메서드
    - model : 화면에 표시할 데이터
    - view : 사용자에게 비춰지는 화면
    - ![Flux 공식 이미지 | Flux 패턴](https://www.huskyhoochu.com/flux-architecture/flux_simple.png)
  - [참고 : '데이터가 폭포수처럼 흘러내려' React의 flux 패턴](https://www.huskyhoochu.com/flux-architecture/)
  - [참고 : Flux로의 카툰 안내서](https://bestalign.github.io/2015/10/06/cartoon-guide-to-flux/)
  - [참고 : MVC패턴](https://ko.wikipedia.org/wiki/%EB%AA%A8%EB%8D%B8-%EB%B7%B0-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC)
  - [참고 : [디자인패턴] MVC 패턴이란?](https://medium.com/@jang.wangsu/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-mvc-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80-1d74fac6e256)
   
*Vuex가 필요한 이유, Vuex 컨셉, Vuex 구조*
- Vuex로 해결할 수 있는 문제들
  - MVC 패턴에서 발생하는 구조적 오류
  - 컴포넌트 간 데이터 전달 명시
  - 여러 개의 컴포넌트에서 같은 데이터를 업데이트 할 때 동기화 문제
- Vuex 컨셉
  - State : 컴포넌트 간에 공유하는 데이터 data()
  - View : 데이터를 표시하는 화면 template
  - Action : 사용자의 입력에 따라 데이터를 변경하는 methods
  - ![단방향 데이터 흐름 처리를 단순하게 도식화한 그림](https://vuex.vuejs.org/flow.png)
  - 단방향 데이터 흐름 처리를 단순하게 도식화한 그림
- Vuex 구조
  - 컴포넌트 -> 비동기 로직(Actions) -> 동기 로직(Mutations) -> 상태
  - Actions에서는 데이터를 바꾸지 않는다 비동기로직만처리 하고 Actions가 데이터를 변경할수 있는 Mutations를 콜하고 Mutations에서만 데이터를 바꿀수있다.
  - ![Vuex 구조](https://vuex.vuejs.org/vuex.png)
  - [참고 : 자바스크립트 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
  - [참고 : 자바스크립트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)


#### 섹션 12. Vuex - 주요 기술 요소
- [설치 방법](https://vuex.vuejs.org/kr/installation.html)
- 보통 vuex를 store라고 한다
- setup : src > store > store.js 생성
  ~~~
  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  export const store = new Vuex.Store({
    // ...
  });
  ~~~

*Vuex 기술 요소*
  - *state* : 여러 컴포넌트 간에 공유되는 데이터 data
  - getters : 연산된 state 값을 접근하는 속성 computed
  - *mutations*
    - state 값을 변경하는 이벤트 로직 메서드 *유일한 방법* methods
    - 뮤테이션은 commit()으로 동작시킨다
    ~~~
      // store.js
      state: {
        num: 10,
      },
      mutations: {
        printNumbers(state){
          return state.num;
        },
        sumNumbers(state, anotherNum){ // 두번째 인자로 값을 받을 수 있다
          return state.num + anotherNum;
        },
      },

      // App.vue 에서 호출
      this.$store.commit(printNumbers); // 10
      this.$store.commit(sumNumbers); // 30
    ~~~
    - commit()의 형식
  - actions : 사용자의 입력에 따라 데이터를 변경하는 aysnc methods (기다렸다가 값을 받아서 뿌려줘야 하는 경우 사용)