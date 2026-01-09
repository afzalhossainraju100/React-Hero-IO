import React from 'react';
import { Suspense } from 'react';
import App from '../App/App.jsx';

const Apps = () => {
    return (
      <div className="flex flex-col w-[90%] justify-center items-center">
        <div className="flex flex-col w-[90%] justify-center items-center p-10">
          <h1 className="text-[#000000] text-[2.5rem] font-bold leading-15 text-center">
            Trending Apps
          </h1>
          <p className="text-[#627382] text-[1.25rem] font-400  leading-15 text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <App></App>
        </Suspense>
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:from-[#9F62F2] hover:to-[#632EE3] border-0 px-6 py-3 rounded-md mb-10 shadow-md hover:shadow-lg text-[1rem] font-semibold">
          Show All
        </button>
      </div>
    );
};

export default Apps;