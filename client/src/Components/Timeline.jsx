import React from "react";
import {
  Header,
  Upload,
  Story,
  Random,
  Update,
  SuggestedFriends,
} from "../Components";
import { useStateContext } from "../Contexts/Context";
import "../App.css";

const Timeline = () => {
  const { sideBar, setSideBar } = useStateContext();
  return (
    <div
      className={` text-black flex flex-col pt-5 pl-20 
    ${sideBar ? "w-4/6  m-auto" : "w-9/12 m-auto"}`}
    >
      <Header />

      <div className="flex flex-row">
        {/** Feed Section  */}
        <div className="w-4/6 mr-4">
          <Upload />
          <Update />
          <Update />
        </div>

        {/** Stories Section  */}

        <div className="w-2/6">
          <Story />
          <Random />
          <SuggestedFriends />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
