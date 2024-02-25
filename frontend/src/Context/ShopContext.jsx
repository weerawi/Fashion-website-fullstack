import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index=0; index < all_product.length; index++){
        cart[index] = 0;
    }

    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());  

    return (
        <ShopContext.Provider value={ all_product }>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;