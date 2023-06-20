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
