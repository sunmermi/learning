// 출력할 여러개 메세지의 카운트값 = 상태변화 하는 값을 담은 변수
var msg_count = 0;

// 메세지 배열 만들기
var msg =[];
msg.push('this is function object');
msg.push('Function object has an attribute');
msg.push('Function objects can be invoked later');

// console.log(msg);

// 프린트될 메세지 함수
function printFunMsg(){
  // console.log(msg[msg_count]);

  // 반환
  return msg[msg_count++ % msg.length];
  // msg_count = (msg_count+1) % msg.length;
  // msg_count = msg_count++ % msg.length;
  // msg_count = (0) % 3; // 0
  // msg_count = (1) % 3; // 1
  // msg_count = (2) % 3; // 2
  // msg_count = (3) % 3; // 0
  // msg_count = (4) % 3; // 1
  // msg_count = (5) % 3; // 2
  // msg_count = (6) % 3; // 0
  // ,,,,,,,,,,, N ,,,,
}

// 나머지 값
// 값 % 2 : 나머지 값은 2개 : 0,1 반환
// 값 % 3 : 나머지 값은 3개 : 0,1,2 반환
//  값 % 5 : 나머지 값은 5개 : 0,1,2,3,4 반환
// ==> 값이 계속 달라져도 나머지 값은 나눈값의 갯수 만큼만 나머지 숫자 발생

// 요소 접근 및 선택
var ironman = document.querySelector('.ironman');
var message = ironman.querySelector('.message');
var print_btn = ironman.querySelector('.ironman_print_button');
var target_btn = ironman.querySelector('.target');

console.log('print_btn : ', print_btn);

// 버튼을 클릭하면 함수 실행
print_btn.onclick = function(){
  // 메세지 출력하는 함수 실행
  var print_msg = printFunMsg();
  // console.log('click function 내부:',print_msg);

  // 방법 1. DOM API == xml 
  // message.firstChild.nodeValue = print_message;
  // 방법 2. Standard API == html DOM : 표준방식 
  message.textContent = print_msg;
  // textContent : 텍스트를 바꿀때 사용 그러나 파폭에서 크로스브라우징 안됨
  // innerHTML : < > ~ </ > 코드와 텍스트를 모두 변경 가능
  // ironman_message.innerHTML = print_message;

};


