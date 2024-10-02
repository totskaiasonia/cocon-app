import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ShareIcon = (props: any) => (
  <Svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.375 10.5H20.5625C21.1427 10.5 21.6991 10.7305 22.1093 11.1407C22.5195 11.5509 22.75 12.1073 22.75 12.6875V23.1875C22.75 23.7677 22.5195 24.3241 22.1093 24.7343C21.6991 25.1445 21.1427 25.375 20.5625 25.375H7.4375C6.85734 25.375 6.30094 25.1445 5.8907 24.7343C5.48047 24.3241 5.25 23.7677 5.25 23.1875V12.6875C5.25 12.1073 5.48047 11.5509 5.8907 11.1407C6.30094 10.7305 6.85734 10.5 7.4375 10.5H9.625M18.375 7L14 2.625M14 2.625L9.625 7M14 2.625V17.5547"
      stroke="#773D94"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ShareIcon;
