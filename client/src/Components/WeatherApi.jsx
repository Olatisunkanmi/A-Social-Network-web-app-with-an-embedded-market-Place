import React from "react";
import axios from "axios";
import { LocationOn } from "@material-ui/icons";

const WeatherApi = () => {
  return (
    <div>

          <div  
            className='p-5  text-center space-y-5 border-2 border-stone-300 rounded-xl'>
              <p> 71 </p>
              <p> Sunny </p> 
              <p> Saturday, 18th 2018 </p> 
              <p> <LocationOn /> Lagos City, Nigeria  </p>
          </div>
    </div>
  );
};

export default WeatherApi;
