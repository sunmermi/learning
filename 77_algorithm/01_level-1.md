## 레벨 1 문제풀이
- [문제실행 페이지](https://sseom.github.io/learning/77_algorithm/level-1/)
- 문제 풀이 목록
    1. [핸드폰번호 가리기](https://github.com/sseom/learning/blob/master/77_algorithm/01_level-1.md#1-핸드폰번호-가리기)
    2. [평균 구하기](https://github.com/sseom/learning/blob/master/77_algorithm/01_level-1.md#2-평균-구하기)
    3. [짝수와 홀수](https://github.com/sseom/learning/blob/master/77_algorithm/01_level-1.md#3-짝수와-홀수)
    4. [정수 제곱근 판별하기](https://github.com/sseom/learning/blob/master/77_algorithm/01_level-1.md#4-정수-제곱근-판별하기)
    5. [별(*) 기호로 삼각형 출력하기](https://github.com/sseom/learning/blob/master/77_algorithm/01_level-1.md#5-삼각형출력하기)
    6. [별(*) 기호로 역삼각형 출력하기](https://github.com/sseom/learning/blob/master/77_algorithm/01_level-1.md#6-역삼각형-출력하기)
    7. [스트링을 숫자로 바꾸기](https://github.com/sseom/learning/blob/master/77_algorithm/01_level-1.md#7-스트링을-숫자로-바꾸기)

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
- 2017 / 02 / 01
- [ 문제 ]
    ```
    average(list);
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
- 2017 / 02 / 01
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

###4. 정수 제곱근 판별하기
- 2017 / 02 / 02
- [ 문제 ]
    ```
    nextSqaure함수는 정수 n을 매개변수로 입력받습니다.
    n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 'no'을 리턴하는 함수를 완성하세요.
    예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 'no'을 리턴하면 됩니다.
    ```

- [ 내 코드 ]
    ```
    function nextSqaure(n){
      var result = 0;
        for(var i = 0; i < n ; i++){
            var val = i * i;
            if( val === n ){ 
              result = i + 1;
              result = result * result;
            }
        }
      if(result === 0){result = 'no';}
      return result;
    }
    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    console.log("결과 : " + nextSqaure(121));
    console.log("결과 : " + nextSqaure(3));

    // ----------------------------------------------------------------------
    function nextSqaure(n){
        var result = 0;
        for(var i = 0; i < n ; i++){
          var val = i * i;
          if( val === n ){ 
            result = (i + 1) * (i + 1);
            return result;
          }
        }
        return result = 'no';
    }
    ```

- [ 내가 사용한 방법 ]
    + 제곱근이란? == 루트라고도 한다.
        * 루트란 그 수의 뿌리. 간단히 설명하면 3의 제곱은 9다.
        * 3x3=9 , 4x4=16 .....
    + 너무 어려웠음 수학적인 개념을 어케 풀어야할지 몰라서,, 무식하게 다 곱해봤다.
        * 임의의 정수 0부터 인자로 전달한 숫자만큼 for문 순환
        * 임의의 정수를 다 곱한다. 그 결과값이 전달된 값과 같다면
        * 임의의 정수값에 +1 을  하고 곱해서 값을 반환
        * 모든수를 곱해봤는데 전달된 값과 같은값이 없다면 no반환
    + ==> 다른 사람들이 풀이한 코드를 보니까 알아야 할게 참 많다는걸 느낌.. 이미 만들어진 함수가 있구나..
    
- [ 다른 사람들이 풀이한 코드 1 ]
    + [Math 객체](http://www.w3schools.com/js/js_math.asp)
        * [sqrt()](http://www.w3schools.com/jsref/jsref_sqrt.asp)
            - 전달된 인자의 제곱근을 반환.
        * [pow(인자1, 인자2)](http://www.w3schools.com/jsref/jsref_pow.asp)
            - 인자 1의 값을 인자2의 거듭 제곱
            - pow(3, 2) : 3 * 3 값 반환
        * [floor()](http://www.w3schools.com/jsref/jsref_floor.asp)
            - 인자로 전달된 값의 소숫점 아래는 무조건 절삭시킴
    + [Number 객체](http://www.w3schools.com/jsref/jsref_obj_number.asp)
        * [isInteger()](http://www.w3schools.com/jsref/jsref_isinteger.asp)
            - 값이 정수인지 확인.
            - Browser Support 많이 낮음
    ```
    // 1번
    function nextSqaure(n){
        var x = Math.sqrt(n) ;
        return (x - Math.floor(x)==0)? (x+1)*(x+1) : "no";
    }

    // 2번 : 지원율 낮은 isInteger()가 있으니 다른 방법이 좋을것 같다.
    function nextSqaure(n){
      var sqrt = Math.sqrt(n);
      var result = Number.isInteger(sqrt) ? Math.pow(sqrt+1, 2) : "no";
      return result;
    }


    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    console.log("결과 : " + nextSqaure(121));
    ```


---

###5. 삼각형출력하기
- 2017 / 02 / 06
- [ 문제 ]
    ```
    printTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다.
    다음을 참고해 *(별)로 높이가 num인 삼각형을 문자열로 리턴하는
    printTriangle 메소드를 완성하세요
    printTriangle이 return하는 String은 개행문자('\n')로 끝나야 합니다.

    높이가 3일때
    *
    **
    ***

    높이가 5일때
    *
    **
    ***
    ****
    *****
    ```

- [ 내 코드 ]
    ```
    function printTriangle(num) {
      var result = '';
      for(var i =0 ; i < num ; i++){
        for(var l=0 ; l < i; l++){
          result += '*';
        }
        result += '*\n';
      }
      return result;
    }

    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    console.log( printTriangle(3) );
    ```

- [ 내가 사용한 방법 ]
    + 반복문 사용
        * 전달된 숫자만큼 별표 반복 출력해야하니까 for문 사용
    + 별 출력
        * 더하기(+) 연산 사용해서 문자열 '*' 대입
    + 개행
        * 정규식표현 : \n
        * 별이 1행으로 `***` 출력 되는걸 한개의 별들이 각 1,2,3행으로 출력되게 끔 개행.
    + 2중 for문
        * 1번째 반복문에서 출력된 별에서 추가적으로 반복 출력
        * 리미트 값은 i 값

- [ 다른 사람들이 풀이한 코드 1 ]
    + 나와 같은 2중 for문을 사용
    + 다른점은 
        * outer for문에서의 결과값은 개행만
        * inner for문에서 비교연산을 `j<=i` 크거나 같다 사용해서 순차적으로 찍히게 만듬.
    ```
    function printTriangle(num) {
      var result = ''
      // 
      for(var i=0; i<num; i++){
        for(var j=0; j<=i; j++){
            result += '*';
        }
        result += '\n';
      }
      return result
    }
    ```

- [ 다른 사람들이 풀이한 코드 2 ]
    + repeat() 사용
        * `string.repeat(count)`
        * 호출 된 문자열의 지정된 수만큼 복사해서 문자열 반환
        * 단점 : 브라우져 지원율이 낮음
    ```
    function printTriangle(num) {
        var result = ''
        for(var i=0; i<num; i++) {
            result += '*'.repeat(i+1) + "\n";
        }
        return result
    }
    ```

---

###6. 역삼각형 출력하기
- 2017 / 02 / 07
- [ 문제 ]
    ```
    printReversedTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다.
    다음을 참고해 *(별)로 높이가 num인 삼각형을 문자열로 리턴하는
    printReversedTriangle 메소드를 완성하세요.
    
    높이(num)가 3일때 다음과 같은 문자열을 리턴하면 됩니다.
    ***
    **
    *
    ```

- [ 내 코드 ]
    ```
    function printReversedTriangle(num) {
        var result = '';
        for(var i = 0; i<num; i++){
            for(var l = num-1; l>i; l--){
                result += '*';
            }
        result += '*\n';
      }
      return result
    }

    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    console.log("결과 : " +'\n'+ printReversedTriangle(3));
    ```

- [ 내가 사용한 방법 ]
    + 위 [5. 삼각형출력하기] 문제와 동일
    + 단, 역삼각형 출력이기 때문에 2중 for문이 달라짐
        * l값은 전달받은 num에서 -1을 한값
        * l과 i의 비교연산 : l이 i보다 작을때까지 순환
        * 매 순환마다 l의 값은 마이너스

- [ 다른 사람들이 풀이한 코드 1 ]
    + 위 [5. 삼각형출력하기] 문제와 동일
    + 2중 for문 사용하지 않고 repeat() 매서드 사용
    ```
    function printReversedTriangle(num) {
      var result = "";
      for(var i = num ; i > 0; i--) {
        result+= "*".repeat(i) + "\n";
      }
      return result
    }

    ```

- [ 다른 사람들이 풀이한 코드 2 ]
    + repeat() 사용
    + 재귀함수 사용
        * 재귀함수는 함수 자신을 호출하는 프로그래밍 기법.
        * [MSDN 재귀 함수](https://goo.gl/1rZp5q)
            - factorial(1); // value 1
            - factorial(2); // value 2
            - factorial(3); // value 6
            - factorial(4); // value 24
        * [생활코딩 재귀함수](https://opentutorials.org/module/904/6700)
    ```
    function printReversedTriangle(num) {
        var result = "";
        // 재귀함수
        return num? "*".repeat(num)+"\n"+ printReversedTriangle(num-1):"";
    }
    ```


---

###7. 스트링을 숫자로 바꾸기
- 2017 / 02 / 08
- [ 문제 ]
    ```
    strToInt 메소드는 String형 str을 매개변수로 받습니다.
    str을 숫자로 변환한 결과를 반환하도록 strToInt를 완성하세요.
    예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
    str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
    ```

- [ 내 코드 ]
    ```
    function strToInt(str){
      return str * 1 ;
    }

    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    console.log(strToInt("-1234"));
    ```

- [ 내가 사용한 방법 ]
    + 곱하기(*) 연산자 사용
    + [데이터 변환 정리 문서](https://github.com/sseom/learning/blob/master/03_Javascript/03_data_type_01.md#데이터-변환-type-casting--형변환)

- [ 다른 사람들이 풀이한 코드 ]
    + Number(str) : Number 함수 사용
    + parseInt(str) : parseInt는 전달된 문자열을 정수로 변환.


---

###8. 문제
- 2017 / 02 / 09
- [ 문제 ]
- [ 내 코드 ]
- [ 내가 사용한 방법 ]
- [ 다른 사람들이 풀이한 코드 ]
