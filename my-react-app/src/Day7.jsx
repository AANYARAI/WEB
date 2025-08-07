// import React, { useReducer, useState } from 'react'
// const Day7 = () => {
//     function reduser(count,action){
//         if(action.type=="incre"){
//             return count+1;
//         }
//         else if(action.type=="d"){
//             return count-1
//         }
//         else if(action.type=="reset"){
//             return 0
//         }
//         else{
//             return count
//         }

//     }
//          let [count,dispatch] =        useReducer(reduser,0)
//     // let [count,SetCount]=        useState(0)
//   return (
//     <div>
//           <p>{count}</p>
//           <button onClick={()=>dispatch({type:"incre"})}>click</button>
//           <button onClick={()=>dispatch({type:"d"})}>--</button>
//           <button onClick={()=>dispatch({type:"reset"})}>--</button>
//     </div>
//   )
// }

// export default Day7