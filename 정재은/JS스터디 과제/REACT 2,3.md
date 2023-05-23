## 2-1 코드 이해하기

`import React from'react';` : 리액트를 불러와서 사용할 수 있게 해주는 코드

## 2-2 JSX - 자바스크립트의 확장 문법

### JSX 문법

✔ 컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 함  
Ex.
`function App(){return(<h1>리액트1</h1><h1>리액트2</h1>)}` &rarr; 에러남  
`<div><h1>리액트1</h1><h1>리액트2</h1></div>` &rarr; 해결책  
✅ 이유 : 컴포넌트의 변화를 감지하여 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM트리 구조로 이루어져야 한다는 규칙

### Fragment

`<div>`대신 `<Fragment>`기능도 있음

import React from 'react'; &rarr; react 모듈에 있는 Fragment 컴포넌트를 추가로 불러옴  
`<><h1>리액트1</h1><h1>리액트2</h1></>` 형태도 가능

### JS 표현식 사용

방법 : JS 표현식을 JSX 내부에서 코드를 {}로 감싼다.

```js
function App() {
    const name = ‘리액트‘;
    return (
     <>
        <h1>{name} 안녕!</h1>
        <h2>잘 작동하니?</h2>
     </>
);}
```

### 조건부 연산자(삼항 연산자, IF문)

✔ JSX 내부 JS표현식에서 if문 사용 불가능  
해결책1: JSX밖에서 if문을 사용하여 사전에 값 설정  
해결책2: { }안에 조건부 연산자 사용
ex.

```js
function App() {
  const name = "리액트";
  return;
  <div>{name === "리액트" ? <h1>리액트입니다.</h1> : null} </div>;
}
```

✔ ? 앞 조건이 true라면 ? 뒤 선택지 중 1번째를 실행 false라면 2번째를 실행(null이라 아무것도 안보여줌)

### And연산자(&&)를 사용한 조건부 렌더링

위의 코드를 && 연산자를 이용하기

```js
function App() {
  const name = "리액트";
  return;
  <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>;
}
```

✔ 조건이 참일 때에만 && 뒤의 표현식을 실행

### undefined

❎ 리액트 컴포넌으세너느 함수에서 undefined만 반환하여 렌더링하는 상황을 만들면 안됨  
ex.

```js
function App() {
  const name = undefined;
  return name;
}
```

✅ 해결책 : 값이 undefined일 수 있다면 OR연산자(||)를 사용하여 undefined일 때 사용할 값을 지정

```js
function App() {
  const name = undefined;
  return name || "값이 undefined";
}
```

✔ || : 왼쪽 피연산자가 falsy한 값이면 오른쪽 피연산자를 반환

❔ falsy하다❔ 논리적으로 거짓으로 평가되는 값

- false: 불리언 값 false
- 0: 숫자 0
- '' 또는 "" (빈 문자열): 빈 문자열
- null: 값이 없음을 나타내는 특별한 값
- undefined: 변수가 초기화되지 않았거나 값이 할당되지 않은 상태
- NaN: 숫자가 아님을 나타내는 값

➕ JSX 내부 undefined 렌더링은 가능  
ex.

```js
function App() {
  const name = undefined;
  return <div>{name}</div>;
  // 또는 return <div>{name||'undefined일때 보여줄 말'}</div>
}
```

### 인라인 스타일링 - 카멜 표기법

✅ 리액트에서 DOM 요소에 스타일을 적용시 문자열 형태❌객체 형태⭕  
선언방법1 ex)

```js
function App(){
    const name='리액트';
    const style={
        backgroundColor='black', //객체 형식이니까 , (콤마)
        color:'red',
        padding:16 //단위 생략 px로 지정
    }
    return <div style={style}>{name}</div>
}
```

선언방법2 직접지정 ex)

```js
function App(){
    const name='리액트';
    return
     <div
        style={{
          backgroundColor='black',
          color:'red',
          padding:16}}>
        {name}</div>
}
```

### className

HTML에서의 class ➡ JSX에서 className  
<클래스를 작성하는 방식은 동일>  
`.react{ background:red; color:white; }`  
적용하기⬇

```js
function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}
```

### JSX주석쓰는 법

```
return(
    {/* JSX주석 */}
)
```

## 컴포넌트

<hr>

### 컴포넌트를 선언하는 방식 - 함수형 컴포넌트, 클래스형 컴포넌트

ex) 함수형 컴포넌트

