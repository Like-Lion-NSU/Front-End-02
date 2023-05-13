const $input=document.querySelector("#pass")
const rock1=document.querySelector(".rock")
const text=document.createElement('p');
const block_1=document.querySelector("#PWD")
function PWD_CHECK(event){
    var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(reg.test(event.target.value)===false){//test:정규표현식에서 비교할때 씀
        rock1.style.backgroundPosition="25% 50%"
        text.textContent='8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요'
        text.style.color='red'
        block_1.appendChild(text)
    }else{
        rock1.style.backgroundPosition="79% 0%"
        text.remove()
    }
}
$input.addEventListener("change",PWD_CHECK) //커서가 다른 곳으로 떠났을 때