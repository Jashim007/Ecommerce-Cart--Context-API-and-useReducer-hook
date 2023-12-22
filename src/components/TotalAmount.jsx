import { UseCart } from "../context/Context";
const TotalAmount = () => {
  const { state } = UseCart();
  let totalAmount = state.cart.reduce((totalAmt, cartItem) => {
    return (totalAmt += cartItem.price);
  }, 0);
  totalAmount = parseFloat(totalAmount.toFixed(2));
  return (
    <>
      <div className="w-1/3 rounded-md flex gap-3 bg-white px-5 py-10 h-10 items-center justify-center my-5 shadow-xl font-bold">
        <div>Total Amount:</div>
        <div>&#8377;{totalAmount}</div>
      </div>
    </>
  );
};
export default TotalAmount;
