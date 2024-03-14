import * as React from "react";
const MembersIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 .5h24v24H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.0625)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAd1JREFUOE+d071rFEEYx/Hv7M2+v9zmcnmRNBEikYDYCirBiCDYBDlSaGllEf8Ui8RExSqFpDHRzlIbjY3aWVlZiIYUHt773s3IzmkwuhfQLXef+Twzv2dHMOI5Nzetf//05uMXUVRa+DIvzIFnj05SvfiaC6dP8H/Aw1mqi3v/DuTdn25WoJQSV+bwzmyNRAqPYLZ/fwLpTxCOncKefzAa+DOsX0E935pHOhFuPENJhpy/ul0Ytxh2m8QOqvjROFK6KJWh+12EpSg5ZSy7ip69a4Deh5s4C485eHGW5dv7GODJehkhXLywjBfESFsihAI9QJQChKyghUPWbdKuf6bT2kcP2tRW65gMDLIWAYIgjHCDCNt2EEKAJdG49PuaTvMbrcYBqIzane9mtIch5sjOmo+wbMI4wQtCLMsyqFLQaXdoNeroQY/rq8PFefMjUzDj24jxwxyIfwIapRS9Xp+sm3Ht1qcjP1UBkOJHKW5YAa1RWRPyPIQHlsvllbfHA7sbKUEyjRdN0e+16TS+onUX6Sa4/jhLtb1iIN/+7mYCOETpDG4wxuLySzO6nfUEYTkG9cOUS7VXf2dgzn+vjPRiwmSSpZV3h0XDgGOEHROXp7hy430xcNz1HXW9fwBgOr5qr4N55AAAAABJRU5ErkJggg=="
        id="b"
        width={16}
        height={16}
      />
    </defs>
  </svg>
);
export default MembersIcon;