import React, { useState } from 'react'
import './Day5.css'
import Day5 from './Day5';
const ApiDataShow = ({data ,cartData,SetCartData}) => {
    // console.log(data,"hehe");
    console.log(cartData,"KYA AA RHA HAI");
    let [isActive,SetIsActive]=useState(false)

    function fun1(a){
        SetCartData([...cartData,a])
        SetIsActive(true)

    }
  return (
    <div>

        <div id='parent_Card'>  
        {
            data.map((a,index)=>{
                return(<div id='card'  >
                    <img  src={a.image}/>
                    <p>{a.name}</p>

                    {
                        isActive?<button> + -</button>: <button  onClick={()=>fun1(a)}>addTOcart</button>
                    }
                   
                  
                </div>)
            })
        }
    </div>
    </div>

  )
}

export default ApiDataShow



// main=> app => Day5=>ApiDataShow
//         |
//         cart