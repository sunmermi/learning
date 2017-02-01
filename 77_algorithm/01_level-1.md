## 레벨 1 문제풀이
- [문제실행 페이지](https://sseom.github.io/learning/77_algorithm/level-1/)

###1. 핸드폰번호 가리기 
- [ 문제 ]
    ```
    별이는 헬로월드 텔레콤에서 고지서를 보내는 일을 하고 있습니다. 개인정보 보호를 위해 고객들의
    전화번호는 맨 뒷자리 4자리를 제외한 나머지를 "*"으로 바꿔야 합니다. 전화번호를 문자열 s로
    입력받는 hide_numbers함수를 완성해 별이를 도와주세요. 예를들어 s가 "01033334444"면
    "*******4444"를 리턴하고, "027778888"인 경우는 "*****8888"을 리턴하면 됩니다.
    ```


- [ 내 코드 ]
    ```
    function hide_numbers(number){
        // 대상선택
        var hide = number.slice(0, -4); // 번호 앞자리 (번호 뒷 4자리를 제외한 앞자리)
        var show = number.slice(-4); // 번호 뒷자리 : 0000
        var star_num = ""; // 별을 집어 넣을 빈 변수
        
        // 앞자리 번호 순환해서 별로 바꾸기
        for(var i=0; i < hide.length ; i++){
          // console.log(star[i]);
          var star = hide[i].replace( hide[i] , '*');
          // console.log(star);

          // 별을 한개씩 추가
          star_num += star;
        }

        // console.log(star_num);

        // 별로 바뀐 앞자리와 뒷자리 번호 합해서 결과 반환
        var result = star_num + show ;
        return result;
      }

      // 아래는 테스트로 출력해 보기 위한 코드입니다.
      console.log("결과 : " + hide_numbers('0103333444455'));
    ```

- [ 내가 사용한 방법 ]
    + slice(시작지점, 종료지점)
        * 문자열의 특정구간을 잘라내서 그 문자열을 반환
        * 두번째 인자를 지정하지 않으면 문자열의 끝까지를(string.length-1) 검색대상으로 한다.
        * [참고 ](https://opentutorials.org/course/50/95)
    + 반복문
        * 잘라낸 앞자리 번호들을 별로 변경하려고 사용
        * length 가 있다면 반목문을 돌릴수 있다.
    + replace( 데이터 , 변경할데이터)
        * 문자열을 다른 문자열로 치환한 결과를 리턴
        * [참고 ](https://opentutorials.org/course/50/93)
    + 반복되어 나온 문자열 더하기 `star_num += star;`

- [ 다른 사람들이 풀이한 코드 1]
    - 정규표현식 사용
    - 정규표현식(regular expression)은 문자열에서 특정한 문자를 찾아내는 도구다
    - `/\d(?=\d{4})/g`
        + / 데이터 / : 정규표현식의 리터럴(백슬레시)
            * 문자열 리터럴 처럼 마찬가지 : '문자'
            * 데이터 : 찾으려는 데이터 라는걸 컴에게 알려줌
            * new RegExp('데이터') : 정규표현식 생성자 방식
        + \d : 숫자
        + () : capture group
        + ?= : 정확하게 보다
        + \d{4} : 숫자 정확히 4개만
        + g  : 검색된 모든 결과를 리턴
    - [정규표현식 | 생활코딩](https://opentutorials.org/course/909/5142)
    - [정규표현식(자바스크립트) | 생활코딩](https://opentutorials.org/course/743/6580)
    ```
    // 정규표현식 사용한 코드
    function hide_numbers(s) {
      return s.replace(/\d(?=\d{4})/g, "*");
    }

    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    console.log("결과 : " + hide_numbers('01033334444'));
    ```

- [ 다른 사람들이 풀이한 코드 2 ]
    - 반복문 + 3항연산 조건문 사용
    - [ 3항연산 조건문 정리 ](https://github.com/sseom/learning/blob/master/03_Javascript/05_condition.md)
        + 조건 ? 조건이 참일때 실행문 : 조건이 거짓일 경우 실행문 ;
    - [charAt() 참고](https://opentutorials.org/course/50/86)
        - charAt(인자)는 인자로 전달된 값번째의 문자를 읽어 낸다. 
    ```
    // 반복문과 조건구문을 사용
    function hide_numbers(s){
      var result = "";
      for(var i=0;i< s.length;i++){    
        // i가 s의갯수 -4한 값보다 
        // 작다면 == 참이면  별
        // 크다면 == 거짓이면 s의 i번째 값 
        // += 반복갯수 만큼 계속 result 변수에 추가
        result += i < s.length -4 ? "*" : s.charAt(i);
        // s.charAt(i);을  s[i]; 이래해도 같음.
      }  
      return result;
    }

    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    console.log("결과 : " + hide_numbers('01033334444'));
    ```

- [ 내 코드에 추가할 사항 ]
    + [x] 인풋를 만들어서 사용자 핸드폰 번호 입력 받기
    + [x] 받은 데이터 숫자가 아니면 오류 메세지 (문자, 특수문자 No)


---

###2. 평균 구하기
- [ 문제 ]
    ```
    average(list):
    함수를 완성해서 매개변수 list의 평균값을 return하도록 만들어 보세요.
    어떠한 크기의 list가 와도 평균값을 구할 수 있어야 합니다.
    ```
- [ 내 코드 ]
    ```
    function average(array){
      var l = array.length,
            sum = 0;
        for(var i=0; i<l ; i++){
        sum += array[i];
      }
      sum = sum / l;
      return sum;
    }

    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    var testArray = [5,3,4];
    console.log("평균값 : " + average(testArray));
    ```
- [ 내가 사용한 방법 ]
    +  ㅁ + ㅁ + ㅁ + ... / 데이터의 총 갯수 = 평균 값
        * 평균은 모든 수를 합해서 그 수의 총 갯수로 나눈 값.
    + length 사용
        + 데이터는 배열이니까 갯수가 있다. length 속성 사용해서 갯수 반환
    + for문 사용
        * 배열로 받아온 모든 데이터값을 꺼내서 순환 
    + 더하기 연산 , 나누기 연산
        * 순환해서 꺼내온 데이터 값을 합
        * 그리고 for문 밖에서 그 합된 값을 나눈다. 그리고 반환
- [ 다른 사람들이 풀이한 코드 ]
    + reduce() : 배열의 프로토타입 메서드
        * 배열의 각 원소를 돌면서 콜백 함수를 반복적으로 적용하여 하나 값을 뽑아내는 함수
        * [참고 블러그](https://gamecodingschool.org/2015/06/16/javascript-reduce-%ED%95%A8%EC%88%98/)
        * [MDN 설명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
    + => : arrow function expression ES6문법
        * [MDN 설명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)
    + 콜백을 계속 한다길래 왠지 실행시간이 오래걸릴 것 같았는데 !!!실행시간이 더 빠름!!!
        * 원소의 값이 작을땐 별차이가 없는데 많아지면 확연히 차이가 남
    ```
    function average(array){
      return array.reduce((a, b) => a + b) / array.length;
    }
    
    // --------------------------------------------------
    var arr = [ 1,2,3,4 ];
    arr.reduce((a, b) => a + b);
    //arr.reduce(function(a,b){ return a + b; }); 와 같음.

    // 순환 과정
    // a 
    // : 배열 원소의 이전 값과 + 현재 값이 더해진 값반환 ==  마지막 콜백 호출에서 반환된 값
    // : 초깃값 옵션을 주면 그 값부터 시작함 -> reduce((a, b) => a + b, 10);
    // b : 배열 원소의 값 1 -> 2 -> 3 -> 4
     0 + 1 = 1
     1 + 2 = 3
     3 + 3 = 6
     6 + 4 = 10

    ```

- [ 다른 사람들이 풀이한 코드 1 ]
    + for in문 사용
        * `for( 속성 in 객체 ){}`
        * 속성의 집합(객체)를 순환할 때 사용
        * 임시변수에 데이터 값이 담긴다. (아래 상황에서 임시변수는 c를 뜻한다.)
        * 배열일 경우 임시변수엔 숫자가 담기고 객체일경우 객체의 속성명이 담긴다.
    + 전달되는 데이터가 배열이면 IE8에서 정상으로 작동하지 않는다. 그러나 객체면 정상으로 작동
    + **데이터가 집합인(배열) 경우 사용하지 않는것이 좋다.**
        * 왜? for문을 사용하는 것이 더 빠름
        * for in은 객체의 속성을 접근해서 순환해야하기 때문에 느림
        * 하지만 현제 알고리즘 문제에선 딱히 실행속도 차이는 없다. for문보다 좀더 빨랐음.
    ```
    function average(array){
      var a = array.length;
      var d = 0;
      for (var c in array ) { d = d + array[c] }
      return d/a;
    }
    ```

- [ 내 코드에 추가할 사항 ]
    + [x] 유효성검사 : 문자 입력하면 오류메세지 띄우기

---

###3. 짝수와 홀수
- [ 문제 ]
    ```
    evenOrOdd 메소드는 int형 num을 매개변수로 받습니다.
    num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하도록 evenOrOdd에 코드를 작성해 보세요.
    num은 0이상의 정수이며, num이 음수인 경우는 없습니다.
    ```

- [ 내 코드 ]
    ```
    function evenOrOdd(num) {
      var result = '';
      // 체크
      if(num < 0){ return console.log('양수를 입력하세요'); }
      result = num % 2;
      result === 0 ? result = 'Even' : result = 'Odd';
      return result;
    }

    console.log("결과 : " + evenOrOdd(2));
    console.log("결과 : " + evenOrOdd(3));
    console.log("결과 : " + evenOrOdd(-3));

    // --------------------------------- 혹시 몰라 고쳐 본 코드였는데 NO

    function evenOrOdd(num) {
      var result = '';
      num < 0 ? console.log('양수입력') : 
         result = num % 2 ? 
            result = 'Even' : 
            result = 'Odd';
      return result;
    } 
    // 오류 => result 값이 반환됨. 음수일 경우엔 걍 리턴되는 것이 맞는것같음. 저 방법은 NO!!
    ```

- [ 내가 사용한 방법 ]
    + 유효성 체크 : 조건문
        * 전달받은 num이 음수이면 리턴되고 오류 메세지 출력
    + 나머지 연산자
        * 짝수, 홀수 두가지 경우의 값이 나와야함
        * %2 를 사용 -> 0,1,0,1.... 반환값이 0일 경우 짝수, 1일 경우 홀수
    + 3항연산 조건문
        * `조건 ? 조건이 참일때 실행문 : 조건이 거짓일 경우 실행문 ;` 
        * 나머지 연산해서 반환된 결과값을 조건으로 처리

- [ 다른 사람들이 풀이한 코드 ]
    + 조건의 boolean 값 이용
        * 0인 경우 false == 짝수
        * 1인 경우 ture == 홀수
    ```
    function evenOrOdd(num) {
      return (num % 2)? "Odd":"Even";
    }
    ```

- [ 내 코드에 추가할 사항 ]
    + [x] 유효성검사 : 문자 입력하면 오류메세지 띄우기

---

###4. 문제
- [ 문제 ]
- [ 내 코드 ]
- [ 내가 사용한 방법 ]
- [ 다른 사람들이 풀이한 코드 ]