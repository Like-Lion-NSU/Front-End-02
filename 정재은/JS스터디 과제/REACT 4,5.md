## 4. 이벤트 핸들링

### 이벤트를 사용할 때 주의사항

1. 이벤트 이름은 카멜 표기법으로 작성한다.
2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.  
   ex. 화살표 함수 문법으로 함수 만들어 전달, 렌더링 부분 외부에 미리 만들어서 전달
3. DOM 요소에만 이벤트를 설정할 수 있다. ➡ 직접 만든 컴포넌트에는 이벤트 자체적 설정 불가능  
   ex.  
   정상 실행 ⭕ `<button onClick={doSomething}/>` : button에 onClick 값 설정 - button을 클릭할 때 doSomething함수를 실행  
   비정상 실행 ❌ `<MyComponent onClick={doSomething}/>` : 이름이 onClick인 props를 MyComponent에게 전달

✔ input에서 입력되는 값이 바뀔 때 마다 변한 값을 기록하기

```js
import React, { Component } from "react";
class EventPractice extends Component {
  state = {
    message: "", //message를 공백으로 초기화
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}
export default EventPractice;
```

⬆의 예제는 이벤트를 처리할 때 렌더링을 하는 동시에 함수를 만들어서 전달  
⬇ 함수를 미리 준비하여 전달 &rarr; 위의 코드에서 onChange와 onClick에 전달한 함수를 따로 빼내서 컴포넌트의 임의 메소드 만들기

```js
class EventPractice extends Component {
    state = {
        message：''
    }
    constructor(props) {
        super(props)；
        this.handlechange = this.handlechange.bind(this)；
        this.handleClick = this.handleclick.bind(this)；
    }
    handleChange(e) {
        this.setState({
            message：e.target.value
        })；
    }
    handleClick(){
        alert(this.state.message);
        this.setState({
            message：''
        });
    }
    render() {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    (...)
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )；
    }
}
```

✔ this는 함수가 호출될 때 호출부에 따라 결정됨

### bind

✅ 임의 메소드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가르키기 위해서는 메소드를 this와 bind바인딩하는 작업이 필요함 &rarr; 안하면 undefined 가르킴

### bind 안쓰고 작성하기

bind를 쓴다는 것은? 새 메서드를 만들 때 마다 constructor도 수정해야함  
✅ 바벨의 transform-class-properties문법을 사용하기 : 화살표 함수 형태로 메소드 정의

```js
class EventPractice extends Component {
    state = {
        message：''
    }
    handleChange=(e)=> { //이부분들이 위에서는 bind
        this.setState({
            message：e.target.value
        })；
    }
    handleClick=()=>{
        alert(this.state.message);
        this.setState({
            message：''
        });
    }
    render() {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    (...)
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )；
    }
}
```

## input 여러개 다루기

```js
import React, { Component } from 'react'；
    class EventPractice extends Component {
        state = {
            username: '',
            message: ''
        }
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value // 이 부분이 포인트 e.target.name이 해당 input의 name을 가르킴
            });
        }
        handleClick = () => {
            alert(this.state.username + ':' + this.state.message);
            this.setState({
                username: '',
                message: ''
            });
        }
        render() {
            return (
                <div>
                    <h1>이벤트 연습</h1>
                    <input
                        type="text"
                        name="username"
                        placeholder="사용자명"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="message"
                        placeholder="아무거나 입력해 보세요"
                        value={this.state.message}
                        onChange={this.handlechange}
                    />
                    <button onClick={this.handleclick}>확인</button>
                </div>
                );
        }
    }
export default EventPractice;
```

❤ 객체 안에서 key를 [ ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용  
예제)

```js
const name = 1variantKey；
const object = {
    [name]： 'value'
}；
```

결과 &rarr; 'variantKey': 'value'

### onKeyPress 이벤트 핸들링

comment input에서 Enter를 눌렀을 때 handleClick 메소드 호출하기 예제

