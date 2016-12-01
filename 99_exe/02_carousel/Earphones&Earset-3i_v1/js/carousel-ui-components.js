// 변수선언
var container, controls, view, carousel_content_active_index;

// 요소 선택
container = document.querySelector('.carousel-container');
controls = container.querySelector('.carousel-controls');
view = container.querySelector('.carousel-view');

// 상태변수
active_index=0;

// 요소들이 잘 찾아졌는지 확인
// console.log('container',container);
// console.log('controls',controls);
// console.log('view',view);

// 캐러셀 이미지 요소 선택
var view_contents =  view.querySelectorAll('img');
// 이미지의 갯수
var view_contents_length = view_contents.length;
// 캐러셀 콘텐츠 들을 감싸고 있는 부모 콘텐츠의 너비
var view_content_width =  container.clientWidth;
// 부모 너비 * 이미지 갯수  =  이미지 개수만큼의 폭을 view 영역에 설정한다.
var view_width = view_content_width * view_contents.length;

// console.log('view_content_width:', view_content_width);

// 이미지를 감산 콘텐츠 영역(.carousel-view) 가로 폭을 
// 포함하는 이미지 개수의 폭을 합친 만큼 설정
// style로 제어 nono : 나중에 이미지 추가 될수도 있으니 유지보수상 이와같이,,, 
view.style.width =  view_width + 'px';

// 부모 너비가 700px , 이미지가 총 4장이라면
// 700 * 4 = 2800px 
// view의 총너비는 2800px

// ------------ 이때 CSS는 ----------------
// 캐러셀 컨텐츠를 모두 감사고 있는 부모
// .carousel-container 
//    width: 700px;
//    height: auto;
//    overflow: hidden;  
// 부모안에 있는 이미지
// .carousel-container img  
//    width: 100vw;  => 부모 너비 만큼 너비를 가지게 
//    height: auto;


// 각 이미지를 순환 처리하여 컨테이너 요소의 너비만큼 이미지 너비를 설정한다.
for(var i=0; i < view_contents_length; i++){
  var view_content = view_contents.item(i);
  // console.log(view_content);
  view_content.style.width =  view_content_width + 'px';
  // 이미지 너비  = 캐러셀 컨텐츠를 모두 감사고 있는 부모너비 
  // 각 이미지의 너비는 700px 된다.
}


//버튼 요소 접근
var prev_btn = document.querySelector('.carousel-previous-btn');
var next_btn = document.querySelector('.carousel-next-btn');

//컨트롤 버튼에 이벤트 연결
prev_btn.onclick = prevMoveCarouselContentView;
next_btn.onclick = nextMoveCarouselContentView;

// var view_position = ['0','-25%','-50%','-75%'];
// function nextMoveCarouselContentView() {
//   carousel_content_active_index = ++carousel_content_active_index %view_contents_length;
//   view.style.transform = 'translateX('+view_position[carousel_content_active_index]+')';
// }


//이전버튼
function prevMoveCarouselContentView(){
  active_index = --active_index % view_contents_length;
  // 0 % 4 = 0
  // 3 % 4 = 3
  // 2 % 4 = 2
  // 1 % 4 = 1
  // 0 % 4 = 0
  // 3 % 4 = 3
  // ,,,,,,,,,,,
  // 나머지값 0,3,2,1 반복  
  // 나눠질 숫자는 아래 if문으로 인해 0,3,2,1,0,3 ,,, 순으로 

  //만약 상태변수 값이 0보다 작으면 구문 실행
  if ( active_index < 0) {
    // 이미지 갯수 -1 한 값을 상태변수에 할당
    // 4-1 = 3 
    active_index = view_contents_length - 1;
  }
  // console.log(active_index); // 0->3->2->1->0->3......

  view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';
  // translateX('-2800px');
  // translateX('-2100px');
  // translateX('-1400px');
  // translateX('-700px');
}
//다음버튼
function nextMoveCarouselContentView(){
  active_index = ++active_index % view_contents_length;
  // 0 % 4 = 0
  // 1 % 4 = 1
  // 2 % 4 = 2
  // 3 % 4 = 3
  // 4 % 4 = 0
  // 5 % 4 = 1
  // ,,,,,,,,,
  // 나머지값 0,1,2,3 반복
  // console.log(active_index); // 0->1->2->3->0->1......

  view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';
  // translateX('-700px');
  // translateX('-1400px');
  // translateX('-2100px');
  // translateX('-2800px');
}

var indicator_items = controls.querySelectorAll('.carousel-tab');

  // 이벤트위임
  // 부모에 이벤트를 걸어서 자식에게 전달하는 방식 
  // 장점 
  // 비동기통신으로 콘텐츠를 추가하더라도 계속 이벤트가 걸려 있음
  // == 마크업상에는 없었던 콘텐츠들이 동적으로 생겨도 이벤트가 걸려 있음
  // controls.onclick = function(e){
  //   // console.log('e.target : ',e.target);
  //   var button = e.target;
  //   var button_class_name = button.getAttribute('class');
  // }