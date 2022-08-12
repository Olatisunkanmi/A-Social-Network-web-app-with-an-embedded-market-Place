import React from "react";
import { Notifications } from "@material-ui/icons";
import { notificationData } from "../data/data";

const Notification = () => {
  return (
    <div className="absolute -bottom-[350px] bg-white w-80 text-black px-3">
      <div className="flex justify-between py-4 border-b">
        <h5 className="">Notifications</h5>
        <Notifications />
      </div>
      <div>
        {notificationData.map((item) => {
          return (
            <div className="flex flex-row border-b justify-between py-2">
              <img
                src={item.img}
                alt="icon"
                className="rounded-full w-12 h-12 object-cover"
              />
              <p className="text-sm">
                <span>{item.name}</span>
                <span>{item.text}</span>
                <br />
                <span>{item.post}</span>
                <span>{item.extras}</span>
              </p>
              {item.icon}
            </div>
          );
        })}
        <div className="py-2 border-b text-center bg-gray-200 cursor-pointer">
          <button className="text-gray-800">View all</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
