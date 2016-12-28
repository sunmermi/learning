# learning
front end developer of a study

##HTML
  1. [Basic and other](https://github.com/sseom/learning/blob/master/01_HTML/01_basic.md)
    - html, doctype, html lang="ko-KR", head, meta, title, link, Favicon, script, style, 경로, IE 조건부 주석문, HTML 엔티티 코드
  2. [Element](https://github.com/sseom/learning/blob/master/01_HTML/02_element.md)
    - Div, Span 그룹핑, H 제목, P 단락, Srong, Em 강조, A 링크, Img 이미지, Ol , Ul , Dl 목록, Table 테이블, From 폼, Et cetera 기타 등등, Bolck, Inline Element
  3. HTML5
    - 구조


##CSS
  1. [selector table](https://github.com/sseom/learning/blob/master/02_CSS/01_selector-table.md)
  2. [선택자](https://github.com/sseom/learning/blob/master/02_CSS/02_selector.md)
  3. [단위](https://github.com/sseom/learning/blob/master/02_CSS/03_unit-size.md)
  4. [폰트]()
  5. [문단]()
  6. [박스모델 : 패딩, 마진, 보더]()


##JavaScript
  1. [Basic and other](https://github.com/sseom/learning/blob/master/03_Javascript/01_js_basic.md)
  2. [Variables : 변수](https://github.com/sseom/learning/blob/master/03_Javascript/02_variables.md)
  3. Data Type :
    - [01](https://github.com/sseom/learning/blob/master/03_Javascript/03_data_type_01.md) 원시자료 데이터 유형, 데이터변환
    - [02](https://github.com/sseom/learning/blob/master/03_Javascript/03_data_type_02.md) 참조 데이터 유형, 생성자함수, 리터럴표현식,,
    - [03](https://github.com/sseom/learning/blob/master/03_Javascript/03_data_type_03.md) 데이터 유형 체크, NaN
  4. [Operator 연산자](https://github.com/sseom/learning/blob/master/03_Javascript/04_operator.md)
  5. [Condition 조건문 ](https://github.com/sseom/learning/blob/master/03_Javascript/05_condition.md)
    - if(){}, if(){}else{}, if(){}else if(){}else{}
  6. [Loop 반복문](https://github.com/sseom/learning/blob/master/03_Javascript/06_Loop.md)
    - while(){} , do{}while(), for(){}
    - [반복문 예제](https://github.com/sseom/learning/blob/master/03_Javascript/06_Loop_ex.md)
  7. [Event 이벤트](https://github.com/sseom/learning/blob/master/03_Javascript/07_Event.md)
    - [Event_ex 이벤트 예제](https://github.com/sseom/learning/blob/master/03_Javascript/07_Event_ex.md)
  8. [Function 함수](https://github.com/sseom/learning/blob/master/03_Javascript/08_Function.md)
  9. [내장객체](https://github.com/sseom/learning/blob/master/03_Javascript/09_built_in_objects.md)
    - Math, Data, String, Array
    - method
  77. [DOM 돔](https://github.com/sseom/learning/blob/master/03_Javascript/77_dom_00.md)
  88. [Helper Function 사용자 정의 함수](https://github.com/sseom/learning/blob/master/03_Javascript/88_helper_function.md)
  99. [ing,,,, 미정리된,, 진행중인](https://github.com/sseom/learning/blob/master/03_Javascript/99_ing.md)


##Ajax 와 JSON
  1. [Ajax](https://github.com/sseom/learning/blob/master/04_Ajax_JSON/01_Ajax.md)
  2. [JSON](https://github.com/sseom/learning/blob/master/04_Ajax_JSON/02_JSON.md)

##AngularJS
  1. [Intro](https://github.com/sseom/learning/blob/master/05_AngularJS/01_Angular_Intro.md)
  2. [Expressions](https://github.com/sseom/learning/blob/master/05_AngularJS/02_Angular_Expressions.md)
  3. [Modules](https://github.com/sseom/learning/blob/master/05_AngularJS/03_Angular_Modules.md)
  4. [Directives](https://github.com/sseom/learning/blob/master/05_AngularJS/04_Angular_Directives.md)
  5. [Model](https://github.com/sseom/learning/blob/master/05_AngularJS/05_Angular_Model.md)
  6. [Controllers](https://github.com/sseom/learning/blob/master/05_AngularJS/06_Angular_Controllers.md)
  7. [Filters](https://github.com/sseom/learning/blob/master/05_AngularJS/07_Angular_Filters.md)

##Gulp
  1. [Gulp + sass-gulp-module](https://github.com/sseom/learning/blob/master/05_AngularJS/01_gulp.md)

##example
  1. 아이어맨 메세지 
      - JS
          + 버튼 이벤트 : 클릭시 메세지 출력
          + 오디오 객체 생성과  컨트롤
      - CSS
          + 애니메이션, 트랜스폼, 트랜지션, 플렉스박스 등
  2. carousel
      - Earphones&Earset-3i_v1
          + JS
              * indicator, control 버튼 조작
              * 콘텐츠(혹은 윈도우) 너비에 따른 이미지 너비 조작 및 나열
              * 등
          + CSS
              * 트랜스폼, 트랜지션, 플렉스박스, 요소 초기화, ir기법 등,,, 
      - Earphones&Earset-3i_v2
          + JS file : 버전별 코드리펙토링
            1. 버전1 : carousel-ui-components_v1.js
              - 온로드 이벤트
              - 초기화 함수

            2. 버전2 : carousel-ui-components_v2.js
              - 온로드 이벤트
              - 초기화 함수
              - 중복코드 그룹화(코드묶음)

            3. 버전3 : carousel-ui-components_v3.js
              - 온로드 이벤트
              - 초기화 함수
              - 중복코드 그룹화(코드묶음)
              - 이미지 움직임 left방법으로

            4. 버전4 : me_v4.js
              - onload 
              - 전역변수 선언
              - 대상초기화 : 변수에 대상찾아서 할당
              - 기능별 코드묶음
  3. side_bar_height.html
      - 콘텐츠 높이 만큼 사이드바 높이 설정하는 유아이
