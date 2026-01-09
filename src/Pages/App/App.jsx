import React from 'react';
import demoAppImage from '../../assets/demoapp1.webp';
import { GoDownload } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";

const App = () => {
    return (
      <div className="bg-[#ffffff] rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="p-4 space-y-6">
          <img className="bg-[#d9d9d9] rounded-lg w-79 h-79" src={demoAppImage} alt="AppName" />
          <h2 className="text-[1.25rem] font-500 leading-6 ">
            Forest: Focus for Productivity
          </h2>
          <div className="flex flex-row justify-between">
            <button className="text-[#00d390] flex flex-row items-center gap-1 bg-[#F1F5E8] px-2 py-1 rounded-md">
              <GoDownload /> 9M
            </button>
            <button className="text-[#ff8811] flex flex-row items-center gap-1 bg-[#FFF0E1] px-2 py-1 rounded-md">
              <TiStarFullOutline /> 5
            </button>
          </div>
        </div>
      </div>
    );
};

export default App;