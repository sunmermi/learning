### 강의 자료
- [권한 신청](https://gist.github.com/joshua1988/3fd36e04623aa42d536d8dbae37290de)
- [Vue.js 실전 강좌 비공개 리포지토리 주소](https://github.com/joshua1988/vue-advanced)
 - vscode 플러그인
  - vue peek
  - vuter

### vue-news 프로젝트 생성
~~~
// 프로젝트 생성
vue create vue-news

// 라우터 설치
yarn add vue-router

// scss 사용
yarn add sass-loader 
yarn add node-sass

// axios
yarn add axios

// vuex : 상태 관리 도구로 여러 컴포넌트에서 굥유되는 데이터속성
yarn add vuex
~~~

#### ES6 destructuring
- [destructuring](https://joshua1988.github.io/es6-online-book/destructuring.html)

#### 동적 라우트
- [Dynamic Route Matching](https://router.vuejs.org/guide/essentials/dynamic-matching.html)
- [실습 해커스 뉴스 API문서 주소](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)
- [실습 해커 뉴스 공식 사이트 주소](https://news.ycombinator.com/)
- [라우터 트랜지션 문서](https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition)
- [뷰 트랜지션 문서](https://vuejs.org/v2/guide/transitions.html)


#### 라이프 사이클 
- [라이프 사이클](https://beomy.tistory.com/47)


## 컴포넌트 재활용방법
#### 1. 하이 오더 컴포넌트 (V4)
- 리액트의 하이오더 컴포넌트에서 기원된것
- 컴포넌트에서 반복되는 코드를 또다시 재사용할 수 있도록 한다.
- [리액트 하이 오더 컴포넌트 공식 문서](https://reactjs.org/docs/higher-order-components.html)
- 실습내용에서 뉴스, 직업, 질문 에서 하는 리스트들을 뿌려주는 행동들이 같았기 때문에 그 행동을 재활용할 수 있도록 CreateListView.js로 코드를 옮김
- CreateListView를 만들었던 이유 
  - 특정 라이프 사이클 훅에서 스피너를 시작하고 데이터를 불러오는것이 중복되니까 하이오더 컴포넌트를 만든것임
- 단점 : 컴포넌트 레벨이 깊어짐 ㅜㅜ 그래서 컴포넌트 통신하기 어려워짐 그래서 믹스인을 사용해볼것임

#### 1. 믹스인 (V4)
- 여러 컴포넌트 간에 공통으로 사용하는 로직, 기능들을 재사용 하는 방법
- 믹스인에 정의할수 있는 재사용 로직은 data, methods, created 등과 같은 컴포넌트 옵션

#### 비교
- [믹스인과 하이 오더 컴포넌트 비교 분석](https://joshua1988.github.io/vue-camp/reuse/mixins-vs-hoc.html#hoc-vs-mixins)


#### 데이터 호출 시점
1. 라우터에서 네이베이션 가드 
  - [참고 블로그](https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/)
  - 특정 유알엘로 접근하기 전의 동작을 정의하는 속성(함수)
  - [네비게이션 가드 뷰 라우터 공식 문서](https://router.vuejs.org/kr/guide/advanced/navigation-guards.html)
2. 컴포넌트 라이프 사이클 훅
  - created : 컴포넌트가 생성되자마자 호출되는 로직
- 뭐가 다를까?
  - 라우터 가드가 먼저

---
