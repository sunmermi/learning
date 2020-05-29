<template>
  <div>
    <!-- 인풋에 입력한 저장된 값을 보여줌 -->
    <!-- list : css클래스와 관련되어있음 -->
    <transition-group name="list" tag="ul">
      <li class="shadow" v-for="(todoItem, index) in storedTodoItems" :key="todoItem.item">
        <i 
          class="checkBtn fas fa-check" 
          v-bind:class="{checkBtnCompleted: todoItem.comlpeted}"
          v-on:click="toogleComplete({todoItem, index})"
        ></i>

        <span 
          v-bind:class="{textCompleted: todoItem.comlpeted}"
        >{{ todoItem.item }}</span>

        <button class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: [
    'propsdata',
  ],
  data(){
    return {}
  },
  computed: {
    ...mapGetters(['storedTodoItems'])

    // 겟터랑 사용하려는 컴포넌트에서 사용하는 네임이 다를 경우 => 객체로
    // ...mapGetters([{
    //   todoItems: 'storedTodoItems'
    // })

    // 헬퍼를 사용안할 경우 방법
    // todoItems(){
    //   // return this.$store.getters.storedTodoItems;
    // }
  },
  methods: {
    ...mapMutations({ 
      // 스토어에 등록된 명과 컴포넌트에서 사용하는 명이 다르니 객체형태로
      removeTodo: 'removeOneItem',
      toogleComplete: 'toogleOneItem'
    }),
    // => 인자를 사용하지않아도 기능을 호출하는단에서 인자가 있으면 암묵적으로 자동으로 넘겨줌
    // 단 인자가 2개이상일 경우 객체형태로 넘겨줌

    // 헬퍼를 사용안할 경우 방법
    // removeTodo(todoItem, index){
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toogleComplete(todoItem, index){
    //   this.$store.commit('toogleOneItem', {todoItem,index});
    // },
  },
}

/* 메모
  !! 여기서는 최대한 표현만 하고 이벤트는 모두 app.vue에서 할수있도록 로직 설계 !!
  app.vue 이동 후 프롭스로 데이터를 받는다.
  
  data: function(){
    return {
      todoItems: [],
    }
  },
  created: function(){ // 라이프 싸이클 created : 인스턴스가 생정되자마자 실행되는 로직
    if(localStorage.length > 0){
      for(var i = 0; i < localStorage.length; i++){
        // console.log(localStorage.key(i));

        if(localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== ""){
          // this.todoItems.push(localStorage.key(i));

          // localStorage.getItem(localStorage.key(i)); string로 나옴
          // 이것을 parse 사용해서 오브젝트로 만들어서 todoItems 배열에 데이터를 넣어줌
          var objItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(objItem);
        }
        
      }
    }
    // console.log(this.todoItems);
  },
*/
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0;
    margin-top: 0;
    text-align: left;
  }
  li {
    overflow: hidden;
    display: flex;
    min-height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    border-radius: 5px;
    background: white;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 10px;
  }
  .checkBtnCompleted {
    color: #b3adad;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn {
    float: right;
    width: 3rem;
    border: 0 none;
    margin-left: auto;
    font-size: 1.2rem;
    background: none;
    color: #de4343;
  }

  /*리스트 아이템 트랜지션 효과*/
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }

  /* 리스트 아이템 트렌지션 */
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }


</style>