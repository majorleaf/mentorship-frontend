import React, { type ReactNode, createContext, useContext } from 'react'

// Type for our context
interface ShopContextType {
  backendUrl: string;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

interface ShopContextProviderProps {
  children: ReactNode
}

const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
  const backendUrl = "https://mentorship-backend-r9vb.onrender.com"

  const value: ShopContextType = {
    backendUrl
  }

  return (     
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}


export const useShopContext = () => {
  return useContext(ShopContext)
}

export default ShopContextProvider
