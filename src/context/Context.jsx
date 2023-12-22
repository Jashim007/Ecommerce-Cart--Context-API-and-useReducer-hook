import { createContext, useContext } from "react";

const CartContext = createContext();

export default CartContext;
export const UseCart = () => {
  return useContext(CartContext);
};
