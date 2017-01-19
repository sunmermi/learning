## 레벨 1

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
    + [ ] 인풋태그를 만들어서 사용자 핸드폰 번호 입력 받기
    + [ ] 받은 데이터 숫자가 아니면 오류 메세지 (문자, 특수문자 No)
    + [ ] 받은 데이터에 - 하이픈이 있다면 제거
