import React from 'react';
import { PieceType } from '../types';

export const CornRows: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g>
			<path
				d='M438.548 286.86C444.742 242.157 431.514 199.016 414.377 158.16C413.436 155.672 411.943 153.517 410.024 151.985C361.661 54.5076 290.598 45.6806 191.459 52.3936C188.53 52.3286 188.356 52.3806 186.132 51.3856C185.764 11.7876 140.539 -9.18736 106.124 3.87764C-46.5083 74.8066 1.48573 274.492 31.8587 404.857C42.6947 455.322 53.5337 505.784 64.3717 556.247C64.7357 557.935 65.5027 559.394 66.5227 560.624C64.9487 561.221 63.3737 561.781 61.8287 562.307C58.3027 563.507 59.7037 568.764 63.3737 567.912C66.9707 567.077 70.4367 565.958 73.8657 564.739C79.2117 565.899 83.6937 562.406 87.8907 559.62C137.037 540.186 157.669 476.315 170.275 429.262C221.526 465.422 303.419 492.504 362.018 459.988C416.926 426.922 436.7 357.947 432.799 297.068C436.806 295.224 438.423 291.204 438.528 287.013L438.552 287.013C438.551 286.962 438.548 286.911 438.548 286.86L438.548 286.86Z'
				transform='translate(-8.000031 30.00066)'
				fill={backgroundColor || '#FFFFFF'}
				stroke='none'
			/>
			<path
				d='M147.265 0.06499C133.915 -0.47001 119.372 2.26199 108.041 9.60199C102.257 13.348 97.3922 18.011 93.3202 23.306C93.1242 23.256 92.9142 23.232 92.6782 23.273C58.3892 29.324 37.1632 62.573 24.5862 92.168C9.48818 127.694 2.43418 166.038 0.53218 204.482C-2.95174 274.909 11.2423 344.261 26.3966 412.737L32.6072 440.702C37.5122 462.86 42.8132 484.934 47.5602 507.126C52.3172 529.365 56.0882 552.184 63.0302 573.826C64.6752 578.954 71.2382 577.492 71.8692 572.63C72.1222 570.685 72.3222 568.761 72.4952 566.844C73.5322 567.653 74.6882 568.216 75.8902 568.536C76.1322 569.805 76.5822 571.04 77.2522 572.185C80.1532 577.146 85.4242 578.432 90.7502 577.679C118.344 573.771 151.3 564.456 159.351 533.859C160.03 531.277 160.504 528.643 160.869 525.987C163.269 523.705 165.409 520.912 167.052 518.514C170.049 514.138 172.218 509.352 174.009 504.37C177.532 494.569 180.157 484.418 182.405 474.258C185.882 458.534 187.652 441.282 185.053 425.066C186.694 423.107 187.206 420.389 185.338 417.71C184.496 416.502 183.561 415.368 182.584 414.267L182.336 413.406C182.052 412.506 181.151 411.88 180.232 411.758C177.2 408.71 173.905 405.871 171.041 402.691C166.276 397.4 161.979 391.879 157.899 386.051C156.637 384.247 155.405 382.434 154.193 380.611C153.773 379.265 153.225 377.923 152.645 376.684C151.231 373.664 149.148 371.074 146.967 368.572C145.425 365.62 143.891 362.649 142.426 359.659C141.615 358.002 140.939 356.102 140.016 354.411C141.644 351.346 139.779 347.228 135.9 347.191C134.694 347.18 133.466 347.199 132.227 347.218L132.223 347.218L132.22 347.218L132.217 347.218L132.214 347.218L132.21 347.218L132.207 347.218L132.203 347.218L132.2 347.218L132.196 347.219C131.4 347.231 130.599 347.243 129.796 347.248L129.377 347.051C126.148 345.596 122.769 345.076 119.629 346.224C118.968 346.039 118.314 345.826 117.672 345.57C112.47 343.501 108.313 339.295 105.435 334.59C99.6582 325.146 98.2072 313.45 101.375 302.856C104.356 292.887 111.794 284.92 121.688 281.583C132.375 277.978 145.636 279.333 154.241 286.99C154.745 287.438 155.385 286.77 154.97 286.261C146.103 275.371 133.055 269.741 118.964 271.702C113.613 272.447 108.785 274.39 104.565 277.195C107.616 274.012 108.123 269.555 107.503 264.947L107.281 263.241C106.137 254.137 105.618 244.957 105.667 235.781C106.175 235.857 106.684 235.934 107.185 236.026C112.36 236.973 117.501 238.005 122.64 239.123C132.57 241.284 142.877 243.726 152.31 247.539C152.885 247.772 153.327 246.914 152.903 246.521C144.776 238.994 136.699 232.223 126.731 227.214C121.824 224.748 116.575 222.621 111.316 221.041C109.717 220.56 108.054 220.048 106.359 219.573C106.69 215.548 107.147 211.531 107.712 207.526C109.209 207.484 110.703 207.437 112.195 207.39C121.213 207.105 130.163 206.822 139.259 207.693C151.384 208.854 163.819 210.848 175.25 215.161C175.822 215.377 176.111 214.525 175.648 214.219C156.499 201.567 134.496 190.543 111.14 189.226C112.03 185.42 113.017 181.637 114.121 177.889C115.501 177.172 116.866 176.412 118.268 175.76C121.356 174.321 124.573 173.228 127.827 172.226C134.299 170.234 140.93 168.964 147.629 168.028C161.918 166.032 175.491 166.074 189.183 171.247C189.718 171.449 189.938 170.679 189.544 170.39C176.965 161.149 161.335 153.924 145.577 152.863C137.819 152.341 129.712 153.399 122.198 155.415C124.66 149.654 127.389 143.876 130.399 138.2C130.745 138.184 131.094 138.175 131.43 138.14C135.583 137.713 139.702 137.026 143.867 136.695C152.959 135.971 162.133 136.349 171.205 137.183C189.22 138.839 207.704 141.582 223.607 150.76C223.921 150.94 224.295 150.494 224.005 150.244C209.341 137.601 193.311 126.085 174.128 121.56C164.524 119.296 154.507 118.665 144.671 119.127C143.754 119.17 142.843 119.223 141.936 119.281C143.662 116.833 145.455 114.438 147.322 112.113C151.827 112.887 156.45 112.103 161.046 111.323C163.437 110.917 165.82 110.513 168.176 110.33C176.49 109.683 184.971 110.13 193.206 111.429C210.243 114.114 226.872 119.058 241.209 128.873C241.656 129.179 242.319 128.553 241.978 128.103C230.582 113.074 214.921 101.287 196.567 96.392C187.121 93.874 177.176 93.034 167.422 93.589L165.815 93.684C171.984 89.063 178.84 85.557 185.965 82.649C187.137 82.489 188.317 82.315 189.521 82.132C194.584 81.3581 199.683 81.1557 204.791 81.0582L207.149 81.019C212.015 80.947 216.88 81.062 221.738 81.308L228.348 84.0592C242.162 89.791 255.984 95.2605 270.518 98.982C271.482 99.229 272.003 98.112 271.43 97.415C264.487 88.948 256.105 81.227 246.927 74.694C254.519 74.261 262.128 74.082 269.737 74.004C271.664 74.921 273.596 75.848 275.534 76.716C283.271 80.176 290.926 83.786 298.803 86.922C307.134 90.239 315.982 92.889 323.961 96.983C324.715 97.37 325.463 96.442 324.87 95.806C319.623 90.168 315.233 83.778 309.699 78.401C308.531 77.266 307.342 76.159 306.146 75.062C309.577 75.857 312.999 76.689 316.405 77.596C322.903 79.326 329.374 81.246 335.742 83.407C340.197 84.9188 344.999 86.8094 348.432 88.2729L349.702 88.822C355.671 91.443 361.737 94.514 367.59 98.031C368.645 98.966 369.699 99.904 370.751 100.846C385.726 114.25 399.983 128.95 411.163 145.73C432.359 177.543 438.294 218.073 439.836 255.493C441.381 293.006 438.477 330.935 432.054 367.913L430.948 374.345C428.868 386.37 426.465 398.72 420.866 409.49C413.199 424.235 401.13 436.276 387.125 445.081C353.973 465.925 310.001 470.416 275.546 450.755C264.943 444.704 255.491 460.895 265.988 467.106C300.888 487.759 345.327 485.334 381.232 468.664C398.868 460.476 414.585 448.273 426.369 432.784C436.951 418.875 442.182 403.113 445.418 386.153C452.546 348.782 455.887 310.358 455.084 272.324C454.21 230.921 449.132 185.872 427.869 149.453C417.549 131.777 402.929 116.325 387.64 102.694C383.558 95.13 378.529 88.242 371.502 82.321C356.229 69.452 336.829 62.088 317.92 56.45C313.623 55.168 309.3 53.968 304.956 52.851C289.117 45.952 271.476 43.271 254.191 45.043C241.499 46.345 229.04 48.686 216.644 51.674C213.071 52.535 209.492 53.404 205.919 54.31C207.099 52.597 208.103 50.719 208.875 48.639C211.479 41.632 211.454 33.685 207.679 27.097C202.98 18.893 194.137 15.034 185.049 14.32C151.982 11.723 122.823 38.011 111.77 67.178C108.954 74.607 107.318 82.511 106.546 90.439C105.194 93.238 104.399 96.297 104.455 99.676C104.476 100.933 105.106 102.302 106.085 103.248C106.414 110.76 108.196 119.084 114.551 122.079C113.156 124.462 111.809 126.874 110.504 129.31C108.789 124.163 105.118 119.228 103.538 114.323C100.906 106.15 99.2162 97.716 98.7242 89.143C97.7512 72.199 100.083 53.189 109.18 38.503C116.147 27.258 127.954 20.793 140.648 17.826C147.539 16.215 154.653 15.69 161.644 14.675L162.352 14.5732C169.465 13.5594 177.701 12.7042 184.716 14.12C185.056 14.189 185.328 13.684 184.968 13.52C179.044 10.814 173.68 7.26299 167.596 4.79099C161.032 2.12499 154.385 0.34999 147.265 0.06499ZM85.6082 35.924C65.9822 61.227 49.5132 88.106 39.5492 119.022C16.7452 189.778 21.8362 265.439 35.0512 337.561C41.2782 371.543 49.3082 405.129 56.6352 438.875C48.7922 378.276 38.6782 317.81 37.0682 256.628C36.1892 223.236 37.9162 189.688 44.0672 156.812L44.4312 154.879C47.0676 140.985 50.3331 126.264 57.0182 113.778C60.6482 106.998 64.6552 100.671 69.4072 94.615C71.4112 92.061 73.6612 90.013 76.0482 88.14C75.3482 70.697 77.9862 51.782 85.6082 35.924ZM177.747 37.738C181.95 37.052 188.616 36.801 190.935 39.879C192.1 41.426 192.766 43.526 192.993 45.765C189.048 45.3419 184.884 45.9244 180.906 46.4811C180.239 46.5744 179.577 46.667 178.922 46.754C169.066 48.0636 159.306 52.0793 150.295 56.3033L148.665 57.073C146.286 58.203 143.956 59.42 141.669 60.71C146.316 54.234 152.255 48.728 159.14 44.664C164.965 41.224 170.951 38.848 177.747 37.738ZM191.306 55.33C187.133 57.216 183.103 59.384 178.915 61.227C170.61 64.883 162.484 69.133 154.798 73.958C147.02 78.841 139.527 83.982 132.636 90.072C131.829 90.786 131.029 91.508 130.23 92.229C130.069 93.804 129.952 95.385 129.899 96.979C129.87 97.836 129.869 98.732 129.88 99.653C142.883 83.546 158.604 70.838 178.548 62.844C182.005 61.458 185.519 60.224 189.065 59.082C189.909 57.91 190.666 56.666 191.306 55.33ZM73.3442 131.546C75.1902 124.894 76.9772 118.221 79.0212 111.623C80.3522 117.818 82.1832 123.898 84.8142 129.682C85.0392 130.175 85.2812 130.667 85.5352 131.155C83.6338 136.246 82.0313 141.497 80.5238 146.61L78.2931 154.216C74.546 167.165 71.7303 180.278 70.1322 193.678C67.0262 219.712 68.076 246.329 69.7919 272.459L70.0192 275.864C71.3515 295.531 73.386 315.136 75.4199 334.736C79.1654 370.83 82.909 406.905 82.2622 443.31C82.2152 445.904 82.1422 448.501 82.0552 451.098C78.7712 424.633 74.9452 398.238 71.4262 371.804C62.9332 308.006 56.4392 243.528 64.2362 179.31C66.1902 163.226 69.0062 147.172 73.3442 131.546ZM89.9842 160.756C90.2842 153.49 90.8472 146.235 91.7112 139.015C92.3882 139.573 93.0892 140.1 93.8362 140.552C95.8852 141.791 98.1752 142.85 100.563 143.139C101.607 143.265 102.667 143.293 103.711 143.119C97.6472 156.607 92.8992 170.702 89.5422 185.024L89.5292 185.082L89.5382 182.038C89.5714 174.935 89.6928 167.835 89.9842 160.756ZM101.43 279.506C99.2592 280.625 97.1022 280.851 94.6432 280.247C94.5532 280.225 94.4666 280.2 94.3818 280.174L93.8792 280.01C94.0942 282.338 94.3202 284.666 94.5442 286.994C96.5282 284.2 98.8292 281.67 101.43 279.506ZM144.836 314.973C137.147 308.627 127.392 305.905 117.628 305.521C116.486 305.476 116.26 306.961 117.084 307.53C124 312.3 129.819 318.257 136.307 323.501C142.273 328.324 150.851 319.936 144.836 314.973ZM103.27 374.279C102.609 366.568 101.879 358.863 101.116 351.159C104.318 354.053 108.107 356.656 112.131 358.563C112.205 359.061 112.311 359.559 112.465 360.052C113.425 363.114 114.971 366.097 116.874 368.934C116.957 377.637 116.347 386.284 115.637 394.995L115.019 402.48C113.746 418.034 112.931 433.621 111.831 449.188C110.046 474.447 108.241 500.235 98.3622 523.924C96.1452 529.241 93.0492 534.952 89.7022 540.032L89.6662 539.091C94.4342 534.556 95.3832 526.762 96.8722 520.526L97.3668 518.43C98.8338 512.134 100.147 505.771 101.233 499.406C103.643 485.285 105.037 470.942 105.731 456.639C107.064 429.173 105.615 401.65 103.27 374.279ZM128.731 381.827C131.496 391 133.47 400.404 134.544 410.001C136.273 425.454 135.503 441.272 134.748 456.789C134.722 457.333 134.695 457.876 134.669 458.419C133.954 473.153 132.257 488.015 129.368 502.483C126.595 516.375 122.249 529.995 115.788 542.632C114.743 544.676 113.62 546.666 112.44 548.618C116.013 547.427 119.239 546.041 122.599 544.119C126.828 541.699 130.698 538.579 132.815 535.288C136.213 530.009 137.353 524.144 137.85 517.852C139.128 501.67 139.719 485.44 140.534 469.231L140.715 465.701C140.821 463.658 140.93 461.611 141.04 459.56C142.284 436.189 143.553 412.358 141.18 389.05C137.549 388.096 134.273 386.223 131.25 383.873C130.416 383.225 129.574 382.539 128.731 381.827ZM155.191 405.362C157.176 411.967 158.796 418.656 159.95 425.373C161.788 436.065 162.891 446.824 163.376 457.619L164.39 453.805C166.943 444.266 169.657 434.714 173.019 425.457C167.7 421.733 163.256 415.885 159.39 410.997C157.945 409.171 156.544 407.286 155.191 405.362Z'
				transform='translate(-24.00028 27.99981)'
				fill={strokeColor || '#000000'}
				fill-rule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
