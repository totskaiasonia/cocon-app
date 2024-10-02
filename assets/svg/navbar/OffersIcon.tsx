import * as React from "react";
import Svg, { Path } from "react-native-svg";
const OffersIcon = (props: any) => (
  <Svg
    width={38}
    height={37}
    viewBox="0 0 38 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M33.5242 17.8525L19.6126 3.97751C19.0561 3.42251 18.2832 3.08334 17.4331 3.08334H6.61295C4.91265 3.08334 3.52148 4.47084 3.52148 6.16668V16.9583C3.52148 17.8063 3.86155 18.5771 4.43347 19.1475L18.3451 33.0225C18.9015 33.5775 19.6744 33.9167 20.5246 33.9167C21.3747 33.9167 22.1476 33.5775 22.704 33.0071L33.5242 22.2154C34.0961 21.6604 34.4362 20.8896 34.4362 20.0417C34.4362 19.1938 34.0807 18.4075 33.5242 17.8525ZM20.5246 30.8488L6.61295 16.9583V6.16668H17.4331V6.15126L31.3447 20.0263L20.5246 30.8488Z"
      fill={props.color ? props.color : "#ACACAC"}
    />
    <Path
      d="M10.4773 12.3333C11.7578 12.3333 12.7959 11.298 12.7959 10.0208C12.7959 8.74369 11.7578 7.70834 10.4773 7.70834C9.19676 7.70834 8.15869 8.74369 8.15869 10.0208C8.15869 11.298 9.19676 12.3333 10.4773 12.3333Z"
      fill={props.color ? props.color : "#ACACAC"}
    />
  </Svg>
);
export default OffersIcon;
