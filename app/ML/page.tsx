// page.tsx
"use client"
// page.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link'; 
import BackToTopButton from '/components/ToTop';
import Footer from '/components/Footer';

import { tsParticles } from '@tsparticles/engine';
import { loadCurvesPath } from '@tsparticles/path-curves';
import { loadPolygonPath } from "@tsparticles/path-polygon";
import Pagep1 from './comp1'
import YourComponent2 from '/app/ML/Physics/demo/demo2/comp42';


const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
// particlesConfig.js

const Page2 = () => {
  console.log('Rendering Page component');

  const particlesLoaded = (container) => {
    console.log('Particles loaded:', container);
  };
   

  const footerStyle = {
    position: 'absolute',
    top: '1520px',
    width: '1430px',
    zIndex: 2,
  };

  React.useEffect(() => {
    console.log('Effect triggered');
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      await loadPolygonPath(tsParticles);
      await loadCurvesPath(tsParticles);
    });
  }, []);

return (
  <>
   <Pagep1 />

   <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)', height: '800px', overflow: 'auto' }}>
        <YourComponent2 />
        
      </div>

   <BackToTopButton />
    <Footer style={footerStyle} />

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
              background: #1E1E1E; /* Color of the thumb */
              border-radius: 5px; /* Roundness of the thumb */
            }

            /* For Firefox */
            scrollbar-width: thin;
            scrollbar-color: #1E1E1E rgba(255, 255, 255, 1); /* Color of the thumb and track */
          `}
        </style>


  </>
);

};

export default Page2;
