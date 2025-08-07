import React, { useState } from 'react'

const Custom = () => {
       let [count,SetCount]=   useState(0)
       const increment=()=>{ SetCount(count+1) }
       const decrement=()=>{ SetCount(count-1) }

  return{
    count,increment,decrement
  }
}

export default Custom