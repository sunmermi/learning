#JSON

- JSON(JavaScript Object Notation)의 약자
- JavaScript에서 {} 객체를 만들 때 사용하는 표현식 
- 서로 다른 언어들끼리 데이터를 주고 받을수 있도록 하는 데이터 표준 정의한 것
    + 언어와 또 다른 언어는 데이터 호완이 안됨 -> 해결 JSON데이터
- JSON을 사용하기전 방식
    + xml방식은 html태그같은 표현이 많아서 데이터의 크기가 엄청 커진다.
    + 하지만 JSON은 데이터만 표현해서 가벼움 

###객체와 배열
- 객체
    + {} 중괄호
    + 값과 값은 , 콤마 구문
    + 키와 값은 : 콜론으로 구분
    + `{'키':값, '키':값, '키':값}`

- 배열
    + [] 대괄호
    + 데이터와 데이터 구분은 , 콤마
    + `['데이터값', '데이터값', '데이터값']`


###JSON 데이터
- 특징
    + JSON 데이터는 문자열로 되어있다.
    + { } 중괄호 안에 데이터가 있다.
    + 데이터는 키:값 으로 작성된다.
```
    //JSON 데이터

    var json_data = '{\
    "font_size": 14,\
    "highlight_line": true,\
    "ignored_packages": [ "Vintage" ],\
    "line_padding_top": 2,\
    "tab_size": 2\
    \}' ;

    // 서브라임 텍스트 
    // preperences -> settings 보면 JSON 데이터 형식으로 되어있음 
    // 역슬래시 \ : 줄바꿈. 문자열 JS 해석을 위해


```


###JSON객체 API(Application Programming Interface)
1. JSON.parse('데이터')
    + JSON객체의 parse() 메서드를 사용
    + 인자로 전달된 JSON 문자열 데이터를 자바스크립트의 객체 데이터로 변환
    + JSON 문자열 데이터 -> JS 객체 데이터
    ```
    JSON.parse('json_data');

    // 반환값
    Object {font_size: 14, highlight_line: true, ignored_packages: Array[1], line_padding_top: 2, tab_size: 2}

    ```

2. JSON.stringify('데이터')
    + JSON객체의 stringify() 메서드를 사용
    + 인자로 전달된 자바스크립트의 객체 데이터를 JSON 문자열로 변환
    + JS 객체 데이터 -> JSON 문자열 데이터
    ```
    var js_data = JSON.parse('json_data');

    JSON.stringify(js_data);

    //반환값
    "{"font_size":14,"highlight_line":true,"ignored_packages":["Vintage"],"line_padding_top":2,"tab_size":2}"

    ```


###서버와 클라이언트의 데이터 통신 (JSON 사용전과 후)

1. JSON 사용전
- 서버 
    + php 파일
    + 배열 데이터를 클라이언트로 전송 하기 전에 
    + `implode(',', 데이터);`
    + 배열 데이터를 콤마로 구분해서 문자열 데이터를 만들어준다.

- 클라이언트
    + 서버에서 보내준 데이터를 받아서 
    + `split(',')` 콤마로 구분애서 받은 문자열을 다시 JS방식으로 배열화 해준다.
    + split() : 전달인자 값을 기준으로 문자를 잘라서 배열로 만든다.

**왜??**
> 서버에서 배열데이터를 전달할 수 없기 때문에 데이터를 문자열로 변환해서 전달 js에서는 
> 그 문자열을 받아서 사용하기 위해 배열화를 한다. 서버에서나 자바스크립트에서나 
> 어차피 배열인데 각자의 배열을 통신하는것이 어렵기 때문에 저런 방식으로 데이터를 통신 함.

**문제점**
> 데이터가 적을땐 괜찮지만 복잡하고 많은 양의 데이터를 가지고 있어서 
> 저런 방식으로 변환하고 통신해야한다면 힘들고 복잡해진다.

2. 그래서 생긴 JSON
    + 서로 다른언어가 객체, 배열 같은 데이터 형식을 그대로 전송할 수 있다.
    + 이 역할을 하는것이 JSON이다.
    + JSON은 자바스크립트의 문법을 따르고 다른 언어에서도 사용할 수 있는 표준.

    + php 에서의 JSON 화 시키는 API는 
        * `json_encode();`
        * `json_decode();`
    + 클라이언트 : 자바스크립트의 배열로 바꾸는것은
        * 받은 데이터를 변수에 담아서 
        * JSON.parse(데이터);

    **=>** 내부적으론 어차피 문자이긴 하지만 split()와 같은 메서드 사용안해도 됨

####JSON이 지원하는 데이터 타입
JSON은 모든 언어의 데이터타입 지원은 않는다
    - 지원하는 데이터 타입
        + 객체 {}, 배열 []
        + 그 객체와 배열에 들어가는 값은
            * 값 : String, Number, Object Array Boolean null 
        + undefind, NaN, 메서드(function) 지원안함.

**참고**
- 다른언어들도 josn api가 다 있다. 검색 해봐야함
- 언어마다 JSON을 기본적으로 지원 하지만 그렇지 않은 언어도 있기 때문에 검색 해봐야함










