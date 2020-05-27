<template>
  <div class="inputBox shadow">
    <!-- 입력값을 받아 로컬스토리지에 저장 -->
    <!-- v-model="" 디렉티브 사용. 
      화면에서 뷰안에서 인스턴스데이터의 변경이 동적으로 동기화 -->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <button class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </button>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고! 
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <div slot="body">경고 내용</div>
      <div slot="footer">끝</div>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal';

export default {
  data(){
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  components: {
    Modal: Modal,
  },
  methods: {
    addTodo(){ // 저장하는 로직 수행후 인풋 초기화
      if(this.newTodoItem !== ''){ //아이템이 빈값이 아니라면
        // 상위로 보내주는 이벤트 this.$emit('이벤트이름', 인자1 , 인자2, ...);
        // addTodoItem이라는 이벤트가 this.newTodoItem 포함해서 상위로 올라감 
        this.$emit('addTodoItem', this.newTodoItem);
        this.$store.commit(addOneItem);
        this.clearInput();
      }else{
        this.showModal = !this.showModal;
      }
    },
    clearInput(){
      this.newTodoItem = '';
    },
  }
}

/* 메모
methods: {
  addTodo: function(){
    // console.log(this.newTodoItem);

    // 저장하는 로직 수행후 인풋 초기화
    // localStorage.setItem(키, 밸류);

    // 1.
    // localStorage.setItem(this.newTodoItem, this.newTodoItem);
    // this.clearInput();

    // 2.
    // 체크 유무 
    if(this.newTodoItem !== ''){ //아이템이 빈값이 아니라면
      var obj = {comlpeted: false, item: this.newTodoItem}; 
      // JSON.stringify(obj) 값은 String으로 넣어짐
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      this.clearInput();
    }
  },
  clearInput: function(){
    this.newTodoItem = '';
  },
}
*/
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    position: relative;
    overflow: hidden;
    height: 50px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    line-height: 50px;
    background: white;
  }
  .inputBox input {
    width: 100%;
    height: 100%;
    border-style: none;
    padding: 10px 3rem 10px 10px;
    font-size: 0.9rem;
    box-sizing: border-box;
  }
  .addContainer {
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 100%;
    border: 0 none;
    background: linear-gradient(to right, #6478FB, #8763FB);
  }
  .addBtn {
    font-size: 1.2rem;
    color: white;
    vertical-align: middle;
  }
  .closeModalBtn {
    color: #42b983;
  }

</style>