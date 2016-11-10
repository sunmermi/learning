#Ajax

###서버연결
- 서버연결을 해야 통신할수 있다.
- `http-server -o -a localhost -p 8081`

##Ajax란?
- Asynchronous JavaScript and XML
    + 비동기적으로 자바스크립트를 이용해서 서버와 브라우져가 통신하는 방식(데이터를 주고받는)
    + 지금은 XML이 아니더라도 text, html, JSON 등으로도 처리가 가능

1. Ajax 장점
- 페이지 이동 없다.
- 서버와 통신하는 동안 사용자는 현재 페이지에서 다른 것을 조작할수 있다.
- 처음 페이지가 로딩될때 모든 데이터를 불러들일 필요가 없음 
    + 사용자가 필수적으로 봐야하거나 항상 봐야하는 콘텐츠 아닌 경우에 사용
    + 사용자가 필요할때 요청하면 데이터를 불러들임
        * 사용자와 서버 모두 데이터 부담이 적음
        * ==> 빠름. 사용자에게 필요한 정보만 제공가능
        * 사용자들은 목적이 있으면 기다리지만 없으면 기다려 주지 않는다 그래서 속도가 중요하다.

2. 통신확인방법
- 콘솔 -> 네트워크 탭 
    + 서버와 통신하면 데이터를 불러들이는 것을 확인할 수 있다. 
    + 요청을 하면 서버에서 데이터를 리턴해줌

####동기와 비동기 차이
- 동기
    + 전체 페이지를 바꿈
    + 데이터를 불러오는 동안에 네트워크 지연. 아무것도 할수 없음!
    + 포토샵 파일저장시에 아무것도 할수 없는 것처럼 아무 동작도 할수 없음
- 비동기
    + 데이터를 불러오는 동안 현재 페이지에서 사용자는 다른 것을 조작할수 있다.
    + 스크롤,,, 다른 기능 클릭 ,, 등
    + 하지만 접근성이 떨어짐 해결방법은 **아리아**

###XMLHttpRequest 객체
- 비동기 통신을 하기 위한 객체
- 웹 -> 서버 통신
    + 접속 요청함 ->  서버에서 데이터 줌 -> 가져와서 화면에 표시
1. 객체생성 
    - `var xhr = new XMLHttpRequest();`
        + 객체 인스턴스를 제어가 가능해짐
    - 콘솔에서 dir 확인 : 제공하는 속성 확인가능
        + `__proto__:XMLHttpRequest` 확인
        + 사용가능 메서드 확인가능
        + 주로 open(), send() 사용
2. open('통신방법','통신파일경로',통신설정) : 접속하려는 대상을 지정
    - 통신방법
        + GET , POST
    - 통신파일 : 데이터가 있는 경로 설정
        + HTML, JSON, TEXT, XML
    - 통신설정 => 쓸일 없음, true기본
        + true 비동기 통신, false 동기 통신!
        + 비동기 통신을 사용할 건지 말건지를 결정하는 값.
    - `xhr.open('GET', 'ajax/data.json');`
3. send()
    - send가 호출 되면 XMLHttpRequest객체가 이 주소로 이 방식으로 통신을 시작한다.
    - `xhr.send();`
4. 서버 응답 처리
    - 통신하는 과정에서 내부적으로 단계들이 존재함 
        + 웹 서버로부터 응답이 도착하면 특정한 JavaScript 함수를 호출
        + 이벤트 핸들러가 호출이 되는데 전송받았다.. 받는중이다... 등등의 변화
        + 상태의 변화가 있을때마다 이벤트핸들러가 호출
    - onreadystatechange
        + 서버와의 통신이 끝났을 때 호출되는 이벤트
    - readyState 프로퍼티 : 통신의 상태 체크
        + 0 : 객체만 생성되고 아직 open()메서드 수행전
        + 1 : open메서드가 호출되고 아직 send 메서드가 호출되지 않은 상태 == 로딩중
        + 2 : send 메서드가 호출되고 status와 header는 도착하지 않은 상태 == 로딩완료
        + 3 : 데이터의 일부를 받은 상태 == 서버 처리중
        + 4 : 데이터를 전부 받은 상태. 완전한 데이터의 이용 가능 == 서버 처리 완료
    - status : HTTP 통신의 결과를 의미
        + 100 : continue
        + 101 : Switching Protocols
        + 200 : 통신 성공 == 요청 성공
        + 403 : 접근거부
        + 404 : Not Found 클라이언트오류 == 파일/페이지 없음
        + 5XX : Internal Server Error 서버오류
    - responseText
        + 응답된 데이터 == 서버에서 리턴해준 정보를 담고있는 속성
 
