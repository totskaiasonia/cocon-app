import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeartIcon = (props: any) => (
  <Svg
    width={38}
    height={38}
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M32.398 21.2027L21.7245 32.0097C21.0169 32.7259 20.0573 33.1282 19.0566 33.1282C18.056 33.1282 17.0964 32.7259 16.3887 32.0097L5.71525 21.2046C4.83294 20.3192 4.13206 19.2661 3.65287 18.1057C3.17367 16.9454 2.92559 15.7006 2.92287 14.443C2.92015 13.1853 3.16285 11.9394 3.63702 10.777C4.11119 9.61451 4.8075 8.55831 5.68597 7.669C6.56445 6.77969 7.60779 6.07479 8.75609 5.59477C9.90439 5.11475 11.135 4.86906 12.3774 4.87182C13.6197 4.87457 14.8493 5.12571 15.9955 5.61082C17.1417 6.09592 18.182 6.80544 19.0566 7.69864C20.8332 5.94497 23.2207 4.97045 25.7019 4.98619C28.1832 5.00193 30.5584 6.00665 32.3131 7.78272C34.0678 9.55879 35.0606 11.9632 35.0765 14.4751C35.0924 16.9869 34.1301 19.404 32.398 21.2027Z"
      stroke="#C07C9C"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HeartIcon;
