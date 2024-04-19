"use client"

import React from 'react';
import YourComponent from './comp4';
import YourComponent2 from './comp42';

const Page: React.FC = () => {
  return (
    <>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: '500px', overflow: 'auto' }}>
        <YourComponent />
        
      </div>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', height: '400px', overflow: 'auto' }}>
        <YourComponent2 />
        
      </div>
      <style>
          {`
            /* For WebKit (Chrome, Safari, etc.) */
            ::-webkit-scrollbar {
              width: 10px;
              border-radius: 5px; /* Roundness of the scrollbar track */
            }
            
            ::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0); /* Background color of the track */
            }
            
            ::-webkit-scrollbar-thumb {
              background: #bdc3c7; /* Color of the thumb */
              border-radius: 5px; /* Roundness of the thumb */
            }

            /* For Firefox */
            scrollbar-width: thin;
            scrollbar-color: #bdc3c7 rgba(255, 255, 255, 1); /* Color of the thumb and track */
          `}
        </style>
    </>
  );
};

export default Page;





