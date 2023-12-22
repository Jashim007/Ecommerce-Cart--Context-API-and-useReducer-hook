import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Products from './components/Products';
import Cart from './components/Cart';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
