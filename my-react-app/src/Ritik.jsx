import React, { useContext } from 'react'
import Context from './Context'
const Ritik = () => {
     let data=   useContext(Context)
     console.log(data);
  return (  
    <div>props: {data}</div>
  )
}
export default Ritik

main => app => day9=> ritik