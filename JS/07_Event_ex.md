###이벤트예제
- 이벤트 
- 반복문
- 함수

```
<!DOCTYPE html>
<html lang="ko-KR">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>자바스크립트 클릭 이벤트 핸들링 - 버튼, 앵커</title>
    <!-- 스타일 -->
    <style type="text/css">
      body              {margin: 0;}
      .box-container    {display: flex; min-height: 100vh}
      .box              {flex: 1;}
      .box a            {color: #fff; text-decoration: none; font-size: 2rem;}
      .box:first-child  {background: #2A0E59;}
      .box:nth-child(2) {background: #513197;}
      .box:nth-child(3) {background: #825DEA;}
      .box:last-child   {background: #9E77FC;}
      .flex-cm          {display: flex; justify-content: center; align-items:center;}
    </style>
  </head>
  <body>
    <!-- 콘텐츠 -->
    <div class="box-container">
      <div class="box flex-cm"><a role="button" href="#box1">box 1</a></div>
      <div class="box flex-cm"><a role="button" href="#box2">box 2</a></div>
      <div class="box flex-cm"><a role="button" href="#box3">box 3</a></div>
      <div class="box flex-cm"><a role="button" href="#box4">box 4</a></div>
    </div>
    <!-- 스크립트 -->
    <script>
      // 문서에서 .box-container 요소를 찾아 변수에 참조한다.
      var container = document.querySelector('.box-container');
      console.log('container :',container);

      // .box-container 문서 요소 참조 변수에서 내부에 포함됨 a요소를 수집한다.
      var box_buttons = container.querySelectorAll('a');
      console.log('box_buttons :', box_buttons);
      // [a,a,a,a]  =>  유사배열 : 배열이 아님 배열처럼 보이는 리스트이다.

      // 수집된 각 박스의 버튼들 확인
      console.log('box_buttons[0]',box_buttons[0]);
      console.log('box_buttons[1]',box_buttons[1]);
      console.log('box_buttons[2]',box_buttons[2]);
      console.log('box_buttons[3]',box_buttons[3]);
      // console.log('box_buttons[4]',box_buttons[4]);  
      // 마지막 ==> undefind  버튼이 4개뿐 0,1,2,3 4는 당연히 언디파인드

      // 이벤트 핸들러 연결
      // 이벤트의 this : 이벤트를 실행시킨 버튼
      // box_buttons[0].onclick = function(){console.log(this);}
      // box_buttons[1].onclick = function(){console.log(this);}
      // box_buttons[2].onclick = function(){console.log(this);}
      // box_buttons[3].onclick = function(){console.log(this);} 

      // 반복 되는 코드들 안좋음 ==> for문  while문 사용해서 코드 수정

      // -- for문 --
      for(var i = 0, l = box_buttons.length; i < l ; i++ ){
        box_buttons[i].onclick = function(){ console.log(this); }

        // .item()   사용
        // box_buttons.item(i).onclick = function(){console.log(this);} 
      }

      // -- while문 --
      var i = 0, l = box_buttons.length;
      while( i < l ){
        // 함수 참조
        box_buttons[i].onclick = actionButton;
        i++;
      }

      // box_buttons[i].onclick = function(){console.log(this);};
      // ==> 문제가 있음!!! 
      // 클릭하지 않았어도 함수가 매번 for문 반복 될 때마다 생성됨 => 안좋음 성능저하
      // ==> 함수를 따로 빼서 참조하는 방식으로 : 클릭하면 함수가 생성되게 

      //함수 생성
      function actionButton() {
        console.log(this);
      }

    </script>
  </body>
</html>
```