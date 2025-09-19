import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    let users=[{id:1,name:"rimi"},{id:2,name:"ritik"},{id:3,name:"priyal"}]

   let {id}=     useParams()

       let userData=   users.find((a)=>{
        return a.id==id

       })
       console.log(userData);
       
   

  return (
    <div>  <h2> UserDetails  </h2>
          <h1>{userData.id}</h1>

           <h2>{userData.name}</h2>

    </div>
  )
}

export default UserDetails