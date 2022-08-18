import React from "react";
import { Link } from "react-router-dom";
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

      <Link to="/payment">
        <div className="text-center mt-10">
          <button className="font-bold text-lg text-white bg-blue-600 rounded-xl  p-5 border-2 border-neutral-500 hover:bg-blue-400  cursor-pointer ">
            Confirm & Continue
          </button>
        </div>
      </Link>
    </div>
  );
};

export default OrderDetails;
