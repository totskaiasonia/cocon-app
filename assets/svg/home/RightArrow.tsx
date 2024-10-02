import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RightArrow = (props: any) => (
  <Svg
    width={11}
    height={18}
    viewBox="0 0 11 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.85715 0.857155C2.38376 0.383761 1.61624 0.383761 1.14285 0.857154C0.669452 1.33055 0.669453 2.09807 1.14285 2.57146L7.57145 9.00006L1.14273 15.4288C0.669339 15.9022 0.669339 16.6697 1.14273 17.1431C1.61613 17.6165 2.38365 17.6165 2.85704 17.1431L10.133 9.86718C10.1363 9.8639 10.1396 9.8606 10.143 9.85728C10.6164 9.38388 10.6164 8.61636 10.143 8.14297L2.85715 0.857155Z"
      fill="black"
    />
  </Svg>
);
export default RightArrow;
