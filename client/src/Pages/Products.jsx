import React from "react";
import { ProductHeader, ProductGrid, ProductCard } from "../Components";
import { useStateContext } from "../Contexts/Context";
import "../App.css";

const Products = () => {
  const value = useStateContext();

  return (
    <div className={`text-black flex flex-col bg-gray-400 w-full`}>
      <div className="w-4/5 m-auto">
        <ProductGrid />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          {value.productState.product.map((item, _index) => {
            return <ProductCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
