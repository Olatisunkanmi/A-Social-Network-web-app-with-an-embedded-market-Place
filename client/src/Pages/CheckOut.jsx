import { ArrowBack } from "@material-ui/icons";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  CheckOutProduct,
  CheckoutOrderDetais,
  CartProductSmallDevices,
  CheckoutItem,
} from "../Components";
import { useStateContext } from "../Contexts/Context";

const Cart = () => {
  const value = useStateContext();
  return (
    <div className="mt-10 m-auto lg:w-4/5 xl:w-3/5 ">
      {/**   Cart Header  */}
      <div className=" justify-between w-full flex flex-row items-center p-5 md:p-0">
        <div>
          <p className="text-2xl font-semibold font-serif">
            1. Confirm Your Order
          </p>
        </div>

        <Link to="/cart/95">
          <div className="flex flex-row text-sm font-semibold items-center space-x-3">
            <ArrowBack className="checkout-btn" />
            <p>Back </p>
          </div>
        </Link>
      </div>

      {/* Cart Section *  */}

      <div className="w-full flex flex-col lg:flex-row mt-10 justify-between md:space-x-10">
        <div className="w-4/6 hidden md:block">
          {value.productState.cart.map((item, _index) => {
            return <CheckoutItem item={item} key={_index} />;
          })}
        </div>
        <div className="w-full block md:hidden p-3 space-y-3">
          <div className="w-full block md:hidden p-3 space-y-3">
            {value.productState.cart.length ? (
              value.productState.cart.map((item, _index) => {
                return <CartProductSmallDevices key={_index} item={item} />;
              })
            ) : (
              <div className="w-full mt-2 bg-white rounded-lg border-2 border-neutral-400 h-20 grid place-items-center">
                <h4 className="text-2xl font-bold">Cart Empty</h4>
              </div>
            )}
          </div>
        </div>

        <div className="w-full space-y-2 flex flex-col p-5 md:p-0 md:w-2/6 ">
          <p className="text-md font-semibold text-neutral-600">
            Order Summary
          </p>

          <CheckoutOrderDetais />
        </div>
      </div>
    </div>
  );
};

export default Cart;
