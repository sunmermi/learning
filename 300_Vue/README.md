# vue 

## 온란인 강의
- [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/dashboard)

#### 섹션 3. Todo App - 애플리케이션 구조 개선하기
- 컨테이너 컴포넌트에서만 데이터 조작 (App.vue)
- 하위 컴포넌트들에선 마크업 UI적인 표현만 관리 (TodoList, Todoinput..)
- 강의자 경험상 하위컴포넌트를 재사용 하기위해 각각의 컴포넌트에서 데이터 조작하는것을 분리해야만 했다 그래서 하위컴포넌트는 표현만 하고 이벤트를 상위로 올려서 상위에서 받아서 데이터 조작..? 중앙관리식 데이터 관리 