import React, { useContext } from 'react'
import { Context } from './Context'
import './ApiShow.css'
import { Link } from 'react-router-dom'
const ApiShowData = () => {
     let  {state,dispatch}=     useContext(Context)
     console.log(state.data,"isko dekhoo");
  return (
    <>   
    <Link to={'/cart'}>
    <button>Cart</button>
    </Link>

    <button onClick={()=>dispatch({type:"max"})}>maxRating</button>
    <button onClick={()=>dispatch({type:"min"})}>MinRating</button>

     
    <div id='parent_Card'>  
      
    {
        state.data.map((a,index)=>{
                let inCart=  state.cartData.find(item=>item.id===a.id)
         console.log(inCart,"isko dekhooo");
            return(<div id='card'  >
                <img  src={a.image}/>
                <p>{a.name}</p>
                <h5>{a.rating} ⭐️</h5>
                {
                  inCart?(<div> <button  onClick={()=>dispatch({type:"increment",payload:a.id})}>++</button> {inCart.
                    quantity
                    }  <button onClick={()=>dispatch({type:"decrement",payload:a.id})}>--</button> </div>):( <button onClick={()=>{dispatch({type:"addToCart",payload:a})}}>click</button> )
                }
               
            </div>)
        })
    }
</div>
</>
  )
}

export default ApiShowData