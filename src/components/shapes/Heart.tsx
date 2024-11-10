import { ShapeProps } from "../../types/shape";

const HeartIcon = ({
  color = '#ffffff',
  width = 300,
  height = 300,
  id,
  onClick,
  ...props
}: ShapeProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 357 357"
    width={width}
    height={height}
    fill="none"
    aria-label={`letter #${id}`}
    role="img"
    onClick={() => onClick(id)}
    opacity="0.9"
    {...props}
  >
    <path
      d="M178.5 322.038C173.889 322.038 169.427 321.443 165.708 320.104C108.885 300.618 18.5941 231.449 18.5941 129.258C18.5941 77.1957 60.6903 34.9507 112.455 34.9507C137.594 34.9507 161.097 44.7682 178.5 62.3207C195.904 44.7682 219.407 34.9507 244.545 34.9507C296.31 34.9507 338.407 77.3444 338.407 129.258C338.407 231.598 248.115 300.618 191.293 320.104C187.574 321.443 183.112 322.038 178.5 322.038ZM112.455 57.2632C73.0366 57.2632 40.9066 89.5419 40.9066 129.258C40.9066 230.854 138.635 287.379 172.997 299.131C175.674 300.023 181.475 300.023 184.153 299.131C218.365 287.379 316.243 231.003 316.243 129.258C316.243 89.5419 284.113 57.2632 244.694 57.2632C222.084 57.2632 201.11 67.8244 187.574 86.1207C183.409 91.7732 173.889 91.7732 169.724 86.1207C155.89 67.6757 135.065 57.2632 112.455 57.2632Z"
      fill={color}
    />
    <path
      d="M165.877 319.634L165.87 319.631C137.539 309.916 100.831 287.799 71.2118 255.359C41.5967 222.923 19.0941 180.198 19.0941 129.258C19.0941 77.4698 60.9685 35.4507 112.455 35.4507C137.462 35.4507 160.836 45.2155 178.145 62.6727L178.5 63.0308L178.855 62.6727C196.165 45.2155 219.539 35.4507 244.545 35.4507C296.032 35.4507 337.907 77.618 337.907 129.258C337.907 180.272 315.404 222.997 285.789 255.414C256.17 287.836 219.462 309.916 191.131 319.631L191.123 319.634C187.475 320.947 183.074 321.538 178.5 321.538C173.927 321.538 169.526 320.947 165.877 319.634ZM172.835 299.604L172.838 299.605C174.253 300.077 176.436 300.3 178.575 300.3C180.713 300.3 182.896 300.077 184.311 299.605L184.315 299.604C201.488 293.705 234.576 276.635 263.378 248.299C292.187 219.956 316.743 180.305 316.743 129.258C316.743 89.2685 284.392 56.7632 244.694 56.7632C221.925 56.7632 200.802 67.3999 187.172 85.8233L187.172 85.8241C185.2 88.5002 181.941 89.8601 178.649 89.8601C175.357 89.8601 172.098 88.5002 170.127 85.8241L170.124 85.8207C156.197 67.2511 135.224 56.7632 112.455 56.7632C72.7577 56.7632 40.4066 89.2685 40.4066 129.258C40.4066 180.23 64.9254 219.881 93.7152 248.243C122.499 276.598 155.587 293.705 172.835 299.604Z"
      stroke="url(#paint0_linear)"
      strokeOpacity="0.2"
    />
    <defs>
      <linearGradient id="paint0_linear" x1="178.5" y1="34.9507" x2="178.5" y2="322.038" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0015D7" />
        <stop offset="1" stopColor="#FCFFA1" />
      </linearGradient>
    </defs>
  </svg>
);

export default HeartIcon;