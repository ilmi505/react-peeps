import React from 'react';
import { PieceType } from '../types';

export const Pomp: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g>
			<path
				d='M333.415 93.2216C329.554 69.8624 342.226 65.0158 333.415 42.8109C313.833 1.66731 260.468 3.44007 221.308 0.276637C177.63 -1.39736 133.422 4.36885 93.1557 21.875C83.5377 26.056 74.2867 30.9732 65.4187 36.5599C57.7507 41.3913 58.8047 50.5773 63.6397 55.5884C28.7747 104.96 48.7157 171.232 20.8967 223.202C15.7577 232.491 8.96066 240.821 4.49366 250.487C-2.29634 265.18 -2.73134 286.233 12.6667 295.99C34.3537 307.631 46.4557 284.584 57.1117 317.993C110.33 434.483 217.329 441.044 318.905 380.31C327.693 375.422 336.662 369.897 343.298 362.217C358.361 345.266 356.587 321.428 356.92 300.259C357.106 287.854 357.137 275.447 357.016 263.039C356.542 212.781 339.885 143.065 333.415 93.2216Z'
				transform='translate(52 80)'
				fill={backgroundColor || '#FFFFFF'}
				stroke='none'
			/>
			<path
				d='M328.858 2.05735C261.958 -4.86265 192.397 5.68736 131.067 33.5074C98.6176 48.2274 68.8166 68.4874 42.6976 92.7374C37.9276 91.3974 32.7076 91.1174 28.3676 91.8674C21.2676 93.0974 14.7676 97.1574 10.5076 102.957C4.02762 111.757 4.25762 122.977 9.17762 131.897C8.39662 132.526 7.67762 133.247 7.01762 134.026C1.82762 140.217 2.36762 148.207 6.17762 154.977C7.24342 156.875 9.16081 158.976 11.1901 161.199C15.3299 165.734 19.9355 170.779 18.7276 175.657C17.9176 178.967 14.9776 182.067 13.2676 184.977C11.1376 188.597 9.33762 192.377 7.73762 196.257C-4.71818 226.333 -0.00202393 258.647 7.02466 289.34L7.65708 292.088C9.04719 298.235 10.3267 305.444 12.6176 312.087C-4.37238 335.487 -0.292376 375.167 27.4976 388.417C34.3276 391.677 41.9276 393.517 49.5176 393.267C53.4776 393.127 57.6076 392.587 61.3576 391.287C63.2276 390.637 65.0776 389.807 66.5276 388.477C70.0076 406.887 77.9576 423.847 87.9476 439.797C93.5776 448.767 100.108 457.727 107.668 465.177C115.658 473.037 129.448 480.717 139.189 471.047C142.508 467.757 141.439 462.647 137.788 460.207C130.948 455.607 123.708 452.787 117.668 446.937C110.948 440.427 104.588 433.397 98.5876 426.227C90.0312 416.005 82.5119 404.857 75.1567 393.666L69.1576 384.517C69.171 384.487 69.1821 384.457 69.1921 384.427L69.2476 384.237C69.2636 384.143 69.2788 384.052 69.2933 383.963L69.4386 383.026C69.4725 382.954 69.5155 382.863 69.5663 382.753L69.8076 382.207C71.6466 378.677 69.3576 374.617 65.3576 374.446C64.0719 374.446 63.8943 374.407 64.8177 374.321L65.1976 374.287C63.8276 373.487 62.3476 373.087 60.7476 373.087C58.8776 373.087 57.0976 373.727 55.3076 374.167C52.6676 374.817 50.3166 375.276 47.5976 375.267C42.0176 375.247 36.6376 373.637 31.9276 370.667C21.0476 363.807 17.9076 349.097 19.6676 337.057C20.1676 333.647 20.9876 330.427 22.1576 327.427C23.6076 328.657 25.2276 329.707 27.0376 330.557C27.3076 330.687 27.5276 330.317 27.2776 330.147C25.5076 329.007 23.9876 327.647 22.6886 326.127C25.9476 318.507 31.4576 312.337 39.2876 308.007C44.2276 305.276 49.8076 303.977 55.2976 304.167C55.3166 304.327 55.3476 304.487 55.3776 304.647C55.9783 307.776 57.4624 309.353 59.6223 311.246L60.3966 311.917C63.3476 314.437 67.1276 314.207 69.5076 311.837L69.5666 311.917C70.3276 311.167 70.9776 310.467 71.5376 309.776C72.6466 310.607 73.6976 311.537 74.6886 312.567C75.0576 312.946 75.6776 312.457 75.4276 311.997C74.6466 310.587 73.7676 309.257 72.7876 308.026C74.0576 305.907 74.5476 303.667 74.5576 300.387C74.5642 297.003 74.4699 293.608 74.3758 290.218C74.3414 288.98 74.307 287.743 74.2776 286.507C74.0666 277.577 73.6076 268.647 73.2576 259.717C73.1717 257.481 72.9894 255.167 72.8046 252.821C72.3654 247.245 71.9123 241.493 72.7076 236.207C73.3663 231.834 76.0088 230.809 79.648 229.747L84.3783 228.38C95.5003 225.123 106.766 221.046 109.178 207.897C110.675 199.71 108.189 192.058 105.694 184.378C103.907 178.879 102.116 173.364 101.778 167.627C101.058 155.577 104.758 143.307 111.608 133.337C118.248 135.057 124.858 136.887 131.608 138.237C140.948 140.117 150.317 141.797 159.718 143.317C178.189 146.307 196.718 148.696 215.388 150.087C252.808 152.867 290.508 151.467 327.628 145.877C332.908 145.087 338.168 144.157 343.388 143.007C343.358 143.897 343.317 144.797 343.268 145.696C342.978 150.717 342.838 155.707 342.828 160.727C342.658 162.037 342.698 163.457 342.939 165.007L343.218 166.817C343.418 168.077 343.918 169.227 344.658 170.237C346.439 198.037 350.189 225.687 353.758 253.327L354.608 259.939C358.846 293 362.863 326.098 366.238 359.257C366.538 362.197 366.894 365.184 367.254 368.201C368.86 381.673 370.537 395.733 367.588 408.797C364.668 421.767 356.388 431.847 346.078 439.907C321.848 458.877 291.468 471.398 261.888 479.077C246.048 483.187 228.918 487.287 212.468 487.097C206.578 487.026 200.328 486.317 194.939 483.776C190.335 481.617 187.444 477.727 184.805 473.541L184.298 472.727C182.098 469.177 175.678 469.377 174.788 473.967C172.138 487.557 184.439 496.017 196.168 499.297C209.517 503.032 223.421 501.296 236.916 499.236L239.248 498.877C274.208 493.457 307.478 481.776 339.088 466.087C353.078 459.147 366.088 449.797 375.628 437.317C386.258 423.397 389.548 406.927 388.618 389.677C387.578 370.667 384.578 351.607 382.178 332.737L381.43 326.903C379.178 309.4 376.826 291.908 374.198 274.457C369.168 241.026 363.718 207.397 354.698 174.776C354.897 174.757 355.098 174.737 355.298 174.707C360.998 173.847 364.358 169.497 364.848 163.887L365.768 153.357L366.267 153.389C382.813 154.407 404.315 152.364 411.948 135.227C414.608 129.257 415.278 122.627 414.038 116.637C425.078 113.776 435.328 107.807 443.228 99.5574C447.328 95.2764 447.038 89.0874 443.228 84.7474C440.968 82.1574 438.558 79.8374 436.018 77.7574C443.228 75.1964 449.988 70.3974 453.748 63.7074C458.588 55.0974 456.689 44.5574 449.918 37.5874C444.1 31.5899 435.848 28.6654 428.193 25.719L425.475 24.6686C394.464 12.7839 361.878 5.46756 328.858 2.05735ZM54.9381 328.377C45.4381 327.567 37.7381 330.787 30.7671 336.937C30.0781 337.537 30.8371 338.477 31.5971 338.347C38.5071 337.127 46.6771 338.497 53.2781 340.627C60.6271 343.007 64.5781 348.007 70.4981 352.437C76.9981 357.297 86.0281 347.807 81.5971 341.337C75.9881 333.147 64.4881 329.196 54.9381 328.377Z'
				transform='translate(37.99998 0.0003450957)'
				fill={strokeColor || '#000000'}
				fill-rule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
