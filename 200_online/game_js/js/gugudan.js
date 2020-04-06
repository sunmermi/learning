// 1차 구구단
// while (true) {
//   var num1 = Math.floor(Math.random() * 9) + 1;
//   var num2 = Math.floor(Math.random() * 9) + 1;
//   var result = num1 * num2;
//   var state = true;

//   while (state) {
//     var answer = prompt(String(num1) + " 곱하기 " + String(num2) + " 는?");
//     if(result === Number(answer)){
//       alert("pass");
//       state = false;
//     }else{
//       alert("fail");
//     }
//   }
// }

// 2차 구구단
var game_gugudan = document.querySelector(".game_gugudan");
var gugu_question_area = game_gugudan.querySelector(".question_area");
var gugu_question_txt = gugu_question_area.querySelector(".question_txt");
var form_gugudan = game_gugudan.querySelector(".form_gugudan");
var gugu_input_answer = form_gugudan.querySelector(".input_answer");
var gugu_resulte_area = game_gugudan.querySelector('.resulte_area');
var gugu_resulte_txt = gugu_resulte_area.querySelector('.resulte_txt');
var gugu_result = randomGuGudan();

function randomGuGudan(){
  var gugu_num1 = Math.ceil(Math.random() * 9) + 1;
  var gugu_num2 = Math.ceil(Math.random() * 9) + 1;
  gugu_question_txt.textContent = String(gugu_num1) + " 곱하기 " + String(gugu_num2) + " 는?"
  return gugu_num1 * gugu_num2;
}

form_gugudan.addEventListener("submit",function (evt){
  evt.preventDefault();
  var answer = Number(gugu_input_answer.value);

  if(gugu_result === answer){
    gugu_resulte_txt.textContent = 'pass';
    gugu_result = randomGuGudan();
    gugu_input_answer.value = '';
    gugu_input_answer.focus();
  }else{
    gugu_resulte_txt.textContent = 'fail';
    gugu_input_answer.value = '';
    gugu_input_answer.focus();
  }
});

// 끝말잇기
var game_word = document.querySelector('.game_word');
var start_word = game_word.querySelector('.start_word');
var resulte_area = game_word.querySelector('.resulte_area');
var input_word = game_word.querySelector('.input_answer'); 
var btn_word = game_word.querySelector('.btn_word'); 
var form_word = game_word.querySelector('.form_word'); 
// btn_word.onclick = function (){
//   console.log('클릭');
// };
form_word.addEventListener("submit",function (evt){
  evt.preventDefault();

  if( start_word.textContent[start_word.textContent.length - 1] === input_word.value[0] ){
    resulte_area.textContent = 'pass';
    start_word.textContent = input_word.value;
    input_word.value = '';
    input_word.focus();
  }else{
    resulte_area.textContent = 'fail';
    input_word.value = '';
    input_word.focus();
  }
});