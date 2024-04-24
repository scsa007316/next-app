import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/global.css';

const NavBar = () => {
  const [isProjectsExpanded, setProjectsExpanded] = useState(false);

  const handleProjectsClick = () => {
    setProjectsExpanded(!isProjectsExpanded);
  };

  return (
    <nav
      style={{ backgroundColor: 'rgba(74, 112, 194, 0.75)', padding: '1rem', zIndex: 2 }}
      className="flex justify-between items-center"
    >
    <a
  href="https://scsa007316.github.io/"
  className="text-3xl font-bold text-white hover:underline"
  style={{fontSize: '3rem', fontWeight: 'bold', color: 'white', textDecoration: 'none' , marginRight: '50%' }} // Use marginRight: 'auto' to push to the right
>
  Aadarsh Singh
</a>



     
        <a className="text-white hover:underline rounded-full p-1" href="/ML/Physics">
          Theoretical Physics
        </a>
        <a className="text-white hover:underline" href="/ML">
          Coding
        </a>
        <button
          className={`text-white px-4 py-2 rounded-full focus:outline-none focus:ring focus:border-blue-300 ${
            isProjectsExpanded ? 'bg-blue-600 underline' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          onClick={handleProjectsClick}
        >
          Animation
        </button>
        <a
  href="https://www.linkedin.com/in/aadarsh-singh-506454260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-2"
>
  {/* LinkedIn icon */}
  <img
    src="/Logos/Linkedin_logo.png" // Replace with the actual path to your LinkedIn icon/image
    alt="LinkedIn"
    style={{ width: '4rem', height: '4rem' }} // Adjust the width and height as needed
  />
</a>

        
<a
  href="https://github.com/scsa007316"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-2"
>
  {/* GitHub icon */}
  <img
    src="/Logos/github-mark-white.png" // Replace with the actual path to your GitHub icon/image
    alt="GitHub"
    style={{ width: '4rem', height: '4rem' }} // Adjust the width and height as needed
  />
</a>

    </nav>
  );
};

export default NavBar;
