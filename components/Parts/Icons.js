const { createSvgIcon } = require("@mui/material");

const ShopIcon = createSvgIcon(
  <path
    d="M7.37121 16.5625V21.875H12.1439V18.1562H16.3864V21.875H21.1591V12.8438M21.1591 12.8438H5.77405C5.50115 12.8438 5.29485 12.5966 5.34358 12.3281L6.18016 7.71875C6.25569 7.30257 6.61811 7 7.04109 7H20.9589C21.3819 7 21.7443 7.30256 21.8198 7.71874L22.6564 12.3281C22.7051 12.5966 22.4988 12.8438 22.2259 12.8438H21.1591Z"
    stroke="#55576F"
    strokeWidth="1.7"
    strokeLinecap="square"
  />
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

module.exports = { ShopIcon, PlusIcon };
