import React from 'react';
import { PieceType } from '../types';

export const BunFancy: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g>
			<path
				d='M88.4949 20.3272C151.509 16.8872 207.339 -0.818022 251.695 38.807C251.695 38.807 323.452 -14.7802 335.425 5.62925C343.447 19.305 332.322 37.6637 335.305 54.5392C354.757 87.6998 353.657 143.828 354.757 156.981C357.529 190.135 374.989 314.891 374.989 344.517C374.989 359.639 362.522 399.243 354.757 421.284C337.475 470.34 304.485 495.341 250.384 495.341C196.283 495.341 107.98 450.123 79.6594 409.977C77.1774 406.458 61.1273 416.723 44.3396 398.917C26.1527 379.627 16.0636 342.835 16.0636 320.904C16.0636 293.073 -1.92279 273.773 0.169318 238.149C4.84158 158.59 21.0666 24.0081 88.4949 20.3272Z'
				transform='translate(31.93695 6.192752)'
				fill={backgroundColor || '#FFFFFF'}
				stroke='none'
			/>
			<path
				d='M145.872 0.0930247C145.042 0.0120247 144.212 -0.0279753 143.392 0.0220247C141.512 0.142025 139.662 0.512025 137.902 1.11302C136.172 1.50302 134.502 2.13302 132.952 3.04202C131.572 3.85202 130.312 4.76202 129.122 5.81203C128.862 6.04202 128.612 6.27202 128.372 6.51202C128.062 6.76202 127.732 7.00303 127.422 7.27203C126.332 8.23203 125.442 9.25303 124.662 10.332C121.332 7.43202 117.752 4.90303 113.522 3.23202C109.442 1.63302 105.172 0.573025 100.842 0.292025C100.652 0.282025 100.452 0.272025 100.252 0.253025L99.3489 0.214869C94.9863 0.0656758 90.6253 0.774752 86.4922 2.30202C82.9122 3.34302 79.5022 4.95202 76.3922 7.11302C74.9522 8.11302 73.5621 9.21303 72.2522 10.403C71.9122 10.682 71.5622 10.942 71.2422 11.232C68.5422 13.682 66.2122 16.372 64.2822 19.463C63.7322 20.332 63.2522 21.202 62.8222 22.062C62.2522 21.662 61.6522 21.292 61.0922 20.992C58.4022 19.573 55.2522 18.992 52.1622 19.153C49.5122 19.142 46.9322 19.602 44.5422 20.762L44.3622 20.812L43.8877 20.9757C41.2302 21.9332 39.1005 23.3981 37.3722 25.202C34.3922 27.613 32.4122 30.963 31.0922 34.732C28.8222 39.932 28.0822 46.182 27.8722 51.923C27.762 51.923 27.6554 51.9175 27.5485 51.9119C27.4033 51.9043 27.2577 51.8967 27.1022 51.903C24.8522 51.982 22.0822 53.022 19.9222 54.162C18.7122 54.622 17.5622 55.182 16.5522 55.812C14.8422 56.872 13.2722 58.122 11.8722 59.532C9.28215 61.722 7.18215 64.392 5.70215 67.542C5.32215 68.363 5.01215 69.202 4.73215 70.042C4.60215 70.332 4.46215 70.613 4.35215 70.892C2.87215 74.593 2.41215 78.702 2.66215 82.662C2.70215 83.182 2.74215 83.702 2.80215 84.213C2.82215 85.322 2.87215 86.432 3.00215 87.552C3.32215 90.383 3.90215 93.062 5.03215 95.702C6.07215 98.133 7.29215 100.412 8.64215 102.633C8.26215 102.903 7.90215 103.192 7.56215 103.503C7.33215 103.702 7.13215 103.923 6.92215 104.142C6.88215 104.173 6.84215 104.192 6.79215 104.222C4.80215 105.673 3.17215 107.812 2.18215 110.042C1.84215 110.792 1.57215 111.552 1.36215 112.322C0.142151 115.133 -0.287849 118.182 0.192151 121.093C0.152151 121.682 0.142151 122.272 0.192151 122.872C0.632151 128.822 5.06215 133.383 10.2522 135.802C14.1322 138.582 18.4022 140.472 23.0922 141.162C24.9722 141.673 26.9122 141.992 28.9122 142.093C30.0602 142.15 31.2112 142.119 32.3602 142.035C38.8672 134.556 46.0742 127.587 52.7922 120.311C56.2942 116.518 61.9371 122.19 58.4482 125.968C48.3372 136.919 36.3992 147.288 28.4492 160.108L27.6697 161.952C26.9347 163.718 26.2222 165.498 25.5322 167.282C17.6122 187.122 12.8222 208.202 14.5122 229.622C14.5222 229.795 14.5344 229.969 14.5477 230.142L14.6322 231.192L14.6622 231.613L14.6822 231.742C14.8722 234.082 15.1222 236.423 15.4822 238.762C16.2472 243.674 17.3642 248.474 18.7372 253.191C18.1052 260.812 18.4532 268.548 19.8212 276.207C19.8521 276.551 19.8762 276.894 19.9162 277.24C20.4792 282.084 21.8062 286.754 23.8092 291.124C26.6062 298.65 30.6912 305.775 36.5832 310.807C36.8552 311.039 37.1382 311.272 37.4302 311.503C40.7252 316.317 45.1112 320.201 50.6402 321.051L50.4872 321.385C49.2271 324.345 48.5672 327.515 48.4452 330.731C48.0562 340.937 52.8232 349.388 59.4472 356.4C59.3792 356.817 59.3102 357.235 59.2522 357.642C59.0222 357.753 58.8521 357.963 58.8022 358.302C58.0122 363.442 57.4221 368.432 58.0622 373.642C58.1422 374.302 58.2421 374.952 58.3422 375.593C58.6522 379.442 59.4422 383.423 60.6322 386.923C62.2822 391.822 64.5022 396.472 67.4822 400.702C69.3536 403.352 70.4444 404.558 72.0702 406.197L74.3622 408.492C74.4622 408.593 74.6222 408.392 74.7822 408.113C75.0722 408.403 75.3622 408.682 75.6522 408.963C75.1621 411.512 74.8822 414.072 74.8322 416.602C74.7622 420.102 75.0822 423.613 75.7022 427.082C76.9722 436.492 80.2421 445.702 85.3521 453.702C87.1922 456.253 89.0322 458.802 90.8521 461.352C92.6422 463.932 94.5522 466.423 96.5722 468.822C99.3622 471.912 102.432 474.872 105.652 477.532C107.302 478.903 109.042 480.102 110.872 481.133C111.132 481.312 111.382 481.512 111.662 481.692C116.102 484.602 121.242 487.032 126.572 487.772C128.242 488.222 129.922 488.522 131.622 488.633C134.792 488.843 138.232 488.593 141.312 487.732C141.632 488.442 141.952 489.133 142.282 489.812C142.162 490.062 142.092 490.292 142.142 490.383C145.142 495.883 148.252 501.272 152.432 505.982C154.512 508.332 156.702 510.532 159.052 512.613C162.982 516.093 167.152 518.792 171.662 521.503L171.682 521.503L172.986 522.307C173.858 522.84 174.735 523.369 175.622 523.903L176.143 524.221C176.794 524.597 177.737 525.025 178.112 524.372C178.125 524.352 178.134 524.332 178.141 524.312L178.172 524.192C178.209 524.212 178.244 524.234 178.28 524.255L179.09 524.757C179.843 525.204 181.01 525.771 181.402 525.082C181.795 524.386 180.711 523.689 179.944 523.265L179.332 522.932C178.882 522.673 178.472 522.383 178.032 522.113C178.162 522.102 178.282 522.082 178.392 522.032L179.852 522.903C179.9 522.932 179.96 522.971 180.032 523.016C180.699 523.44 182.309 524.462 182.932 523.903C183.545 523.342 182.702 522.691 182.174 522.349L181.972 522.222C180.722 521.562 179.512 520.863 178.332 520.113C178.502 520.133 178.672 520.142 178.842 520.133C179.342 519.932 179.342 519.622 179.142 519.312C179.712 519.633 180.292 519.942 180.882 520.232C181.382 520.572 181.922 520.722 182.512 520.673C183.712 520.192 181.992 519.052 181.642 518.843L181.188 518.595C180.888 518.425 180.592 518.252 180.292 518.093C180.492 518.153 180.692 518.202 180.862 518.202L180.933 518.249C181.859 518.867 183.691 520.09 184.392 519.622C185.239 519.061 184.434 518.374 183.841 517.995L183.692 517.903C182.122 517.062 180.602 516.153 179.132 515.192C179.202 515.133 179.262 515.052 179.312 514.952C179.69 514.26 179.009 513.867 178.482 513.563C178.423 513.529 178.366 513.495 178.312 513.463L177.305 512.856C174.969 511.43 172.726 509.947 170.582 508.363C170.342 508.133 170.092 507.903 169.852 507.662C166.942 504.923 164.452 501.852 162.382 498.432C159.902 495.282 157.822 491.883 156.142 488.242C154.462 486.122 152.772 484.003 151.072 481.903C151.272 481.633 151.442 481.332 151.602 481.022C151.952 480.602 151.252 480.003 150.422 479.482L151.012 479.072L151.277 478.874C152.054 478.262 152.686 477.491 153.172 476.572L153.202 476.522C153.454 475.891 150.352 473.795 148.252 473.213C147.852 472.942 147.402 472.682 146.952 472.452C147.072 472.282 147.212 472.122 147.322 471.942C147.992 471.173 145.422 469.713 144.472 469.822C144.192 469.633 143.832 469.642 143.602 469.892C143.272 470.302 142.922 470.682 142.572 471.042C141.932 470.872 141.372 470.872 141.072 471.182C139.732 472.602 138.322 473.812 136.802 474.782L136.392 474.932L135.836 475.116C133.048 476.001 130.164 476.35 127.192 476.153C124.942 476.093 122.802 475.572 120.762 474.593C120.342 474.482 119.922 474.352 119.512 474.213C118.452 473.713 117.412 473.122 116.392 472.452C116.072 472.162 115.752 471.863 115.452 471.562C113.522 469.562 111.542 467.613 109.522 465.713L106.102 461.242C102.582 456.272 99.2122 451.202 95.9822 446.032C90.0621 434.482 87.1722 420.503 90.4122 407.772L90.4322 407.732L90.7288 406.985C90.931 406.49 91.1422 405.999 91.3622 405.512C93.8422 400.052 97.4622 395.042 102.152 391.272L102.262 391.192L102.863 390.791C104.679 389.609 106.606 388.616 108.622 387.843L113.482 388.532C116.682 388.802 119.862 388.633 123.012 388.012C123.742 387.923 123.922 387.423 123.562 386.912C123.882 386.863 124.202 386.822 124.512 386.762C126.582 387.442 128.562 388.312 130.562 389.192L130.652 389.253C134.112 393.093 135.652 396.352 136.992 401.512C137.182 402.262 146.952 408.113 148.162 399.572C148.172 398.442 148.032 397.332 147.732 396.262C147.052 394.232 146.172 392.292 145.092 390.432C143.922 388.463 142.542 386.642 140.962 384.982C139.682 383.903 138.322 382.963 136.882 382.102C135.512 380.482 134.032 379.093 132.022 377.892C130.992 377.282 129.912 376.722 128.802 376.213C128.872 376.162 128.942 376.093 128.982 376.003C130.282 373.532 131.582 371.062 132.872 368.593C133.002 368.352 132.912 368.133 132.712 367.923L134.642 364.242C135.021 363.514 133.433 362.924 132.512 362.638L131.922 362.463L131.192 362.202C131.012 362.032 130.772 361.863 130.482 361.692C130.532 360.512 130.622 359.332 130.742 358.153L130.84 357.152C131.159 354.155 131.695 351.198 132.442 348.282C133.372 344.253 134.562 340.352 135.972 336.522C136.382 335.542 136.802 334.562 137.242 333.593C138.612 330.383 140.132 327.253 141.782 324.182C143.792 319.863 146.342 315.883 149.412 312.242L153.752 306.532L155.038 304.918C158.054 301.165 161.185 297.501 164.422 293.923C166.912 290.003 169.322 286.032 171.672 282.022C173.992 277.963 176.502 274.022 179.202 270.213L180.328 268.611C185.237 261.689 190.539 255.041 195.952 248.522C197.432 246.863 198.892 245.192 200.322 243.503C200.022 245.102 200.012 246.602 200.282 248.133C199.842 252.952 202.362 257.253 206.752 259.272L206.792 259.292L206.868 259.358L206.952 259.423C207.342 259.713 207.782 259.982 208.252 260.222C208.352 260.302 208.452 260.372 208.552 260.442C211.522 262.452 214.812 263.633 218.322 264.062C226.377 266.184 235.159 263.818 243.174 260.785L244.172 260.403L246.125 260.766L248.546 261.191L249.212 261.302C249.252 261.312 249.302 261.322 249.342 261.322C254.182 262.153 259.032 262.812 263.972 263.133C267.892 263.384 271.725 261.702 275.189 259.976L275.952 259.593C279.342 257.892 282.662 255.923 286.172 254.442C287.012 254.952 287.882 255.412 288.752 255.802C290.602 256.633 292.532 257.162 294.502 257.463C299.472 258.963 304.802 258.653 309.782 257.113C311.102 257.532 312.462 257.822 313.832 257.782C316.242 257.722 318.262 256.802 319.962 255.232C321.372 254.352 322.532 253.142 323.622 251.792L324.215 251.062C324.613 250.577 325.016 250.092 325.422 249.613L326.432 248.863L326.689 248.748C327.718 248.319 328.771 248.254 329.832 248.512C332.872 249.593 335.712 251.613 338.902 252.072C338.999 252.086 339.093 252.096 339.186 252.104L339.732 252.142C340.322 252.383 340.912 252.613 341.522 252.762C343.846 253.339 345.829 252.757 347.927 252.142C348.593 251.947 349.269 251.748 349.972 251.582C352.732 250.923 355.372 251.102 357.972 251.653C360.522 252.432 363.042 253.412 365.582 254.142C366.572 254.423 367.542 254.642 368.492 254.802C370.032 255.242 371.582 255.613 373.172 255.822C374.94 256.062 376.727 256.027 378.508 255.952L379.842 255.892C380.162 255.802 380.312 255.593 380.302 255.262L380.132 254.613C380.592 254.602 381.042 254.602 381.522 254.582C381.792 254.532 381.952 254.363 381.972 254.122C386.642 254.903 391.342 255.423 396.072 255.642L396.947 255.687C397.634 255.723 398.293 255.76 398.932 255.796C403.094 256.027 406.411 256.212 411.042 255.892C411.034 255.911 411.03 256.179 411.029 256.565L411.048 261.189C411.055 262.044 411.065 262.006 411.078 261.957C411.091 261.909 411.106 261.851 411.124 262.575L411.152 264.242C410.842 264.423 410.582 264.742 410.592 265.133C410.702 273.802 411.122 282.463 411.852 291.102C412.392 299.872 413.222 308.613 414.372 317.322C414.422 317.772 414.482 318.232 414.542 318.682C415.672 328.072 416.972 337.423 418.492 346.762C419.332 352.622 420.392 358.432 421.662 364.202L423.622 372.812L425.362 381.562L425.662 382.689C426.345 385.32 426.908 387.976 427.372 390.653L427.622 392.192C427.752 393.072 427.892 393.952 428.002 394.832C428.222 396.312 428.412 397.792 428.592 399.262C428.602 399.292 428.602 399.322 428.602 399.343C429.082 403.282 429.452 407.232 429.932 411.173L430.152 413.082C430.172 413.363 430.202 413.642 430.232 413.912L430.342 422.562C430.332 423.972 430.282 425.383 430.202 426.792C430.072 428.192 429.902 429.593 429.702 430.992C429.699 431.222 429.691 431.453 429.681 431.685L429.612 433.072C429.492 433.952 429.372 434.832 429.222 435.713C428.772 440.213 427.802 444.622 426.322 448.923C425.522 452.503 424.562 456.042 423.462 459.532C420.042 469.322 415.742 478.782 410.522 487.772C405.262 496.843 399.412 505.653 392.832 513.843L391.202 515.682C389.492 517.843 387.702 519.932 385.852 521.952C385.582 522.253 385.312 522.542 385.032 522.843C383.102 524.903 381.102 526.892 379.022 528.802C374.592 532.872 369.992 536.722 365.182 540.332C364.452 540.872 363.722 541.403 362.992 541.923C360.732 543.392 358.432 544.782 356.092 546.093C349.582 549.713 342.912 553.072 335.912 555.622C329.832 557.843 323.582 559.432 317.212 560.512C313.462 561.292 309.652 561.673 305.812 561.622C300.692 562.213 295.562 562.242 290.442 561.702L282.652 560.742L281.592 560.423C273.572 557.713 265.542 554.992 257.512 552.272C255.322 550.982 253.122 549.702 250.922 548.412C250.725 548.285 250.53 548.155 250.335 548.023L249.172 547.222C247.642 545.963 246.142 544.662 244.702 543.282C244.142 542.802 243.412 542.482 242.642 542.242C241.372 541.162 240.122 540.052 238.912 538.892C238.472 538.512 237.272 538.113 236.362 538.012C235.992 537.742 235.192 537.423 234.782 537.653C234.482 537.822 234.132 538.653 234.462 538.942C234.792 539.253 235.132 539.552 235.472 539.863C235.272 539.802 235.082 539.742 234.882 539.692L234.479 539.583C233.94 539.451 233.394 539.375 232.842 539.343C232.102 539.522 231.912 540.102 232.512 540.622L232.852 540.942L232.662 540.898C232.158 540.789 231.676 540.743 231.382 540.832C230.782 541.003 230.522 541.662 231.032 542.113L231.182 542.232C231.172 542.312 231.182 542.392 231.222 542.423C231.262 542.452 231.292 542.482 231.332 542.522C231.142 542.503 230.972 542.512 230.842 542.582C230.502 542.762 230.112 543.522 230.502 543.863C230.602 543.963 230.722 544.062 230.832 544.162C230.872 544.213 230.912 544.262 230.962 544.302C231.192 544.522 231.432 544.732 231.662 544.942L231.482 544.963C230.892 545.122 230.612 545.792 231.122 546.242C232.182 547.262 233.262 548.232 234.372 549.182C237.772 552.343 241.422 555.202 245.322 557.732C247.642 559.302 250.062 560.702 252.572 561.912C257.452 564.292 262.332 566.403 267.452 568.242C273.682 570.472 280.272 572.032 286.972 572.932C297.362 574.722 308.062 574.952 318.392 573.423C323.652 572.642 328.852 571.622 333.962 570.142C342.152 567.772 349.832 564.262 357.392 560.363C363.572 557.182 369.482 553.463 375.082 549.322C384.902 542.322 393.862 534.022 401.722 524.963C407.802 517.952 413.122 510.412 418.082 502.582C423.372 494.232 428.022 485.762 431.872 476.642C434.352 470.753 436.532 464.732 438.312 458.593C440.532 453.093 442.082 447.423 442.932 441.552C443.882 437.272 444.482 432.952 444.732 428.593C445.182 424.403 445.322 420.192 445.172 415.972C445.202 412.832 444.642 409.753 443.492 406.722C443.162 401.982 442.592 397.282 441.762 392.622C441.192 388.042 440.162 383.552 438.692 379.162C437.652 373.392 436.422 367.662 434.992 361.972C432.16 348.953 430.311 335.622 428.666 322.388L428.152 318.213C426.662 306.722 425.582 295.182 424.902 283.613C423.876 272.313 422.702 270.232 421.39 259.712L421.222 258.322C422.022 258.463 422.802 258.302 423.762 257.792C424.202 257.552 424.182 257.262 423.972 256.992C424.462 256.932 424.982 256.772 425.562 256.492C426.162 256.213 425.962 255.822 425.562 255.492C425.832 255.552 426.112 255.622 426.422 255.702L426.732 255.782C429.194 256.395 431.266 256.277 433.522 254.952C434.462 254.403 435.342 253.713 436.162 252.942C439.992 250.222 442.512 245.963 443.532 241.372C443.552 241.343 443.572 241.312 443.582 241.272C445.822 236.522 445.882 230.952 445.442 225.843C445.142 222.332 444.502 219.003 443.312 215.692C442.595 213.707 442.206 212.799 441.397 211.157L440.648 209.653L440.282 208.903C438.582 205.372 437.052 201.812 434.972 198.482C432.964 195.275 430.206 192.441 427.502 189.745L425.892 188.142L424.95 187.224C425.319 186.348 425.439 185.32 425.185 184.168C423.574 176.848 421.866 169.428 419.706 162.175C419.408 159.628 418.946 157.108 418.302 154.622C417.582 151.463 416.712 148.343 415.582 145.302C415.439 144.952 415.293 144.602 415.147 144.253L414.262 142.162C412.842 138.153 410.552 134.642 407.402 131.633C407.102 131.222 406.752 130.972 406.272 131.182C406.132 131.253 406.002 131.383 405.912 131.522C405.594 131.162 405.254 130.817 404.916 130.47C403.503 128.541 401.984 126.673 400.355 124.871C402.588 119.894 404.463 114.758 406.062 109.482C406.332 108.692 406.612 107.903 406.862 107.102C407.492 105.003 408.122 102.903 408.762 100.802C409.162 97.812 409.562 94.812 409.952 91.812C410.472 88.722 410.642 85.602 410.472 82.452C410.032 78.292 409.552 74.133 409.042 69.982C408.965 69.2666 408.492 68.6104 408.018 68.0407L407.602 67.552C407.516 67.4533 407.415 67.3247 407.303 67.1814C406.811 66.5549 406.097 65.6459 405.462 65.702C405.202 65.713 404.942 65.732 404.682 65.753C404.472 65.503 404.172 65.093 403.842 64.722L403.792 64.352C403.752 63.992 403.112 62.963 402.672 63.003L401.212 63.122C400.612 63.162 400.002 63.213 399.402 63.262C398.482 62.8423 397.122 62.9723 395.322 63.6423C393.332 63.872 391.352 64.142 389.382 64.482C385.052 65.093 380.782 65.923 376.462 67.133C371.652 68.482 365.822 70.532 361.232 72.522C356.781 74.453 352.468 76.625 348.303 79.021C343.051 73.797 337.42 69.417 331.081 65.996C330.37 65.218 329.649 64.445 328.902 63.682C326.152 60.863 323.262 58.173 320.202 55.702C317.302 53.202 314.242 50.883 311.012 48.812C309.656 47.948 308.257 47.1056 306.858 46.274L304.072 44.622C300.802 42.372 297.332 40.512 293.662 39.052C291.322 37.892 288.892 36.952 286.392 36.213C273.922 31.963 261.042 29.642 247.872 29.213C243.092 29.052 238.322 29.153 233.552 29.442C229.302 29.613 225.052 29.963 220.822 30.452C220.632 29.762 220.422 29.073 220.182 28.403C218.452 23.622 215.712 19.282 212.242 15.573C210.562 13.782 208.972 12.153 207.152 10.673C204.382 7.69203 201.082 5.21303 197.292 3.64202C194.092 2.32302 190.662 1.76202 187.242 1.87202C184.382 1.86302 181.542 2.32302 178.842 3.22202C178.742 3.24202 178.642 3.26202 178.542 3.29202L178.022 3.43271C174.22 4.50131 170.685 6.37946 167.672 8.96303C166.952 9.48203 166.262 10.032 165.602 10.613C165.372 10.823 165.162 11.032 164.942 11.242C163.692 9.88303 162.302 8.60203 160.802 7.47202C160.722 7.38302 160.652 7.28202 160.562 7.19203C157.362 3.74202 153.232 1.29202 148.602 0.403025C147.692 0.222025 146.782 0.133025 145.872 0.0930247ZM395.322 63.642L395.242 63.673C396.642 63.522 398.032 63.392 399.442 63.272L399.402 63.262C398.042 63.3623 396.682 63.4923 395.322 63.6423L395.322 63.642ZM390.502 79.302C392.562 78.692 394.632 78.202 396.722 77.822C396.932 79.702 397.122 81.593 397.222 83.482L397.234 83.665L397.242 84.042C397.172 84.923 397.092 85.802 396.972 86.682C396.612 92.072 396.122 97.142 394.702 102.352C393.152 108.052 391.102 113.572 388.622 118.883C385.822 124.542 382.492 129.942 378.662 134.972C374.522 140.403 369.852 145.432 364.692 149.912C363.832 150.622 362.962 151.322 362.082 152.003C359.192 154.222 356.172 156.272 353.032 158.142C345.262 157.222 337.422 156.972 329.672 157.383C328.552 157.442 327.442 157.522 326.322 157.613C326.292 157.343 326.252 157.062 326.202 156.792C325.762 153.802 324.972 150.713 323.902 147.863L324.042 147.832C324.185 147.795 324.328 147.755 324.47 147.714L325.322 147.463C325.742 148.173 326.762 148.883 327.232 148.732C332.942 147.343 338.362 145.222 343.492 142.383C350.342 139.133 357.352 136.272 364.532 133.832C365.072 133.633 365.112 133.292 364.952 132.932L366.182 132.492L366.301 132.443C367.204 132.014 366.272 131.069 365.79 130.581C365.766 130.557 365.743 130.534 365.722 130.512L365.339 130.143C365.081 129.898 364.819 129.656 364.552 129.423C364.992 129.262 365.432 129.102 365.882 128.952C366.282 128.802 366.392 128.582 366.352 128.322L367.642 127.883C368.672 127.512 367.832 126.562 367.402 126.102L366.838 125.504C366.072 124.715 364.867 123.602 364.152 123.822L363.912 123.892L363.699 123.677C363.404 123.384 363.066 123.072 362.722 122.792C363.292 122.102 361.862 120.622 361.022 120.892L360.552 121.032C360.592 120.852 360.542 120.742 360.282 120.832C359.382 121.113 358.482 121.423 357.582 121.713C351.562 123.593 345.702 125.622 339.952 128.292C337.542 129.282 335.242 130.482 333.052 131.903C329.672 133.682 326.542 135.863 323.672 138.432L323.62 138.478C323.406 138.688 322.946 139.319 322.798 139.508L322.752 139.562L324.842 138.872L324.553 139.117L324.272 139.363C323.342 140.082 322.412 140.822 321.512 141.582C321.372 141.692 321.262 141.782 321.172 141.883C319.242 138.332 316.832 135.032 314.072 132.052L313.931 131.9C313.837 131.797 313.739 131.692 313.632 131.593L314.022 131.713C314.232 131.772 314.492 131.582 314.672 131.343C315.352 131.883 316.172 132.312 317.192 132.593C317.742 132.742 318.142 132.093 318.102 131.633C318.082 131.383 317.862 131.093 317.582 130.822C318.002 131.022 318.432 131.202 318.872 131.322C319.462 131.482 319.922 130.903 319.782 130.363C319.602 129.662 318.362 128.633 317.702 128.403C317.642 128.392 317.592 128.372 317.542 128.352C317.542 128.052 317.602 127.742 317.682 127.432C317.952 127.542 318.222 127.642 318.492 127.713C319.082 127.883 319.452 127.222 319.392 126.742C319.372 126.593 319.282 126.423 319.152 126.253C319.452 126.372 319.752 126.482 320.072 126.572C321.012 126.832 321.172 125.052 320.222 124.732L319.092 124.343C319.402 123.802 319.742 123.262 320.132 122.772C322.052 120.372 324.492 118.363 326.612 116.142C328.342 114.253 330.082 112.372 331.812 110.492C333.462 108.782 335.202 107.162 336.992 105.613C337.482 105.213 337.972 104.812 338.482 104.423C346.472 97.963 355.252 92.602 364.612 88.363C369.432 86.182 374.272 84.122 379.262 82.352C382.882 80.903 386.632 79.883 390.502 79.302ZM138.102 118.602C147.542 117.832 156.982 117.742 166.422 118.633C172.622 119.113 178.732 120.162 184.742 121.782C185.912 121.982 187.062 122.222 188.212 122.463C190.512 123.093 192.802 123.753 195.072 124.482C199.622 125.843 204.062 127.472 208.402 129.392C216.152 132.512 223.502 136.423 230.452 141.113C230.732 141.282 231.162 140.972 231.372 140.572L232.342 141.153C232.212 141.463 232.092 141.772 231.982 142.093C231.272 143.742 230.672 145.423 230.192 147.133C229.242 146.722 228.282 146.343 227.312 145.982L226.423 145.646C222.563 144.218 218.6 143.159 214.542 142.463C212.922 142.153 211.292 141.923 209.662 141.742C208.812 141.633 207.962 141.542 207.112 141.463C202.672 141.162 198.252 141.292 193.842 141.852C193.702 141.863 193.582 141.992 193.462 142.173C191.682 142.452 189.902 142.782 188.142 143.202C187.962 143.242 187.802 143.372 187.662 143.542C184.842 144.173 182.142 144.992 179.242 145.903C179.022 145.972 178.382 146.722 178.262 147.062L177.472 147.302L177.412 147.331C177.069 147.539 176.352 148.592 176.502 148.572L178.152 148.363C178.112 148.472 178.112 148.593 178.142 148.722C177.742 148.872 177.352 149.003 176.952 149.162L176.838 149.206C175.983 149.592 176.591 150.771 177.282 151.202L176.889 151.347C176.071 151.709 175.805 153.248 176.972 153.102C177.892 152.992 178.822 152.872 179.752 152.753C179.922 152.812 180.072 152.843 180.192 152.832L180.552 152.792L179.922 153.016C179.502 153.168 179.082 153.325 178.662 153.492C177.502 153.852 178.422 155.613 179.302 155.503L180.992 155.272C181.392 155.852 182.052 156.352 182.422 156.312C186.372 155.772 190.332 155.322 194.302 154.972C197.802 154.582 201.312 154.332 204.822 154.202C210.672 154.912 216.512 155.633 222.362 156.352C224.422 156.963 226.442 157.682 228.432 158.503C228.402 159.222 228.392 159.942 228.392 160.662C228.392 161.423 228.442 162.292 228.512 163.222C228.542 165.253 228.702 167.312 228.982 169.242L230.002 174.423C230.802 177.512 231.922 180.482 233.372 183.322L233.132 183.343C232.722 182.963 232.172 182.472 231.602 182.133C232.312 181.562 231.212 179.992 230.272 180.093L229.622 180.153C229.622 180.012 229.542 179.923 229.342 179.942C218.788 181.037 208.228 182.208 197.666 183.27C190.202 184.611 182.62 185.564 175.144 184.843L174.082 184.843C174.06 184.824 174.038 184.807 174.016 184.792L173.886 184.705C172.915 184.586 171.945 184.447 170.977 184.266C168.838 183.864 166.844 183.254 164.965 182.491L163.872 183.082C163.922 182.982 163.952 182.883 163.932 182.812C163.882 182.633 163.712 182.383 163.472 182.512C163.326 182.585 163.181 182.661 163.038 182.738L162.182 183.202L161.042 182.963L160.433 182.806C160.027 182.699 159.622 182.585 159.222 182.472L151.722 179.593L150.916 179.189C148.778 178.093 146.727 176.843 144.762 175.412C142.312 174.122 140.072 172.562 137.992 170.782C137.342 170.113 136.702 169.423 136.102 168.692C133.822 166.613 131.742 164.352 129.852 161.912C127.052 158.503 124.482 154.952 122.112 151.222C117.52 143.98 113.623 136.364 109.819 128.697L107.542 124.093C111.522 122.852 115.572 121.852 119.702 121.142C125.802 120.062 131.932 119.213 138.102 118.602ZM288.322 127.522C283.782 126.613 279.222 126.482 274.642 127.162C272.723 127.443 270.813 127.781 268.919 128.19C273.22 131.94 276.679 136.739 278.924 142.262C281.35 148.232 271.673 150.805 269.281 144.921C266.974 139.245 262.607 134.891 257.332 132.281C256.192 132.918 255.087 133.608 254.032 134.372C252.652 135.492 251.352 136.702 250.132 138.032C247.472 140.923 245.032 144.782 243.432 148.602C242.812 150.682 242.352 152.822 242.062 155.022C242.002 155.522 241.942 156.032 241.892 156.542C240.906 166.891 243.865 176.96 248.956 185.87L249.156 185.873C253.7 183.409 258.457 181.333 263.352 179.642C267.272 177.003 271.342 174.562 275.532 172.352C284.44 167.653 293.848 164.03 303.542 161.553L304.662 161.272C306.945 160.689 309.25 160.175 311.563 159.725L312.952 159.463L312.972 159.463L312.822 157.972C312.042 152.122 309.752 146.692 306.792 141.673C304.572 137.883 301.222 134.003 297.502 130.903L297.482 130.892C295.793 129.932 294.017 129.138 292.19 128.482L291.502 128.242L288.322 127.522ZM395.435 134.506C394.591 135.964 393.713 137.408 392.782 138.832C388.261 145.751 382.841 152.244 376.695 157.905C378.298 157.901 379.897 157.962 381.476 158.11C384.199 158.367 386.866 158.819 389.466 159.452C389.677 159.283 389.913 159.198 390.102 159.332L390.78 159.801C396.357 161.306 401.593 163.672 406.336 166.842L406.251 166.216C406.237 166.112 406.221 166.007 406.202 165.903C406.282 164.673 406.302 163.442 406.262 162.222C405.282 155.012 402.832 148.372 400.032 141.653C399.979 141.523 400.017 141.354 400.098 141.182C398.685 138.874 397.138 136.642 395.435 134.506ZM323.452 144.792C323.222 144.872 322.982 144.952 322.742 145.022C322.882 145.332 323.012 145.633 323.142 145.942L323.157 145.936L324.102 145.192C323.902 145.102 323.672 144.963 323.452 144.792ZM199.792 196.082C205.803 195.463 211.814 194.83 217.825 194.187C223.43 194.731 229.043 195.151 234.664 195.434C234.282 195.736 233.891 196.026 233.512 196.332C232.992 196.593 232.472 196.852 231.952 197.122C231.842 196.952 231.632 196.753 231.442 196.872C231.235 196.992 231.03 197.115 230.825 197.24L229.602 197.992C229.172 197.633 228.652 197.423 228.362 197.613C220.782 202.452 213.502 207.383 206.802 213.383C205.632 214.392 204.482 215.412 203.342 216.463C196.272 223.042 189.722 230.153 183.522 237.542C177.312 244.942 171.492 252.732 165.952 260.642C159.442 269.932 153.492 279.593 147.202 289.042C138.582 301.982 130.012 314.992 124.032 329.423C121.932 334.482 120.202 339.653 118.902 344.952C118.412 346.843 117.962 348.732 117.572 350.653C117.192 352.992 116.842 355.332 116.542 357.682C116.092 362.182 116.102 366.682 116.572 371.182C116.582 371.423 116.732 371.602 116.932 371.732C116.962 372.133 116.982 372.522 117.022 372.923C116.322 372.852 115.632 372.802 114.932 372.782L114.257 372.755C112.682 372.71 111.106 372.783 109.522 372.992C107.172 373.302 104.872 373.942 102.672 374.832C102.402 374.912 102.132 375.003 101.872 375.113C101.412 375.003 100.952 374.883 100.502 374.753C98.1122 373.992 95.8121 373.062 93.6021 371.972C93.9662 369.713 94.0427 360.242 94.2383 356.704L94.2822 356.042C95.3322 346.222 97.8121 336.582 101.132 327.292C101.432 326.442 101.742 325.593 102.062 324.742C104.332 319.162 106.892 313.732 109.912 308.452C111.942 304.722 114.212 301.142 116.722 297.702C120.022 293.093 123.622 288.742 127.522 284.633C127.732 284.392 127.212 283.843 126.412 283.282C127.322 282.253 128.242 281.242 129.192 280.253C129.642 279.742 127.042 278.022 125.192 277.613C124.662 277.232 123.982 276.843 123.292 276.552C123.382 276.463 123.472 276.363 123.562 276.262C124.072 275.692 123.882 275.242 123.282 274.843C122.932 274.622 121.782 273.942 121.152 274.082C120.922 273.762 120.512 273.642 120.142 274.042C119.762 274.432 119.402 274.832 119.032 275.222C118.642 275.122 118.292 275.102 118.122 275.292L116.892 276.653C116.762 276.673 116.642 276.702 116.572 276.792C110.652 283.292 105.142 289.772 100.382 297.213C94.9722 305.673 90.6721 314.692 87.2922 324.133C86.1512 327.31 85.1362 330.521 84.2362 333.761C86.4022 334.112 88.1871 335.898 87.1252 338.474C85.6832 341.972 83.5542 344.797 81.0652 347.492C80.5341 350.522 79.0221 350.551 78.6731 349.865C77.1712 350.884 74.7232 350.964 73.5282 349.455C67.9302 342.391 65.8792 334.815 67.4212 325.903C68.9872 316.855 73.3212 308.569 74.8032 299.484C74.9992 298.283 75.5872 297.5 76.3482 297.051C84.7372 274.886 98.0802 254.876 114.462 237.772C123.842 227.982 134.262 219.113 144.912 210.742L160.792 198.593C162.222 197.702 163.622 196.772 164.972 195.782C166.952 196.272 168.952 196.673 170.992 196.952C176.742 197.742 182.512 197.673 188.282 197.242C192.122 196.912 195.962 196.522 199.792 196.082ZM122.842 412.272C123.019 412.262 132.281 415.736 136.895 417.981L137.122 418.092C142.442 420.732 145.002 422.632 149.782 426.022C150.102 426.252 150.432 426.602 150.432 426.942C150.432 431.88 149.232 437.917 145.082 435.242C144.482 434.856 143.878 434.478 143.269 434.106L142.352 433.552L142.334 433.558C142.34 433.555 142.346 433.548 142.352 433.542C133.312 428.032 123.762 423.712 113.682 420.622C112.992 420.372 118.102 412.652 119.512 413.082C118.702 412.762 122.708 412.28 122.842 412.272ZM142.334 433.558C142.33 433.561 142.326 433.562 142.322 433.562L142.334 433.558Z'
				transform='translate(-30.00035 -66.00002)'
				fill={strokeColor || '#000000'}
				fill-rule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
