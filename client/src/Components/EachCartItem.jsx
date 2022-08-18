import React from "react";
import { useStateContext } from "../Contexts/Context";

const EachCartItem = ({ item }) => {
  const value = useStateContext();
  return (
    <div className="w-full mt-2 bg-white rounded-lg border-2 border-neutral-400">
      <div className="flex flex-row justify-between items-center py-5 ">
        <div className="pl-5 w-2/6 flex flex-row items-center">
          <img src={item.img} alt="" className="w-2/5" />
          <p className="text-sm font-bold text-neutral-500">{item.name}</p>
        </div>

        <div className="flex flex-row justify-around w-3/6 items-center">
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
            <p className="text-neutral-600 ">{item.qty}</p>
            <button
              className="text-neutral-600"
              onClick={() => {
                value.productDispatch({
                  type: "DECREASE_QUANTITY",
                  payload: item,
                });
              }}
            >
              -
            </button>
          </div>

          <h6 className="text-xs text-neutral-600 font-bold">
            ${item.price}.00
          </h6>

          <h6 className="text-xs  font-bold">00</h6>

          <h6 className="text-xs text-black font-bold">
            ${item.price * item.qty}.00
          </h6>
        </div>
      </div>
    </div>
  );
};

export default EachCartItem;
