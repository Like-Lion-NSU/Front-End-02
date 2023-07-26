import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function Practice() {
  const [counter, setValue]=useState(0);
  const [keyword, setKeyword]=useState("")
  const onClick=()=>setValue((prev)=>prev+1)
  const onChange=(event)=>setKeyword(event.target.value)
  console.log("run all the time")

  // const runOnlyOnce=()=>{
  //   console.log("run only once")
  // }
  // useEffect(runOnlyOnce,[])
  // //컴포넌트가 처음 실행될 때만 render될 function, 배열이 비어있따=지켜볼 대상이 없다
  useEffect(()=>{
    console.log("run only once");
  },[]);
  useEffect(()=>{
    if(keyword !=="" && keyword.length>5){
      console.log("Search",keyword)
    }
  },[keyword]) //keyword가 변경될 때만 render되어라.

  return (
    <div>
      <input type="text" placeholder="Search here..." onChange={onChange} value={keyword}/>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"click"}  onClick={onClick}/>
    </div>
  );
}

export default Practice;
