import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DownIcon = (props: any) => (
  <Svg
    width={16}
    height={9}
    viewBox="0 0 16 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M8 9L0.205772 0.75L15.7942 0.75L8 9Z" fill={props.color ? props.color : "#773D94"} />
  </Svg>
);
export default DownIcon;
