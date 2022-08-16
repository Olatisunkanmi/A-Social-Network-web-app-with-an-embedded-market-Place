import {
  ChatBubble,
  Email,
  HomeOutlined,
  LocalGroceryStoreOutlined,
  Notifications,
  SearchRounded,
  Settings,
  Menu,
} from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { UserPicture } from "./index";
import Notification from "./Notification";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Header = ({ setSidebar }) => {
  const [colorChange, setColorChange] = useState(true);
  const [toggleNotification, setToggleNotification] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 70) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  const pathHeader = useLocation().pathname.split("/")[1];

  return (
    <div className="relative">
      <div className="w-full items-center z-50 top-0 sticky p-1 hidden md:flex flex-row bg-white  justify-between border-b-2 product-nav h-16">
        <div className="flex flex-row text-white w-2/6">
          <p className="text-2xl text-black font-mono ml-2 capitalize">
            {pathHeader || "Timeline"}
          </p>

          <Link to="./">
            <p className="ml-4 text-blue-700  p-1 hover:rounded-md hover:bg-blue-700 hover:text-white">
              <HomeOutlined />
            </p>
          </Link>
          <a
            className="ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white"
            onClick={() => setToggleNotification(!toggleNotification)}
          >
            <Notifications />
          </a>
          <a className="ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white">
            <Email />
          </a>
          <a className="ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white">
            <ChatBubble />
          </a>
        </div>

        <div className="justify-end items-center flex flex-row gap-x-4 mr-2">
          <form className="border-2 border-blue-700 rounded-l-lg">
            <button className="bg-blue-700 p-1">
              <SearchRounded className="text-white" />
            </button>
            <input
              type="search"
              placeholder="Search"
              name="query"
              className="w-4/5 outline-none placeholder:text-sm placeholder:text-blue-700 text-black pl-2"
            />
          </form>
          <div className="flex flex-row text-white items-center gap-x-3">
            <Link
              to="/cart/99"
              className="text-blue-700 hover:rounded-md hover:bg-blue-700 hover:text-white p-1"
            >
              <LocalGroceryStoreOutlined />
            </Link>
            <Link
              to="/settings"
              className=" text-blue-700 hover:rounded-md hover:bg-blue-700 hover:text-white"
            >
              <Settings />
            </Link>
            <UserPicture className="text-blue-700" />
          </div>
        </div>
      </div>
      <div className="w-full items-center z-50 top-0 sticky p-1 md:hidden flex flex-row bg-white  justify-between border-b-2 product-nav h-16">
        <p className="text-2xl text-black font-mono ml-2 capitalize">
          {pathHeader || "Timeline"}
        </p>
        <div className="flex items-center gap-x-6">
          <a
            className="ml-4 text-blue-700 p-1 hover:rounded-md hover:bg-blue-700 hover:text-white"
            onClick={() => setToggleNotification(!toggleNotification)}
          >
            <Notifications />
          </a>
          <div
            onClick={() => {
              setSidebar(true);
            }}
          >
            <Menu className="cursor-pointer text-blue-700" />
          </div>
        </div>
      </div>
      {toggleNotification && <Notification />}
    </div>
  );
};
export default Header;
