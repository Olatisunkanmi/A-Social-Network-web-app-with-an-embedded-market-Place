import { CardGiftcard, MoreVertOutlined } from "@material-ui/icons";
import React from "react";
import img from "../Assests/pro.jpg";

const Random = () => {
  return (
    <div className="story border-2 border-stone-300 rounded-xl mt-5 flex flex-col bg-blue-400 text-white">
      <div className="p-3 justify-between flex flex-row">
        <CardGiftcard />
        <MoreVertOutlined />
      </div>
      <div className="text-center flex flex-col items-center">
        <img
          src={img}
          alt=""
          className="border-2 m-1 border-black rounded-full h-10 w-10 object-cover"
        />
        <p className="font-semibold font-sans ">Shannon got a new Job! </p>
        <p className="font-semibold font-sans ">
          Send her a congratulations Message
        </p>
        <a
          href="#send"
          className="font-semibold font-sans p-3 cursor-pointer mt-3 rounded-xl border-2 border-white mb-5 hover:bg-white hover:text-blue-500"
        >
          Send a Message
        </a>
      </div>
    </div>
  );
};

export default Random;
