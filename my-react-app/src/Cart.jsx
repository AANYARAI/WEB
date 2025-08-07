import React from 'react'

const Cart = ({cartData}) => {
  return (
    <div>
          <div id='parent_Card'>  
        {
            cartData.map((a,index)=>{
                return(<div id='card'  >
                    <img  src={a.image}/>
                    <p>{a.name}</p>
                </div>)
            })
        }
    </div>
    </div>
  )
}

export default Cart