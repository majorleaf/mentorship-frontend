import React from 'react';
import  { createContext, useContext, ReactNode } from 'react';

interface ShopContextType {
    backendUrl: string;
}

export const ShopContext = createContext<ShopContextType | undefined>(undefined);

interface ShopContextProviderProps {
    children: ReactNode;
}

export const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
    const backendUrl = "https://mentorship-backend-r9vb.onrender.com";

    const value: ShopContextType = {
        backendUrl,
    };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export const useShopContext = () => {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error('useShopContext must be used within a ShopContextProvider');
    }
    return context;
};
