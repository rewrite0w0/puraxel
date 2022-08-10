const { createSvgIcon } = require("@mui/material");

const ShopIcon = createSvgIcon(
  <path
    d="M7.37121 16.5625V21.875H12.1439V18.1562H16.3864V21.875H21.1591V12.8438M21.1591 12.8438H5.77405C5.50115 12.8438 5.29485 12.5966 5.34358 12.3281L6.18016 7.71875C6.25569 7.30257 6.61811 7 7.04109 7H20.9589C21.3819 7 21.7443 7.30256 21.8198 7.71874L22.6564 12.3281C22.7051 12.5966 22.4988 12.8438 22.2259 12.8438H21.1591Z"
    stroke="#55576F"
    strokeWidth="1.7"
    strokeLinecap="square"
  />
);
const Inquiry = createSvgIcon(
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="19.6875"
      cy="11.8125"
      r="2.1875"
      stroke="#55576F"
      strokeWidth="1.7"
    />
    <circle cx="10.5" cy="9.625" r="3.5" stroke="#55576F" strokeWidth="1.7" />
    <path
      d="M4.375 20.125C4.375 17.7088 6.33375 15.75 8.75 15.75H12.25C14.6662 15.75 16.625 17.7088 16.625 20.125V22.75H4.375V20.125Z"
      stroke="#55576F"
      strokeWidth="1.7"
    />
    <path
      d="M18.8126 16.625L20.125 16.625C22.058 16.625 23.625 18.192 23.625 20.125V21.875H16.625"
      stroke="#55576F"
      strokeWidth="1.7"
    />
  </svg>
);
const PlusIcon = createSvgIcon(
  <svg
    width="58"
    height="58"
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_1268_21932)">
      <circle cx="29" cy="29" r="29" fill="white" fillOpacity="0.4" />
      <circle
        cx="29"
        cy="29"
        r="28.5"
        stroke="url(#paint0_linear_1268_21932)"
      />
    </g>
    <path
      d="M28.9995 16.918V41.0846"
      stroke="#A7ABB6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M41.083 29.002L16.9163 29.002"
      stroke="#A7ABB6"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <defs>
      <filter
        id="filter0_b_1268_21932"
        x="-50"
        y="-50"
        width="158"
        height="158"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="25" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1268_21932"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1268_21932"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1268_21932"
        x1="8.37987"
        y1="7.06169"
        x2="57.0584"
        y2="57.1526"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F3F3F3" />
        <stop offset="1" stopColor="white" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </svg>
);

const CaptionIcon = createSvgIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99967 4.66683C8.36634 4.66683 8.66634 4.96683 8.66634 5.3335L8.66634 8.00016C8.66634 8.36683 8.36634 8.66683 7.99967 8.66683C7.63301 8.66683 7.33301 8.36683 7.33301 8.00016L7.33301 5.3335C7.33301 4.96683 7.63301 4.66683 7.99967 4.66683ZM7.99301 1.3335C4.31301 1.3335 1.33301 4.32016 1.33301 8.00016C1.33301 11.6802 4.31301 14.6668 7.99301 14.6668C11.6797 14.6668 14.6663 11.6802 14.6663 8.00017C14.6663 4.32017 11.6797 1.3335 7.99301 1.3335ZM7.99967 13.3335C5.05301 13.3335 2.66634 10.9468 2.66634 8.00016C2.66634 5.0535 5.05301 2.66683 7.99967 2.66683C10.9463 2.66683 13.333 5.0535 13.333 8.00017C13.333 10.9468 10.9463 13.3335 7.99967 13.3335ZM8.66634 10.6668C8.66634 11.035 8.36786 11.3335 7.99967 11.3335C7.63148 11.3335 7.33301 11.035 7.33301 10.6668C7.33301 10.2986 7.63148 10.0002 7.99967 10.0002C8.36786 10.0002 8.66634 10.2986 8.66634 10.6668Z"
      fill="#DD5C54"
    />
  </svg>
);

