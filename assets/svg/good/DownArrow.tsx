import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DownArrow = (props: any) => (
  <Svg
    width={28}
    height={9}
    viewBox="0 0 28 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 6.60014L20.2 0.400118C20.5314 0.0687498 21.0686 0.068749 21.4 0.400118C21.7314 0.731487 21.7314 1.26874 21.4 1.60011L14.6001 8.40007C14.4036 8.5965 14.1348 8.67649 13.8795 8.64004C13.704 8.61501 13.5349 8.53502 13.3999 8.40005L6.59997 1.60009C6.2686 1.26872 6.2686 0.731468 6.59997 0.400099C6.93134 0.0687301 7.46859 0.0687295 7.79996 0.400099L14 6.60014Z"
      fill="white"
    />
  </Svg>
);
export default DownArrow;
