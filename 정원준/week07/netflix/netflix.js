// tab-item이란 클래스를 가진 dom객체를 tabItems에 저장
const tabItems = document.querySelectorAll('.tab-item');
// tab-content-item이란 클래스를 가진 dom객체를 tabContentItems에 저장
const tabContentItems = document.querySelectorAll('.tab-content-item');

// 함수 selectItem
function selectItem(e) {
    // Border(),Show()함수 실행
    removeBorder();
    removeShow();
    // tab-border를 클래스리스트에 추가
    this.classList.add('tab-border');
    // tabContentItems에 tab-1,tab-2,tab-3 중 하나를 저장하겠죠
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    // show를 클래스리스트에 추가
    tabContentItems.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// tab-item이란 클래스를 가진 객체가 클릭되면 이벤트 실행
tabItems.forEach(item => item.addEventListener('click', selectItem));