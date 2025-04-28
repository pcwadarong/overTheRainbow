import { useMemo } from 'react';

import { ShapeProps } from '../../types';

const CloudIcon = ({ gradient, width = 300, height = 300 }: ShapeProps) => {
  const gradientId = useMemo(
    () => `gradient-${Math.random().toString(36).substr(2, 9)}`,
    [],
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 274 225"
      width={width}
      height={height}
      fill="none"
      role="img"
      opacity="0.9"
    >
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
          {gradient.stops.map(({ color, offset }, index) => (
            <stop key={index} offset={`${offset}%`} stopColor={color} />
          ))}
        </linearGradient>
      </defs>
      <path
        d="M269.567 124.646C266.017 112.902 260.145 102.66 252.361 94.3298C242.392 82.9955 229.146 75.2116 214.261 71.7976C206.75 37.6579 185.72 13.0773 155.814 3.92789C123.313 -6.17746 85.6224 3.65477 61.9977 28.3719C41.2408 50.0848 34.4128 79.9912 42.4698 111.809C15.158 118.501 1.63871 141.306 0.136559 163.019C-1.2718e-07 164.521 0 165.887 0 167.252C0 192.925 16.7967 221.739 54.2139 224.47H195.962C215.353 224.47 233.925 217.233 248.127 204.26C270.387 184.732 278.58 154.279 269.567 124.646Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default CloudIcon;
