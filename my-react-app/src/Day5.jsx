import React, { useEffect, useState } from 'react'
import './Day5.css'
import ApiDataShow from './ApiDataShow';
import { Link } from 'react-router-dom';
const Day5 = ({input,SetInput,cartData,SetCartData}) => {


    useEffect(()=>{
        // console.log("hello");
        fetch('https://dummyjson.com/recipes').
        then((res)=>{
            return res.json()

        }).then((data)=>{
            SetInput(data.recipes)
            console.log(data.recipes,"mai hu kaun");
            
      
            
        })
        
    },[])



    


    
  return (
    <div>
      <Link to={'/cart'} > 
        <button  style={{backgroundColor:"green", height:"50px",width:"100px"}}>cart  {cartData.length}</button>
        </Link>
     <ApiDataShow  data={input}   cartData={cartData}  SetCartData={SetCartData} />
      
    </div>
  )
}

export default Day5   