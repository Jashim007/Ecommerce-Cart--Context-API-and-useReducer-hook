const CartReducer = (state, action) => {
  let updatedCart = [];
  switch (action.type) {
    case "SET_PRODUCTS_LOADING":
      return { ...state, loading: true };
    case "SET_PRODUCTS_DATA":
      return { ...state, loading: false, products: action.payload };
    case "SET_PRODUCTS_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "ADD_TO_CART":
      updatedCart = action.payload;
      return { ...state, cart: updatedCart };
     case "REMOVE_FROM_CART":
       updatedCart = action.payload;
       return { ...state, cart: updatedCart };
    default:
      return { ...state };
  }
};

export default CartReducer;
