"use client"

import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '/public/Lottie/parrot.json';
import Container from '/components/container';
import { Component3 } from '/components/component3'


const Page: React.FC = () => {
  const myRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const maxScroll = 100;
      let frame = Math.floor((scrollPosition / maxScroll) * 20); // Adjusted to 20 frames
      frame = frame > 20 ? 20 : frame; // Stops at frame 20 // Loop back to frame 1 when frame value exceeds 20
      if (myRef.current) {
        myRef.current.goToAndStop(frame, true);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="App">
      <div style={{ height: '500px', border: '2px solid red' }}></div> {/* Added border */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Lottie
          lottieRef={myRef}
          animationData={animationData}
          autoplay={false}
          style={{ width: '500px', position: 'sticky', top: '0' }}
        />
      </div>
    </div>
    <div style={{ height:'500px', backgroundColor: 'black', color: 'white', padding: '20px' }}>
    <p>This is some text in a container with a black background.</p>
  </div>
  <Container />
  <Component3 />

  </>
  );
  
};

export default Page;



