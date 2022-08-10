import React from "react";
import {
  Upload,
  Story,
  Random,
  Update,
  SuggestedFriends,
  RecommendedPages,
  WeatherApi,
} from "../Components";
import { useStateContext } from "../Contexts/Context";
import "../App.css";

const Timeline = () => {
  const { sideBar, setSideBar } = useStateContext();

  return (
    <div className="">
      <div
        className="m-auto w-4/5 xl:w-4/5 lg:w-full flex flex-col 
lg:flex-row justify-center p-5 mt-5"
      >
        <div className="hidden lg:block lg:w-1/4">
          <RecommendedPages />
          <WeatherApi />
        </div>
        {/** Feed Section  */}
        <div className="xl:block lg:w-2/4 lg:mx-5">
          <Upload />
          <Update />
          <Update />
        </div>
        {/** Stories Section  */}
        <div className="lg:w-1/4">
          <Story />
          <Random />
          <SuggestedFriends />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
