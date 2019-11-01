// // 동기와 비동기 차이
// // 동기는 위에서부터 한줄씩 순서대로 실행
// // 비동기는 언제실행될지 모르는 코드들 , 순서대로 아님
// // 언제실행될지 모르지만 언젠가는 실행될것이기때문에 그때를 대비해서 잘 짜야함
// // 배열 push, pop, shift, unshift
// // 조인 스플라이트 

// let number_list = [1,2,3,4,5,6,7,8,9];
// let random_arr = [];
// let random_length = 4;
// let fail_count = 0;

// for (let index = 0; index < random_length; index++) {
//   // undefinde가 출력 될수있는 경우 두가지
//   // 1. 자릿수 표현이기 때문에 0번째부터 8번째가 나올수 있도록 해야함   
//   // ceil 1 ~ 9 : 9번째는 없음... , floor 0 ~ 8 
//   // 2. 숫자 하나를 뽑고나면 그 다음 반복문에서 는 7개의 숫자에서 뽑아야하니까 반복 돌때마다 한개식 빠질수있도록 해줘야함 (9 - index)
//   let random_num = Math.floor(Math.random() * (9 - index) );
//   let select_num = number_list.splice(random_num, 1)[0];
//   random_arr.push(select_num);
// }

// console.log("random_arr : ", random_arr.join(""));

// let game_baseball = document.querySelector(".game_baseball");
// let baseball_form = game_baseball.querySelector(".form_answer");
// let baseball_input_answer = baseball_form.querySelector(".input_answer");
// let resulte_txt = game_baseball.querySelector(".resulte_txt");

// baseball_form.addEventListener("submit", function(event){
//   event.preventDefault();
//   let answer = baseball_input_answer.value;
//   // console.log('answer :', answer);
//   // answer 이 1234 이런식임  random_arr는 배열인데
//   // console.log('일치 :', answer === random_arr.join(""));
//   if(answer === random_arr.join("")){
//     // 답이 맞다면
//     resulte_txt.textContent = "홈런"; 
//     baseball_input_answer = "";
//     baseball_input_answer.focus();
//     // 문제반복 함수로 만들기

//   }else{
//     // 답이 아니라면
//     // 스트라이크는 자릿수 + 숫자 까지 맞는것
//     // 볼은 숫자만 맞을때
    
//     // 단계
//     // answer 을 배열로 만들어봐
//     let answer_arr = answer.split("");
//     // console.log('answer_arr : ', answer_arr);
//     // console.log('random_arr : ', random_arr);
//     let strike = 0;
//     let ball = 0;

//     fail_count += 1;
//     if(fail_count > 3){
//       resulte_txt.textContent = "게임 끝!! ㅠㅠ 실패 답 :" + random_arr.join("") ;
//       baseball_input_answer = "";
//       baseball_input_answer.focus();
//       // 문제 다시 시작 함수로 만들것!
//     }
    
//     for (let index = 0; index < answer_arr.length - 1; index++) {
//       let number_answer = answer_arr[index] * 1;
//       // console.log('number_answer', number_answer);
//       if( number_answer === random_arr[index] ){
//         strike++;
//         // console.log('strike', strike);
//       }else if( random_arr.indexOf(number_answer) > -1 ){
//         ball += 1;
//         // console.log('ball', ball);
//       }
//     }
//     resulte_txt.textContent = strike + " 스트라이크 / " + ball + " 볼 / 도전 횟수 : " + fail_count;
//     baseball_input_answer.value = "";
//     baseball_input_answer.focus();
//   }
// });

// 리팩토링 ==================== 
let game_baseball = document.querySelector(".game_baseball");
let resulte_txt = game_baseball.querySelector(".resulte_txt");
let baseball_form = game_baseball.querySelector(".form_answer");
let baseball_btn_game= game_baseball.querySelector(".btn_game");
let baseball_btn_restart= game_baseball.querySelector(".btn_restart");
let baseball_input_answer = baseball_form.querySelector(".input_answer");
let random_ball_number;
let fail_count = 0;

function randomNumberReset() {
  let number_list = [1,2,3,4,5,6,7,8,9];
  let random_arr = [];
  let random_length = 4;
  fail_count = 0;
  for (let index = 0; index < random_length; index++) {
    let random_num = Math.floor(Math.random() * (9 - index) );
    let select_num = number_list.splice(random_num, 1)[0];
    random_arr.push(select_num);
  }
  return random_ball_number = random_arr.join("");
}

function gameEnd() {
  baseball_input_answer.value = "";
  baseball_input_answer.disabled = true;
  baseball_btn_game.disabled = true;
  baseball_btn_restart.disabled = false;
  resulte_txt.textContent = "게임을 시작하려면 재시작 버튼 클릭!"
}

function gameReset() {
  randomNumberReset();
  baseball_input_answer.disabled = false;
  baseball_input_answer.focus();
  baseball_btn_game.disabled = false;
  baseball_btn_restart.disabled = true;
  resulte_txt.textContent = "4자리 숫자 입력 후 입력버튼 클릭!"
}

baseball_btn_restart.addEventListener("click", function(){
  gameReset()
});

randomNumberReset();
console.log("야구게임 답 : ", random_ball_number);

baseball_form.addEventListener("submit", function(event){
  event.preventDefault();
  let answer = baseball_input_answer.value;
  if(answer === random_ball_number){
    resulte_txt.textContent = "홈런"; 
    gameEnd();
  }else{
    let answer_arr = answer.split("");
    let strike = 0;
    let ball = 0;
    fail_count += 1;
    if( fail_count > 1 ){
      resulte_txt.textContent ="도전 횟수 : " + fail_count + " / 게임 오버!! ㅠㅠ / 답 : " + random_ball_number;
      gameEnd();
    }else{
      for (let index = 0; index < answer_arr.length - 1; index++) {
        let number_answer = answer_arr[index] * 1;
        if( number_answer === random_ball_number[index] ){
          strike++;
        }else if( random_ball_number.indexOf(number_answer) > -1 ){
          ball += 1;
        }
      }
      resulte_txt.textContent = strike + " 스트라이크 / " + ball + " 볼 / 도전 횟수 : " + fail_count;
      baseball_input_answer.value = "";
      baseball_input_answer.focus();
    }
  }
});