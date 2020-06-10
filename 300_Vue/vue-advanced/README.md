### 강의 자료
- [권한 신청](https://gist.github.com/joshua1988/3fd36e04623aa42d536d8dbae37290de)
- [Vue.js 실전 강좌 비공개 리포지토리 주소](https://github.com/joshua1988/vue-advanced)

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

#### V4. 하이 오더 컴포넌트
- 리액트의 하이오더 컴포넌트에서 기원된것
- 컴포넌트에서 반복되는 코드를 또다시 재사용할 수 있도록 한다.
- [리액트 하이 오더 컴포넌트 공식 문서](https://reactjs.org/docs/higher-order-components.html)
- 실습내용에서 뉴스, 직업, 질문 에서 하는 리스트들을 뿌려주는 행동들이 같았기 때문에 그 행동을 재활용할 수 있도록 CreateListView.js로 코드를 옮김