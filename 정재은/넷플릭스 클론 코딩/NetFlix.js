const tabItems = document.querySelectorAll('.tab-item');//아이콘으로 이루어진 탭들
const tabContentItems = document.querySelectorAll('.tab-content-item'); //이동하는 각각 탭들 content1 2 3

function selectItem(event){
    removeBorder(); //칸이 클릭되면 배열을 돌며 tab-borer클래스를 지우고
    removeShow();
    this.classList.add('tab-border') //클릭된 칸의 class에 추가. 클릭된 tab 아래에 빨간 border들어오도록
    //tab-items를 눌렀을때 각 tab의 id정보들은 tab-1 , tab-1, tab-3
    //하지만 각각 불러와야하는 tab들의 id는 tab-n-content
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show')
}

function removeBorder() {
    tabItems.forEach(item=>item.classList.remove('tab-border'))
    //tabItems배열을 돌며 tab-border 클래스를 지움 + item:사용자가 지정하는 매개변수
}
const removeShow = () => {
    tabContentItems.forEach(item =>item.classList.remove('show'));
}; //border와 마찬가지로 각 콘텐츠 내용들을 보여줄 show를 지움
//위에꺼랑 똑같은 문법. 화살표함수로만 바꾸어본 것

tabItems.forEach(item=>item.addEventListener('click',selectItem));
//tabItems라는 배열에 forEach 메소드로 반복, 각 요소에 클릭이라는 이벤트를 등록함