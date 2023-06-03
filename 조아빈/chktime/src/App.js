
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){ //state초기화
    super(props)
    this.state = { //text를 공백, length에 0으로 초기화
      text : '',
      length : 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({text:event.target.value}) //text를 현재의 입력한 text로 변경
  }

  componentDidMount(){
    //컴포넌트가 화면에 출력되었을 때
    this.timerId = setInterval(()=>{ //length의 값을 0.5초 뒤에 변경
      this.setState({
        length : this.state.text.length
      })
    }, 500)
  }
  componentWillUnmount(){
    //컴포넌트가 화면에서 제거될 때
    clearInterval(this.timerId)//timer함수 제거
  }

  render(){
    return <div>
      <h1>글자 수 : {this.state.length}</h1>
      <textarea
        value = {this.state.text}
        onChange={this.handleChange}></textarea>
    </div>
  }
}

export default App;
