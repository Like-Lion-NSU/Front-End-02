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

<hr>

### 🗨 화살표 함수

<hr>
화살표
