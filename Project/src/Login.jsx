
import React, { useState } from 'react' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  let navigate=     useNavigate()
  let [formData,SetFormData]=useState({
    email:"",
    passWord:""
  })          
  function handleForm(e){
    let {name,value}=e.target
    SetFormData({
      ...formData,[name]:value
    })
  }

    async  function handleSubmit(e){
        
    e.preventDefault()

        let res=   await axios.post("http://localhost:4000/login",formData)
        // console.log(res.data);
        let loginData=res.data
        let SingUpData=   localStorage.getItem("user")
           let realData=    JSON.parse(SingUpData)
        console.log(realData);

        if(loginData.email==realData.email  && loginData.passWord==realData.passWord){
            navigate('/home')

        }else{
            navigate("/")
        }
        
       
  
      
    // console.log(formData);
     
    //  let data=     await fetch("http://localhost:4000/create" ,{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(formData)
    // })
    // let res=    await data.json()
    // console.log(res);
  
    // console.log("heheh");

        
    


    
  }

  // {
  //   name:"rimi",
  //   passWord:"123"    
  // }
  // {
  //   "name":"123",
  //   "dsifwi":2423
  // }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  name='email' value={formData.email}  onChange={handleForm} type='email' placeholder='Name'/>
        <br></br>
        <br></br>
        <input   name='passWord' value={formData.passWord}  onChange={handleForm} type='password' placeholder='password'/>
        <br></br>
        <br></br>
        <button type='submit'> AddData</button>

      </form>
    </div>
  )
}

export default Login