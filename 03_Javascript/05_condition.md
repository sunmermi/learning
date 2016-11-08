#condition 조건문

###if 문
- 조건
    + if(데이터){} , if(!데이터){} 
    + 조건 비교 : >, <, <=, >=, ==, ===, !=, !==, &&, ||

####1. if 문
- 기본 문법
  + `if( 조건 ){조건이 참이면 실행할 실행문}`

####2. if else문
- 기본문법 
  + `if( 조건 ){조건이 참이면 실행할 실행문}else{ 거짓이면 실행할 구문 }`
- 예제
    ```
    var condition = true;

    //if(condition){} //true
    //if(!condition){} //false

    //조건 구문 확인
    if(condition === true){
      console.log('Condition is TRUE');
    }else{
      console.log('Condition is FALSE');
    }

    //조건변경
    condition = !condition;

    //조건 변경후 재확인
    if(condition){
      console.log('Condition is TRUE');
    }else{
      console.log('Condition is FALSE');
    }

    ```

####3. if else if문
- 기본문법
  + `if( 조건 ){조건이 참이면 실행할 실행문}else if(다른 조건){}...else{ 모두 거짓이면 실행할 구문}`
- 주의 : 조건이 많아지면 느려짐 
- 예제
    ```
    var rank = 1;
    //rank의 조건문이 1이라면 블록문 {} 수행
    if(rank === 1){
      console.log('rank is one');
    }
    //rank의 조건문이 2이라면 블록문 {} 수행
    else if(rank === 2){
      console.log('rank is two');
    }
    //rank의 조건문이 3이라면 블록문 {} 수행
    else if(rank === 3){
      console.log('rank is three');
    }
    //rank의 조건문이 4이라면 블록문 {} 수행
    else if(rank === 4){
      console.log('rank is four');
    }
    //rank의 조건문이 1,2,3, 4가 아니라면 블록문 {} 수행
    else{
      console.log('rank isn\'t one, two, three, four.');
    }

    //==> 조건이 많아지면 느려짐 ㅜㅜ  이럴땐 스위치문 사용하는것이 좋음 

    //조건비교 : 논리연산자 사용
    var num = 30;

    if( num < 8 ){
      console.log('8보다 작어');
    }else if(num > 8 && num < 27){ // num은 8에서 27까지 
      console.log('8~27');
    }else{
      console.log('27이상');
    }
    ```

