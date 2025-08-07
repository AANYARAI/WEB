import React from 'react'

const ApiShowData = () => {
    let {state,dispatch}= useContext(Context)
    // console.log(data,"isko dekhooo");
    
  return (
    <div>
        
{state.data.map((a)=>{
    return(<>
        <h2>{a.name}</h2>
        </>)
})}
    </div>
  )
}

export default ApiShowData