#사용자 정의 함수

1.isDataType()
- 데이터 유형을 올바르게 체크해주는 헬퍼 함수 
- 만든이유 ==> 객체가 아닌 null, undefined 타입체크를 위해
```

function isDataType(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}


// ------------------------------- 설 명 ---------------------------------

console.dir(Object.prototype); // {}

console.log(typeof Object.prototype.toString); // function

// 1. 객체의 프로토타입 기능 중 투스트링을 사용해서 데이터의 유형을 문자열로 반환
Object.prototype.toString.call(data)
// ==> 반환값 : "[Object {Date}]"

// 2. 문자열에서 해당 데이터 타입 이름만 잘라내야 한다. ==> slice()사용
Object.prototype.toString.call(data).slice(8, -1)
// slice(시작인덱스번호, 끝인덱스번호); 시작 ~ 끝인덱스번호 전까지 잘라서 반환
// 인덱스 : 0, 1, 2, 3, 4, 5, 6, 7, 8,  ,  ,  , -1
// 문자열 : [, O, b, j, e, c, t,  , N, u, l, l, ]

// 데이터 타입 맨앞글자가 대문자로 반환
// 3. 문자열을 소문자로 변환 ==> toLowerCase()
Object.prototype.toString.call(data).slice(8, -1).toLowerCase()

```

2.checkDomElement()
- 문서객체가 존재하는지 여부를 확인하는 함수
- 존재한다면 어떤 문서 요소 객체인지 확인 ( div? p? ul?,,,,, )
- 만든이유 ==> 작업하다가 선택한 요소 객체가 무엇인지 확인 하고 선택자가 잡히지 않을 때 디버깅용
```

function checkDomElement(element) {
  if(isDataType(element) === 'null'){
    console.info('현재 문서에 선택하고자 하는 문서 요소 객체는 존재하지 않습니다.');
  }else{
    console.log('<'+ element.nodeName.toLowerCase() + '> 는 문서 요소객체 입니다.');
  }
}

// ------------------------------- 설 명 ---------------------------------

// element.nodeName.toLowerCase() 
// element => <p class="slogan">JS is Event I/O System</p>
// nodeName => P
// toLowerCase() => p
```