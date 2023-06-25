# 6 컴포넌트 반복

## 자바스크립트 배열의 map() 함수

‼ 기존 배열로 새로운 배열을 만드는 역할

✅ map()문법  
arr.map(callback,[this.Arg])

- callback : 새로운 배열의 요소를 생성하는 함수
  - currentValue : 현재 처리하고 있는 요소
  - index : 현재 처리하고 있는 요소의 index 값
  - array : 현재 처리하고 있는 원본 배열
- thisArg(=선택 항목임) : callback함수 내부에서 사용할 this 레퍼런스

map() 예제 / 화살표함수

```js
const numbers = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * num);
/*const result=numbers.map(function(num){
    return num*num; 
})*/
console.log(result);
```

## key

- 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내기 위한 사용
- 유동적인 데이터를 다룰 때 원소를 새로 생성할 수도, 제거할 수도, 수정할 수도 있음

### key 설정

- 언제나 유일해야 함 (데이터가 가진 고유의 값)
- 고유한 값이 없을 때만 index값을 key로 사용, but 배열이 변경될 때 비효율적임

## map을 이용한 데이터 추가 기능 구현하기 예제

```js
import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    //const [불러올 때 사용, 변경할 때 사용]=useState(기본값)
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value); //변화가 생겼을 때 담겨잆던 값을 가져옴
  const onClick = () => {
    const nextNames = names.concat({
      //배열에 새 항목 추가
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1); //nextId 값에 1 더하기
    setNames(nextNames); // names 값 업데이트
    setInputText(""); // input을 다시 공백으로 업데이트 / 비우기
  };

  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>); //고유한 값인 id를 key값으로 줌
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};
export default IterationSample;
```

❤ POINT : 배열에 새 항목을 추가할 때 push를 사용하지 않고 concat을 이용함  
✔ push와 concat의 차이점은??  
push : 기존 배열 자체를 변경  
concat : 새로운 배열을 만듬  
⭕ 불변성 유지 : 리액트에서 상태를 업데이트할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야 함

🤍 생활코딩 CRUD - push를 이용한 불변성 유지 방법

```js
const newTopics = [...topics]; //...을 이용한 배열 복사
newTopics.push(newTopic); //새로 만든 배열에 push하기
setTopics(newTopics); //업데이트
```

## Filter를 이용한 제거 구현하기 예제 (doubleClick)

```js
const onRemove = (id) => {
  const nextNames = names.filter((name) => name.id !== id);
  // names배열에서 id가 일치하지 않는 항목만 남김
  //name : names배열의 각 요소를 나타내는 임시변수 , id와 text속성을 가짐
  setNames(nextNames); // names 업데이트
};
const namesList = names.map((name) => (
  <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
    {" "}
    {/* 해당li줄이 더블클릭 됐을 때 onRemove를 호출해라 */}
    {name.text}
  </li>
));
```

방법 : filter함수의 인자에 분류하고 싶은 조건을 반환하는 함수를 넣기
<br>
<br>

<hr>

# 7 컴포넌트의 라이프사이클 메서드

## 7-1 라이프사이클 메서드의 이해

✔ 컴포넌트의 수명 : 페이지에 렌더링 되기 전 준비과정 ~ 페이지에서 사라질 때 까지  
✔ 라이프사이클 메서드 &rarr; 클래스형 컴포넌트에서만 사용 가능  
함수형 컴포넌트 &rarr; Hooks 사용

### Will VS Did

Will : Will 접두사가 붙은 메서드는 어떤 작업을 작동하기 전에 실행
Did : Did 접두사가 붙은 메서드는 어떤 작업을 작동한 후에 실행

### 마운트, 업데이트, 언마운트

✅ 마운트 : DOM이 생성되고 웹 브라우저상에 나타나는 것  
☑ 마운트할 때 호출하는 메서드  
[컴포넌트 만들기]  
⬇  
[constructor] : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드  
⬇  
[getDerivedStateFromProps] : props에 있는 값을 state에 넣을 때 사용하는 메서드  
⬇  
[render] : 준비한 UI를 렌더링하는 메서드  
⬇  
[componentDidMount] : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

✅ 업데이트

- 부모 컴포넌트에서 넘겨주는 props가 바뀔 때
- state가 setState를 통해 업데이트될 때
- 부모 컴포넌트가 리렌더링될 때 (props가 바뀌지 않아도, state가 바뀌지 않아도)
- this.forceUpdate로 강제로 렌더링을 트리거할 때

