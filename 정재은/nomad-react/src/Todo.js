import { useState } from "react";

function App(){
    const [todo, setTodo] =useState("");
    const [todos, setTodos]=useState([]);
    const onChange=(event)=>setTodo(event.target.value);
    const onSubmit=(event)=>{
        event.preventDefault();
        if(todo===""){
            return; //아무 일도 일어나지 않게
        }
        setTodo("") //입력하고 엔터 누르면 input을 공백으로
        setTodos((currentArray)=>[todo, ...currentArray]) 
        // 첫 번째 입력 : a -> setTodos(([빈배열]) =>[a, [빈배열]])
        // 두 번째  입력 : b -> setTodos(([a])=>[b,[a]]) -> [b,a]
    }
    
    return(
        <div>
            <h1>My TODO({todos.length})</h1>
            <form onSubmit={onSubmit}>
            <input
            onChange={onChange}
            value={todo} 
            type="text" placeholder="write your todo" />
            <button>TODO</button>
            </form>
            <hr/>
            <ul>
                {todos.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            
            {/*하나의 array에 있는 item을 내가 원하는 것으로 바꾸어줌, 새로운 array로 return*/}
            {/*첫 번째 argument로 현재의 item을 가져옴(진행되고 있는 순서에 맞는 item)*/}
        </div>
    )
}
export default App;