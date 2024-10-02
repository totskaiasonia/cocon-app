import * as React from "react";
import Svg, { Path } from "react-native-svg";
const InStoreIcon = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z"
      fill="#44B80E"
    />
  </Svg>
);
export default InStoreIcon;
