const addOneItem = (state, todoItem) => {
  // 투두아이템을 추가하는 기능
  const obj = {comlpeted: false, item: todoItem}; 
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};
const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item); 
  state.todoItems.splice(payload.index, 1);
};
const toogleOneItem = (state, payload) => {
  // console.log(payload);

  state.todoItems[payload.index].comlpeted = !state.todoItems[payload.index].comlpeted;
  
  // 로컬스토리지 갱신
  localStorage.removeItem(payload.todoItem.item); // 해당아이템을 지우고
  localStorage.setItem(payload.todoItem.item, JSON.stringify(state.todoItems)); // 변경된값을 다시 string으로 넣어줌 
};
const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
};


export {addOneItem, removeOneItem, toogleOneItem, clearAllItems}