☑ 업데이트할 때 호출하는 메서드  
[업데이트를 발생시키는 요인]  
⬇  
[getDerivedStateFromProps] : 마운트 과정에서 호출, props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용  
⬇  
[shouldComponentUpdate] : 컴포넌트 리렌더링 유무를 결정하는 메서드, 특정 함수에서 this.forceUpdate를 호출한다면 이 과정 생략 + render 호출  
⬇ ➖ (shouldComponentUpdate가 ❌false를 반환하면 여기서 작업 중지/⭕true면 render 호출)  
[render] : 컴포넌트 리렌더링  
⬇  
[getSnapshotBeforeUpdate] : 컴포넌트 변화를 DOM에 반영하기 직전 호출 메서드  
⬇ ➖ 웹 브라우저상의 실제 DOM 변화  
[componentDidUpdate] : 업데이트 작업 끝난 후 호출 메서드

✅ 언마운트 : 컴포넌트를 DOM에서 제거하는 것  
☑ componentWillUnmount : 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출 메서드

<hr>

## ❔ render(){ ... }

- 필수 메서드 (유일)
- this.props와 this.state에 접근, 리액트 요소를 반환
- 이 메서드 안에서는 이벤트 설정이 아닌 곳에서 setState 사용❌ , DOM에 접근❌

## ❔ constructor(props){ ... }

- 컴포넌트를 만들 때 처음으로 실행
- 초기 state 정할 수 있음

## ❔ getDerivedStateFromProps

- props로 받아온 값을 state에 동기화시키는 용도
- 컴포넌트가 마운트될 때 와 업데이트될 때 호출

```js
  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.value!==prevState.value){//조건에 따라 특정 값 동기화
      return{value:nextProps.value}; // 값이 다른 경우 반환?
    }
    return null; //state를 변경할 필요가 없다면 null을 반환 = 값이 같다는 것, 상태를 업데이트할 필요가 없다는 것
  }
```

## ❔ componentDidMount(){ ... }

- 컴포넌트를 만들고, <첫>렌더링을 다 마친 후 실행
- 다른 JS라이브러리 또는 프레임워크 함수 호출, 이벤트 등록, setTimeout, setInteral, 네트워크 요청 등 비동기 작업 처리

## ❔ shouldComponentUpdate(nextProps, nextState){ ... }

- props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부 지정
- ‼ true / false 반환 필수 (기본값 true 반환, false반환 시 업데이트 과정 중지)
- 현재 props/state는 this.props/this.state로 접근
- 새로 설정될 props/state는 nextProps/nextState로 접근

## ❔ getSnapshotBeforeUpdate

- render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
- 이 메서드에서 반환하는 값은 componentDidUpdate에서 snapshot값으로 전달받음
- 주 사용 : 업데이트하기 직전의 값을 참고할 일이 있을 때 (ex.스크롤바 위치 유지)

```js
getSnapshotBeforeUpdate(prevProps, prevState){ //업데이트 이전의 프롭스, 이전 상태
  if(prevState.array!==this.state.array){
    const {scrollTop, scrollHeight}=this.list //배열이 변경됐다면 실행, this.list에서 속성을 가져옴
    return {scrollTop, scrollHeight}; // 객체를 반환
  }
}
```

## ❔ componentDidUpdate(prevProps,prevState,snapShot){ ... }

- 리렌더링을 완료한 후 실행 (업데이트가 끝난 직후)
- 이전에 가졌던 데이터에 접근할 수 있음
- 위 getSnapshotBeforeUpdate에서 반환한 값 전달받을 수 있음

## ❔ componentWillUnmount(){ ... }

- 컴포넌트를 DOM에서 제거할 때 실행
- componentDidMount에서 등록한 이벤트/타이머/직접 생성한 DOM

## ❔ componentDidCatch

- 컴포넌트 렌더링 도중에 에러가 발생했을 때 오류UI보여주도록 함
- 자신에게 발생하는 에러는 잡을 수 없음❌
- 자신의 this.props.children으로 전달되는 컴포넌트에서 발생한 에러만 잡을 수 있음⭕

```JS
componentDidCatch(error,info){ //파라미터에 어떤 에러가 발생했는 지, 어디에 있는 코드에서 오류가 발생했는지
  this.setState({
    error:true
  });
  console.log({error,info});
}
```

componentDidCatch 실습

파일명 : ErrorBoundary.js

```js
import React, { Component } from "react";
class ErrorBoundary extends Component {
  state = {
    error: false, //기본값 false
  };
  componentDidCatch(error, info) {
    //에러 발생하면 호출
    this.setState({
      error: true, // 이 메서드가 error을 true로 업데이트
    });
    console.log({ error, info });
  }
  render() {
    if (this.state.error) return <div>에러 발생</div>;
    return this.props.children;
  }
}
export default ErrorBoundary;
```

⬆ 이걸 사용할 파일에서

```js
import ErrorBoundary from './ErrorBoundary';
...
render(){
  return(
    ...
    <ErrorBoundary>
      <LifeCycle color={this.state.color}/>
    </ErrorBoundary>
    ...
  )
}
```
