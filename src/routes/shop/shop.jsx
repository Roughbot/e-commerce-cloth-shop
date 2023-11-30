import { Route, Router, Routes } from "react-router-dom";

import CategoriesPreviw from "../categories-preview/categories-previes";
import "./shops-styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviw />} />
    </Routes>
  );
};

export default Shop;
