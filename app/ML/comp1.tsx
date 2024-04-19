"use client"
// pages/ModalPage.tsx
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import particlesConfig from './particlesConfig';
//import 'katex/dist/katex.min.css';
import NavBar from '/components/NavBarML';
import YourComponent from '/app/ML/Physics/demo/demo2/comp4';
import YourComponent2 from '/app/ML/Physics/demo/demo2/comp42';



const DynamicParticles = dynamic(() => import('@tsparticles/react'), { ssr: false });

import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

// particlesConfig.js

const Pagep1 = () => {
  

  console.log('Rendering Page component');
  const particlesLoaded = (container) => {
    console.log('Particles loaded:', container);
  };
   
  React.useEffect(() => {
    console.log('Effect triggered');
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      
    });
  }, []);

  return (
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      <div style={{ position: 'fixed', width: '100%', zIndex: 2 }}>
      <NavBar />
    </div>
    <div className="relative py-10 px-4 text-center" style={{ zIndex: 2, background: 'radial-gradient(circle, #000000,  #2c394b)' }}>
  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-white to-gray-500">
      <span className="mr-4">CODING</span>
       <span className="ml-4">PROJECTS</span>
    </h1>

    </div>
    <div
    style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    fontSize: '2rem',
    zIndex: 1,
    whiteSpace: 'nowrap', // Prevents line breaks
    padding: '25px', // Adding padding for better visual appeal
    borderRadius: '10px', // Adjust the value to control the roundness
    border: '2px solid white', // Adding a white border
    background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black background
  }}
>
    <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    Following is the list of various coding projects done in several languages <br></br> such as python, Mathematica, C++ etc. {' '}
    
  </h1>
 </div>
  <div style={{height: '600px',width:'100%',
    position: 'relative',
    top: '30%',
    left: '20%'}}>
  <DynamicParticles id="tsparticles"  particlesLoaded={particlesLoaded} options={particlesConfig} />
    </div>    
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0)', height: '250px', overflow: 'auto' }}>
        <YourComponent />
        
      </div>
     

  </div>
  );
  
};

export default Pagep1;
