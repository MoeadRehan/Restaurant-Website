import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };

    return (
      <CartContext.Provider value={{cartItems, setCartItems}} >
        {props.children}
      </CartContext.Provider>
    );
  };