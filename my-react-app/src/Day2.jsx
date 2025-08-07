// import React, { useState } from 'react'

// const Day2 = () => {
//    let [count ,SetCount]=     useState(0)
//    let [color ,SetColor]=     useState(true)
//     function fun1(){
//         SetCount(count+1)  
//     }
//     function  fun2(){
//         SetColor(!color)
//     } 
//   return (
//     <div style={{backgroundColor:color?"red":"green",height:"400px"}}>
//       <h2> {count}</h2>
//     <button onClick={fun1} > Incr</button>
//     <button onClick={()=>SetCount(count-1)} > decr</button>
//     <button onClick={()=>SetCount(0)} > reset</button>
//     <button onClick={fun2} > change</button>
//     </div>
//   )
// }

// export default Day2



import React, { useState } from 'react'

const Day2 = () => {
    const [input,SetInput]=     useState("")
    function fun1(e){
        SetInput(e.target.value)   
    }
  return (
    <div>
        <h2>{input}</h2>
        <input    onChange={fun1} type='text'  placeholder='Enter your name'/>
    </div>
  )
}


export default Day2