```js
import React from "react"; //re

function App() {
  const name = "리액트";
  return <div className="react">{name}</div>;
}
```

함수형 컴포넌트의 단점  
➡ state와 라이프사이클 API의 사용이 불가능 (Hooks 기능 도입으로 해결됨)  
ex) 클래스형 컴포넌트

```js
import React, {Component} from 'react';

class App extends Component{
  render(){
    const name='react';
    return div className="react">{name}</div>;
  }
}
```

➡ 클래스형 컴포넌트의 경우 state 기능 및 라이프사이클 기능을 사용할 수 있음  
➡ 임의 메서드를 정의할 수 있음  
➡ render 함수가 꼭 있어야 함 + render 함수 안에서 보여 주어야 할 JSX를 반환해야 함

### 🗨 화살표 함수

<hr>

화살표 함수와 function 함수는 가르키는 this 값이 다름  
예시1) function 함수

```js
function BlackDog() {
  this.name = "흰둥이";
  return {
    name: "검둥이", //function 함수는 자신이 종속된 객체를 this로 가르킴
    bark: function () {
      console.lo(this.name + ":멍멍");
    },
  };
}
const blackDog = new BlackDog();
blackDog.bark(); //결과 : 검둥이 : 멍멍
```

예시2) 화살표 함수

```js
function WhiteDog() {
  this.name = "흰둥이"; //화살표 함수는 자신이 종속된 인스턴스를 가르킴
  return {
    name: "검둥이",
    bark: () => {
      console.log(this.name + ":멍멍");
    },
  };
}
const whiteDog = new WhiteDog();
whiteDog.bark(); // 결과 : 흰둥이 : 멍멍
```

<hr>

### 모듈 내보내기

MyComponent 맨 아래에 작성  
`export default MyComponent;` ➡ 다른 파일에서 이 파일을 import할 때, MyComponent 클래스를 불러오도록

### 모듈 불러오기

App 컴포넌트에서 위에서 작성한 MyComponent 컴포넌트를 불러오기

```js
import React from "react";
import MyComponent from "./MyComponent"; //이게 불러오는 코드

const App = () => {
  return <MyComponent />;
};

export default App;
```

### props (properties)

- 컴포넌트 속성을 설정할 때 사용하는 요소
- props 값은 부모 컴포넌트(해당 컴포넌트를 불러와서 사용하는)에서 설정할 수 있음

JSX내부에서 props 렌더링

- props 값은 컴포넌트 함수의 파라미터로 받아와서 사용할 수 있음
- props 값 JSX내부에서 { } 로 감싸기

### defaultProps : props값을 지정하지 않았을 때 보여줄 기본값

### children : 컴포넌트 태그 사이의 내용을 보여주는 props

자식 컴포넌트 예시코드)

```JS
import React from 'react'；
const MyComponent = props => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다. <br/>
      children 값은 {props.childeren}입니다.
    </div>；
  )
}；
MyComponent.defaultProps={
  name: '기본이름'
};
export default MyComponent；
```

부모 컴포넌트 예시코드)

```js
import React from "react";
import MyComponent from "./MyComponent";

function App() {
  //const App=()=>{}
  return (
    <div>
      {/*자식한테 보내주는 props값*/}
      <MyComponent name="React">리액트</MyComponent>
      {/*여기서 MyComponent 태그 사이에 있는 '리액트' 가 children*/}
    </div>
  );
}

export default App;
```

### 비구조화 할당 문법 / 구조 분해 문법 을 통해 props 내부 값 추출하기

- 비구조화 할당 : 객체에서 값을 추출하는 문법
- 함수 파라미터 부분에서도 사용할 수 있음 ➡ 함수의 파라미터가 객체라면 그 값을 비구조화해서 사용

기존코드) ❗ props.name / props.children 을 name과 children으로 바꾸기

```js
import React from 'react'；
const MyComponent = props => {
  return (
    <div>
      안녕하세요, 제 이름은 {props.name}입니다. <br/>
      children 값은 {props.childeren}입니다.
    </div>；
  )
}；
```

비구조화 할당 문법 사용한 코드 1)

```js
import React from 'react'；
const MyComponent = props => {
  const {name, children} = props;
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br/>
      children 값은 {childeren}입니다.
    </div>；
  )
}；
```

비구조화 할당 문법 사용한 코드 2)

```js
import React from 'react'；
const MyComponent =({name, children})=>{ // ✔ 이 부분 주의
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br/>
      children 값은 {childeren}입니다.
    </div>；
  );
}；
```
