import React from 'react';
import { PieceType } from '../types';

export const MediumShade: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g>
			<path
				d='M229.601 0.586956C286.382 0.586956 357.497 65.3578 378.311 92.9204C395.81 116.094 393.334 235.475 393.334 306.292C393.334 321.103 386.639 349.134 384.209 363.301C375.303 415.216 336.5 458.755 259.701 458.755C197.169 458.755 149.047 438.948 102.511 388.29C91.8948 376.732 40.0463 418.107 29.4427 403.207C1.74601 403.207 -21.413 144.429 32.9657 66.8108C87.3443 -10.8074 172.82 0.586956 229.601 0.586956Z'
				transform='translate(26.97538 38.39062)'
				fill={backgroundColor || '#FFFFFF'}
				stroke='none'
			/>
			<path
				d='M87.9165 43.2046C120.726 13.3546 164.436 -1.00535 208.536 0.054647C231.376 0.604647 254.136 4.95465 275.706 12.4046C286.496 16.1446 296.946 21.0246 306.936 26.5446C310.536 28.5293 313.855 30.8547 317.05 33.3243L317.846 33.9446L317.856 33.9446C326.426 37.0246 334.076 42.5546 341.016 49.0246C354.926 47.9146 368.946 49.1646 382.396 53.4546C401.116 59.4346 418.446 70.3847 430.616 85.9346C444.792 104.038 449.505 125.997 447.824 148.665L447.513 152.516C445.85 172.541 442.871 198.297 426.436 211.455C425.186 212.455 423.806 213.215 422.376 213.675C432.966 231.815 441.656 251.955 446.856 272.295C466.706 349.985 451.446 431.005 427.576 505.885C425.616 512.055 416.286 516.155 411.536 510.125C403.056 499.345 390.736 491.125 376.876 489.585C374.118 489.278 371.363 489.25 368.626 489.221C362.88 489.162 357.21 489.103 351.736 486.475C348.566 484.945 345.506 482.445 343.306 479.405C329.666 484.575 314.976 487.015 300.406 486.415C276.496 485.435 250.936 477.155 234.486 458.995C231.846 456.08 231.177 452.807 231.785 449.857C233.848 449.121 235.966 448.573 238.148 448.23C259.008 460.524 282.002 468.739 306.714 469.255C320.993 469.553 334.921 467.556 346.499 458.64C349.004 456.71 351.308 454.573 353.438 452.277C377.645 436.705 394.712 410.256 402.826 381.925C410.386 355.505 409.456 327.995 406.856 300.895L405.485 286.594C403.485 265.605 401.63 244.553 401.11 223.475L401.267 223.467C406.379 223.137 406.416 215.134 401.267 215.467C394.703 215.892 388.163 215.576 381.627 215.261C374.904 214.937 368.186 214.613 361.452 215.096C361.341 208.819 360.889 202.57 359.044 196.516C357.991 193.057 351.968 192.375 351.33 196.516C350.476 202.056 350.164 207.565 350.071 213.13C342.644 213.031 335.218 212.736 327.793 212.44C315.355 211.945 302.919 211.45 290.474 211.881C286.808 207.971 285.641 201.038 283.926 196.215C283.676 195.505 283.426 194.805 283.166 194.095C281.659 200.987 279.523 207.728 276.713 214.327L271.839 214.343C244.185 214.473 215.967 215.299 188.962 221.043C187.085 219.602 185.968 217.088 185.666 214.805C183.708 199.949 180.912 185.488 175.957 171.331L175.249 169.334C175.191 169.168 175.129 168.992 175.065 168.807C171.414 174.7 167.058 180.193 162.307 185.308C159.507 188.323 156.571 191.206 153.558 194.007C150.631 197.257 147.606 200.458 144.674 203.718C144.789 204.311 144.889 204.913 144.97 205.526C145.867 212.291 145.96 219.152 145.303 225.943C144.115 238.22 140.649 250.05 135.081 260.994L134.905 262.089C134.06 267.218 132.857 272.519 130.047 276.381C133.553 280.309 136.254 285.001 137.82 290.214C139.214 294.855 132.793 298.877 129.463 295.079C126.818 292.062 123.879 289.565 120.651 287.573C120.447 287.85 120.079 287.986 119.666 287.755C110.676 282.765 95.4065 284.275 86.4265 288.975C75.2565 294.815 70.8965 306.805 72.1365 318.955C73.3265 330.565 78.4065 344.135 88.2565 350.085C92.7765 352.815 96.2965 353.045 101.096 351.735C102.631 351.318 104.534 350.039 105.351 349.404L106.154 348.76C109.301 346.273 112.232 344.57 115.946 344.505C119.746 343.32 123.564 344.963 125.017 348.947L125.106 349.205C125.227 349.565 125.365 349.941 125.51 350.334C126.179 352.157 126.979 354.335 126.756 356.885C126.476 360.205 124.956 363.225 122.686 365.655C122.296 366.075 121.876 366.495 121.446 366.885C160.546 409.215 165.566 475.175 145.516 528.055C144.646 530.375 143.716 532.665 142.746 534.935C139.396 542.715 126.496 540.305 124.856 532.595C124.366 530.285 123.826 527.985 123.236 525.705C122.152 521.491 120.91 517.318 119.509 513.204L118.976 511.665C117.786 508.265 116.676 504.835 115.476 501.435L115.356 501.046C115.311 500.892 115.261 500.715 115.206 500.515L113.176 504.945L107.006 518.315C104.119 524.554 94.9458 521.163 94.6047 515.151L94.5965 514.945C94.5665 513.835 94.5265 512.735 94.4565 511.645C94.0165 503.475 92.6065 495.535 90.3665 487.765L89.5583 488.769C77.5244 503.647 63.4011 517.592 44.0265 521.025C39.1665 521.885 33.6665 516.805 37.0065 511.895C38.3865 509.865 39.7165 507.785 40.9765 505.675C39.8865 505.165 38.8565 504.635 37.9065 504.095C30.5565 499.965 24.4365 494.085 19.3765 487.415C8.64648 473.275 4.80648 455.475 3.86648 438.055C2.86648 419.645 4.48648 400.235 9.51648 382.475C11.6965 374.795 14.6465 367.425 18.0565 360.275C17.8165 359.635 17.5865 358.995 17.3565 358.355C13.6765 348.095 10.6565 337.605 8.14648 326.995C3.08648 305.575 0.366478 283.475 0.0364778 261.465C-0.563522 222.035 6.23648 181.975 20.5665 145.205C35.3665 107.285 57.6265 70.7546 87.9165 43.2046ZM332.236 89.6946C327.396 88.0046 329.486 80.2847 334.366 81.9746C349.626 87.2946 360.146 98.3246 369.006 111.465C371.896 115.745 364.966 119.745 362.106 115.505C354.476 104.185 345.426 94.2847 332.236 89.6946ZM98.8165 97.8847L98.235 98.4058C81.6923 113.447 75.9051 137.155 67.1865 156.975C65.1165 161.685 58.2265 157.605 60.2765 152.935C69.4165 132.165 75.5365 107.795 93.1565 92.2246C97.0065 88.8247 102.686 94.4647 98.8165 97.8847ZM309.976 91.5947C305.373 89.52 301.345 96.2199 305.771 98.426L305.936 98.5047C321.496 105.535 328.116 121.455 334.456 136.235C336.476 140.955 343.366 136.885 341.366 132.205L340.222 129.553C333.607 114.321 325.891 98.796 309.976 91.5947ZM93.1565 306.265L94.962 305.391C100.657 302.673 105.647 300.822 112.376 303.195C121.386 306.365 131.036 316.455 124.946 326.245C122.706 329.855 118.726 331.295 114.626 330.445C107.714 329.011 105.931 322.787 102.423 317.677L101.82 316.812C99.6811 313.72 96.9768 309.446 93.4165 308.235C92.6065 307.955 92.2665 306.695 93.1565 306.265ZM62.4924 391.831C59.969 387.522 66.7688 383.666 69.4865 387.945C73.8545 394.814 76.1057 402.615 78.5735 410.292L79.1065 411.935C80.7165 416.855 72.9865 418.935 71.3965 414.065C68.9165 406.495 66.8965 398.775 62.5865 391.985L62.4924 391.831Z'
				transform='translate(-1.999778 14.00025)'
				fill={strokeColor || '#000000'}
				fill-rule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
