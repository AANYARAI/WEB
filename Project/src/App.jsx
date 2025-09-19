// import React from 'react'
// import ApiShowData from './ApiShowData'
// import { Route, Routes } from 'react-router-dom'
// import Cart from './Cart'

// const App = () => {
//   return (
//     <div>

//       <Routes>
//         <Route  path='/' element ={<ApiShowData/>}/>
//         <Route  path='/cart' element ={<Cart/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'
// import { Route, Routes } from 'react-router-dom'
// import UserDetails from './UserDetails'
// const App = () => {
//   return (
//     <div>
//       <Routes >  

//       <Route  path='/'   element={ <Home/>}/>
//       <Route  path='/user/:id'   element={ <UserDetails/>}/>

//       </Routes>

//     </div>
//   )
// }

// export default App

// import React, { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const expensiveCalculation = (num) => {
//     console.log("Calculating...");
//     let total = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       total += i;
//     }
//     return total + num;
//   };

//   // ❌ Every render runs expensiveCalculation
//   const result = expensiveCalculation(count);

//   return (
//     <div>
//       <h2>Expensive Result: {result}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   );
// }


// useMemo or useCallback

// import React, { memo, useCallback, useMemo, useState } from 'react'

// const App = () => {
//   let [count, setCount] = useState(0)
//   let [state, setState] = useState(0)

//   console.log("apppp wali fileeeee");


  //  let val=   useMemo(()=>{
  //     let data=0
  //       for(let i =0;i<1000000000;i++){
  //         data+=i

  //       }
  //       return data
  //   },[])


  // let random=Math.random()
  //   let data=0
  // function sum(){
  //   for(let i =0;i<1000000000;i++){
  //     data+=i
  //   }
  //   // return data
  //   // console.log(data);
  // }
  // sum()






  //  let even=   useMemo(()=>{
  //   return ()=>{
  //     console.log("hello");
      
  //   }
  // },[])

//  let even=  useCallback(()=>{
//   console.log("hello");
//  },[])
//   return (
//     <div>
//       {/* <h1>{val}</h1> */}
//       <h1>appp</h1>
//       <h2 >{count}</h2>
//       <button onClick={() => setCount(count + 1)}>click</button>
//       <button onClick={() => setState(state - 1)}>--</button>

//       {/* <ChildApp /> */}
//       <MemoizedChild   even={even} />
//     </div>
//   )
// }

// export default App


//   let MemoizedChild=   memo(function ChildApp() {
//     console.log("childdddddd wali fileeeee");
//   return (
//     <div>Childddddd
//       <h2></h2>
//     </div>
//   )

// })  

// // const ChildApp = () => {
// //   console.log("childdddddd wali fileeeee");

// //   return (
// //     <div>Childddddd
// //       <h2></h2>
// //     </div>
// //   )
// // }








// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {
//   let [myData,SetMyData]=useState("");
//     // let [count,setCount]=useState()
//        let data=    useRef(0)
//        console.log(data,"kya mil rha hai ");
       
//   useEffect(()=>{

//     data.current=data.current+1;
//     // setCount(count+1)

//   })

//   return (
//     <div>
//       <input  type='text'  value={myData} onChange={(e)=>SetMyData(e.target.value)}/>
//       <p> number of times render : {data.current}</p>
//     </div>
//   )
// }

// export default App



// import React, { useRef } from 'react'

// const App = () => {
//       // let data=   document.getElementById("one")
//       // console.log(data,"heheh");

//       let data=   useRef(null)

//       function done(){
//         let val=data.current.value
//         console.log(val,"msg");
//       }
      
//   return (
//     <div>
//       <input   ref={data}  id='one' name=''  />
//       <button  onClick={done}>click</button>
//     </div>
//   )
// }

// export default App


// import React from "react";
// import { motion } from "framer-motion";

// export default function App() {
//   return (
//     <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}   // pehle hidden
//         animate={{ opacity: 1, x: 0 }}      // entry ke time slide in
//         transition={{ duration: 0.8 }}
//         whileHover={{ scale: 1.1 }}         // hover par bada hoga
//         style={{
//           width: "200px",
//           height: "120px",
//           background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
//           borderRadius: "20px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           fontSize: "20px",
//           cursor: "pointer"
//         }}
//       >
//         Framer Motion 🚀
//       </motion.div>
//     </div>
//   );
// }



// import React, { lazy, Suspense, useState } from 'react'
// // import LazyLoading from './LazyLoading'
// const LazyC=lazy(()=>import('./LazyLoading'))

// const App = () => {
//   let [show,SetShow]=useState(false)

//   return (
//     <div>
        
//      {/* {show?<LazyLoading/>:null}  */}
//         {
//           show&&(<Suspense fallback="Loading..."> <LazyC/>   </Suspense>)
//         }
//          <button onClick={()=>SetShow(true)} >click</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react' 
// import axios from 'axios'
// const App = () => {
//   let [formData,SetFormData]=useState({
//     name:"",
//     passWord:""
//   })          
//   function handleForm(e){
//     let {name,value}=e.target
//     SetFormData({
//       ...formData,[name]:value
//     })
//   }

//     async  function handleSubmit(e){
//     e.preventDefault()

//         let res=   await axios.post("http://localhost:4000/create",formData)
//         console.log(res);
        

      
//     // console.log(formData);
     
//     //  let data=     await fetch("http://localhost:4000/create" ,{
//     //   method:"POST",
//     //   headers:{
//     //     "Content-Type":"application/json"
//     //   },
//     //   body:JSON.stringify(formData)
//     // })
//     // let res=    await data.json()
//     // console.log(res);
  
//     // console.log("heheh");

        
    


    
//   }

//   // {
//   //   name:"rimi",
//   //   passWord:"123"    
//   // }
//   // {
//   //   "name":"123",
//   //   "dsifwi":2423
//   // }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input  name='name' value={formData.name}  onChange={handleForm} type='text' placeholder='Name'/>

//         <br></br>
//         <br></br>
//         <input   name='passWord' value={formData.passWord}  onChange={handleForm} type='password' placeholder='password'/>
//         <br></br>
//         <br></br>
//         <button type='submit'> AddData</button>

//       </form>
//     </div>
//   )
// }

// export default App


import React from 'react'
import SignUp from './SignUp'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

const App = () => {
  return (
    <div>
   

      <Routes>
      
        <Route   path='/'   element={   <SignUp/>}/>
        <Route   path='/home'      element={<Home/>} />
        <Route   path='/login'   element={   <Login/>}/>

      </Routes>
    </div>
  )
}

export default App























