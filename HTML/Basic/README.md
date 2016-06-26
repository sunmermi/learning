# HTML 기본

- 마크업 ==>  구조에맞게 렌더링한다
- `<oooo>`  태그라고 불림
- `<ooo> ~ </ooo>` 태그의 시작과 끝을 요소 라고 부른다.
- 요소는 블록 / 언블록 두가지로 나뉜다.
- 블록 태그는 항상 `< > `닫아야한다.
- 언블록(빈 요소) 태그도 < /> 닫아야하지만 html5에선 안닫아도 무관 예) img / input 등
- 속성=“속성값”
-속성은 속성값과 항상 같이 작성
-값에는 인용부호
- 주석을 달아서 컨텐츠 마다 구분을 해주면 좋다
```
<!-- emmet 필터 c  .page-main|c   작성후 emmet단축키(tab) -->

<div class="page-main"></div>
<!-- /.page-main -->
```
-  HTML은 문서의 구조화 CSS는 표현을 위한 디자인 을 한다
-> 웹접근성과 웹표준을 위해선 HTML문서에서 의미는 없고 표현만을 위한 요소들은 사용을 하지않는게 좋다


###html문서 저장 시
- 파일형식은 html 인코딩은 utf-8 로 저장
- 파일명이 영문, 언더바, 뒤에숫자 ok
- 파일명이 한글, 하이픈, 특수문자, 앞에숫자 no

