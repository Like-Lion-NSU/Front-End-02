# 생활코딩 WEB2 CSS

< style > < /style > CSS를 HTML의 문법으로 말해주는 것  
**등장 배경 : 중복의 제거**  

글자 색 바꾸기
- HTML : < font color="red" >
- CSS head: EX. P태그 < style > p{ color:red; } < /style > &rarr; 모든 p태그에 적용
- CSS html tag : EX. P태그 < p style="color:red;" >P태그< /p > &rarr; 해당 p태그에만 적용
---
## CSS의 기본 문법 
#### 구분을 위한 세미콜론; 필수
<br>
1.모든 a태그에 적용

    <style>
    a { 
        color:black;//링크태그 글자 검정색
        text-decoration:none; //밑줄 없애기
    }
    </style>
2.해당 a태그에만 적용, 1보다 우선순위 높음

    <a href="#" style="color:red; text-decoration:underline">CSS</a>

---
## a{color:red;}
a &rarr; Selector  
color:red; &rarr; Declaration, 선언, 효과   
color &rarr; Property, 속성  
red &rarr; Value

---
## Class & ID
1.  CLASS &rarr; .class
  
        <a href="#" class="exclass">CSS1</a>            
        <a href="#" class="exclass">CSS2</a>
        <a href="#" class="exclass exxclass">CSS3</a>>
class1, class2, class3 모두 지정하여 효과를 적용할 경우  
class3의 경우 두개의 class 지정 : 띄어쓰기
        
        <head>
        <style>
        .exclass{
            color:yellow; //글자색 노랑
            text-align:center; //글자 가운데 정렬
            text-decoration:none; //링크태그로 생기는 밑줄 없애기
        }
        .exxclass{
            color:green; //글자색 초록
        }
        </style>
        </head>
class3 처럼 두개의 class가 지정된 경우 style태그 안 순서상 뒤쪽 효과 적용 &rarr; 글자색 green 적용

2. ID &rarr; #ID

        <a href="#" class="exclass">CSS1</a>            
        <a href="#" class="exclass" id="exid">CSS2</a>
        <a href="#" class="exclass exxclass">CSS3</a>>
    CSS2의 경우 exclass라는 class와 exid라는 id 두가지가 적용됨
        
        <head>
        <style>
        #exid{
            color:blue;
        }
        .exclass{
            color:yellow; //글자색 노랑
            text-align:center; //글자 가운데 정렬
            text-decoration:none; //링크태그로 생기는 밑줄 없애기
        }
        .exxclass{
            color:green; //글자색 초록
        }

        </style>
        </head>
    Class는 여러곳에 적용가능하지만 ID는 한번만 정의/사용 가능 &rarr; CSS2 글자색 blue적용
---
## style 우선순위
1. ID선택자
2. CLASS선택자 (겹칠경우 뒤에 나온것이 우선)
3. TAG선택자

---
## Block 태그 vs Inline 태그
1. Block level Element: 화면 전체를 차지하는 태그 ex.div
2. Inline element: 자신의 컨텐츠 크기만큼만 차지하는 태그 ex.span

    style태그 안에서 display: block; or display: inline; 으로도 지정 가능
---
### Border 태그 요약하기

    p{
        border-width:1px;
        border-color:red;
        border-style:solid;
        // =border:1px solid red;

    }
---
### 여백주기
padding : 안쪽 여백  
margin :바깥 여백

--- 
## 그리드Grid
    <style>
    #grid{
        display:grid; //미리 지정
        grid-template-columns: 150px 1fr;
    }
    </style>
    </head>
    <body>
    <div id="grid">
        <div>nav</div>
        <div>article</div>
    </div>
    </body>
* grid-template-columns: 150px 1fr; &rarr; 첫번째 div nav를 150px만큼 지정, 두번째 div article을 나머지 크기만큼 지정
* grid-template-columns: 2fr 1fr; &rarr; nav와 article의 비율을 전체에서 2:1 비율

웹브라우저 기술 채택 지원 비율
[CanIuse](https://caniuse.com/)

---
## 반응형 디자인
예) 화면사이즈 800px을 기준으로 다른 효과를 주고 싶을 때  
가로사이즈가 800보다 크다면 =가로 사이즈가 최소 800px일 때  
&rarr; screen width>800px  = @media(min-width:800px)

    <style>
    @media(min-width:800px){
        800 이상일 때 넣을 효과
    } 
    @media(max-width:800px){
        800 이하일 때 넣을 효과
    } 
    </style>
---
## 외부스타일 시트
    <head>
    <link rel="stylesheet" href="스타일시트명.css">
    </head>
기존 < style >< /style >안에 있던 내용을 새로운 파일.css로 만들어서 지정






