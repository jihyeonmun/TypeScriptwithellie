# JavaScript

## 위치

- 일반적으로 body 제일 하단부에 작성하는 것이 원칙이다
- 위에서부터 분석을 하게 되는데, 스크립트의 이상 여부를 체크하게 된다.
- 화면열리는 것을 보다 빠르게 보여줘야 유저 입장에서 빠르다고 느껴진다.

```html
//bootstrap
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
  integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
  crossorigin="anonymous"
/>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
    <script>
```

## jquery

[jquery](http://code.jquery.com/)
-> minified 된 코드 복사하기

- 다양하게 여러줄 짜야하는 것을 자바스크립트를 아주 단순하게 만들어 주는 게 주 목적!
- 웹 표준이 잡히기 전에는 브라우저 별로 만들어주기가 어려웠으나, jquery가 모든 브라우저에 맞춤형으로 제공해줘서 js에 대한 웹개발 시스템의 수준이 높아졌다.(그러나 요즘은 안 쓰는 추세...)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <div>이름 : <input type="text" id="name" /></div>
      <div>
        지역 :
        <select id="city" onclick="change_city();">
          <option value="02" selected>서울</option>
          <option value="064">제주</option>
        </select>
      </div>
      <div>
        동네 :
        <select name="" id="region_02">
          <option value="">강남</option>
          <option value="">서초</option>
        </select>
        <select name="" id="region_064" style="display: none;">
          <option value="">제주</option>
          <option value="">서귀포</option>
        </select>
      </div>
      <button type="button" onclick="regist();">등록</button>
    </div>

    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
      crossorigin="anonymous"
    ></script>
    <script>
      function regist() {
        //일반적인 코드
        //alert(document.getElementById("name").value);
        //alert(document.getElementById("city").value);
        //alert('등록을 완료했습니다.);
        //jQuery
        alert($("#name").val());
        alert($("#city").val());
      }
      function change_city() {
        // let city = document.getElementById("city").value;
        // document.getElementById("region_02").style.display = "none";
        // document.getElementById("region_064").style.display = "none";
        // document.getElementById("region_" + city).style.display = "";

        let city = $("#city").val();
        $("#region_02").hide();
        $("#region_064").hide();
        $("#region_" + city).show();
      }
    </script>
  </body>
</html>
```

> 우리가 원하는 선택 영역을 선택에 맞게 보여주는 기능을 구현하였음

## 변수 설명

- var : 동일한 변수명을 적더라도 허용해줌. (일회용 측면의 성향이 강함!)
- let : 다시 선언 불가
- const : 재선언, 재할당 불가!(final 느낌!)

## 숫자, 소수점 숫자, 문자, 날짜, 오브젝트, 배열

let a = 1;
a = 1.231;
a = "jihyeon" //자바스크립트는 형 선언할 필요가 없음
a = true;

//오브젝트는 묶어서 하나로 던지게 된다!!(키,밸류로 묶여있음!)

```js
let obj = {
name = "",
city = ""
}
obj.name = $('#name').val();\
obj.city = $('#city').val();
```

- 오브젝트 안에는 오브젝느나 배열 모두 넣을 수 있음

```js
function loadCity() {
  let city = [
    {
      code: "02",
      name: "서울",
    },
    {
      code: "064",
      name: "제주",
    },
  ];
  for (let i = 0; i < city.length; i++) {
    if (i == 0)
      $("#city").append(
        '<option value="' +
          city[i].code +
          '" selected>' +
          city[i].name +
          "</option>"
      );
    else
      $("#city").append(
        '<option value="' +
          city[i].code +
          '" selected>' +
          city[i].name +
          "</option>"
      );
  }
}
```
