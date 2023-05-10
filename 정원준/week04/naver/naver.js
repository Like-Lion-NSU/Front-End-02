const password = document.querySelector("#password");
const check2 = document.querySelector("#check2");
const text = document.createElement('p');
const span = document.querySelector('center1');

function PSW_CHECKED (event) {
    let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(reg.test(event.target.value) === false){
        check2.style.backgroundPosition = "25% 55%";
        text.textContent = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.';
        span.append(text);
        console.log("틀렸어요");
    }else{
        console.log("맞았어요");
    }
}



password.addEventListener("change", PSW_CHECKED);