```js
handleKeyPress=(e)=>{
    if(e.key==='Enter'){
        this.handleClick();
    }
}
render(){
    <input
        (...)
        onKeyPress={this.handleKeyPress}
    />
}
```

## 함수형 컴포넌트로 구현해보기

e.target.name 사용❌onChange 관련 함수 만들어서 하기

```js
const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ':' + message);
        setUsername('');
        setMessage('');
    };
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                (...)
                value={username}
                onChange={onChangeUsername}
            />
            <input
                (...)
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};
```

### useState사용하여 상태에 문자열이 아닌 객체 넣기

💦💦💦 이해해라 좀 💦💦💦

```js
const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { usesrname, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value, //원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };
};
```

pdf. 144page  
✔ e.target.name 값을 활용하려면 useState를 쓸 때 input 값들이 들어 있는 form 객체를 사용

## ref:DOM에 이름 달기

이름을 단다? &rarr; HTML에서 DOM요소에 이름을 달 때 id를 사용하는 것과 같은 것  
✔ ref(reference) : 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법

❓ ref는 어떤 상황에서 사용하는 가? 'DOM을 꼭 직접적으로 건드려야 할 때 '

```js
import React, { Component } from "react";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  handlechange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000", //비밀번호가 0000이면 validated에 true / 기본값은 false임
    });
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlechange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          //this.state.validated가 true라면 success false라면 failure
          //this.state.clicked가 true라면 위에서 나온 success/failure false라면 공백
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}
```

## ref 사용

### 방법1 콜백 함수를 통한 ref 설정 (가장 기본적인 방법)

- ref를 달고자 하는 요소에 ref라는 콜백 함수를 props로 전달해주면 됨 💦💦
- 이 콜백 함수는 ref 값을 파라미터로 전달받고 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해준다.
  사용 예시) `<input ref={(ref)=>{this.input=ref}}/>`  
  ➡ this.input은 input요소의 DOM을 가르킴

### 방법2 createRef(리액트에 내장되어 있음) 사용

사용 예시 / ref설정)

```js
class RefSample extends Component {
  input = React.creatRef();
  //1번 컴포넌트 내부에서 멤버 변수로 React.createRef()를 넣어줌

  handleFocus = () => {
    this.input.current.focus();
    //3번 ref를 설정해 준 DOM에 접근하는 법 (.current가 들어가는게 콜백이랑 다름)
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
        {/* 2번 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어준다*/}
      </div>
    );
  }
}
```

## 컴포넌트에 ref 달기

### 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씀

✅ 사용법 : `<MyComponent ref={(ref)=>{this.myComponent=ref}}/>`  
App.js

```js
import React, { Component } from "react";

import EventPractice from "./EventPractice"; //import 뭐라고 부를지 from 파일

class App extends Component {
  render() {
    return (
      <div>
        <EventPractice ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
        {/*onClick={this.scrollBox.scrollToBottom} 하면 this.scrollBox가 undefined 
        -> 화살표 함수 활용하여 새로운 함수 만들고 내부에서 this.scrollBox.scrollToBottom메소드 실행*/}
      </div>
    );
  }
}

export default App;
```

EventPractice.js

```js
import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    /* 
const scrollHeight = this.box.scrollHeight；
const clientHeight = this.box.cliengHeight；
*/
    this.box.scrollTop = scrollHeight - clientHeight; //스크롤바를 맨 밑으로 내리려면
    //scrollTop: 세로 스크롤바 위치 (0~350)
    //scrollHeight: 스크롤 가능한 컨텐츠의 총 높이, 스크롤되지 않은 영역을 포함하여 요소의 전체 높이 (650)
    //clientHeight: 요소의 내용이 표시되는 영역의 높이, 스크롤바를 사용하여 컨텐츠를 볼 수 있는 영역의 높이를 반환 (300)
  };
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}
export default ScrollBox;
```
