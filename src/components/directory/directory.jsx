import React from "react";
import CategoriesItem from "../categories-item/categories-item";

const Directory = ({ containers }) => {
  return (
    <div className="categories-container">
      {containers.map((category) => (
        <CategoriesItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
