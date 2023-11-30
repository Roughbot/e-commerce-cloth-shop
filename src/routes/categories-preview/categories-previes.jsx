import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview";
import { CategoriesContext } from "../../components/context/catrgories";

const CategoriesPreviw = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreviw;
