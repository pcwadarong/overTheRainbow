import React, { useState } from 'react';
import CloudIcon from '../assets/Cloud.svg';
import WriteIcon from '../assets/Write.svg';
import SearchIcon from '../assets/Search.svg';
import HeartIcon from '../assets/Heart.svg';
import InstagramIcon from '../assets/Instagram.svg';
import CodeIcon from '../assets/Code.svg';

const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className="bg-white bg-opacity-50 p-4 absolute top-8 start-8 z-50 rounded-3xl backdrop-blur-2xl"
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className={`${isHovered ? 'mb-4' : 'm-0'}`}>
        <img src={CloudIcon} alt="Cloud Icon" />
      </button>

      <ul
        className={`flex flex-col gap-6 justify-center items-center transition-all duration-500 ease-out overflow-hidden ${isHovered ? 'opacity-100 max-h-[380px] visible' : 'opacity-0 max-h-0 invisible'}`}
      >
        <li className="border-b-2 border-b-nav w-full"></li>
        <li><button><img src={WriteIcon} alt="Write Icon" /></button></li>
        <li><button><img src={SearchIcon} alt="Search Icon" /></button></li>
        <li><a href="https://www.hidcgs2024.com/" target="_blank" rel="noopener noreferrer"><img src={HeartIcon} alt="Heart Icon" /></a></li>
        <li><a href="https://www.instagram.com/chaendraw/" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram Icon" /></a></li>
        <li><a href="https://github.com/pcwadarong/overTheRainbow" target="_blank" rel="noopener noreferrer"><img src={CodeIcon} alt="Code Icon" /></a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
