import { useMemo } from 'react';

import { ShapeProps } from '../../types';

const StarIcon = ({ gradient, width = 300, height = 300 }: ShapeProps) => {
  const gradientId = useMemo(
    () => `gradient-${Math.random().toString(36).substr(2, 9)}`,
    [],
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 265 254"
      width={width}
      height={height}
      fill="none"
      role="img"
      opacity="0.9"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="132.5"
          y1="-28"
          x2="132.5"
          y2="303"
          gradientUnits="userSpaceOnUse"
        >
          {gradient.stops.map(({ color, offset }, index) => (
            <stop key={index} offset={`${offset}%`} stopColor={color} />
          ))}
        </linearGradient>
      </defs>
      <path
        d="M109.898 13.443C119.655 -4.44783 145.345 -4.44783 155.102 13.443L178.206 55.8082C181.909 62.5977 188.468 67.363 196.069 68.7865L243.501 77.6688C263.531 81.4197 271.47 105.852 257.469 120.66L224.318 155.725C219.005 161.345 216.499 169.055 217.494 176.725L223.704 224.579C226.326 244.788 205.543 259.888 187.134 251.149L143.54 230.456C136.554 227.139 128.446 227.139 121.46 230.456L77.8664 251.149C59.4567 259.888 38.6736 244.788 41.296 224.579L47.5055 176.725C48.5007 169.055 45.9954 161.345 40.6824 155.725L7.5305 120.66C-6.46962 105.852 1.4688 81.4197 21.4991 77.6688L68.9305 68.7865C76.532 67.363 83.0908 62.5977 86.7936 55.8082L109.898 13.443Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default StarIcon;
