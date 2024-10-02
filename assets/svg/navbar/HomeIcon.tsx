import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeIcon = (props: any) => (
  <Svg
    width={41}
    height={40}
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.32365 15.2629C5.11902 15.7027 5.01307 16.1818 5.01318 16.6667V31.6667C5.01318 32.5507 5.3653 33.3986 5.99207 34.0237C6.61884 34.6488 7.46892 35 8.35531 35H31.7502C32.6366 35 33.4867 34.6488 34.1135 34.0237C34.7402 33.3986 35.0923 32.5507 35.0923 31.6667V16.6667C35.0925 16.1818 34.9865 15.7027 34.7819 15.2629C34.5772 14.823 34.2789 14.433 33.9076 14.12L22.2101 4.12166C21.6069 3.61318 20.8426 3.3342 20.0528 3.3342C19.2629 3.3342 18.4986 3.61318 17.8954 4.12166L6.19797 14.12C5.82665 14.433 5.52828 14.823 5.32365 15.2629ZM25.066 21.5556V34H15.0396V21.5556C15.0396 21.143 15.2156 20.7473 15.529 20.4556C15.8424 20.1639 16.2674 20 16.7106 20H23.3949C23.8381 20 24.2631 20.1639 24.5765 20.4556C24.8899 20.7473 25.066 21.143 25.066 21.5556Z"
      fill={props.color ? props.color : "#ACACAC"}
    />
    <Path
      d="M5.01318 16.6667H6.01318V16.6664L5.01318 16.6667ZM5.32365 15.2629L4.41697 14.841L4.41697 14.841L5.32365 15.2629ZM5.99207 34.0237L5.2859 34.7317L5.2859 34.7317L5.99207 34.0237ZM34.1135 34.0237L34.8196 34.7317V34.7317L34.1135 34.0237ZM35.0923 16.6667L34.0923 16.6664V16.6667H35.0923ZM34.7819 15.2629L35.6886 14.841L35.6886 14.841L34.7819 15.2629ZM33.9076 14.12L33.2578 14.8802L33.263 14.8846L33.9076 14.12ZM22.2101 4.12166L22.8599 3.36149L22.8546 3.35707L22.2101 4.12166ZM17.8954 4.12166L17.2509 3.35705L17.2457 3.36151L17.8954 4.12166ZM6.19797 14.12L6.84249 14.8846L6.84771 14.8802L6.19797 14.12ZM25.066 34V35C25.6182 35 26.066 34.5523 26.066 34H25.066ZM15.0396 34H14.0396C14.0396 34.5523 14.4873 35 15.0396 35V34ZM24.5765 20.4556L25.2579 19.7237L25.2579 19.7237L24.5765 20.4556ZM6.01318 16.6664C6.0131 16.3274 6.08717 15.9924 6.23033 15.6847L4.41697 14.841C4.15086 15.413 4.01303 16.0361 4.01318 16.6669L6.01318 16.6664ZM6.01318 31.6667V16.6667H4.01318V31.6667H6.01318ZM6.69825 33.3156C6.2593 32.8779 6.01318 32.2847 6.01318 31.6667H4.01318C4.01318 32.8168 4.4713 33.9193 5.2859 34.7317L6.69825 33.3156ZM8.35531 34C7.73329 34 7.13728 33.7535 6.69824 33.3156L5.2859 34.7317C6.1004 35.5441 7.20456 36 8.35531 36V34ZM31.7502 34H8.35531V36H31.7502V34ZM33.4073 33.3156C32.9682 33.7535 32.3722 34 31.7502 34V36C32.901 36 34.0051 35.5441 34.8196 34.7317L33.4073 33.3156ZM34.0923 31.6667C34.0923 32.2846 33.8462 32.8779 33.4073 33.3156L34.8196 34.7317C35.6342 33.9193 36.0923 32.8168 36.0923 31.6667H34.0923ZM34.0923 16.6667V31.6667H36.0923V16.6667H34.0923ZM33.8752 15.6847C34.0183 15.9924 34.0924 16.3274 34.0923 16.6664L36.0923 16.6669C36.0925 16.0361 35.9547 15.413 35.6886 14.841L33.8752 15.6847ZM33.263 14.8846C33.5232 15.1039 33.732 15.377 33.8752 15.6847L35.6886 14.841C35.4225 14.2691 35.0346 13.7621 34.5521 13.3554L33.263 14.8846ZM21.5604 4.88182L33.2578 14.8802L34.5573 13.3598L22.8598 3.36151L21.5604 4.88182ZM20.0528 4.3342C20.607 4.3342 21.1429 4.52998 21.5656 4.88626L22.8546 3.35707C22.0708 2.69637 21.0782 2.3342 20.0528 2.3342V4.3342ZM18.5399 4.88626C18.9626 4.52998 19.4985 4.3342 20.0528 4.3342V2.3342C19.0274 2.3342 18.0347 2.69637 17.2509 3.35707L18.5399 4.88626ZM6.84771 14.8802L18.5452 4.88182L17.2457 3.36151L5.54823 13.3598L6.84771 14.8802ZM6.23033 15.6847C6.37349 15.377 6.58234 15.1039 6.84248 14.8846L5.55346 13.3554C5.07097 13.7621 4.68306 14.2691 4.41697 14.841L6.23033 15.6847ZM26.066 34V21.5556H24.066V34H26.066ZM15.0396 35H25.066V33H15.0396V35ZM14.0396 21.5556V34H16.0396V21.5556H14.0396ZM14.8477 19.7237C14.3397 20.1965 14.0396 20.8537 14.0396 21.5556H16.0396C16.0396 21.4323 16.0915 21.2982 16.2104 21.1876L14.8477 19.7237ZM16.7106 19C16.0244 19 15.3532 19.2531 14.8477 19.7237L16.2104 21.1876C16.3316 21.0747 16.5105 21 16.7106 21V19ZM23.3949 19H16.7106V21H23.3949V19ZM25.2579 19.7237C24.7524 19.2531 24.0811 19 23.3949 19V21C23.5951 21 23.7739 21.0747 23.8952 21.1876L25.2579 19.7237ZM26.066 21.5556C26.066 20.8537 25.7658 20.1965 25.2579 19.7237L23.8952 21.1876C24.014 21.2982 24.066 21.4323 24.066 21.5556H26.066Z"
      fill={props.color ? props.color : "#ACACAC"}
    />
  </Svg>
);
export default HomeIcon;