###Ajax 코드 실행 순서
1. 사용자 요청(이벤트발생) -> Ajax를 통해서 -> 서버전송
2. XMLHttpRequest 객체생성
3. send() 함수를 호출
4. XMLHttpRequest 객체가 open메서드에 설정한 주소로 방식으로 웹 서버에 요청
5. 웹 서버는 알맞게 처리한 뒤 응답 결과를 XMLHttpRequest에 전송
5. XMLHttpRequest 객체에 응답이 도착하면 == 통신이 끝나면
6. onreadystatechange 프로퍼티에 지정한 콜백 함수를 실행.


###post방식

**참고 강의**
- [생활코딩 - Ajax 파트 : POST](https://opentutorials.org/course/1375/6843)


###IE 6 이하 버전에서 비동기통신 객체 생성 방법
- XMLHttpRequest 객체는 IE 6 이하 버전은 지원하지 않음
- 대신 ActiveXObject 객체를 지원
    ```
    // 사용자 함수
    // 윈도우에 XMLHttpRequest가 있으면 
    // XMLHttpRequest 객체 생성
    // 없다면 ActiveXObject 생성
    function createXHR(){
        return window.XMLHttpRequest ?
            new XMLHttpRequest :
            new ActiveXObject('Microft.XHMHTTP');
    }
    ```


---

####GET & POST
1. GET
- URL에 정보가 담겨서 전송 == 페러미터 값이 모두 공개된다
- 전송할 수 있는 정보의 길이가 제한되어 있다. 
    + 브라우져마다 다르지만 길이는 제안이 있다 넘으면 데이터가 누락됨
- 퍼머링크로 사용될 수 있다.
    + ? 어떤 정보를 식별하는 고유한 식별자 주소체계
    + 링크 복사해서 공유하면 친구도 볼수 있음
    + 이것을 퍼머링크라고 함
2. POST
- URL 주소는 변경되어 있지 않음 => URL상에 전달한 정보가 표시되지 않는다.
    + 콘솔에서 네트워크 도구 선택 : 파일이 들어온것을 확인할 수 있음 
- header의 body에 담겨서 전송된다.???
- GET에 비해서 보안상 약간의 우위에 있다. 하지만 조작이 가능하긴하다.
- 전송할 수 있는 데이터의 길이 제한이 없다.
- 퍼머링크로 사용할 수 없다.
- 서버 쪽에 어떤 작업을 명령할 때 사용한다. (데이터의 기록, 삭제, 수정 등)

**참고 강의**
[생활코딩 - GET, POST](https://opentutorials.org/course/11/14)


---

###프레임워크와 라이브러리 차이점
- 프레임워크
    + 정해져 있는 규칙대로만 사용
    + 앵귤러JS같은,,
- 라이브러리
    + 사용자가 마음대로 가져다 작성할수 있음
    + 제이쿼리

---

###jQuery의 Ajax API
[jQuery Ajax API](http://api.jquery.com/category/ajax/)

- 장점 : 크로스브라우징의 문제를 jQuery가 알아서 해결

- `$.ajax();`

- {} 옵션  프로퍼티 
    + data : 
    + dataType : 데이터 타입
        * url이 반환해주는 데이터가 [....] 형식이다 라는것을 명시해줌
        * xml, json, script, html,,,,  +jsonp
    + success : 성공했을때 함수 실행
        * 콜백함수
        * function(인자){}
        * 전달이 성공했을때 전달해준 데이터(제이슨 데이터 -> 자바스크립트 데이터)가 콜백함수 인자로 전달됨
    + method : 데이터 전송 방법
        * get, post
        * type => 1.9.0 버전 이용시엔 type 사용

```
$.ajax({
   url: '전달할 데이터 경로',
   // data:$('form').serialize(),
   dataType: 'json',
   method: '',
   success: function(인자){}

});

//----------------- form 요소 데이터 전달 -------------------------
// data : $('form').serialize()
// data는 서버로 전달할 데이터를 설정하는 속성이다
// serialize() 함수 메서드
// form안의 모든 요소들의 선택된 값이나 작성된 값들을 serialize()를 통해
// 자동으로 문자열로 만들어서 서버데이터로 전달해준다.

```


###CORS 크로스 도메인(Cross Domain) 이슈

[AJAX : JSONP](http://huns.me/development/1291)

> CORS policy: No 'Access-Control-Allow-Origin' header is present on the
> requested resource. Origin 'http://localhost:8081' is therefore not 
> allowed access.

####해경방안
1. 크롬 브라우져 확장자 설치
- [확장 프로그램](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=ko)

