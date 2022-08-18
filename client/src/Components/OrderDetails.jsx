import React from "react";
import { useStateContext } from "../Contexts/Context";

const OrderDetails = () => {
  const value = useStateContext();
  return (
    <div className="border-2 bg-white border-neutral-400 rounded-2xl w-full p-6 md:space-y-5">
      <div className="flex flex-row justify-between">
        <p className="text-md text-neutral-600 font-semibold">Sub-Total</p>
        <p className="font-bold">${value.totalPrice}.00</p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-md text-neutral-600 font-semibold">Shipping</p>
        <p>
          <span>Nil </span>
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-md text-neutral-600 font-semibold">Taxes</p>
        <p className="font-bold">$200</p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-black font-bold text-md"> Total</p>
        <p className="font-bold">${value.totalPrice}.00</p>
      </div>
    </div>
  );
};

export default OrderDetails;
