import React, { useContext } from 'react'
import { Context } from './Context'

const Cart = () => {
    let {state,dispatch}=    useContext(Context)
    console.log(state,"kya mil rha haiii");
    
  return (
    <div>
    {
        state.cartData.map((a,index)=>{
            return(<div id='cardData'  >
                <img  src={a.image}/>
                <p>{a.name}</p>
                <h2>{a.quantity}</h2>
                <button  onClick={()=>dispatch({type:"increment",payload:a.id})}>++</button> 
                <button onClick={()=>dispatch({type:"decrement",payload:a.id})}>--</button>

  
            </div>)
        })
    }
    </div>
  )
}

export default Cart