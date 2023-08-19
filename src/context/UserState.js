import React, { useReducer } from 'react'
import UserContext from './user-context'

const intialState = []

const reducer=(state,action)=>{
  switch(action.type){
    case 'ADD_USER':
        return [
            ...state,action.payload
        ]
        default:
            return state;
  }
}

const UserState = (props) => {
   
  const [state,dispatch] = useReducer(reducer,intialState)

  return (
    <UserContext.Provider value={{state,dispatch}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
