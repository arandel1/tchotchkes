import * as React from "react";
import Products from "./Products";

export default function ViewProdByCategory(products, category) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredProdList, setFilteredProdList] = useState("");

  const products = [prodArray];

  const categories = [
    "All",
    "Books",
    "Decor",
    "Electronics",
    "Games & Toys",
    "Housewares",
    "Jewelry & Accessories",
    "Miscellaneous",
  ];

  const Label = styled("label")`
    padding: 10px;
    line-height: 1.5;
    display: block;
  `;

  function handleCategoryChange(categories) {
    setSelectedCategory(categories);
  }

  function getFilteredCategory() {
    let filteredProdList = products;
    if (selectedCategory) {
      filteredProdList = products.filter(
        (products) => products.category_name === selectedCategory
      );
    }
  }

  categories.forEach((category) => category_name === category);

  products.filter((product) => product.category_name);
}
return;
<div>
  <button></button>
</div>;
