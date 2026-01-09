import React from 'react';
import { Suspense } from 'react';
import App from '../App/App.jsx';

const Apps = () => {
    return (
      <div>
        <h1>Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
        <Suspense fallback={<div>Loading...</div>}>
            <App></App>
        </Suspense>
        <button>Show All</button>
      </div>
    );
};

export default Apps;