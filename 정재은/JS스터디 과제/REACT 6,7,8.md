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

# Hooks

### Hooks란?

- 함수형 컴포넌트에서도 useState(상태를 관리할 수 있게 도와주는), useEffect(렌더링 직후 작업을 설정하는) 등의 다양한 작업을 할 수 있게 도와주는 기능

## useState

- 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해줌
- 이 함수가 호출되면 배열을 반환  
  첫번째 원소 : 상태 값 / 두번째 원소 : 상태를 설정하는 함수  
  이 함수에 파라미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀌고 리렌더링됨
- 하나의 상태 값만 관리할 수 있음 (=관리해야 할 상태가 여러개면 useState 여러 번 사용)

## useEffect

- 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
- 클래스형 컴포넌트의 componentDidMount+componentDidUpdate

```js
useEffect(() => {
  console.log("렌더링 완료");
  console.log({
    name,
    nickname,
  });
});
```

### useEffect - 마운트 될 때만 실행

```js
useEffect(() => {
  console.log("마운트될 때 실행/첫 렌더링");
}, []);
//useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때(마운트될 때)만 실행하고 업데이트될 때는 실행하지 않으려면 두 번째 파라미터로 비어있는 배열 넣어주기
```

### useEffect - 특정 값이 업데이트(변경)될 때만 실행

```js
useEffect(() => {
  console.log(name);
}, [name]); //배열안에 검사하고 싶은 값 넣어주기
```

### useEffect - cleanup (뒷정리)

- useEffect는 렌더링되고 난 직후마다 실행되는 것이 기본값 But 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하기 위해 사용하는 것이 뒷정리 함수 반환
- 뒷정리 함수가 호출될 때는 업데이트되기 직전의 값을 보여줌
- 언마운트될 때만 뒷정리 함수를 호출하고 싶다면 useEffect 함수의 두 번째 파라미터에 빈 배열 넣기

```js
useEffect(() => {
  console.log("effect"); //나타날 때
  console.log(name);
  return () => {
    console.log("cleanup"); //사라질 때
    console.log(name);
  };
}, [name]);
```

## useReducer

- 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용
- 현재 상태, 업데이트를 위해 필요한 정보를 담은 action값을 전달받아 새로운 상태를 반환하는 함수
- 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있음 (장점)
- useReduver에서 사용하는 액션 객체는 ‼ 반드시 type을 지니고 있을 필요 없음❌, 객체 뿐 아니라 문자열 숫자도 가능⭕
- 리듀서 함수에서 새로운 상태를 만들 때는 ‼ 반드시 불변성을 지켜주여야 함

```js
function reducer(state,action){
  return {...}; //불변성을 지키면서 업데이트한 새로운 상태를 반환
}
```

action값 ex.

```js
{type:'INCREMENT', /*그 외 추가 값들*/}
```

```js
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //리듀서의 첫 번째 파라미터에는 리듀서 함수, 두 번째 파라미터에는 해당 리듀서의 기본값
  // ->이 Hook을 사용하여 state(현재 가르키고 있는 상태)와
  // dispatch함수(액션을 발생시키는 함수)를 받아옴
  return (
    <div>
      <p>현재 카운터 값은 {state.value} </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};
```

### useReducer - 인풋 상태 관리하기

```js
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}
const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
};
```

## useMemo

- 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있게 해줌

useMemo의 사용  
useMemo를 사용하지 않고 리스트에 숫자를 추가하여 그 평균을 보여주는 컴포넌트를 작성한다고 한다면, (예제 pdf208page) 단순히 인풋 내용이 수정될 때도 평균을 구하는 함수가 호출됨.  
useMemo를 통하 ❗렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이 전 연산 과정을 '다시 사용'하는 것이 가능❗

## useCallback

- 렌더링 성능을 최적화해야 하는 상황에서 사용
- useCallback 사용 시 만들어 놨던 함수를 재사용할 수 있음

```js
const Average = () => {
  const [list, setList] = useState({});
  const [number, setNumber] = useState("");
  //callback 사용 전에는 const onChange=e=>{}
  const onChange = useCallback((e) => {
    //첫 번째 파라미터 : 생성하고 싶은 함수
    setNumber(e.target.value);
    //두 번째 파라미터 : 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시하는 '배열'
  }, []); //컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]); //number 혹은 list가 바뀌었을 때만 함수 생성
};
```

- 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 ❗ 반드시 두 번째 파라미터 안에 포함시켜야함  
  &rarr; 예제에서 onInsert는 기존의 number와 list를 조회해서 nextList를 생성함 ➡ 배열 안에 반드시 number와 list가 들어있어야 함

## useRef(214pgage)

- 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있게 해줌
- useRef를 사용하여 ref를 설정하면 useRef를 통해 만든 객체 안의 current값이 실제 엘리먼트를 가르킴
- 로컬 변수(렌더링과 상관없이 바뀔 수 있는 값)를 사용해야 할 때 활용
- 🛑렌더링과 관련되지 않은 값을 관리할 때만 사용해야함. ref안의 값이 바뀌어도 컴포넌트가 렌더링되지 않음
