import { useState } from 'react';

import CloudIcon from '../assets/Cloud.svg';
import CodeIcon from '../assets/Code.svg';
import HeartIcon from '../assets/Heart.svg';
import InstagramIcon from '../assets/Instagram.svg';
import WriteIcon from '../assets/Write.svg';
import useIsTouchDevice from '../hooks/useIsTouchDevice';

const Navigation: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  const isMobile = useIsTouchDevice();
  const [isHovered, setIsHovered] = useState(false);

  const NAV_ITEMS = [
    {
      type: 'button',
      icon: WriteIcon,
      label: 'Write a letter',
      onClick: onOpen,
    },
    {
      type: 'link',
      href: 'https://www.behance.net/gallery/224587611/Over-the-Rainbow',
      icon: HeartIcon,
      label: 'Behance',
    },
    {
      type: 'link',
      href: 'https://www.instagram.com/chaendraw/',
      icon: InstagramIcon,
      label: 'Instagram',
    },
    {
      type: 'link',
      href: 'https://github.com/pcwadarong/overTheRainbow',
      icon: CodeIcon,
      label: 'GitHub',
    },
  ];

  return (
    <nav
      className="bg-white bg-opacity-50 p-2 md:p-4 absolute top-4 start-4 md:top-8 md:start-8 z-30 rounded-2xl md:rounded-3xl backdrop-blur-sm"
      onMouseEnter={!isMobile ? () => setIsHovered(true) : undefined}
      onMouseLeave={!isMobile ? () => setIsHovered(false) : undefined}
      onTouchStart={isMobile ? () => setIsHovered((prev) => !prev) : undefined}
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
        {NAV_ITEMS.map((item, index) => (
          <li key={index}>
            {item.type === 'button' ? (
              <button
                type="button"
                onClick={item.onClick}
                aria-label={item.label}
              >
                <img
                  src={item.icon}
                  alt={`${item.label} Icon`}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </button>
            ) : (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                <img
                  src={item.icon}
                  alt={`${item.label} Icon`}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
