import { ShapeProps } from "../../types";
import { useMemo } from "react";
import { parseGradient } from "../../utils/parseGradient";

const HeartIcon = ({
  color,
  width = 300,
  height = 300,
  ...props
}: ShapeProps) => {
  const gradientId = useMemo(() => `gradient-${Math.random().toString(36).substr(2, 9)}`, []);
  const gradientStops = parseGradient(color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 343 343"
      width={width}
      height={height}
      fill="none"
      role="img"
      opacity="0.9"
      {...props}
    >
      <defs>
        <linearGradient id={gradientId} gradientUnits="userSpaceOnUse">
          {gradientStops.map((stopColor, index) => (
            <stop
              key={index}
              offset={`${(index / (gradientStops.length - 1)) * 100}%`}
              stopColor={stopColor}
            />
          ))}
        </linearGradient>
      </defs>
      <path
       d="M178.5 322.038C173.889 322.038 169.427 321.443 165.708 320.104C108.885 300.618 18.5941 231.449 18.5941 129.258C18.5941 77.1957 60.6903 34.9507 112.455 34.9507C137.594 34.9507 161.097 44.7682 178.5 62.3207C195.904 44.7682 219.407 34.9507 244.545 34.9507C296.31 34.9507 338.407 77.3444 338.407 129.258C338.407 231.598 248.115 300.618 191.293 320.104C187.574 321.443 183.112 322.038 178.5 322.038ZM112.455 57.2632C73.0366 57.2632 40.9066 89.5419 40.9066 129.258C40.9066 230.854 138.635 287.379 172.997 299.131C175.674 300.023 181.475 300.023 184.153 299.131C218.365 287.379 316.243 231.003 316.243 129.258C316.243 89.5419 284.113 57.2632 244.694 57.2632C222.084 57.2632 201.11 67.8244 187.574 86.1207C183.409 91.7732 173.889 91.7732 169.724 86.1207C155.89 67.6757 135.065 57.2632 112.455 57.2632Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default HeartIcon;




