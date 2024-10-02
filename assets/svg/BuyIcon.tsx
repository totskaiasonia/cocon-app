import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const BuyIcon = (props: any) => (
  <Svg
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_552_166)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.10314 2.00338L13.3246 2C13.611 1.99994 13.8869 2.10664 14.0974 2.29883C14.3079 2.49103 14.4375 2.75463 14.4605 3.03714L15.479 15.4365C15.4912 15.5841 15.4738 15.7327 15.4279 15.8736C15.3821 16.0146 15.3086 16.1453 15.2117 16.2581C15.1147 16.371 14.9963 16.4638 14.8631 16.5314C14.7299 16.5989 14.5846 16.6398 14.4354 16.6518L14.3443 16.6552H3.13929C2.83713 16.6552 2.54735 16.5364 2.33369 16.325C2.12003 16.1136 2 15.8268 2 15.5279L2.00342 15.441L2.96726 3.0439C2.98936 2.76079 3.11861 2.49636 3.32919 2.30346C3.53978 2.11056 3.81617 2.00339 4.10314 2.00338Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9654 6.10345V6.85966C11.9654 8.15518 9.92879 8.44828 8.74123 8.44828C7.55367 8.44828 5.51709 7.98518 5.51709 6.68966V6.10345"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_552_166">
        <Rect width={17} height={17} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BuyIcon;