####※ && , || 조건문 처리
- if문을 사용하는 것보다 논리연산자를 사용한다면 조건구문이 더욱 간결해짐
- [04_operator.md 참고](https://github.com/sseom/learning/blob/master/JS/04_operator.md)

    ```
    var drink; //undefind

    // if(!drink){drink = 'default drink';}
    drink = drink || 'default drink';
    console.log('drink:', drink);

    // if(drink){drink = 'another drink';}
    drink = drink && 'another drink';
    console.log('drink:', drink);
    ```

####※ 3항연산 조건문 처리
- 기본
    + `조건 ? 조건이 참일때 실행문 : 조건이 거짓일 경우 실행문 ;`
- 다중 
    + `조건 ? 참 : 조건2 ? 참 : 조건3 ? 참 : 거짓;`

    ```
    // 조건 ? 참 : 거짓

    var im_hungry = false ;

    // 3항 연산 사용 : 아래 if문과 같음
    im_hungry? console.log('배고파'): console.log('안고파');

    // if(im_hungry){ console.log('배고파'); }else{ console.log('안고파'); }

    // 개행가능
    // im_hungry? 
    //   console.log('배고파') : 
    //   console.log('안고파');


    // 다중삼항조건식
    // 조건 ? 참 : 조건2 ? 참 : 조건3 ? 참 : 거짓;

    // 캐릭터엔 검사, 마법사, 궁수, 엘프, 사냥꾼, 두르이드 가 있다.
    // 설정값
    var charactor = '두르이드';
    // 3항연산 조건구문
    charactor === '사냥꾼' ?
      console.log('선택된 캐릭터는 사냥꾼') :
      charactor === '엘프' ?
        console.log('선택된 캐릭터는 엘프') :
        charactor === '궁수' ?
          console.log('선택된 캐릭터는 궁수') : 
          charactor === '두르이드' ?
            console.log('선택된 캐릭터는 두르이드') : 
            charactor === '검사' ?
              console.log('선택된 캐릭터는 검사') : 
              console.log('마법사네');
    ```


---

**※ if문 사용 예제**

```
//------------------- if문 사용전 ----------------------
//참조할 객체에 담을 변수 선언
var page, article, brand, slogan, mouseEventHandler;

//문서 요소 객체를 선택하여 각 변수에 참조
page = document.querySelector('#page');
article = document.querySelector('.article');
brand = document.querySelector('.brand');
slogan = document.querySelector('.slogan');

//참조된 문서요소 객체에 각 각 이벤트 연결 (Binding)
page.onclick    = function(e){console.log(e.target);};
article.onclick = function(e){console.log(e.target);};
brand.onclick   = function(e){console.log(e.target);};
slogan.onclick  = function(e){console.log(e.target);};

//------------------- 반복구문 그룹화 + if문 사용 ----------------------
// 이벤트 핸들러 함수 만들어서 이벤트 기능을 묶음
mouseEventHandler = function(evt){
  // console.log(evt);
  // Event Object {}

  //위 구문과 같음 
  console.log(evt.target);

  //if 문 사용 (클릭했을때, 마우스오버 했을때, 마우스아웃 했을때,,,)
  //이벤트 타입마다 다른 실행문을 구현하고 싶을때..
  if(evt.type === 'click'){
    console.log('clicked DOM Elemetn Node');
  }else if(evt.type === 'mouseover'){
    console.log('mouse overed DOM Elemetn Node');
  }else if(evt.type === 'mouseout'){
    console.log('mouse outed DOM Elemetn Node');
  }else{
    console.log('mouse click, out, over : X');
  }
};

//참조된 문서 요소 객체에 각 각 이벤트 연결 (바인딩)
page.onclick    = mouseEventHandler;
page.onmouseover  = mouseEventHandler;
page.onmouseout   = mouseEventHandler;
article.onclick = mouseEventHandler;
brand.onclick   = mouseEventHandler;
slogan.onclick  = mouseEventHandler;

```

---

###switch문

####switch
  - 기본문법
  ```
  // 케이스의 값과 switch(표현식)을 비교해서 
  // 일치하면 실행
  switch (expression) {
    case 1: 실행 구문;
    case 2: 실행 구문;
    // case 2개에 한개의 실행구문 사용 가능
    case 3:
    case 4: 실행 구문;
    //위 케이스 구문들이 다 일치 하지 않다는 다면 default구문 실
    default : 실행 구문;
  }
  ```

  - **주의점**
    1. default 하단에 넣어줄것!!
      - 상단에 있으면 default구문이 실행되고 아래 case구문들도 모두 실행됨
    ```
      var console_style = 'color: pink; font-size: 18px;';
      var condition = 'haha';

      switch(condition){
        default : console.log('%cnono', console_style);
        case 'cup': 
          console.log('%cthis is cup', console_style);
        case 'pen': 
          console.log('%cthis is pen', console_style);
        // 케이스 2개에 한개의 실행구문
        case 'double': 
        case 'remote': 
          console.log('%cthey are double and remote', console_style);
      }
    ```
    
    2. case 구문에 break !!!
      - break가 없다면 case가 참인 구문부터는 아래구문까지 모두 출력
      ```
      var console_style = 'color: pink; font-size: 18px;';
      var condition = 'cup';

      switch(condition){
        case 'cup': 
          console.log('%cthis is cup', console_style);
        break;
        case 'pen': 
          console.log('%cthis is pen', console_style);
        break;
        case 'double': 
        case 'remote': 
          console.log('%cthey are double and remote', console_style);
        break;
        default : console.log('%cnono', console_style);
      }
      ```
    
    3. case문이 연산이라면,,,
      - if문 과의 비교 : if(조건) 괄호 조건이 불리언값으로 반환되서 실행문이 실행여부를 결정
      - 연산하는 결과는 불린값을 반환하는데 표현식이 트루라 되어있으면 되지만
      - switch 구문에서는 값 비교 시 엄격한 비교를 수행한다.
      ```
      var count = 9;
      var counter = [8, 5, 2, -10, 9];

      //---------- 예제 1 ----------
      switch(count){
         case count > 10:
           console.log('count는 10보다 크다.');
         break;
        case count < 10 : 
          console.log('10보다 작다');
        break;
      }
      // ==> 출력안됨 
      // 왜? count 는 숫자 9 이고
      // case의 경우 연산결과로 결과 값을 불리언으로 반환 : true
      // count < 10 는 맞긴 하지만 count와 동일하지 않다
      // count 는 불리언값과 동일하다고 볼수 없어서 실행이 안된다.
      // 만약 switch(true) 조건을 비교 하고 있었으면 수행될 수 있다.

      //---------- 예제 2 ----------
      switch(count){
        case counter[counter.length -1] :
          console.log('counter 는 숫자 9이다');
        break;
        case count < 10 : 
          console.log('10보다 작다');
        break;
      }
      // ==> 케이스 1 counter는 숫자 9를 나타내서 => 참 
      // 'counter 는 숫자 9이다'  출력

      //---------- 예제 3 ----------
      var count = '9';
      var counter = [8, 5, 2, -10, 9];

      switch(count){
        // counter.length ==> 5 개
        case counter[counter.length -1] :
          console.log('counter 는 숫자 9이다');
        break;
        case count < 10 : 
          console.log('10보다 작다');
        break;
      }
      // ==> 출력안됨 
      // 왜?
      // switch 구문에서는 값 비교 시 엄격한 비교를 수행한다.
      // count는 문자열 9  , 케이스 counter는 숫자 9를 나타냄
      // 데이터타입이 일치하지 않는다.
      ```
