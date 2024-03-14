import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Friendship = ({isClicked}) => (
  <Svg
    width={29}
    height={39}
    viewBox="0 0 29 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // {...props}
  >
    <Path
      d="M26.5829 12.1996C27.1424 11.7027 27.4415 10.9752 27.3932 10.2283C27.3449 9.48147 26.9546 8.79865 26.3355 8.37804C25.7165 7.95743 24.9381 7.84562 24.2259 8.0758L20.0569 9.42833H5.65612C4.91723 9.42805 4.19979 9.6771 3.62026 10.1355C3.04066 10.5938 2.63293 11.2346 2.46282 11.9535L0.0606651 22.1276C-0.120053 22.8679 0.107845 23.6485 0.658282 24.1756C1.209 24.7023 1.99903 24.8953 2.73052 24.6817C3.46224 24.4681 4.02412 23.8805 4.20514 23.1402L4.65608 21.361V35.7083C4.65608 36.5779 5.00149 37.4119 5.61654 38.027C6.23159 38.6421 7.06569 38.9875 7.93554 38.9875H9.12417V26.1408C9.12417 25.6881 9.49131 25.321 9.94394 25.321C10.3969 25.321 10.764 25.6882 10.764 26.1408V38.9999H11.9487C12.8911 38.9979 13.7873 38.5902 14.4081 37.8811C15.0291 38.5902 15.925 38.998 16.8678 38.9999H20.967C21.8368 38.9999 22.6709 38.6545 23.286 38.0395C23.9008 37.4244 24.2465 36.5903 24.2465 35.7208V21.3983L24.7014 23.1403C24.9018 23.8606 25.4634 24.4236 26.1828 24.6263C26.9023 24.8288 27.6755 24.6412 28.2221 24.1317C28.7686 23.6218 29.0096 22.8638 28.8581 22.1321L26.5829 12.1996ZM27.161 22.9235C27.063 23.049 26.91 23.1191 26.751 23.112C26.5237 23.112 26.3249 22.9587 26.2672 22.7388L24.2176 14.7123V14.7126C24.1098 14.3066 23.7126 14.0478 23.2977 14.1133C22.8828 14.1788 22.5843 14.5474 22.6066 14.9665V14.9911V35.7215C22.6066 36.1562 22.4339 36.5734 22.1265 36.8807C21.8188 37.1884 21.4019 37.3611 20.967 37.3611H19.7823V26.1417C19.7823 25.689 19.4152 25.3219 18.9626 25.3219C18.5096 25.3219 18.1425 25.689 18.1425 26.1417V37.3611H16.8678C16.4329 37.3611 16.0156 37.1884 15.7083 36.8807C15.4009 36.5734 15.2282 36.1562 15.2282 35.7215V14.3484H20.1921C20.2727 14.3478 20.3531 14.3353 20.43 14.3115L25.0622 12.9013L27.251 22.5015C27.2876 22.6485 27.2545 22.8043 27.1609 22.9238L27.161 22.9235Z"
            // fill="#455A64"
            fill={(isClicked) ? '#01818c' : '#455A64'}
            // fillOpacity={0.55}
            fillOpacity={(isClicked) ? 1 : 0.55}
    />
    <Path
      d="M18.9635 0C17.7674 0 16.6205 0.474948 15.7749 1.32047C14.9291 2.1663 14.4542 3.31321 14.4542 4.50901C14.4484 2.90006 13.5855 1.41599 12.1901 0.615105C10.7947 -0.186076 9.07816 -0.182928 7.68566 0.623111C6.29317 1.42949 5.43591 2.91634 5.43591 4.52558C5.43591 6.13453 6.29317 7.62146 7.68566 8.42784C9.07816 9.23392 10.7947 9.23707 12.1901 8.43613C13.5854 7.63495 14.4484 6.15088 14.4542 4.54193C14.4542 5.73773 14.9291 6.88464 15.7749 7.73047C16.6205 8.57601 17.7674 9.05123 18.9635 9.05123C20.1593 9.05123 21.3062 8.576 22.1517 7.73047C22.9975 6.88464 23.4725 5.73773 23.4725 4.54193C23.4725 3.34612 22.9975 2.19921 22.1517 1.35338C21.3062 0.507841 20.1593 0.0326226 18.9635 0.0326226V0ZM18.9635 7.37862V7.37834C18.2023 7.37834 17.4726 7.0761 16.9344 6.53799C16.3963 5.99985 16.0938 5.27016 16.0938 4.50895C16.0938 3.74802 16.3963 3.01807 16.9344 2.4799C17.4726 1.94176 18.2022 1.63955 18.9635 1.63955C19.7244 1.63955 20.4543 1.94179 20.9925 2.4799C21.5307 3.01804 21.8329 3.74802 21.8329 4.50895C21.834 5.27067 21.532 6.00158 20.9939 6.54056C20.4555 7.07984 19.7252 7.38266 18.9635 7.38266V7.37862Z"
            // fill="#455A64"
            fill={(isClicked) ? '#01818c' : '#455A64'}
            // fillOpacity={0.55}
            fillOpacity={(isClicked) ? 1 : 0.55}
    />
  </Svg>
);
export default Friendship;