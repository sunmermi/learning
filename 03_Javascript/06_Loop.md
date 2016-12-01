#Loop 반복문

###while문
**주의**
- 조건변경이 꼭 필요함  ==> 안그럼 무한루프에 빠짐

1. while(){}
  - 기본문법
  ```
  초기변수선언;
  while(선언된 변수를 검증){
    실행문; 
    변수의 값을 변환;
  }
  ```
  - 예제
  ```
  // -----------------------------
  var conditon = 0;

  while( condition < 5  ){
    console.log('condition is true');
    condition++;
  }

  // -----------------------------

  var conditon = true;
  var count = 5;

  while( condition ){
    console.log('condition is true');
    count = count -1; // count--; , count -= 1;  과 같음
    //만약 count가 0과 같거나 작다면 condition은 false
    if(count <= 0){
      //false면 true, true면 false
      condition = !conditon;
    }
  }
  ```

2. do{}while()
  - 조건이 거짓일지라도 한번은 무조건 실행해야함
  ```
  var conditon = false, count = 5;
  do{
    console.log('condition is true');
    --count; //4
    if(count <= 0){
      condition = !conditon;
    }
  }while( condition );
  ```


###for문
1. for (선언;확인;변경) {} 
  - [값의 집합] -> 배열, 유사 배열 순환할 때
    + length  나오면 거의 포문을 사용함  ==>  반복순환 때문에,,
  - for문의 실행 흐름 순서 중요!!
    + 변수선언 -> 조건검증 -> 참이면 {} 구문 실행 -> 변화값 -> 검증 -> {} 실행 -> 변화값...
    + 조건구문이 거짓일때까지 계속 반복
  - 기본문법
  ```
  for( 초기변수 선언; 선언된 변수를 검증(조건확인); 변수의 변화값 ){
    실행문; 
  }

  // 주로 초기변수 선언할때 i를 많이 사용하는데 
  // ==>i는 반복자 (iterator) 를 말한다.
  ```

  - 예제
  ```
  for(var i = 0; i < 10; i++){
    console.log('i : ', i);
  }
  // 출력은 안되지만 마지막 i값은 10이 되고 끝난다.
  // 확인방법 : 콘솔 창에서 i를 찍어보면됨

  //위와 for문과 아래 응용 for문은 동일하게 동작한다
  var i = 0, ten = 10;
  for( ; i < ten; ){
    console.log('i : ', i);
    i++;
  }

  //--------------------- PLUS ----------------------
  // 2015버전  let  키워드 사용시
  // i를 외부에서 접근을 못함
  for(let i = 0; i < 10; i++){
    console.log('i : ', i);
  }
  // i는 9까지 출력되고 반복문이 끝난 이후엔 i로 접근이 불가함  
  // Error: a is not defined(…)
  ```

2. for( 속성 in 객체 ){}
  - 속성의 집합(객체)를 순환할 때 사용
  - 값의 집합에서는(배열) 사용하지 않는것이 좋다.
    + 왜? for문을 사용하는 것이 더 빠름 
    + for in은 객체의 속성을 접근해서 순환해야하기 때문에 느림
  - 객체를 순환
    + 왜 for문 으로 순환 못함?? 
    + 객체는 length를 사용할수 없어서 for문으로 순환을 못함.
    + 객체를 만들어서 콘솔창에서 dir 확인해보면 length 속성이 없다.
    ```
    var ss = {
      'aa': '가',
      'bb': '나',
      'cc': '다',
    };

    console.dir( ss );
    ```

  - ` "속성" in 객체 ` 
    + 이 속성이 객체 a에 있니? 라고 묻는 in 키워드
    + 객체의 속성 포함 유무를 확인 후 불리언값으로 반환
    + length속성이 없어도 순환이 가능해짐
  ```
  // 객체 정의 (속성: 값 추가)
  var zico = {
     'name': '지코',
     'amount': '300ml',
     'source': 'coconut oil'
  };

  // 객체의 속성 포함 유무를 확인할 때 in 키워드 사용
  'name' in zico; // true

  // 객체의 속성을 지울 때 delete 키워드 사용
  delete zico.length; // 제거

  // 객체의 속성을 순환하여 처리할 때 사용
  for (var prop in zico) {
    // 속성에 접근 가능
    console.log(prop); // 'name', 'amount', 'source'

    // 그렇다면 객체 속성에 할당된 값에 접근하려면?
    //1. 쩜 표기법으로 접근
    console.log(zico.source);

    //2. 각괄호로 접근 : 괄호 안에는 문자열이어야함
    var prop = 'source';
    console.log(zico[prop]);
    }

  ```


###continue, break 키워드
  - continue
    + 점핑 : 아래구문을 실행하지 않고 변화값으로 가서 다시 실행됨 
  ```
  var a = ['a','b', '', null, 'z'], b = [];

  for( var i = 0 ; i < a.length; i++){
    if( i === 3 ){ continue; }
    console.log(i);
  }
  // 0,1,2,4 출력  ==> 3이 빠져있음  continue 때문에


  //------- 문제 -------
  // 0,2,4만  출력

  // 방법1 : 변화값을 변경  --> continue 사용안하고
  for( var i = 0 ; i < a.length; i+=2){ console.log(i); }
  
  // 방법2 : 조건문 1 과 3 일때는 continue
  if( i === 1  || i === 3 ){ continue; }
 
  // 방법3 : 나머지 값이 1과 같을때 빠져
  if( i % 2 === 1 ){ continue; }

  for( var i = 0, l = a.length; i < l; i++){
    if( i % 2 === 1 ){ continue; }
    // console.log(i);
    b.push(a[i]);
  }
  console.log(b);  // ["a", "", "z"]

  //------------------- 참고 : TIP -----------------
  // 매번 객체.length 로 사용하는 것보다
  // var l = 객체.length; 변수에 담아서 사용하는것이 좋다.
  // 왜? 메모리 절약, 성능우수 
  // 객체.length 는 for문이 돌때마다 매번 가져와야 하니까,,


  ```

  - break
    + for문이 종료
  ```
  var a = ['a','b', '', null, 'z'], b = [];
  for( var i = 0, l = a.length; i < l; i++){
    if( i % 2 === 1 ){ break; }
    // console.log(i);
    b.push(a[i]);
  }
  console.log(b);  // ["a"]
  ```


