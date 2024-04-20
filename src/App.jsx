import {Routes, Route, Navigate} from "react-router-dom";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import CartProvider from "./providers/CartProvider";


const App = () => {

  return (
    <CartProvider>
    <Routes>
      <Route path="/products" element={<ProductListPage/>} />
      <Route path="/products/:productId" element={<ProductDetailsPage/>} />
      <Route path="*" element={<Navigate to="/products"/>}/>
    </Routes>
    </CartProvider>
  );
};
export default App;