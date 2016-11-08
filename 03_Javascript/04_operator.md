#연산자

###대입(할당) 연산자
- `A = B ;`
- 오른편에 있는 값을 왼편의 변수에 대입(할당)하다 [값 복사|참조]

###산술 연산자
- 결합 더하기 ( A + B )
- 빼기 ( A - B )
- 곱하기 ( A * B )
- 나누기 ( A / B )
```
// 더하기 ( A + B )
var lang = 'Language', fun='잼';

document.write('<h1>'+ lang + fun +'</h1>');

// 출력 : Language잼

```

- 나머지 ( A % B )
    + 값 % 2 : 나머지 값은 2개 : 0,1 반환
    + 값 % 3 : 나머지 값은 3개 : 0,1,2 반환
    + 값 % 5 : 나머지 값은 5개 : 0,1,2,3,4 반환
    + ==> 값이 계속 달라져도 나머생지 값은 나눈값의 갯수 만큼만 나머지 숫자 발생
```
var msg_count =0;
var msg =[];
msg.push('this is function object');
msg.push('Function object has an attribute');
msg.push('Function objects can be invoked later');

// console.log(msg);

function printFunMsg(){
  // console.log(msg[msg_count]);
  return msg[msg_count++ % msg.length];
  // msg_count = (msg_count+1) % msg.length;
  // msg_count = msg_count++ % msg.length;
  // msg_count = (0) % 3; // 0
  // msg_count = (1) % 3; // 1
  // msg_count = (2) % 3; // 2
  // msg_count = (3) % 3; // 0
  // msg_count = (4) % 3; // 1
  // msg_count = (5) % 3; // 2
  // msg_count = (6) % 3; // 0
  // ,,,,,,,,,,, N ,,,,
}

printFunMsg();
printFunMsg();
printFunMsg();
printFunMsg();
printFunMsg();

```


###비교 연산자 (Compare Operator)
```
//------------ 비교 ---------------
// > 보다 크다
// < 보다 작다
// >= 보다 크거나 같다
// <= 보다 작거나 같다
//------------ 동등 ---------------
// == 값이 같다   (자동으로 형 변환 발생! 안티 패턴)
// === 값이 같다  (자동으로 형 변환 발생 X! 굿 패턴) 엄격!!!
// != 값이 다르다  (자동으로 형 변환 발생! 안티 패턴)
// !== 값이 다르다 (자동으로 형 변환 발생 X! 굿 패턴) 엄격!!!
//------------ 논리 ---------------
// &&
// ||
```
1. 비교
2. 동등
    - ==, ===, !=, !==
    - **주의할 문제**
    ```

    // 타입이 같지 않은데 모두 true 반환
    // 자동으로 형변환이 발생
    "" == 0; 
    "0" == 0; 
    false == '0';
    false == '' ;

    // 해결 방법
    // 1. 엄격한 === 3개 짜리 쓸것 : 사용권장
    // 모두 false값 반환
    // 데이터의 타입까지 비교해서 불리언 값을 반환
    "" === 0; 
    "0" === 0; 
    false === '0';
    false === '' ;

    // 2. Object.is(데이터1,데이터2) 
    // 크롬빼고 지원 아직 안함, NaN 오류 있음
    
    Object.is(+0,-0)     //false  ==> 이게 옳다
    +0 === -0            //true

    Object.is(NaN,NaN)   //true
    NaN === NaN          //false  ==> 이게 옳다

    ```
3. 논리
    1. && : AND
        - 그리고
        - 두 값이 모두 참일때 true
        - 처음 나오는 거짓 값이 반환
        - 값이 모두 참이면 마지막 참값이 반환
    2. || : OR
        - 또는
        - 두개의 값중 한개의 값만 참이여도 true
        - 처음 나오는 참값이 반환
        - 모두 거짓이면 마지막 거짓값 반환
    3. 참고 설명
        - 여기에서 맨처음 이라는것은 비교 데이터의 처음 순서를 말하는 것이 아니라
        - ==> 데이터들의 조건이 거짓과 진실중에서 처음나온건지 마지막에 나온건지를 말함
    ```
    // and 그리고 : 맨처음 거짓값 우선
    var a = aa && bb ;
    // aa참 , bb거짓 이면  변수 a엔 처음 거짓값인 bb값이 할당
    // aa참 , bb참 이면   변수 a엔 마지막 참값인 bb값이 할당
    // aa거짓 , bb참 이면  변수 a엔 맨처음 거짓값 aa가 할당
    // aa거짓 , bb거짓 이면 변수 a엔 맨처음 거짓값 aa가 할당

    // or 또는 : 맨처음 참값 우선
    var f = cc || dd;
    // cc거짓이고 dd참 이면  변수 f엔 맨처음 나오는 참값이 dd값이 할당
    // cc거짓이고 dd거짓 이면 변수 f엔 마지막 거짓값이 dd값이 할당
    // cc참이고 dd참 이면   변수 f엔 맨 처음 참값 cc값이 할당
    // cc참이고 dd거짓 이면  변수 f엔 맨 처음 참값 cc값이 할당

    ```

    4. **※ if조건문 대신 논리연산자로 조건구문 처리방법**
    ```
    // && , || 조건구문 처리

    var drink; // 변수 초깃값 undefind 할당됨

    // 만약 if문을 사용한다면
    // 논리연산자를 사용한다면 조건구문이 더욱 간결해짐
    
    // 만약 드링크가 거짓이라면 변수에 'default drink' 할당
    // if(!drink){drink = 'default drink';}
    // || : 처음 나오는 참값이 할당됨
    drink = drink || 'default drink';
    console.log('drink:', drink); // 'default drink' 할당됨

    // 만약 드링크가 참이라면 변수에 'another drink' 할당
    // if(drink){drink = 'another drink';}
    // && : 맨 마지막 참값이 할당됨
    drink = drink && 'another drink';
    console.log('drink:', drink); // 'another drink'


    ```

###증감연산자
- ++ 증가
    + A++ : 후증가
    + ++A : 선증가
- -- 감소
    + A-- : 후감소
    + --A : 선감소
```
// 표현방식이 다를뿐 다 같음
i++ ;
i = i+1 ;
i += 1 ;
```