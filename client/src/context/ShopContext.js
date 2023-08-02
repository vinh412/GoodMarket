import React, { createContext, useReducer } from 'react'

export const ShopContext = createContext()

export const shopReducer = (state, action) => {
  switch (action.type) {
    case 'SETSHOP':
      return { shop: action.payload }
    case 'LOGOUT':
      return { shop: null }
    default:
      return state
  }
}

export const ShopContextProvider = ({ children }) => {
    
    React.useEffect(() => {
        fetch('api/v1/shop')
          .then((response) => response.json())
          .then((response) => setShop(response.shop))
          .then(() => setLoading(false))
      }, []);

  const [state, dispatch] = useReducer(shopReducer, { 
    user: user
  })

  console.log('ShopContext state:', state)
  
  return (
    <ShopContext.Provider value={{ ...state, dispatch }}>
      { children }
    </ShopContext.Provider>
  )
}