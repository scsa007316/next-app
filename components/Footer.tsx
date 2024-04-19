import React from 'react';

const Footer = ({ style }) => {
  return (
    <div className="relative py-10 px-4 bg-gray-800 text-center" style={style}>
      <h1 className="text-5xl font-bold text-white">
        <p className="text-sm">&copy; 2024 Aadarsh Singh Portfolio. All rights reserved.</p>
        <p className="text-sm">Designed and developed by Aadarsh Singh.</p>
        <p className="text-sm">This website is built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a>, open-source projects released under the MIT License.</p>
      </h1>
    </div>
  );
};

export default Footer;
