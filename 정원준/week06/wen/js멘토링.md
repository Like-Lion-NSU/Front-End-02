```js
1. (2) DOMContentLoaded
// 1,3,4는 뭘 주석을 달 필요가 없음..

2.
(1) querySelector(#header)
(2) querySelector(active)
(3) querySelector(#name-input)

3. (1)innerText , (4)htmlContent
// 문서 객체 내부의 글자를 조작하는속성은 textContent , innerHTML

4.
(1) borderRadius
(2) fontFamily
(3) lineHeight
(4) width
(5) boxSizing

5. a-3 b-1 c-2

//  (1) 인라인 Event 모델 

// ex)
 <button onclick="var msg='hellow'; alert(msg);">
    onClick Event button
 </button>

//  (2) 기본 Event 모델

// ex)
 <script>
    window.onload = function() {
        var button_obj = document.getElementById('buttion1');

        button_obj.onclick = function () {
            var msg = "hellow 기본 이벤트 모델";
            alert(msg);
        };
    };
 </script>

 <button id='buttion1'>
    onClick Event button , 기본 이벤트 모델
 </button>

//   (3) 표준 Event 모델

// ex)
 <script>
    window.onload = function() {
        var button_obj = document.getElementById('buttion2');
        var event_hadller =  function(){
            var msg = "hellow 표준 이벤트 모델";
            alert(msg);
        }
    // click 이벤트추가 
        button_obj.addEventListener('click', event_hadller);
     // click 이벤트 삭제
        button_obj.removeEventListener('click', event_hadller);
    };
 </script>
 
 <button id='buttion2'>
    onClick Event button , 표준 이벤트 모델
 </button>


6. (3)

(1) selected
// selected 속성은 페이지가 로드될 때 옵션 중에서 미리 선택되어지는 옵션을 명시
(2) isChecked
// 이런 건 찾아봐도 없는 거 같은데?
(3) checked
// checked 속성은 불리언(boolean) 속성.
// 불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 false 값을 가지고, 명시하면 자동으로 true 값을 가지게 됌
(4) isSelected
// 이것도 찾아봐도 없음

7. a-2 b-1 c-3 d-4

8. (1)

(1) preventDefault()
//  a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행
(2) prevent()
// 왜 자꾸 없는 게 보기에 있어;
(3) removeDefault()
// ㅋ
(4) default(false)
// 퉤

9. (1),(2)
// (3),(4)는 그냥 뭔가 this라서 아닐 거 같음

10.
(1) cons
(2) llog
(3) number() <- 이건 진짜 근본없다
(4) number[20] <- 이건 또 뭐야

11. (3)
// finally이 catch보다 앞에 있어서

12.
(2) array[-100]
(3) NEW Numbe r(10)
(4) number()
// 셋 다 그냥 코드 자체가 잘못된 거 아님?

13. (4)
// 이건 그냥 주석 자체가 의미가 없는..

14. (1)

15. 
catch 구문입니다
finally 구문입니다

16. (2)
// 그냥 왜인지 클래스 이름과 같은 메소드라는 말이 맘에 안 듬

17.
프로그램 : 쇼핑몰
객체 : 브랜드 , 세일 , 신상 등
속성 : 브랜드{상의,하의 등} , 세일{상의,하의 등} , 신상{상의,하의 등}

18.
프래그램 : 마트
객체 : 세일
속성 : 세일{야채,고기 등}

19.
어떤 버튼을 누르면 브랜드 명들이 나열된다

20. (2)

21. (2)
// 솔직히 mother은 출제자도 내면서 웃었다

22. (1)

23. (4)

24. (4)
// 상속받는 클래스에서 사용이 아니라 getter setter로 사용하는 거 아닌가

25.
Parent . test() 메소드
ChildA.test() 메소드
Parent . test() 메소드
ChildB.test() 메소드

```