import {Routes, Route, Navigate} from "react-router-dom";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductList/>} />
      <Route path="*" element={<Navigate to="/products"/>}/>
    </Routes>
  );
};
export default App;