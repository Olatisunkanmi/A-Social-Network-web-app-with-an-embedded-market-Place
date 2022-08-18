import React from "react";
import { Link } from "react-router-dom";
import {
  CartProduct,
  OrderDetails,
  HelpDesk,
  CartProductSmallDevices,
} from "../Components/index";
import { useStateContext } from "../Contexts/Context";

const Cart = () => {
  const value = useStateContext();

  return (
    <div className="mt-10 m-auto lg:w-4/5 xl:w-3/5 ">
      {/**   Cart Header  */}
      <div className=" justify-between w-full flex flex-row items-center p-5 md:p-0">
        <div>
          <p className="text-2xl font-semibold font-serif">My Cart</p>
        </div>

        <div className="flex flex-row items-center space-x-3 text-sm">
          <p className="font-semibold">save order </p>

          <Link to="/checkout/2">
            <button className="py-2 px-4 rounded-xl text-white font-semibold hover:bg-blue-400 bg-blue-600">
              Checkout
            </button>
          </Link>
        </div>
      </div>

      {/* Cart Section *  */}

      <div className="w-full flex flex-col lg:flex-row mt-10 justify-between md:space-x-10">
        <div className="w-4/6 hidden md:block">
          <CartProduct />
        </div>

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

        <div className="w-full space-y-2 flex flex-col p-5 md:p-0 md:w-2/6 ">
          <p className="text-md font-semibold text-neutral-600">
            Order Summary
          </p>
          <OrderDetails />
          <HelpDesk />
        </div>
      </div>
    </div>
  );
};

export default Cart;