###문법유효성검사
[HTML 검사](http://validator.w3.org)
[CSS 검사](https://jigsaw.w3.org/css-validator/)
- 웹표준에 준수하기 위해 문법상 오류가 없는지 확인
- 모든 작업 완성 후에 마크업 / CSS 검사
- url 이나 작업한 파일로 검사하고 수정 할 것! 또는 개발자도구 확장프로그램 설치해서 확인

[한국어 지원 마크업 검사](http://validator.kldp.org/)
[한국어 지원 css 검사](http://css-validator.kldp.org/)

----

# HTML 문서 구조

###`<html></html>`
HTML의 문서의 루트요소는 html이다.

```
<html>
    <head></head>
    <body></body>
</html>
```
html 안에는 head 와 body 요소 2개의 자식만을 가진다.

---

```
<!doctype html>
<html lang="ko-KR">
<head>
     <meta http-equiv="X-UA-Compatible" content="IE=Edge">
     <meta charset="UTF-8">
     <title>웹 문서의 제목</title>
     <link rel=“ ” type=“ ” href=“ ”/>
    <script src=“ ”></script>
    <style type=“ ”></style>
</head>
</html>
```



###`<!doctype html>`
문서 유형 정의(DTD, Document Type Definition)
문서 최상단에 입력하여 웹 브라우저에게 현재 문서가 웹 표준 문서임을 알린다. (표준 모드로 동작)

**※ 비표준 모드(Quirk Mode) vs 표준 모드(Standard Mode)**
>웹브라우저는 "쿼크모드(Quirks mode)"와 "표준모드(Standard mode)" 문서모드가 있다.
브라우저가 예전문서라고 판단을 하면 쿼크 모드(quirks mode)로 렌더링 해서 이전방식에 맞는 비표준적 방법으로 적용되고 브라우저가 출력하는 문서가 최신이라고 판단되면 표준모드로 렌더링한다.

>즉, 쿼크모드는 호환성보기와 마찬가지로 오래된 웹페이지들이 최신 버전의 브라우저에서 깨져 보이지 않으려는 것

**또한 DTD 위에 코드 또는 주석이 존재할 경우**
>올바르지 않은 DTD로 간주하여 웹 브라우저는 비표준 모드로 동작하며 IE는 주석과 코드를 문자로 읽기 때문에 시각적으로 나타난다. 그래서 DTD 위에는 어떤 텍스트, 주석, 코드 등을 사용하지 않는 것이 좋다.

**※ 문서가 표준모드로 렌더링되는지 확인하는 방법**
>브라우져를 실행 한 후 콘솔창에  ==> document.compatMode 입력
표준 모드일 경우, CSS1Compat를 출력
비표준 모드일 경우, BackCompat를 출력
파폭은 컨트롤 아이 누르면 확인창 뜸

---

###`<html lang="ko-KR">`
사용될 주 언어 명시를 통해 문서의 주요 언어가 무엇인지 명시할 수 있다. 또한 음성엔진도 이를 인식해서 읽는다.

ko-KR : 대한민국의 한국어    // 남한 과 북한 언어의 구분으로  KR을 붙여줘야한다.
lang 속성은 여러군데 쓸수있다.
- 문서작성이 어느 콘텐츠 부분에서 다른나라 언어가 나와야할때  (영어,일어,중어 등등)  요소작성후 lang 속성값을 사용하면된다.

`<html lang="ko-KR" dir="ltr">`
문서를 읽는 방향(Direction)을 설정할 경우 dir 속성을 사용한다.

- ltr: Left to Right   ==> 우리나라 기본값. 글을 왼쪽에서 오른쪽으로 읽는 나라.
- rtl: Right to Left
: 대부분의 기본값이 ltr이기 때문에 생략 가능하고 특정나라들만 rtl작성해주면 된다.

---

###`<head>`
head 태그 안에는 meta, title, link 의 태그들이 들어간다.
+ script + style 요소도 들어가는데  직접 작성하지 말고 링크로 빼는것이 좋다.

---

###`<meta>`
메타태그는 랜더링될 문서의 설명, 키워드, 제작사 등을 지정하는 태그이다
meta태그끼리 묶어서 작성해야 오류가 없음

**비표준 ie호완성 보기 모드**
**`<meta http-equiv="X-UA-Compatible" content="IE=Edge">`**
IE에서만 해석되는 태그   emmet단축 => meta:compat
>해석 -> 사용자가 가지고 있는 브라우져에서 나타낼수 있는 최상위버전으로 문서를 랜더링해라 강제로!
버전을 명시하기 보단 Edge로 최상위버전을 입력하는 것을 권장 => 안그럼 사용자마다 버전이 다른데 어케 맞출꺼임?

**※ 이런건 왜 생겼어??**
>웹표준을 지키지 않던 예전 브라우져 기준으로 만들어진 문서들이 레이아웃이 깨지거나 작동하지 않아 이를 임시방편삼아 만들었다. 그리고
?  IE8버전부터 생겨난 호완성보기의 문제가 커짐 사용자가 최신버전임에도 불구하고 호완성보기로 작동해서 구버전으로 표현을 한다. 그래서 이를 방지하기 위해 만들어진 태그  하지만 성능저하의 문제가 있다.
참고 블러그 http://webdir.tistory.com/38

※ http-equiv 속성을 사용하면 `<meta>` 요소에서 정의된 명령(사항)을 먼저 실행한 후에 페이지를 로딩한다. 이를 프라그마 디렉티브(Pragma Directive)라고 한다. (equiv는 equivalent의 약자)

**http-equiv 속성 있는 메타태그는 `<title>`보다 위에 작성!!**
왜?  웹 브라우저를 통해 문서가 해석되기 전 먼저 처리되어야 하기 때문.

※ 단어 의미
>HTTP    : 웹서버와 클라이언트가 상호 통신하기 위해 사용하는 하이퍼텍스트 전송 규약
equivalent   :  동등한 맞먹는       즉, => 사용자와 서버 동등한
X  : 비표준
UA  :  사용자 에이전트(user agent)의 약어  == 중개상 대리인 에이전트
Compatible  : 호환되는
=> 비표준으로 호완되는 사용자 에이전트
===> 정보를 먼저가져가서 나와 서버가 호완되게  ,  IE최상위 버전으로 이어줘??
content="text/html”   :  웹브라우져에게 어떤 텍스트인지 알려준다 텍스트로된 html

`<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrom=1">`
IE 브라우져를 크롬프레임을 설치해서 크롬처럼 보여주는 플러그인
지금은 중단함 사용하지 않음 지워도 되지만 간혹 보이니 뭔지 알고있으면 된다.

IE 브라우져 호완성 보기 7~9버전 표현방법
>7 버전으로 렌더링. `<meta http-equiv="X-UA-Compatible" content="IE=Emulate7">`
8 버전으로 렌더링. `<meta http-equiv="X-UA-Compatible" content="IE=8">`
9 버전으로 렌더링. `<meta http-equiv="X-UA-Compatible" content="IE=9">`

---

####`<meta charset="UTF-8">`
언어 준수사항
텍스트 언어 인코딩을 UTF-8로 설정하여 모든 유니코드 문자를 표현할 수 있도록 설정하고, 깨지는 한글 문제를 해결한다.

>UTF-8을 굳이 사용하지 않아도 되나요? 뭔가 다른것을 사용한다고 해서 웹 표준? 이랑 관련이 있을까요?
인코딩을 어떤 걸 쓰든 웹 표준과는 관련이 없어요
문자가 깨지지 않게 서비스를 하기 위해서는 서버와 클라이언트의 인코딩이 같아야 합니다
요점은 EUC-KR 인코딩을 사용하면 안된다는 것이 아니라, 다국어 버전 서비스를 할 경우 UTF-8이 적합하다는 것입니다.
EUC-KR은 표현할 수 없는 글자가 있는 반면 UTF-8은 모든 글자를 표현할 수 있다는 점이 큰 차이 입니다.

>HTML5 이전에 사용되던 코드
`<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">`
 HTML5에서는 위와 같이 단축된 코드를 사용한다.

---

####모바일 최적화 환경설정 == 뷰포트
 ```
 <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
 ```
emmet : meta:vp

※해석
맨 처음 시작하는 초기 비율을 1(단말기) 대 1(사이트) 이고, maximum, minimum 축소나 확대하는 걸 최대1 최소1 !! 즉, 확대축소 없다.
- width=device-width : 단말기의 너비만큼
- initial-scale : 페이지 로딩 시 핸드폰과 사이트 비율
- minimum-scale : 최대크기
- maximum-scale : 최소크기
- user-scalable : 사용자의 확대 축소 여부
    : 서비스의 특성에 맞게 지정하면된다. 예를 들어 노선도는 확대가 필요 하지만 다른 곳엔 필요 없다.
    : 또한 미니멈, 맥시멈 비율을 1로 하면 user-scalable는 생략해도 된다.

아이폰이 나오면서 자사에서 모바일브라우져 크기조절을 위해 만든 태그 표준은 아니지만 사실상 표준처럼 사용되고있음  그런데 IE10은 모바일크기 브라우져를 위해 표준으로 제안된 @viweport rule 을 사용. 이것이 표준안이지만 아직도 뷰포트메타를 많이 사용하기 때문에 아래와 같이 둘다 적용하는것을 권장함

```
<meta name='viewport' content='width=device-width' />

<style>
@-ms-viewport { width: device-width; }
@-o-viewport { width: device-width; }
@viewport { width: device-width; }
</style>
```

**※ meta태그에서 name 속성이 있는건 타이틀 아래 위치해도 무관하다**
>왜?
http-equiv 속성이 들어간거는  웹 브라우저를 통해 문서가 해석되기 전 먼저 처리되어야 하기 때문.
그래서 마크업 순서상 타이틀보다 먼저 나와야한다.

####검색 엔진 최적화 (SEO, Search Engine Optimization)
`<meta name="description" content="프론트엔드 개발을 위한 HTML 마크업을 다루고 있습니다">`
description - 페이지에 대한 짧은 설명을 제공하는 태그입니다. 200~300자 내외

`<meta name="keywords" content="프론트엔드,개발,스쿨,패스트캠퍼스">`
keywords - 10개 내외

`<meta name="author" content="회사명">`
author - 회사명 제작자표기

[[SEO] Meta 태그 keywords(키워드) 속성의 진실... 실제 SEO 점수에 미치는 영향은 없다?](http://webisfree.com/blog/?titlequery=seo-meta-%ED%83%9C%EA%B7%B8-keywords-%ED%82%A4%EC%9B%8C%EB%93%9C-%EC%86%8D%EC%84%B1%EC%9D%98-%EC%8B%A4%EC%A0%9C-seo-%EC%A0%90%EC%88%98%EC%97%90-%EB%AF%B8%EC%B9%98%EB%8A%94-%EC%98%81%ED%96%A5%EC%9D%80-%EC%97%86%EB%8B%A4-)

[Google이 이해할 수 있는 메타태그](https://support.google.com/webmasters/answer/79812?hl=ko)

---

###`<title>웹 문서의 제목</title>`
- 타이틀은 현재페이지가 무슨 페이지인지를 알려줘야함
- 타이틀은 각 페이지마다 다르게 작성하는것이 좋다
**왜?**
>요즘 브라우져들 새창을 탭으로 열린다.
탭상단에 타이틀이 나타나는데 여러가지 페이지를 오픈하게 되면 상단에 타이틀이 잘 보이지 않음
다 네이버,네이버,네이버 .......... 무엇이 어떤페이지가 켜진 창인지 파악이 안됨
예> 메인은 네이버  서브는  웹툰 | 네이버   ,  쇼핑 | 네이버   이런식으로 작성 권장

**※ 다음 요소 값이 페이지 마다 달라야 하는 이유**
`<title>, <meta name="description">, <meta name="keywords">`
- 웹 접근성 준수를 위해 필요하다.
- 검색 엔진 최적화(SEO)를 할 수 있다.

---

###`<link rel="stylesheet" href="./css/style.css">`
외부에 존재하는 CSS 파일을 링크(Link) 한다.
주로 css파일 연결할 때 사용함
- rle=“stylesheet” 스타일시트와 관련된 태그입니다.
- type=“text/css” 텍스트로 만들어진 css입니다.
- href=“파일명.css” 경로

---

### 파비콘  (Favicon: Favorite Icon)
- 브라우져 탭 상단에 나타나는 로고
- 접근성을 위해 필요
- 크기는 32픽셀까지 지원
`<link rel="shortcut icon" href="images/starbucks-favicon.png">`

---

###`<script src=“” ></script>`
- 문서 내부 혹은 외부로 연결해서 자바스크립트 선언
- `<script>`요소는 문서 내에서 `<head>`,`<body>` 요소 내부 어느 곳에서든 사용 가능하다.
- script코드가 한페이지에 한번 사용 하는 것이면 내부에 작성해도 되지만 다른페이지에도 재사용 하는 것이라면 js파일을 따로 관리하는것이 좋다.
- javascript 파일은 서버에서 직렬식으로 받아오므로, css파일보다 로딩이 느리다.
>설명 하자면 컴이 html문서를 읽어오는데에 있어서 css파일은 동시다발적(병렬식)으로 다운
하지만 script는 컴퓨터가  html문서를 읽다가 js파일을 만나면  중간에 멈추고  js를 받아온 다음 다시 html문서를 읽어들인다. 그래서 js는 한번에 몰아서 작성하는것을 권장한다.

- src=“파일명.js” 경로

---

###`<style></style>`
- html문서내에 스타일 정의
- css문서는 따로 외부로 빼는게 유지보수에 좋다.

---

###경로
**절대 경로**
루트를 기준으로 찾아 들어가는 경로  `/`   (웹 서버 환경에서 테스팅 가능)

**상대 경로**
내 위치를 기준으로  ` ./ `  ->생략가능 == 형제,  `../` == 부모,상위

###IE 조건부 주석문
- IE v6 ~ v9 에서만 사용하는 문법적 구문 특정 조건에서 주석이 아니라, 코드문으로 해석됨.
- 왜 사용하는가? ie는 버전별로 css가 다르게 적용되는 오류가 있다. 그래서 맞쳐주기 위해 버전별로 css를 다르게 주는 것이다. 즉, 크로스브라우징을 위해!!
- CSS브라우져 핵이 아닌 조건 주석문을 사용할것!
- ie 버전별 확인방법 
 - 도구->개발자도구 단축키F12->상단에 브라우져모드 로 버젼바꿔서 확인
 - 도구->개발자도구 단축키F12->상단에 브라우져모드 로 버젼바꿔서 확인
- emmet 단축
  cc:ie  ie 용
  cc:noie  ie가 아닌

사용방법
```
<!--[if IE 6]><html lang="ko-KR" class="lt-ie10 lt-ie9 lt-ie8 ie6"><![endif]-->
<!--[if IE 7]><html lang="ko-KR" class="lt-ie10 lt-ie9 lt-ie8 ie7"><![endif]-->
<!--[if IE 8]><html lang="ko-KR" class="lt-ie10 lt-ie9 ie8"><![endif]—>  만약 ie가 8버전일때
<!--[if IE 9]><html lang="ko-KR" class="lt-ie10 ie9"><![endif]-->
<!--[if !IE]><!--><html lang="ko-KR"><!--<![endif]-->

<!--[if gte IE6]> <![endif]-->  만약 ie가 6버전보다 클 때
<!--[if lte IE 9]> <![endif]-->   만약 IE9보다 작을 때 즉, ie8,7,6,5,4,,,
```
:  lt 레쓰덴  ==  <  ~보다 작을 때
   gt       ==  >  ~보다 클 때
   if IE    ==     인터넷익스플로러에서만 사용
   e        ==     땡땡의 약자 = :

**내부스타일 방식**
```
  <!--[if lte IE 7]>
   <style type="text/css">
          body{background-color:yellow;}
   </style>
  <![endif]-->
```
: 만약 ie 7보다 작을 때 즉, ie6,5,4,,, 배경컬러는 노랑색이다.

**외부스타일 링크방식**
```
 <!--[if IE8]>
   <link rel=“stylesheet” type=“text/css” href=“css/main_ie8.css” />
<![endif]-->
```
: ie8버전일 때 적용해라 뭐를? css폴더에서 main_ie8.css 파일명을 가진 css를 불러와라.

- 브라우져핵은 사용제한 할것!!
핵대신 -> 필터링 사용 => MS IE 조건부 주석문  ie만해석가능한 특정조건문
6~9까지만 적용됨 10부터는 적용이 안됨

참고 사이트
http://e-rooms.tistory.com/entry/%EC%A1%B0%EA%B1%B4-%EC%A3%BC%EC%84%9D%EB%AC%B8-%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%8B%9D

---

###HTML 엔티티 코드
- HTML문서에서 특수문자를 사용하게 되면 entity로 변환된 코드를 작성해야 오류가 안남. 
http://entitycode,com 에서 특수문자들 코드 확인가능
- 만약 보여지는 페이지에 코드를 출력하고 싶으면 
> `&lt;h1&gt;&lt;/h1&gt;`    ==>  `<h1> ~~ </h1>`

- emmet 필터 e를 사용하면 쉽게 인코딩할수 있다. `h6|e`



