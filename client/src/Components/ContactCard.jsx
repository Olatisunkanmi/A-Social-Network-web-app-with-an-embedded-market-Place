import React from "react";
import { useStateContext } from "../Contexts/Context";

const ContactCard = () => {
  const value = useStateContext();
  return (
    <div className="space-y-5">
      <div className="">
        <p className="text-ms font-serif text-black font-semibold">
          Contact Information
        </p>
      </div>

      <div className="mt-3">
        <p className="text-neutral-500 text-xs font-bold">Email Address</p>
        <input
          type="text"
          className="payment-input"
          placeholder="Enter your email address"
        />
      </div>

      <p className="text-ms font-serif text-black font-semibold mt-5">
        Payment Information
      </p>

      <div>
        <p className="text-neutral-500 text-xs font-bold">Name on Card</p>
        <input
          type="text"
          placeholder="Enter the name on the credit card"
          className="payment-input"
        />
      </div>
      <p className="text-neutral-500 text-xs font-bold">CREDIT OR DEBIT CARD</p>
      <div className="flex flex-row payment-input ">
        <input
          type="text"
          placeholder="Card number "
          className="w-4/5 outline-none placeholder:text-xs"
        />
        <input
          type="text"
          placeholder="MM/YY  "
          className="w-1/5 outline-none placeholder:text-xs"
        />
        <input
          type="text"
          placeholder=" CVC"
          className="w-1/5  outline-none placeholder:text-xs"
        />
      </div>

      <div>
        <p className="text-neutral-500 text-xs font-bold"> COUNTRY</p>
        <select className="payment-input">
          <option> United States of America </option>
          <option> Nigeria </option>
        </select>
      </div>

      <div>
        <p className="text-neutral-500 text-xs font-bold">
          By clicking on 'Submit Payment', you confirm that you fully agree to
          our Terms Of Service and to our Customer's Policy.
        </p>
      </div>

      <div className="text-center">
        <button className="p-5 bg-blue-600 text-white rounded-xl payment-btn font-semibold font-sans ">
          <p>
            Confirm Payment <span>${value.totalPrice}.00</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
