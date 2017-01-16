##attribute 와 property 차이
- attribute : 정적
  + HTML 속성들은 attribute 
  + 값이 모두 String 으로 넘어옴.
  + 변하지 않고 초기 (default)값을 전달한다는 것은 의미
  + el.getAttribute( 'checked' ) // 'checked'
  + $( el ).attr( 'href' ) // 값을 문자열로 반환
- property : 동적
  + CSS JS 에서의 속성들은 property 라고 불림
  + 프로퍼티는 객체 안에 들어있는 { 이름: 값 } 이름과 값의 쌍 묶음. 
  + JavaScript 프로파티을 취급 
    * boolean, date, function 등 반환값을 가져옴
  + HTML properties는 변할 수 있다
  + el.checked // true or false
  + $( el ).prop( 'href' ) // 값과 절대주소 반환 
- **참고 블러그**
  + [attr() Vs prop()](http://webclub.tistory.com/118)


---

###콘솔창에서
- $0 하면 html창에서 내가 선택한 요소를 콘솔에서 가져온다.
- $$() == 쿼리셀렉터올  과 같은 기능 
==> 여기서 $는 제이쿼리 아니야!!! 
===> 확인 : `$.fn.jQuery`
====> $가 제이쿼리 라면 버전이 출력됨.
- inspect() 함수는 콘솔에서 대상 위치를 찾아줌
  + inspect($('찾고싶은거'))  
  + inspect($$('찾고싶은거')) 

---

**제이쿼리는,,,**
- 돔접근이 쉬움 그리고 크로스브라우징은 해결됨
- 하지만 속도저하 네이티브랑 10배는 차이남
- 네이티브는 빠름 단 크로스브라우징에 어려움이 있어 기피할뿐,,네이티브 권장

**JS에서 너비값 가져올 때의 이슈**
콘텐츠를 요소검사로 확인할 때는 너비값이 123.5 인데
값을 가져오면 브라우져 맘대로 정수로 올려서 123이 출력됨  
==> 소숫점 허용 안함!! 값을 올림해서 정수 반환한다.
===> 그래서 디자인이 소숫점이면 틀어짐 디자인단에서 소숫점은 NO!!
또한, 브라우져는 %를 px단위로 환산해서 보여준다.

**이미지 배율** 
요즘 이미지 배율은 1, 2, 3 작업
모바일 시대라 보통 배율2로 작업을 하는데,,,
배율 1배수 정수로 작업하고 배율 높이는것을 권장 
배율 2배수에서 1배수로 나누면 소숫점 나올수밖에 없어

---

###transform(GPU) 와 left(CPU) 사용
```
// 1. transform 사용 : GPU
view.style.transform = 'translateX('+ (-1 * view_content_width * active_index) +'px)';

// GPU 사용 : 하위브라우져 호완 안됨. 하지만 더 빠름
// 왜?? 원래 CPU가 할일을 GPU가 거들어서 해주니까..



// 2. left 사용 : CPU
view.style.position = 'absolute';
view.style.top = '0px';
view.style.left = -1 * view_content_width * active_index +'px';

// CPU 사용 : 과부화, 발열 그러나 크로스브라우징은 가능!!! 
```
