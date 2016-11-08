// DOM(Document Object Model)
// API(Application Programming Interface)
  // 프로그래머들이 어플리케이션을 만들 때 사용할 인터페이스나 각종 함수들을 모아둔 것
// DOM API with JavaScript

// 사운드 컨트롤을 위한 오디오 객체를 런타임 중에 생성
// createElement() -> <audio>

// 문서(document)에 <audio> 객체(요소노드)를 생성(create)한다.
var ironman_audio_obj;
ironman_audio_obj = document.createElement('audio');

// 오디오 요소 생성되는지 확인
// console.log('ironman_audio_obj:', ironman_audio_obj); //<audio></audio>


// 생성된 오디오 객체를 참조하고 있는 변수 ironman_audio_obj에 src 속성을 설정
// 음원 소스를 src 속성의 값으로 설정
// 음원 경로는 HTML 파일 기준으로 설정
// ironman_audio_obj.setAttribute('src', 'media/myturn.mp3');


// 상황 1. : 음원 여러개인 경우 
var playlist = ['myturn','special','wantone'];
// 음원 속성및 경로 설정 : 경로는 동적으로 생성된 html 마크업 요소 기준으로!
// ironman_audio_obj.setAttribute('src', 'media/'+playlist[0]+'.mp3');
// ironman_audio_obj.setAttribute('src', 'media/'+playlist[1]+'.mp3');
// ironman_audio_obj.setAttribute('src', 'media/'+playlist[2]+'.mp3');
// ironman_audio_obj.setAttribute('src', 'media/'+playlist[playlist.length-1]+'.mp3'); // [2]번과 같다. 마지막번째 인덱스 


// 상황 2. : 여러개인 음원 랜덤하게 처리 
// 자바스크립트 Math 객체를 사용

var random_play_index = getRandomNumber(playlist.length);
// console.log(random_play_index); //랜덤으로 인덱스 넘버 가져오기

// 음원 경로 + 여러개의 음원중 랜덤으로 
var play_sound_path = 'media/'+playlist[random_play_index]+'.mp3';
// 오디오 요소에 src속성과 값(음원경로) 설정
ironman_audio_obj.setAttribute('src', play_sound_path);

// + 어떤 음원이 나오는지 텍스트로 표기
var play_sound_title = document.querySelector('.play_sound_title');

// HTML DOM 방식
play_sound_title.innerHTML = play_sound_path;

// XML DOM방식 : 요소들을 하나하나 찾아 들어가야 한다.
// play_sound_title.firstChild.nodeValue = play_sound_path;

// 랜덤 넘버 가져오는 사용자 함수
function getRandomNumber( n ) {
  // floor 무조건 내림 == 절삭
  // ceil 무조건 올림, round .5는 이상은 올림 .4이하는 내림
  return Math.floor(Math.random() * n)
}

// 그외 다른속성이 설정하고 싶다면,,
// autoplay 속성 설정
// ironman_audio_obj.setAttribute('autoplay', 'autoplay');


// 문서에서 .ironman_print_button 버튼 요소를 찾아 이벤트를 연결
var ironman_btn = document.querySelector('.ironman_print_button');

// 1. 사운드 버튼 집합으로 선택할때
var sound_control_btns = document.querySelectorAll('.sound_control_button');

// 반복문 + 조건문 사용
// 반복문 : 사운드 컨트롤 하는 버튼 3개를 순환
for(var i = 0, l = sound_control_btns.length ; i<l ;i++){
  var btn = sound_control_btns[i];
  // console.log(btn);
  // getAttribute('속성명') : 속성명을 가진 값을 가져와
  // console.log(btn.getAttribute('aria-label'));
  var btn_label = btn.getAttribute('aria-label');
  // 조건문 : 케이스와 비교해서 참이면 구문실행 아니면 break;
  switch(btn_label){
    case '재생' :
      btn.onclick = playSound;
    break;
    case '일시정지' :
      btn.onclick = pauseSound;
    break;
    case '정지' :
      btn.onclick = stopSound;
    break;
  }
}

// 2. 사운드 버튼을 개별적으로 선택 할때
// var play_btn = document.querySelector('.fa-play-circle');
// var pause_btn = document.querySelector('.fa-pause-circle');
// var stop_btn = document.querySelector('.fa-stop-circle');

// 이벤트 연결
// play_btn.onclick = playSound;
// pause_btn.onclick = pauseSound;
// stop_btn.onclick = stopSound;


// ------------------ audio 요소 디렉토리 확인 ------------------ 
// 자바스크립트에서 DOM API가 제공하는 이벤트를 사용하여 컨트롤
// console.dir(ironman_audio_obj);  // play pause,,,,,, 등

// oncanplay : 재생이 가능한 시점
// ironman_audio_obj.oncanplay = playSound;

// currentTime : 현재시간 
// play() : 재생
// pause() : 일시정지

// ------------------ 이벤트 연결 ------------------ 
ironman_btn.onmouseenter = playSound;
ironman_btn.onmouseleave = stopSound;


// ------------------ 기능 함수 ------------------ 
// 아이어맨 음원 재생 play() 함수
function playSound() {
  // console.log('this: ',this);
  // this.play();

  ironman_audio_obj.play();

  // 재생시 currentTime 확인
  // console.log(ironman_audio_obj.currentTime);
}

// pause() 일시 정지 함수
function pauseSound() {
  ironman_audio_obj.pause();
}

// 아이언맨 음원 정지(stop) 함수
// stop 이란 메서드를 지원하고 있지 않다. 그래서 이렇게 만들어줌
function stopSound() {
  // 우선 일시정지 하고
  pauseSound();

  // 다음번에 재생시켰을 때
  // 바로 앞에서 일시정지했던  커런트타임에서 재생이 되기 때문에
  // currentTime을 0으로 설정
  ironman_audio_obj.currentTime = 0;
}