const ArrowRI = createSvgIcon(
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.3536 16.3536C22.5488 16.1583 22.5488 15.8417 22.3536 15.6464L19.1716 12.4645C18.9763 12.2692 18.6597 12.2692 18.4645 12.4645C18.2692 12.6597 18.2692 12.9763 18.4645 13.1716L21.2929 16L18.4645 18.8284C18.2692 19.0237 18.2692 19.3403 18.4645 19.5355C18.6597 19.7308 18.9763 19.7308 19.1716 19.5355L22.3536 16.3536ZM10 15.5L9.5 15.5L9.5 16.5L10 16.5L10 15.5ZM22 15.5L10 15.5L10 16.5L22 16.5L22 15.5Z"
      fill="#DFE1E8"
    />
  </svg>
);
const ArrowRA = createSvgIcon(
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.3536 16.3536C22.5488 16.1583 22.5488 15.8417 22.3536 15.6464L19.1716 12.4645C18.9763 12.2692 18.6597 12.2692 18.4645 12.4645C18.2692 12.6597 18.2692 12.9763 18.4645 13.1716L21.2929 16L18.4645 18.8284C18.2692 19.0237 18.2692 19.3403 18.4645 19.5355C18.6597 19.7308 18.9763 19.7308 19.1716 19.5355L22.3536 16.3536ZM10 15.5L9.5 15.5L9.5 16.5L10 16.5L10 15.5ZM22 15.5L10 15.5L10 16.5L22 16.5L22 15.5Z"
      fill="#7E818D"
    />
  </svg>
);

const ArrowLI = createSvgIcon(
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.64645 15.6464C9.45118 15.8417 9.45118 16.1583 9.64645 16.3536L12.8284 19.5355C13.0237 19.7308 13.3403 19.7308 13.5355 19.5355C13.7308 19.3403 13.7308 19.0237 13.5355 18.8284L10.7071 16L13.5355 13.1716C13.7308 12.9763 13.7308 12.6597 13.5355 12.4645C13.3403 12.2692 13.0237 12.2692 12.8284 12.4645L9.64645 15.6464ZM22 16.5H22.5V15.5H22V16.5ZM10 16.5H22V15.5H10V16.5Z"
      fill="#DFE1E8"
    />
  </svg>
);
const ArrowLA = createSvgIcon(
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.64645 15.6464C9.45118 15.8417 9.45118 16.1583 9.64645 16.3536L12.8284 19.5355C13.0237 19.7308 13.3403 19.7308 13.5355 19.5355C13.7308 19.3403 13.7308 19.0237 13.5355 18.8284L10.7071 16L13.5355 13.1716C13.7308 12.9763 13.7308 12.6597 13.5355 12.4645C13.3403 12.2692 13.0237 12.2692 12.8284 12.4645L9.64645 15.6464ZM22 16.5H22.5V15.5H22V16.5ZM10 16.5H22V15.5H10V16.5Z"
      fill="#7E818D"
    />
  </svg>
);

const AskIcon = createSvgIcon(
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.9277 3.8855C6.86685 3.8855 4.38554 6.36674 4.38554 9.42751C4.38554 12.4883 6.86685 14.9695 9.9277 14.9695C11.0373 14.9695 12.0689 14.6441 12.9346 14.0838C13.12 13.9638 13.3514 13.9394 13.5578 14.018L15.1093 14.6093L14.518 13.058C14.4394 12.8517 14.4638 12.6202 14.5838 12.4348C15.1443 11.569 15.4699 10.5373 15.4699 9.42751C15.4699 6.36674 12.9885 3.8855 9.9277 3.8855ZM3 9.42751C3 5.60155 6.10164 2.5 9.9277 2.5C13.7538 2.5 16.8554 5.60155 16.8554 9.42751C16.8554 10.6845 16.52 11.8648 15.9337 12.8821L16.9546 15.5605C17.0518 15.8156 16.9901 16.104 16.7971 16.2971C16.604 16.4901 16.3156 16.5518 16.0605 16.4546L13.3819 15.4337C12.3647 16.0198 11.1845 16.355 9.9277 16.355C6.10164 16.355 3 13.2535 3 9.42751Z"
      fill="#55576F"
    />
    <circle
      r="0.75"
      transform="matrix(-1 0 0 1 12.582 9.08594)"
      fill="#55576F"
    />
    <circle
      r="0.75"
      transform="matrix(-1 0 0 1 10.082 9.08594)"
      fill="#55576F"
    />
    <circle
      r="0.75"
      transform="matrix(-1 0 0 1 7.58203 9.08594)"
      fill="#55576F"
    />
  </svg>
);

module.exports = {
  ShopIcon,
  PlusIcon,
  Inquiry,
  CaptionIcon,
  ArrowRA,
  ArrowRI,
  ArrowLA,
  ArrowLI,
  AskIcon,
};
