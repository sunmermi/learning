// 이벤트 버스 : 빈 이벤트 객체를 만들어서 그 이벤트 객체를 통해서 컴포넌트 간의 데이터를 전달
import Vue from 'vue';

export default new Vue();

/* export 할깨 default 사용 미사용 차이

  // default 미사용 
  // bus.js
  export const bus = new Vue();
  // App.vue 에서 사용할때
  import { bus } from './bus.js'

  // default 사용
  // bus.js
  export default new Vue();
  // App.vue 에서 사용할때
  import bus from './bus.js'

  default 사용시 App.vue 에서  그냥 바로 선언해서 사용할수 있음  {} 필요없음
*/
