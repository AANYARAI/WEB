
import { createContext, useReducer, useEffect } from 'react'
 export const Context= createContext()
 const initialData={
    data:[]
 }
 function reduser(state,action){
    if(action.type=="FETCH_DATA"){
        return{
            ...state,data:action.payload
        }

    }

 }

 const ContextP=({children})=>{
      const [state,dispatch] =  useReducer(reduser,initialData)

      useEffect(()=>{
        // console.log("hello");
        fetch('https://dummyjson.com/recipes').
        then((res)=>{
            return res.json()

        }).then((data)=>{ 
            dispatch({type:"FETCH_DATA" ,payload:data.recipes})   
        })
        
    },[])

    return(
        <Context.Provider value={{state,dispatch}}>
        {children}
        </Context.Provider>
    )

 }


 export default ContextP