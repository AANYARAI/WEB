import React, { useReducer } from 'react'

const Day8 = () => {
    let initailValue={
        todos:[],
        input:""
    }

    function reduser(state,action){
        if(action.type=="add"){
            return{
                ...state,
                input:action.payload

            }

        }
        else if(action.type=="ADD_TODO"){
            if(state.input.trim()==''){
                return;
            }
            else{
                return{
                    ...state,
                    todos:[...state.todos, state.input],
                    input:""
                    // input:""
                    
                
                }
            }
        }

    }
   let [state,dispatch]=        useReducer(reduser,initailValue)
  return (
    <div>
        <input name="name" value={state.input}  onChange={(e)=>dispatch({type:"add",payload:e.target.value})}/>
        <button onClick={()=>dispatch({type:"ADD_TODO"})}>click</button>
        {
            state.todos.map((a)=>{
                return(<>
                <h4>{a}</h4>
                </>)
            })  
        }
    </div>
  )
}

export default Day8