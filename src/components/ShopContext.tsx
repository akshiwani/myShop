import React, { createContext, useState } from "react";
import all_product from "./Assets/all_product";

export const ShopContext= createContext<any | null >(null);

const getDefaultCart =()=> {
    let cart:number[] = [];
    // {count:number};
    for (let index = 0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props: any) => {
    const[cartItems, setCartItems]= useState(getDefaultCart());
    console.log(cartItems)
    

    const addToCart = (itemId:number)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
        alert("product added to the cart")
    }

    const removeFromCart = (itemId:number)=> {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmout = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo:any = all_product.find((product)=> product.id===Number(item));
                totalAmout += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmout;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;  
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    ) 
}
export default ShopContextProvider;