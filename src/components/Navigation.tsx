import { useCallback, useLayoutEffect, useState } from 'react';

import CloudIcon from '../assets/Cloud.svg';
import CodeIcon from '../assets/Code.svg';
import HeartIcon from '../assets/Heart.svg';
import InstagramIcon from '../assets/Instagram.svg';
import WriteIcon from '../assets/Write.svg';

const Navigation: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(pointer: coarse)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleTouchStart = useCallback(() => {
    setIsHovered((prev) => !prev);
  }, []);

  return (
    <nav
      className="bg-white bg-opacity-50 p-2 md:p-4 absolute top-4 start-4 md:top-8 md:start-8 z-30 rounded-2xl md:rounded-3xl backdrop-blur-2xl"
      onMouseEnter={!isMobile ? handleMouseEnter : undefined}
      onMouseLeave={!isMobile ? handleMouseLeave : undefined}
      onTouchStart={isMobile ? handleTouchStart : undefined}
    >
      <button type="button" className={`${isHovered ? 'mb-4 md:m-0' : 'm-0'}`}>
        <img
          src={CloudIcon}
          alt="Cloud Icon"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>

      <ul
        className={`flex flex-col gap-2.5 md:gap-6 justify-center items-center transition-all duration-500 ease-out overflow-hidden ${
          isHovered
            ? 'opacity-100 max-h-[300px] md:max-h-[380px] visible mb-2'
            : 'opacity-0 max-h-0 invisible'
        }`}
      >
        <li className="border-b border-b-nav w-full" />
        <li>
          <button type="button" onClick={onOpen}>
            <img
              src={WriteIcon}
              alt="Write Icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </button>
        </li>
        <li>
          <a
            href="https://www.hidcgs2024.com/project_view.php?idx=64"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={HeartIcon}
              alt="Heart Icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/chaendraw/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramIcon}
              alt="Instagram Icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pcwadarong/overTheRainbow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={CodeIcon}
              alt="Code Icon"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
