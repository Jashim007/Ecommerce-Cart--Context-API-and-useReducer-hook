import CartContext from "./Context";
import { useReducer, useEffect, useRef } from "react";
import CartReducer from "./../reducers/CartReducer";

const url = "https://fakestoreapi.com/products";
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {
    products: [],
    error: null,
    loading: false,
    cart: [],
  });

  // Use a ref to track if data has been fetched
  const hasFetchedData = useRef(false);

  // Declare fetchData function at the top level
  async function fetchData(url,signal) {
    try {
      console.log("Loading Data from API");
      dispatch({ type: "SET_PRODUCTS_LOADING", payload: "Loading" });
      let res = await fetch(url, { signal });
      if (!res.ok) {
        throw new Error(res);
      }
      let apiData = await res.json();
      dispatch({ type: "SET_PRODUCTS_DATA", payload: apiData });
    } catch (error) {
      if (!signal.aborted) {
        dispatch({ type: "SET_PRODUCTS_ERROR", payload: error });
      }
    } finally {
      // Mark as fetched even on error to avoid re-fetching
      hasFetchedData.current = true;
    }
  }

  useEffect(() => {
    if (!hasFetchedData.current) {
      const abortController = new AbortController();
      const signal = abortController.signal;

      fetchData(url,signal);

      return () => abortController.abort();
    }
  }, []); // Empty dependency array to run only on mount

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
