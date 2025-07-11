import React from 'react'
import './App.css'


const App = () => {
  let arr=[1,2,3,4,5] 
  function fun1(){
    console.log("hehehehe");
    
  }
  return (
    // <div>
    // <button  onClick={fun1}>click</button>
    // </div>
    <div>App 
      {
        arr.map((a)=>{
          return(<>
          <h1> {a}</h1>
          </>)
        })
      }
    </div>
  )
}


// const Home=()=>{
//   return(
//     <div>
//       <h2> Home Compoo</h2>
//     </div>
//   )

// }
// export {Home}


export default App
