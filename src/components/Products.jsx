import SingleProduct from "./Single_product_item.jsx";
import {UseCart} from "../context/Context";

const Products = () => {
 
  let {state}=UseCart();
 
  return (
    <div className="bg-slate-200">
      {state.loading && "Loading"}
      {state.error && "Error in fetching data"}
      {state.products && (
        <div className="  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 p-5 ">
          {state.products.map((prod) => {
            return (
              <SingleProduct
                key={prod.id}
                uuid={prod.id}
                image={prod.image}
                title={prod.title}
                price={prod.price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
