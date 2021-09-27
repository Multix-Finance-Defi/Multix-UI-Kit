import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
	return (
		<Svg viewBox="0 0 23 23" {...props}>

			
				<path d="M11.6027 11.9637L8.32779 8.68835C7.54398 9.55727 7.06238 10.7034 7.06238 11.9632C7.06238 13.223 7.54449 14.3697 8.3283 15.2386L11.6027 11.9637Z"   />
				<path d="M19.957 2.88879H3.96886C3.37311 2.88879 2.88794 3.37396 2.88794 3.96972V19.9573C2.88794 20.5536 3.37311 21.0382 3.96886 21.0382H19.9565C20.5527 21.0382 21.0374 20.5536 21.0374 19.9573V3.96972C21.0379 3.37396 20.5527 2.88879 19.957 2.88879ZM15.7887 15.7896C15.7831 15.7952 15.7765 15.7972 15.7704 15.8018C14.7919 16.7716 13.4465 17.373 11.9629 17.373C10.4789 17.373 9.13295 16.7716 8.15446 15.8008C8.14936 15.7962 8.14273 15.7942 8.13764 15.7896C8.13254 15.785 8.13101 15.7784 8.12643 15.7728C7.15507 14.7943 6.5532 13.4483 6.5532 11.9633C6.5532 10.4777 7.15609 9.13023 8.12897 8.15174C8.13254 8.14767 8.13407 8.14206 8.13815 8.13849C8.14223 8.13493 8.14783 8.13289 8.15191 8.12932C9.1304 7.15644 10.4779 6.55354 11.9634 6.55354C13.4485 6.55354 14.796 7.15593 15.7744 8.1283C15.779 8.13238 15.7851 8.13391 15.7892 8.13849C15.7933 8.14308 15.7953 8.1492 15.7994 8.15327C16.7713 9.13176 17.3737 10.4787 17.3737 11.9638C17.3737 13.4478 16.7723 14.7938 15.8015 15.7717C15.7958 15.7773 15.7943 15.784 15.7887 15.7896Z"   />
				<path d="M15.5982 8.68884L12.3234 11.9637L15.5977 15.2381C16.3815 14.3692 16.8631 13.223 16.8631 11.9632C16.8631 10.7044 16.3815 9.55827 15.5982 8.68884Z"   />
				<path d="M11.9629 11.6035L15.2378 8.32864C14.3688 7.54483 13.2227 7.06323 11.9629 7.06323C10.7031 7.06323 9.55691 7.54483 8.68799 8.32813L11.9629 11.6035Z"   />
				<path d="M11.9628 12.3241L8.68848 15.599C9.5574 16.3818 10.7036 16.8634 11.9628 16.8634C13.2221 16.8634 14.3683 16.3818 15.2372 15.5985L11.9628 12.3241Z"   />
				<path d="M21.0375 23.51H17.5817V24.754H21.0375V23.51Z"   />
				<path d="M6.34374 23.51H2.88794V24.754H6.34374V23.51Z"   />
				<path d="M22.9995 0.926758H0.926392V23.0004H2.63365H6.59908H17.3273H21.2927H23V0.926758H22.9995ZM21.5476 19.9574C21.5476 20.8344 20.8341 21.5479 19.957 21.5479H3.96888C3.09181 21.5479 2.37833 20.8344 2.37833 19.9574V3.96976C2.37833 3.09269 3.09181 2.3792 3.96888 2.3792H19.9565C20.8336 2.3792 21.547 3.09269 21.547 3.96976V19.9574H21.5476Z"   />
			


			{/* <g>
        <path d="M59.655,180.863c-0.926,1.604-2.606,2.5-4.334,2.5c-0.849,0-1.708-0.217-2.496-0.671
	C22.606,165.237,3.833,132.739,3.834,97.879c0-20.076,6.034-39.288,17.232-55.5l-6.344-6.267c-1.372-1.355-1.842-3.379-1.208-5.2
	c0.634-1.822,2.26-3.116,4.177-3.326l21.274-2.333c1.499-0.168,2.988,0.354,4.059,1.413c1.071,1.058,1.608,2.543,1.462,4.041
	l-2.074,21.301c-0.187,1.92-1.461,3.561-3.275,4.217c-0.555,0.201-1.13,0.299-1.7,0.299c-1.294,0-2.563-0.502-3.515-1.443
	l-5.612-5.544c-9.411,14.238-14.476,30.926-14.476,48.343c0,31.3,16.856,60.48,43.993,76.153
	C60.218,175.414,61.037,178.472,59.655,180.863z M194.591,92.675c-2.761,0-5,2.238-5,5l0,0.204
	c0,48.457-39.422,87.879-87.879,87.879c-1.773,0-3.543-0.056-5.308-0.161l1.911-7.653c0.467-1.871-0.184-3.845-1.672-5.07
	c-1.49-1.228-3.551-1.486-5.297-0.67l-19.385,9.068c-1.364,0.639-2.368,1.857-2.732,3.318s-0.052,3.008,0.852,4.212l12.848,17.117
	c0.956,1.273,2.445,1.999,3.999,1.999c0.329,0,0.662-0.032,0.992-0.1c1.891-0.382,3.393-1.817,3.86-3.689l2.169-8.688
	c2.579,0.203,5.169,0.317,7.766,0.317c53.971,0,97.879-43.908,97.879-97.915l0-0.168C199.591,94.913,197.352,92.675,194.591,92.675z
	 M202.255,51.683c-1.491-1.223-3.552-1.48-5.299-0.658l-7.485,3.52C173.208,21.73,139.285,0,101.712,0
	C84.453,0.001,67.485,4.556,52.64,13.173c-2.388,1.387-3.2,4.446-1.814,6.834c1.386,2.388,4.444,3.203,6.834,1.814
	C70.982,14.089,86.215,10.001,101.713,10c33.671,0,64.077,19.434,78.71,48.8l-7.89,3.711c-1.746,0.82-2.863,2.572-2.872,4.501
	c-0.009,1.929,1.092,3.691,2.83,4.528l19.281,9.288c0.686,0.33,1.428,0.495,2.17,0.495c0.727,0,1.454-0.158,2.128-0.476
	c1.363-0.641,2.364-1.861,2.726-3.323l5.142-20.774C204.401,54.878,203.746,52.906,202.255,51.683z M70.811,138.821
	c-2.761,0-5-2.238-5-5s2.239-5,5-5h25.902v-26.94h-7.435c-12.939,0-23.467-10.527-23.467-23.467
	c0-12.946,10.527-23.474,23.467-23.474h7.435v-5.746c0-2.762,2.239-5,5-5s5,2.238,5,5v5.746h25.902c2.761,0,5,2.238,5,5
	s-2.239,5-5,5h-25.902v26.94h7.431c12.942,0,23.471,10.529,23.471,23.471s-10.529,23.47-23.471,23.47h-7.431v7.741
	c0,2.762-2.239,5-5,5s-5-2.238-5-5v-7.741H70.811z M89.278,91.881h7.435V64.94h-7.435c-7.426,0-13.467,6.041-13.467,13.467
	C75.811,85.84,81.852,91.881,89.278,91.881z M106.713,128.821h7.431c7.428,0,13.471-6.043,13.471-13.47
	c0-7.428-6.043-13.471-13.471-13.471h-7.431V128.821z" />
      </g> */}
		</Svg>
	);
};

export default Icon;