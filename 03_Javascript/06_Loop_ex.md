#Loop : for in 문 예제

```
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>자밥스크립트 반복문 : for in</title>
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <style type="text/css">
      body {
        margin: 10rem;
        font-size: 4rem;
        font-family: "Lato", Sans-Serif;
      }
      code {
        border-radius: 4px;
        padding: 0.1em 0.2em;
        background: #f3f3f3;
        /*font-family: inherit;*/
      }
      .target-element {
        width: 200px;
        padding: 1em;
      }

    </style>
    <!-- <script src="for-in.js"></script> -->
  </head>
  <body>

    <button lang="ko-KR" type="button" class="btn-assign-css-object">
      css 속성추가
    </button>
    <div class="target-element">
      target <code>div</code> element
    </div>

    <script>
      
      var target_el = document.querySelector('.target-element');
      console.log('target_el :',target_el);

      var btn = document.querySelector('.btn-assign-css-object');
      console.log('btn: ',btn);

      var css_object = {
        'font-size'      : '2rem',
        'outline'        : '3px solid #e4e4e4',
        'letter-spacing' : '-0.02em',
        'color'          : '#513197'
      };

      btn.onclick = cssStyle;

      function cssStyle(){
        // console.log(css_object);
        for(var css in css_object){
          console.log(css_object[css]); // 속성값들이 출력
            // 2rem 
            // 3px solid #e4e4e4
            // ...... 순서대로 출력

          var value = css_object[css];
          console.log( css,':',value);
            // font-size : 2rem
            // ...... 순서대로 출력
          target_el.style[css] = css_object[css];
        }
      }

    </script>

  </body>
</html>
```