import React from 'react';
import { PieceType } from '../types';

export const DocBouffant: React.FC<PieceType> = ({
	strokeColor,
	backgroundColor
}) => {
	return (
		<g>
			<path
				d='M424.69 184.994C422.415 180.497 421.816 181.18 425.746 177.193C440.177 155.475 404.023 138.722 409.697 115.777C413.279 92.2492 386.355 84.0542 374.188 66.2712C365.881 44.5382 361.408 27.6862 335.529 28.5792C319.106 25.6672 301.996 43.6372 288.568 36.5532C283.722 33.0382 282.552 28.2432 280.815 23.9532C266.177 -19.2878 214.103 3.72724 192.997 32.5802C184.426 45.0452 165.433 48.0362 153.387 36.4892C130.708 19.0222 98.9146 33.9082 92.4966 60.4242C83.3316 88.7932 67.1686 94.5312 39.6076 93.6812C10.4766 99.9122 12.7986 135.673 31.3806 152.991C47.1366 182.981 0.359586 185.708 9.45359 224.255C11.4466 234.467 16.0326 245.055 22.3446 254.335C23.1356 259.653 25.0026 264.78 27.7346 269.417C28.9916 271.55 30.4666 273.569 32.0446 275.477C31.7176 275.645 31.3976 275.825 31.0946 276.032C27.4486 278.507 25.6946 283.083 26.9916 287.354C27.3906 288.671 28.0656 289.899 28.9356 290.973C26.2726 291.625 23.7416 292.642 21.6636 293.847C15.0396 297.682 11.0356 305.03 10.2996 312.523C-3.54941 332.098 -4.65241 364.45 14.5286 377.434C23.9656 383.991 36.6986 387.541 41.9176 399.783C46.5116 411.096 38.1986 419.82 43.1186 430.421C59.3956 466.754 118.936 456.265 141.866 432.897C178.502 487.964 248.622 489.503 308.262 493.557C384.693 490.038 433.128 389.91 409.285 323.964C409.285 323.964 408.404 321.439 408.407 321.439C416.389 296.97 407.643 268.741 408.136 243.393C430.503 242.636 434.167 201.339 424.69 184.994'
				transform='translate(-1.999986 11.99926)'
				fill='#8FA7DF'
				stroke='none'
			/>
			<path
				d='M265.772 26.0611C177.424 -38.9099 34.0392 25.9201 8.45224 128.869C5.87904 132.113 5.08377 136.558 4.61436 140.601L4.51824 141.46C3.27324 144.025 1.33624 149.45 5.83824 149.842C19.3202 152.079 32.8132 158.326 46.4222 160.58C75.4312 168.589 105.997 167.768 135.062 160.451C147.293 156.738 171.73 153.885 179.312 144.161C196.48 141.812 213.904 142.684 230.902 145.841C243.312 148.191 255.162 152.061 267.372 155.101C274.061 157.715 281.184 150.356 275.082 144.872C273.702 133.514 273.475 121.621 273.247 109.636C272.691 80.4457 272.125 50.714 254.852 26.8511C256.752 28.3021 258.562 29.8721 260.272 31.5611C263.822 35.0911 269.322 29.6011 265.772 26.0611ZM6.28144 166.061C3.14244 165.741 1.78144 168.382 2.18244 170.841C-0.803586 184.681 -0.151372 199.058 0.790046 213.153L1.21144 219.321C2.01144 226.597 8.61844 279.676 20.6614 267.003C30.1874 254.544 78.7904 174.333 47.5524 171.952C33.9224 169.262 20.1024 167.431 6.28144 166.061Z'
				transform='translate(130.9214 169.1869)'
				fill={backgroundColor || '#FFFFFF'}
				fill-rule='evenodd'
				stroke='none'
			/>
			<path
				d='M384.889 65.8855C382.773 42.0225 358.328 32.8455 337.42 31.7855C319.87 26.4795 301.095 28.9955 283.692 33.8215C250.035 38.5995 217.704 50.1905 183.756 53.3935C177.895 47.1915 167.544 47.5675 159.549 45.4555C136.067 40.3335 112.753 34.4705 89.471 28.5125C73.94 24.5495 58.53 20.1745 43.085 15.8975C29.781 10.6385 12.706 11.1385 2.53301 0.362478C1.41301 -0.654522 -0.291993 0.646478 0.427007 2.06748C-9.19999 19.8395 146.962 53.1405 165.335 56.7065C170.44 83.1095 156.027 112.271 142.635 134.441C139.79 138.457 136.597 142.221 133.149 145.733C129.409 149.074 116.293 158.567 126.586 161.243C137.199 183.334 162.147 192.124 184.543 197.526C224.722 211.746 268.365 220.436 308.436 200.934C339.576 191.595 350.956 176.809 364.017 148.104C376.584 122.68 388.444 94.8305 384.889 65.8855'
				transform='translate(27.69899 288.7613)'
				fill='#FFFFFF'
				stroke='none'
			/>
			<path
				d='M286.569 13.2211C277.799 3.31914 263.396 -0.961865 250.478 0.180135C235.148 1.53314 221.775 9.88513 210.419 19.7871C205.007 24.5071 200.266 29.7481 195.311 34.9181C190.961 39.4551 185.246 45.2491 178.348 44.4021C170.756 43.4691 164.558 37.0191 157.953 33.6891C151.442 30.4051 143.969 29.1191 136.705 29.3111C122.416 29.6881 109.658 36.0791 101.734 48.0621C94.936 58.3421 92.159 70.6781 85.542 81.0471C82.223 86.2471 77.719 90.3771 71.648 91.9921C67.0351 93.2185 62.2484 93.2377 57.456 93.257C53.5298 93.2728 49.5997 93.2886 45.758 93.9681C31.988 96.4031 20.871 107.98 18.071 121.567C16.477 129.307 17.305 137.3 20.222 144.629C23.244 152.221 28.548 157.298 32.877 163.976C39.3231 173.922 31.9356 180.878 24.9412 187.464C23.0609 189.235 21.2091 190.978 19.662 192.746C10.302 203.439 7.93302 218.718 9.89002 232.421C11.5964 244.371 17.6499 255.315 24.0821 265.418L24.905 266.703C28.312 271.998 32.264 276.592 36.804 280.605C31.9 283.101 31.703 292.937 35.432 297.962C28.895 298.408 22.975 302.482 18.577 307.829C12.168 315.621 6.56002 324.82 3.19302 334.338C-3.74898 353.959 0.422016 377.408 17.736 390.24C25.793 396.212 38.614 399.753 42.839 409.697C44.4485 413.483 43.6222 417.489 42.8056 421.448C42.4482 423.182 42.0926 424.906 41.944 426.598C41.538 431.241 42.272 435.834 43.973 440.162C52.114 460.871 74.411 469.159 95.253 467.928C107.515 467.203 120.354 464.68 131.808 460.168C137.287 458.009 143.518 454.93 148.184 450.599C155.875 461.279 166.829 469.866 177.666 477.253L179.143 478.253C191.276 486.416 204.701 492.289 218.871 495.871C232.024 499.196 245.57 501.008 259.041 502.67L266.558 503.59C281.384 505.385 296.326 506.995 311.241 507.642C323.29 508.165 334.691 506.6 345.795 501.788C358.088 496.461 369.406 488.649 379.604 480.022C399.864 462.883 414.834 439.974 422.513 414.578C430.599 387.839 432.651 355.772 423.261 328.833C425.99 322.281 426.074 315.739 425.952 308.703L425.927 307.378C425.761 298.91 425.14 290.455 424.469 282.014C424.005 276.178 423.651 270.33 423.313 264.482L422.911 257.463C424.366 257.453 425.866 256.9 427.206 255.593C444.682 238.543 449.132 210.72 438.327 189.047C445.327 181.251 444.817 167.869 439.911 158.898C436.082 151.896 429.771 146.445 426.419 139.131C424.095 134.061 424.082 128.492 424.069 122.944C424.062 119.965 424.055 116.992 423.691 114.105C421.969 100.462 412.667 92.2644 402.535 84.3234L399.363 81.8515C394.946 78.3984 390.449 74.6706 387.56 69.8471C383.356 62.8281 382.672 54.2871 378.697 47.1121C365.496 23.2831 331.807 26.1471 310.763 36.1331C310.357 36.3257 309.933 36.5389 309.494 36.7593C306.52 38.2534 302.894 40.0753 299.952 38.0021C297.85 36.5225 296.666 33.741 295.728 31.2859L294.117 27.0308C292.218 22.0596 290.231 17.3553 286.569 13.2211ZM264.721 10.6951C250.547 6.81513 236.609 11.8851 224.899 19.9451C218.792 24.1481 213.131 29.1761 207.966 34.4861C203.639 38.9351 199.656 43.6901 194.698 47.4741C189.986 51.0711 184.406 53.6711 178.348 53.2811C171.512 52.8421 165.624 48.9731 160.012 45.4141C153.568 41.3301 147.454 38.7621 139.733 38.5091C132.517 38.2731 125.157 39.6231 118.94 43.4351C108.622 49.7641 104.426 62.1411 99.88 72.6961L99.2237 74.2063C95.1659 83.4516 90.1847 92.9165 81.085 98.0391C67.619 105.623 50.493 98.2091 37.818 107.201C25.155 116.185 23.488 134.279 31.084 147.096C32.4561 149.411 34.0621 151.661 35.6639 153.906C41.3303 161.845 46.9432 169.71 41.956 180.092C37.286 189.812 26.523 194.645 21.618 204.197C14.8 217.475 16.187 234.371 22.654 247.486L24.2825 250.782C28.1155 258.5 32.2449 266.327 38.005 272.713C45.118 280.601 54.149 286.887 63.152 292.635C66.8464 293.655 70.5767 294.575 74.2926 295.504L77.076 296.204C91.561 299.881 106.089 303.382 120.577 307.045L125.848 308.387C125.032 293.709 128.347 278.584 132.573 264.69C137.324 249.072 144.31 233.779 152.825 219.861C183.246 170.143 236.133 136.806 294.023 130.198C342.336 124.683 399.832 141.848 418.395 191.195C420.105 195.743 414.719 198.251 411.315 196.312C417.614 208.564 420.173 222.512 421.412 236.133C421.59 238.1 421.753 240.07 421.904 242.041C433.304 227.521 434.651 206.484 424.69 190.631C422.984 187.916 423.941 183.695 426.761 182.078L426.961 181.969C431.5 179.637 431.602 174.068 430.182 169.678C428.086 163.195 423.335 157.828 419.568 152.287C415.174 145.82 412.52 139.033 412.001 131.197C411.851 128.926 411.904 126.59 411.958 124.241C412.079 118.934 412.202 113.562 409.98 108.73C407.755 103.891 403.658 100.19 399.625 96.8377L399.208 96.4921C389.492 88.4571 379.472 81.6441 374.742 69.4161C372.148 62.7051 371.291 55.0781 366.671 49.3141C363.309 45.1221 358.493 42.5281 353.381 41.1251C341.819 37.9501 329.394 40.3151 318.335 44.2671L317.599 44.536C316.61 44.9053 315.623 45.3009 314.636 45.6965C309.275 47.8466 303.916 49.9954 298.072 47.8921C292.685 45.9551 289.669 41.0961 287.583 36.0531C285.377 30.7191 284.093 24.8911 280.386 20.3191C276.446 15.4611 270.682 12.3261 264.721 10.6951ZM227.403 75.7771C225.957 71.5851 218.4 49.9669 213.223 56.0197C212.745 56.5777 213.337 57.4097 214.018 57.0507C215.582 56.2235 219.031 69.9301 219.947 73.7363L220.751 77.1841C221.881 82.0049 223.099 86.8364 224.702 91.5097C228.068 101.323 233.588 110.162 242.592 115.666C244.707 116.959 247.732 116.156 248.946 114C251.642 109.211 251.272 104.347 250.256 99.1827L250.09 98.3647C248.767 91.9857 248.828 85.3617 247.414 79.0677C247.064 77.5127 245.653 76.1787 244.134 75.7867C243.242 75.5577 242.529 75.5667 241.637 75.7867C240.162 76.1527 238.643 77.5287 238.357 79.0677C237.508 83.6208 238.157 88.4041 238.974 92.973L239.19 94.1597C239.676 96.7887 240.965 100.097 241.486 103.25C234.991 96.8741 231.543 87.7298 228.549 79.0993L227.403 75.7771ZM343.108 62.6967C344.419 62.5327 345.221 63.2907 345.296 64.5217C345.329 65.0737 344.604 65.1657 344.335 64.7807C344.253 64.6647 342.994 70.5237 342.939 71.0347C342.805 72.2677 342.725 73.5037 342.608 74.7377L342.336 77.5401C342.156 79.4074 341.989 81.2747 341.897 83.1527C341.643 88.3319 341.646 93.5682 341.961 98.7515L342.054 100.164C342.066 100.338 342.274 101.63 342.498 103.099C342.797 102.177 343.076 101.248 343.32 100.313C344.523 95.7097 343.821 90.6387 347.127 86.9847C349.058 84.8517 352.227 85.7477 353.679 87.8287C356.106 91.3079 354.996 96.3662 353.766 100.582L352.801 103.782C351.624 107.654 350.115 112.208 346.975 114.809C343.874 117.379 339.489 117.5 336.549 114.634C333.713 111.871 333.658 107.634 333.576 103.948C333.325 92.6315 334.722 81.0647 338.637 70.4017L338.951 69.5617C339.632 67.7757 340.543 63.0177 343.108 62.6967ZM107.411 116.929L107.313 116.916C106.614 116.864 106.385 117.847 107.087 118.105C127.059 125.441 143.193 140.391 163.072 148.061L163.283 148.143C168.593 150.193 180.858 154.929 182.859 146.232C183.741 142.402 181.086 139.658 178.627 137.116C178.392 136.873 178.158 136.631 177.929 136.391L177.569 136.007C173.863 132.012 171.604 126.01 166.901 123.173C165.08 122.074 162.88 123.505 162.81 125.521C162.687 129.057 164.403 131.659 166.435 134.314L167.321 135.457C167.564 135.769 168.454 136.742 169.552 137.942C171.963 140.576 175.374 144.305 175.138 144.536C174.014 145.642 167.112 142.913 164.273 141.791C164.032 141.696 163.821 141.612 163.645 141.543L162.117 140.964C158.604 139.604 155.193 137.997 151.834 136.293C137.276 128.912 123.642 120.218 107.411 116.929ZM205.61 173.734C246 143.042 304.323 129.274 353.159 145.439C375.912 152.972 397.794 167.808 407.702 190.155C398.623 176.465 384.959 168.897 369.637 163.74C337.699 152.988 299.908 155.396 267.956 164.717C235.613 174.152 206.187 192.293 183.628 217.353C171.708 230.596 161.531 245.523 153.946 261.656C146.679 277.114 140.095 294.558 139.236 311.803L128.831 309.146C131.428 297.516 133.547 285.797 137.093 274.382C141.288 260.879 146.602 247.74 153.318 235.292C166.336 211.166 183.766 190.334 205.61 173.734ZM352.763 168.834C320.714 162.543 287.37 165.594 256.792 176.929C227.241 187.883 201.169 206.963 181.318 231.39C171.783 243.124 163.734 256.181 157.261 269.838C150.708 283.663 147.088 298.148 142.588 312.652C161.2 317.381 179.895 321.951 198.75 325.32C211.97 327.682 225.406 329.203 238.854 328.839C251.732 328.489 264.213 325.771 276.552 322.221C300.235 315.403 323.246 306.797 348.21 306.488C369.529 306.224 393.632 310.311 412.59 321.01C412.513 318.111 412.573 315.214 412.634 312.304L412.634 312.302C412.69 309.647 412.746 306.982 412.697 304.295C412.544 295.801 412.001 287.32 411.436 278.847C410.355 262.624 410.452 246.237 408.701 230.076L408.542 228.657C406.983 215.161 403.927 201.166 395.551 190.16C385.14 176.48 368.838 171.99 352.763 168.834ZM80.6178 189.952L84.7206 189.671C103.176 188.438 125.17 187.673 140.177 199.666C143.066 201.977 144.158 205.793 141.297 208.665C138.792 211.177 134.895 211.116 131.404 211.06L131.403 211.06C130.622 211.048 129.861 211.036 129.142 211.053L126.168 211.124C121.527 211.247 116.827 211.468 112.299 212.388C110.909 212.671 109.48 213.121 108.032 213.578C104.754 214.612 101.382 215.675 98.1598 214.883C96.6608 214.515 95.7558 212.822 96.1628 211.365C98.0748 204.522 107.556 202.934 113.528 202.139C117.614 201.596 121.676 201.461 125.793 201.521C126.712 201.534 127.63 201.566 128.549 201.591C126.709 200.568 124.809 199.664 122.864 198.859C118.685 197.131 114.37 195.809 109.958 194.825C100.329 192.681 90.4428 192.077 80.6178 191.546C79.5878 191.49 79.5978 190.024 80.6178 189.952ZM38.663 282.42L38.769 282.269C39.198 282.62 39.625 282.974 40.065 283.316C39.593 283.027 39.129 282.723 38.663 282.42ZM36.867 287.363C37.047 285.92 37.47 284.576 38.136 283.322C46.184 290.308 56.189 294.367 66.276 297.564C76.223 300.718 86.2456 303.657 96.27 306.57L108.123 310.01C133.144 317.237 158.471 323.987 183.904 329.541C188.256 330.491 192.635 331.381 197.032 332.185C197.09 333.319 197.133 334.451 197.158 335.584C188.691 334.283 180.055 333.748 171.573 332.517C162.927 331.264 154.313 329.793 145.74 328.109C139.338 326.85 132.96 325.469 126.609 323.973C126.435 323.62 125.978 323.572 125.661 323.752C114.722 321.154 103.867 318.205 93.118 314.908C80.124 310.924 66.946 306.824 54.339 301.703C47.796 299.044 37.1 294.601 36.867 287.363ZM17.608 321.117C21.994 313.26 28.59 301.921 38.357 300.4C39.504 300.912 40.818 301.091 42.3 300.805C47.7908 304.625 54.7164 307.564 59.1625 309.314L62.2146 310.495C82.2422 318.163 102.676 324.597 123.468 329.734C122.972 332.394 122.826 335.162 122.579 337.797L122.45 339.275C122.016 344.697 121.98 350.142 121.996 355.582C122.029 366.897 122.832 378.166 124.461 389.365C126.053 400.31 128.535 411.159 132.287 421.574C134.171 426.801 136.349 431.939 138.846 436.904C139.707 438.614 140.614 440.912 141.773 443.004C141.136 443.631 140.474 444.235 139.766 444.796C136.613 447.291 132.921 449.206 129.195 450.688C120.891 453.993 111.801 455.95 102.977 457.212C85.476 459.715 62.71 457.082 54.499 438.726C52.901 435.153 52.154 431.206 52.415 427.299C52.5446 425.355 52.8917 423.444 53.2383 421.535C53.7613 418.655 54.2833 415.781 54.056 412.807C53.398 404.223 47.509 397.428 40.757 392.643C33.077 387.201 23.814 384.244 17.577 376.884C11.952 370.244 8.86901 361.297 8.51002 352.662C8.03502 341.213 12.126 330.937 17.608 321.117ZM374.578 316.463C360.853 313.865 346.618 313.465 332.763 315.257C307.63 318.508 284.318 329.432 259.463 333.965C239.953 337.523 220.202 336.152 200.781 332.844C202.935 337.635 203.245 344.524 202.367 350.5C202.622 364.219 199.515 377.918 194.165 390.805C190.045 400.726 184.477 410.031 177.985 418.578C174.749 422.839 171.306 426.934 167.61 430.805C165.819 432.68 163.976 434.502 162.079 436.27C161.135 437.15 160.179 438.019 159.209 438.872L158.612 439.387C170.497 447.336 180.246 458.073 192.417 465.774C205.003 473.738 218.669 478.424 233.201 481.423C246.395 484.147 259.812 485.948 273.188 487.551L282.85 488.702C293.828 490.002 304.909 491.214 315.918 491.4C338.418 491.783 358.711 478.73 374.901 464.078C393.268 447.455 408.116 426.67 416.126 403.103C419.334 393.666 421.512 383.877 422.66 373.974C422.836 366.793 422.9 359.621 421.938 352.371C421.24 347.115 420.136 341.965 418.514 336.914C417.953 335.169 417.147 333.496 416.303 331.838C415.189 331.449 414.219 330.751 413.651 329.762L413.525 329.723L408.876 327.772C397.678 323.094 386.684 318.756 374.578 316.463ZM128.187 330.875C128.345 332.794 128.365 334.738 128.428 336.652L128.472 337.797C128.732 343.44 128.714 349.088 128.916 354.734C129.307 365.635 130.032 376.586 131.686 387.373C133.32 398.034 135.812 408.587 139.485 418.736C141.337 423.851 143.511 428.839 146.028 433.662C146.454 434.48 146.991 435.326 147.555 436.193C147.639 436.057 147.732 435.928 147.822 435.795L147.202 433.823C147.097 433.497 146.99 433.171 146.88 432.848C145.204 427.95 143.686 422.997 142.338 417.998C139.761 408.448 137.765 398.717 136.546 388.898C135.253 378.493 134.757 367.979 135.012 357.498L135.11 353.558C135.298 346.828 135.708 339.405 137.702 333.03C134.523 332.341 131.351 331.625 128.187 330.875ZM140.962 348.418C141.234 343.507 141.51 338.539 141.158 333.767C142.416 334.031 143.673 334.297 144.933 334.551C153.797 336.338 162.707 337.896 171.651 339.223L174.45 339.646C181.936 340.793 189.586 342.049 197.127 342.33C196.526 359.483 192.164 376.264 184.285 391.664C179.5 401.018 173.529 409.771 166.557 417.632C162.94 421.711 159.077 425.571 154.991 429.182C154.394 429.711 153.771 430.217 153.146 430.719C151.6 426.231 150.181 421.7 148.91 417.128C146.253 407.57 144.286 397.859 142.856 388.045C141.424 378.228 140.674 368.323 140.609 358.403C140.587 355.158 140.774 351.802 140.962 348.418ZM104.577 349.555L101.597 349.528C97.6119 349.519 93.6281 349.669 89.653 349.975C80.759 350.658 72.238 352.246 63.672 354.741C62.794 354.997 62.916 356.485 63.896 356.398C70.849 355.784 77.873 355.531 84.854 355.559L85.0378 355.56C86.9928 355.576 96.9188 355.753 102.195 356.214L102.762 356.266C101.486 357.045 100.15 357.756 99.296 358.369L91.328 364.089C86.74 367.383 81.255 370.463 79.722 376.255C79.138 378.46 80.819 380.801 83.157 380.764C91.182 380.639 98.091 372.234 103.782 367.393L103.911 367.284C104.384 366.887 104.936 366.449 105.534 365.975C110.027 362.413 117.054 356.843 111.59 351.623C109.7 349.817 107.085 349.598 104.577 349.555ZM374.545 357.382C374.316 357.112 374.612 356.655 374.943 356.867C375.865 357.457 378.355 358.025 379.491 358.647L382.811 360.48C383.365 360.784 383.919 361.087 384.476 361.386C388.09 363.33 391.877 364.836 395.773 366.113C399.838 367.444 404.028 368.44 408.286 368.902C411.947 369.298 415.299 369.306 418.795 370.648C421.501 371.686 421.497 375.126 418.795 376.162C410.913 379.186 400.628 375.346 393.259 372.177C389.26 370.457 385.496 368.217 381.981 365.654C380.279 364.414 378.687 363.111 377.212 361.601C375.901 360.261 375.711 358.757 374.545 357.382ZM293.355 364.027C296.341 363.355 299.388 366.613 297.537 369.466C291.556 378.691 276.929 382.265 266.699 383.715C254.852 385.394 243.368 384.07 232.114 380.029C231.511 379.812 231.554 378.746 232.276 378.832C242.962 380.104 253.978 379.173 264.362 376.346C269.466 374.957 274.521 373.146 279.255 370.78C283.911 368.453 288.215 365.184 293.355 364.027Z'
				transform='translate(-9.999716 6.000865)'
				fill={ strokeColor || '#000000' }
				fill-rule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
