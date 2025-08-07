import React from 'react'
import useCustom from './Custom'
const Day10 = () => {
      let {  count,increment,decrement}  =  useCustom(0)
  return (
    <div>
        <p>{count}</p>
        <button  onClick={increment}>++</button>
        <button  onClick={decrement}>--</button>

    </div>
  )
}

export default Day10