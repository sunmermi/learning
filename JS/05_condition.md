#condition 조건문

###1. if 문
- 조건
    + if(데이터){} , if(!데이터){} 
    + 조건 비교 : >, <, <=, >=, ==, ===, !=, !==, &&, ||

1. 기본
    - `if( 조건 ){조건이 참이면 실행할 실행문}`
2. if else문 
    - `if( 조건 ){조건이 참이면 실행할 실행문}else{ 거짓이면 실행할 구문 }`
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

3. if else if문
    - `if( 조건 ){조건이 참이면 실행할 실행문}else if(다른 조건){}...else{거짓이면 실행할 구문}`
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

###※&& , || 조건문 처리
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

###※3항연산 조건문 처리
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

**※if문 사용 예제**

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

