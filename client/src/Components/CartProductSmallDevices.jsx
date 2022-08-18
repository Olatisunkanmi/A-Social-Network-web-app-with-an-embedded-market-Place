import React from "react";
import product from "../Assests/pro.png";
import { useStateContext } from "../Contexts/Context";

const CartProductSmallDevices = ({ item }) => {
  const value = useStateContext();
  return (
    <div className="border-2 bg-white border-neutral-400 rounded-2xl w-full p-6 md:space-y-5">
      <div className="w-full flex flex-row items-center mb-2">
        <img src={item.img} alt={item.name} className="w-2/5" />
        <p className="text-md font-bold text-neutral-500">{item.name}</p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-md text-neutral-600 font-semibold">Quantity</p>
        <div
          className="text-sm flex flex-row 
            p-1 px-2
            font-bold space-x-2 border-2 rounded-full items-center"
        >
          <button
            className="text-neutral-600"
            onClick={() => {
              value.productDispatch({
                type: "INCREASE_QUANTITY",
                payload: item,
              });
            }}
          >
            +
          </button>
          <p className="text-neutral-600">{item.qty}</p>
          <button
            className="text-neutral-600"
            onClick={() => {
              value.productDispatch({
                type: "DECREASE_QUANTITY",
                payload: item,
              });
            }}
          >
            {" "}
            -{" "}
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-md text-neutral-600 font-semibold">Price</p>
        <p className="font-bold">${item.price}.00</p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-md text-neutral-600 font-semibold">Discount</p>
        <p>
          <span className="font-bold ">0</span>
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-black font-bold text-md"> Total</p>
        <p className="font-bold">${item.price * item.qty}.00</p>
      </div>
    </div>
  );
};

export default CartProductSmallDevices;
