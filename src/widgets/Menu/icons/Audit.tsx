import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 17 21" {...props}>
     
        <path d="M15.3462 0H0.807692C0.361846 0 0 0.361846 0 0.807692V20.1923C0 20.6382 0.361846 21 0.807692 21H15.3462C15.792 21 16.1538 20.6382 16.1538 20.1923V0.807692C16.1538 0.361846 15.792 0 15.3462 0ZM3.23077 3.23077H8.88461C9.33046 3.23077 9.69231 3.59262 9.69231 4.03846C9.69231 4.48431 9.33046 4.84615 8.88461 4.84615H3.23077C2.78492 4.84615 2.42308 4.48431 2.42308 4.03846C2.42308 3.59262 2.78492 3.23077 3.23077 3.23077ZM3.23077 5.65385H8.88461C9.33046 5.65385 9.69231 6.01569 9.69231 6.46154C9.69231 6.90738 9.33046 7.26923 8.88461 7.26923H3.23077C2.78492 7.26923 2.42308 6.90738 2.42308 6.46154C2.42308 6.01569 2.78492 5.65385 3.23077 5.65385ZM2.42308 11.3077C2.42308 10.8618 2.78492 10.5 3.23077 10.5H8.88461C9.33046 10.5 9.69231 10.8618 9.69231 11.3077C9.69231 11.7535 9.33046 12.1154 8.88461 12.1154H3.23077C2.78492 12.1154 2.42308 11.7535 2.42308 11.3077ZM9.96046 14.9863L8.34508 17.4094C8.2106 17.6109 7.99333 17.7414 7.75263 17.7652C7.72598 17.768 7.69933 17.7692 7.67308 17.7692C7.45985 17.7692 7.25429 17.6848 7.10204 17.5326L6.29435 16.7249C5.97894 16.4095 5.97894 15.8982 6.29435 15.5828C6.60935 15.2674 7.12142 15.2674 7.43642 15.5828L7.54748 15.6935L8.61646 14.0902C8.86361 13.7187 9.36519 13.6181 9.73633 13.8661C10.1075 14.1136 10.2076 14.6152 9.96046 14.9863ZM12.9231 12.1154H11.3077C10.8618 12.1154 10.5 11.7535 10.5 11.3077C10.5 10.8618 10.8618 10.5 11.3077 10.5H12.9231C13.3689 10.5 13.7308 10.8618 13.7308 11.3077C13.7308 11.7535 13.3689 12.1154 12.9231 12.1154ZM12.9231 9.69231H3.23077C2.78492 9.69231 2.42308 9.33046 2.42308 8.88461C2.42308 8.43877 2.78492 8.07692 3.23077 8.07692H12.9231C13.3689 8.07692 13.7308 8.43877 13.7308 8.88461C13.7308 9.33046 13.3689 9.69231 12.9231 9.69231ZM12.9231 7.26923H11.3077C10.8618 7.26923 10.5 6.90738 10.5 6.46154C10.5 6.01569 10.8618 5.65385 11.3077 5.65385H12.9231C13.3689 5.65385 13.7308 6.01569 13.7308 6.46154C13.7308 6.90738 13.3689 7.26923 12.9231 7.26923ZM12.9231 4.84615H11.3077C10.8618 4.84615 10.5 4.48431 10.5 4.03846C10.5 3.59262 10.8618 3.23077 11.3077 3.23077H12.9231C13.3689 3.23077 13.7308 3.59262 13.7308 4.03846C13.7308 4.48431 13.3689 4.84615 12.9231 4.84615Z"  />
   

      {/* <g id="surface1">
        <path d="M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " />
        <path d="M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " />
      </g> */}
    </Svg>
  );
};

export default Icon;