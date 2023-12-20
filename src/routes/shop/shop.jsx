import { Route, Routes } from "react-router-dom";
import Category from "../category/category";
import CategoriesPreviw from "../categories-preview/categories-preview";
import "./shops-styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviw />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
