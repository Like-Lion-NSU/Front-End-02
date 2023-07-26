import { useEffect, useState } from "react";

// function Hello(){
//     useEffect(()=>{
//         console.log("created")
//         return()=>console.log("destroyed")
//     },[]);
//     return <h1>HI</h1>
// }
function Hello(){
    function destroyedFn(){
        console.log("destroyed");
    }
    function createdFn(){
        console.log("created")
        return destroyedFn;
    }
    useEffect(createdFn,[]);
    return <h1>HI</h1>
    // useEffect(()=>{
    //     console.log("created");
    //     return()=>console.log("destroyed");
    // },[])
}
function Cleanup(){
    const [showing, setShowing]=useState(false);
    const onClick=()=>setShowing(prev=>!prev);
    //setShowing을 통해 이전 value 값을 받아온 후 반댓값 리턴
    return(
        <div>
            {showing ? <Hello/>:null}
            <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
}
export default Cleanup;