import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const BuyIcon = (props: any) => (
  <Svg
    width={36}
    height={36}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_552_1708)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.6429 4.21989L28.0668 4.21277C28.6701 4.21265 29.2513 4.43738 29.6947 4.84223C30.1381 5.24707 30.4111 5.80231 30.4594 6.39737L32.6048 32.5153C32.6304 32.8262 32.5939 33.139 32.4973 33.436C32.4006 33.7329 32.2458 34.0081 32.0417 34.2458C31.8376 34.4835 31.5881 34.6791 31.3075 34.8214C31.027 34.9637 30.7208 35.0499 30.4066 35.075L30.2146 35.0822H6.61268C5.97622 35.0822 5.36582 34.832 4.91577 34.3867C4.46573 33.9414 4.21289 33.3374 4.21289 32.7076L4.22009 32.5248L6.25031 6.41162C6.29686 5.81528 6.56912 5.25829 7.01268 4.85197C7.45625 4.44564 8.03844 4.21991 8.6429 4.21989Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M25.2041 12.8562V14.4491C25.2041 17.1779 20.9143 17.7953 18.4129 17.7953C15.9114 17.7953 11.6216 16.8198 11.6216 14.091V12.8562"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_552_1708">
        <Rect width={35.8085} height={35.8085} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BuyIcon;
