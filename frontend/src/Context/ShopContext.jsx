import React, { createContext } from 'react';
import all_products from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
     

    return (
        <ShopContext.Provider value={all_products}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;