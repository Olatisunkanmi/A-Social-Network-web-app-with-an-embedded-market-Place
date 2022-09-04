import React, { useState } from "react";
import {
  Upload,
  Story,
  Random,
  Update,
  SuggestedFriends,
  RecommendedPages,
  WeatherApi,
  InputModal,
} from "../Components";
import "../App.css";

const Timeline = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      {openModal && (
        <InputModal setOpenModal={setOpenModal} openModal={openModal} />
      )}
      <div
        className="md:m-auto
                    w-full
                    xl:w-3/4
                   flex flex-col 
				   space-y-5
                  lg:flex-row justify-center md:p-5 mt-5"
      >
        <div
          className="hidden 
                                      space-y-5
                                      lg:block
                                        lg:w-1/4"
        >
          <RecommendedPages />
          <WeatherApi />
        </div>

        {/** Feed Section  */}
        <div
          className="
								
                                xl:block
                               space-y-5
                                lg:w-2/4 
                                lg:mx-5"
        >
          <Upload setOpenModal={setOpenModal} openModal={openModal} />
          <Update />
          <Update />
        </div>

        {/** Stories Section  */}

        <div
          className="

                            space-y-5
                              lg:w-1/4 "
        >
          <Story />
          <Random />
          <SuggestedFriends />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
