// import React from 'react'
// import Dummy from './Dummy'



// const Day4 = ({data}) => {
//     // console.log(a );
//   return (
//     <div>{data}
//     {/* <Dummy/> */}
//     </div>
//   )
// }

// export default Day4



import React, { useState } from 'react'
const Day4 = () => {
   let [input,SetInput]=      useState("")
   let [data,SetData]=      useState(["hewllo", "hiii", "buyy"])
   function fun1(){
    SetData([...data,input])
    console.log(data);
    SetInput("")
    
   }
   function d(index){
   const newArr=   data.filter((a,id)=>{
      return id!=index

    })
    SetData(newArr)
         
    
    
   }
  return (
    <div>
        <input    name='input' value={input}    onChange={(e)=>SetInput(e.target.value)}/>
        <button onClick={fun1}>click</button>
        {
            data?.map((a,index)=>{
                return(<>
                <li>{a}</li>
                <button  onClick={()=>d(index)}>x</button>
                </>)
            })
        }
    </div>
  )
}

export default Day4






// [0,1,2]
// index =1

// id=0
// id=1
// id=2