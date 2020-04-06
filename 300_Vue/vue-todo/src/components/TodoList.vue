<template>
  <div>
    <!-- 인풋에 입력한 저장된 값을 보여줌 -->
    <ul>
      <li class="shadow" v-for="(todoItem, index) in todoItems" :key="todoItem.item">
        <i 
          class="checkBtn fas fa-check" 
          v-bind:class="{checkBtnCompleted: todoItem.comlpeted}"
          v-on:click="toogleComplete(todoItem, index)"
        ></i>

        <span 
          v-bind:class="{textCompleted: todoItem.comlpeted}"
        >{{ todoItem.item }}</span>

        <button class="removeBtn" v-on:click="removeTodo(item, index)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
  methods: {
    removeTodo: function(item, index){
      console.log(item, index);
      localStorage.removeItem(item);
      this.todoItems.splice(index, 1);
      // splice(인덱스, 삭제갯수) 잘라내고 배열을 반환 + 원본배열을 수정
      // slice()는 잘라낸 배열을 반환 + 원본배열을 그대로
      // 참고 : https://im-developer.tistory.com/103
    },
    toogleComplete: function(item){
      item.comlpeted = !item.comlpeted; 
      // 로컬스토리지 갱신
      localStorage.removeItem(item.item); // 해당아이템을 지우고
      localStorage.setItem(item.item, JSON.stringify(item)); // 변경된값을 다시 string으로 넣어줌
    },
  },
}
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
</style>