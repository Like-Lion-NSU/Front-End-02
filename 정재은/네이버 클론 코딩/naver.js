const $inputId= document.querySelector("#id")
const $inputPass = document.querySelector("#pass")
const $inputPass2 = document.querySelector("#pass2")
const $inputName = document.querySelector("#name")
const $inputYear = document.querySelector("#year")
const $inputMonth = document.querySelector(".month")
const $inputDay = document.querySelector(".day")
const $inputEmail = document.querySelector("#email")
const $buttonPhone=document.querySelector(".numbutton")
const $inputPhone=document.querySelector(".phonenum")

const rock1 = document.querySelector(".rock")
const rock2 = document.querySelector(".rock2")

const text0 = document.createElement('p');
const text1 = document.createElement('p');
const text2 = document.createElement('p');
const text3 = document.createElement('p');
const text4 = document.createElement('p');
const text5 = document.createElement('p');
const text6=document.createElement('p');

const block_0 = document.querySelector(".id1")
const block_1 = document.querySelector("#PWD")
const block_2 = document.querySelector("#PWD2")
const block_3 = document.querySelector(".name1")
const block_4 = document.querySelector(".bDay")
const block_5=document.querySelector("#MAIL")
const block_6=document.querySelector(".phone0")

function ID_CHECK(event){
    var regID = /^[a-z0-9_-]{5,20}$/;
    if(regID.test(event.target.value) === false) {
        text0.textContent = '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'
        text0.style.color = 'red'
        block_0.appendChild(text0)
    } else {
        text0.remove()
    }
}
function PWD_CHECK(event) {
    var regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regPass.test(event.target.value) === false) {//test:정규표현식에서 비교할때 씀
        rock1.style.backgroundPosition = "25% 50%"
        text1.textContent = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요'
        text1.style.color = 'red'
        block_1.appendChild(text1)
    } else {
        rock1.style.backgroundPosition = "55% 0%"
        text1.remove()
    }
}
function PWD_RECHECK(event) {
    const recheck = event.target.value;
    const check = $inputPass.value;
    if (recheck !== check) {
        text2.textContent = '비밀번호가 일치하지 않습니다.'
        text2.style.color = 'red'
        block_2.appendChild(text2)
        rock2.style.backgroundPosition= "25% 0"
    }
    else{
        rock2.style.backgroundPosition = "79% 0%"
        text2.remove()
    }
}
function NAME_CHECK(event){
    var regName = /^[a-zA-Z가-힣]+$/;
    if(regName.test(event.target.value)===false){
        text3.textContent = '한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)'
        text3.style.color = 'red'
        block_3.appendChild(text3)
    }
    else{
        text3.remove()
    }
}
function YEAR_CHECK(event){
    var regYear = /^\d{4}$/;
    if(regYear.test(event.target.value)===false){
        text4.textContent='태어난 년도 4자리를 정확하게 입력하세요.'
        text4.style.color = 'red'
        block_4.appendChild(text4)
    }
    else{
        text4.remove()
        MONTH_CHECK()
    }
}
function MONTH_CHECK(event){
    const monthValue=$inputMonth.value;
    if(monthValue==='월'){
        text4.textContent='태어난 월을 선택하세요.'
        text4.style.color = 'red'
        block_4.appendChild(text4)
    }
    else{
        text4.remove()
        DAY_CHECK()
    }
}
function DAY_CHECK(event){
    const dayValue = $inputDay.value;
    var regDay=/^\d{1,2}$/;
    if(dayValue===''){
        text4.textContent='태어난 일(날짜) 2자리를 정확하게 입력하세요.'
        text4.style.color = 'red'
        block_4.appendChild(text4)
    }
    else if(regDay.test(event.target.value)===false){
        text4.textContent='생년월일을 다시 확인해주세요.'
        text4.style.color = 'red'
        block_4.appendChild(text4)
    }
    else{
        text4.remove()
    }
}
function EMAIL_CHECK(event){
    var regEmail=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    if(regEmail.test(event.target.value)===false){
        text5.textContent = '이메일 주소를 다시 확인해주세요.'
        text5.style.color = 'red'
        block_5.appendChild(text5)
    } else {
        text5.remove()
    }
}
function PHONE_CHECK(event){
    const phoneValue = $inputPhone.value;
    var regPhone=/^(01[016789])(\d{3,4})(\d{4})$/;
    if(regPhone.test(phoneValue)===false){
        text6.textContent = '형식에 맞지 않는 번호입니다.'
        text6.style.color = 'red'
        block_6.appendChild(text6)
    } else {
        text6.remove()
    }

}
$inputId.addEventListener("change", ID_CHECK)
$inputPass.addEventListener("change", PWD_CHECK) //커서가 다른 곳으로 떠났을 때
$inputPass2.addEventListener("change", PWD_RECHECK)
$inputName.addEventListener("change", NAME_CHECK)
$inputYear.addEventListener("change",YEAR_CHECK)
$inputMonth.addEventListener("change", MONTH_CHECK);
$inputDay.addEventListener("change", DAY_CHECK);
$inputEmail.addEventListener("change",EMAIL_CHECK);
$buttonPhone.addEventListener("click",PHONE_CHECK);