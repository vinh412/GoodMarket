import React, { createContext, useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload.user,
        shop: action.payload.shop
      }
    case 'LOGOUT':
      return {
        user: null,
        shop: null
      }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const shop = JSON.parse(localStorage.getItem('shop'));
  const [state, dispatch] = useReducer(authReducer, {
    user: user,
    shop: shop
  })

  console.log('AuthContext state:', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}