import React from "react";
import { EachCartItem } from "./index";
import { useStateContext } from "../Contexts/Context";

const CartProduct = () => {
  const value = useStateContext();

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center mb-2">
        <div>
          <p className="text-sm font-semibold text-neutral-600">PRODUCTS</p>
        </div>

        <ul className="flex flex-row justify-between  w-3/6 items-center text-center px-1">
          <li className="text-xs text-neutral-600 font-bold">QUANTITY</li>

          <li className="text-xs text-neutral-600 font-bold">PRICE / COST</li>

          <li className="text-xs text-neutral-600 font-bold">DISCOUNT</li>

          <li className="text-xs text-neutral-600 font-bold">TOTAL</li>
        </ul>
      </div>
      {value.productState.cart.length ? (
        value.productState.cart.map((item, _index) => {
          return <EachCartItem key={_index} item={item} />;
        })
      ) : (
        <div className="w-full mt-2 bg-white rounded-lg border-2 border-neutral-400 h-20 grid place-items-center">
          <h4 className="text-2xl font-bold">Cart Empty</h4>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
