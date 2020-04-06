/*
순서 
3*3 칸을 준비한다
( 처음 X 턴 )

칸을 클릭한다 -> 했다

클릭한 칸이 이미 채워져있나?
Y : 다시 칸을 클릭한다
N : 없으면 표시를 한다


세줄이 되었나?
Y : 승리 
N : 다시 칸 클릭 ( 반복 )

*/


/* STEP 1 js로 요소만들기
- 요소들은 HTML로 만드는게 좋음

*/
// let game_tictacto = document.querySelector(".game_tictacto");
// let tictacto_table = document.createElement("table");
// let tictacto_row_number = 3;
// for (let i = 0; i < tictacto_row_number; i++) { 
//   let tictacto_tr = document.createElement("tr");
//   for (let j = 0; j < tictacto_row_number; j++) { 
//     let tictacto_td = document.createElement("td");
//     tictacto_tr.appendChild(tictacto_td);
//   }
//   tictacto_table.appendChild(tictacto_tr);
// }
// game_tictacto.appendChild(tictacto_table);
// tictacto_table.classList = "table_tictacto";
// console.log('tictacto_contents : ', tictacto_contents);


/* STEP 2 이차원 배열
배열 = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
]

*/
let game_tictacto = document.querySelector(".game_tictacto");
let tictacto_table = document.createElement("table");
let tictacto_row_number = 3;

// 이차원 배열 
let tictacto_tr_list = []; // 줄들
let tictacto_td_list = []; // 칸들

let td_click = function(event){
  console.log('칸 : ', event.target); // td 칸
  console.log('줄 : ', event.target.parentNode); // tr 줄
  // console.log('테이블 : ', event.target.parentNode.parentNode);// table 테이블 

  let target_row = tictacto_tr_list.indexOf(event.target.parentNode);
  console.log('몇 줄 : ',target_row);
  let target_col = tictacto_td_list[target_row].indexOf(event.target);
  console.log('몇 칸 : ',target_col);
};

for (let i = 0; i < tictacto_row_number; i++) { 
  let tictacto_tr = document.createElement("tr");
  tictacto_tr_list.push(tictacto_tr);
  tictacto_td_list.push([]);
  for (let j = 0; j < tictacto_row_number; j++) { 
    let tictacto_td = document.createElement("td");
    tictacto_td.addEventListener("click", td_click);
    tictacto_td_list[i].push(tictacto_td);
    tictacto_tr.appendChild(tictacto_td);
  }
  tictacto_table.appendChild(tictacto_tr);
}
tictacto_table.classList = "table_tictacto";
game_tictacto.appendChild(tictacto_table);
console.log('tictacto_tr_list : ', tictacto_tr_list);
console.log('tictacto_td_list : ', tictacto_td_list);


