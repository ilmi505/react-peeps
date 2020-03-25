import React from 'react';
import { PieceType } from '../../types';

export const CrossedLegs: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g transform='translate(-186 449)'>
			<path
				d='M1396.94 758.294C1389.31 756.101 1379.77 755.537 1371.42 755.137C1341.9 753.4 1311.81 767.474 1282.86 773.817C1270.19 776.949 1256.78 780.638 1243.22 783.385C1231.18 785.019 1218.74 786.245 1206.23 787.024C1196.12 787.327 1184.35 786.552 1180.9 797.184C1160.57 801.125 1142.58 802.764 1123.2 799.414C1125.02 793.241 1126.05 786.787 1124.18 780.137C1125.12 778.561 1126.41 776.43 1127.1 774.994L1124.77 774.994C1090.76 761.38 1053.99 752.082 1019.8 737.977C975.179 721.894 909.461 690.82 857.903 669.601C861.398 650.459 862.693 631.01 861.211 612.102L863.283 610.427C863.964 606.712 865.021 602.266 866.938 598.898C869.37 592.445 869.427 583.635 870.393 576.341C872.407 562.074 873.751 540.592 870.086 523.652C868.485 500.68 853 482.971 836.304 468.765C815.803 448.49 795.277 428.709 775.264 407.651C664.502 294.731 655.743 152.508 482.351 109.284L482.266 108.612C480.9 107.088 480.341 105.879 478.784 108.288C473.06 106.094 465.921 106.278 461.126 102.569C452.615 94.8045 446.576 85.8415 442.628 75.2047C439.586 55.0979 441.738 24.1086 424.124 11.2435C404.559 -0.4765 300.608 -8.82093 291.643 16.803C286.082 22.0269 283.551 28.6634 281.813 36.7889C276.021 47.7448 272.367 59.8933 266.533 71.0175C254.129 95.9682 246.088 90.4386 224.188 96.1406C221.811 90.8424 214.594 91.9101 209.335 92.6794C145.648 101.63 67.9998 126.056 40.7314 185.92L43.0521 185.624C-4.01634 274.059 26.5085 386.526 34.927 480.243C41.7363 563.548 33.9489 647.25 15.4429 724.954C-7.27177 807.387 -8.57518 899.595 36.4927 974.212C41.0733 982.752 46.6505 994.822 56.519 989.464C61.9268 993.553 68.0019 996.377 76.3924 998.837C78.7059 1000.52 81.1011 1003.33 83.523 1004.54C83.6366 1004.7 87.5355 1002.45 87.74 1002.39C95.1091 1012.91 499.668 1048.05 541.651 1053.51C578.639 1057.97 627.513 1069.35 657.656 1042.67C682.565 1035.56 708.63 1017.03 728.537 998.628C740.617 1173.82 747.297 1532.62 758.075 1535.12C762.792 1536.72 769.159 1538.63 774.498 1540.16C774.53 1552.75 775.467 1567.05 774.477 1579.42C772.823 1593.4 768.629 1609.9 766.732 1624.59C758.578 1624.05 756.18 1632.23 755.231 1637.78C748.192 1683.68 748.401 1720.68 748.906 1771.13C831.676 1819.89 928.682 1846.7 1021.82 1878.21C1030.74 1884.91 1050.07 1877.66 1060.37 1875.85C1096.13 1868.81 1136.76 1847.98 1127.73 1809.79C1121.13 1781.04 1093.38 1764.5 1070.02 1747.58C1044.46 1729.07 1017.52 1710.56 994.017 1688.52C975.161 1670.76 961.08 1656.98 945.356 1636.93C938.381 1627.61 930.944 1612.29 921.562 1605.42C931.473 1593.66 911.446 1604.68 903.864 1605.36C899.404 1584.36 893.881 1564.21 887.259 1544.07L893.696 1544.36C914.832 1524.62 926.68 1429.86 928.152 1401.74C938.747 1218.47 938.495 1007.24 895.994 852.902C928.277 872.783 963.678 889.388 995.783 909.05C1016.03 920.91 1036.57 937.378 1059.26 943.128C1060.74 947.375 1066.15 949.025 1069.1 944.867C1073.16 945.368 1078.4 943.683 1078.84 941.831C1083 933.336 1089.02 924.181 1088.29 914.95C1088.29 914.95 1082.72 902.02 1082.72 902.02C1095.21 907.097 1108.78 917.778 1122.11 918.757C1149.04 1008.66 1202.08 958.299 1253.13 923.309C1283.93 901.782 1317.63 878.011 1350.05 855.059C1377.56 833.177 1431.26 812.414 1404.93 769.072'
				transform='translate(281 -29.99814)'
				fill={backgroundColor || '#FFFFFF'}
				stroke='none'
			/>
			<path
				d='M273.655 22.9076C267.15 38.6701 259.446 57.3398 245.832 60.6489C241.364 60.6665 236.383 60.9535 233.466 64.7851C228.665 51.527 193.645 60.8745 171.404 66.8109C165.089 68.4966 159.804 69.9072 156.534 70.4472C110.645 82.5056 49.681 115.295 39.2572 162.74C5.98824 235.13 16.4256 311.552 26.8782 388.086C32.6145 430.087 38.3554 472.121 36.8799 513.542C39.395 568.073 28.761 621.382 18.2755 673.946C0.0902517 765.111 -17.6481 854.035 34.4252 943.219C34.9492 944.194 35.4956 945.25 36.0686 946.359C41.1507 956.19 48.3231 970.064 60.561 966.059C65.9288 969.828 72.6385 972.409 78.5534 974.205C79.2022 974.722 79.8783 975.323 80.5773 975.945C83.7399 978.756 87.3707 981.983 91.0541 979.708C101.239 991.501 121.509 1009.15 137.836 1007.7C224.554 1047.47 325.105 1045.36 418.147 1035.15L431.135 1033.53C469.138 1028.81 507.154 1024.54 545.436 1029.36C550.479 1030 555.517 1030.72 560.555 1031.44C578.04 1033.94 595.532 1036.45 613.266 1035.35C631.03 1033.77 651.896 1030.97 664.91 1017.93C688.487 1010.44 709.665 996.371 728.25 980.297C737.268 1112.11 739.956 1244.48 732.038 1376.44C729.726 1415.79 726.557 1455.08 722.376 1494.28C722.097 1496.9 723.46 1498.56 725.318 1499.23C730.487 1505.49 742.558 1506.03 750.277 1508.47C758.228 1509.97 765.989 1512.3 773.665 1514.72C774.625 1540.8 773.795 1567.18 768.511 1592.73C748.919 1594.96 749.797 1681.09 750.23 1723.61L750.23 1723.62L750.23 1723.63L750.231 1723.64L750.231 1723.65C750.32 1732.47 750.391 1739.4 750.255 1743.32C750.322 1746.08 751.775 1748.84 754.341 1750.05C825.121 1783.31 898.17 1812.26 972.858 1836.98C991.407 1842.61 1010.22 1850 1029.18 1853.65C1039.2 1858.44 1051.15 1854.94 1062.17 1851.71C1065.09 1850.86 1067.94 1850.02 1070.67 1849.36L1071.62 1849.14C1166.56 1824.66 1161.91 1753 1080.77 1711.65C1045.47 1687.43 1009.47 1662.86 981.931 1629.85C966.295 1612.78 954.217 1592.49 936.379 1577.52C942.679 1565.23 924.621 1563 915.737 1565.08C915.697 1560.73 910.867 1563.71 909.818 1560.54C906.846 1546.87 902.948 1533.52 898.592 1520.23C923.601 1501.75 930.515 1487.48 932.131 1457.32L932.224 1455.46C945.264 1248.89 957.25 1037.52 908.245 834.593C937.744 851.511 968.25 866.571 997.33 884.236C1017.78 896.235 1036.87 911.681 1059.98 918.296C1062.83 923.366 1071 925.049 1075.36 920.774C1080.45 920.823 1085.96 919.12 1087.97 913.96C1088.54 912.858 1089.14 911.732 1089.75 910.585C1094.17 902.304 1099.17 892.939 1097.17 883.656C1105.62 887.25 1113.57 893.34 1122.65 894.405C1148.48 978.67 1201.65 940.374 1250.47 905.215C1252.67 903.629 1254.87 902.049 1257.05 900.488L1260.13 898.286C1302.62 868.577 1344.92 838.631 1387.22 808.647C1413.58 793.263 1432.19 766.424 1413.3 737.137C1410.57 732.676 1407.32 728.474 1403.81 724.54C1383.15 719.206 1360.95 718.931 1340.35 724.726C1309.57 732.755 1279.06 741.891 1247.98 748.835C1235.37 750.597 1222.69 751.837 1209.99 752.634C1209.21 752.658 1208.42 752.676 1207.62 752.694C1197.8 752.92 1186.16 753.187 1181.56 763.32C1165.82 766.226 1149.63 768.131 1133.69 765.84C1134.81 761.266 1134.7 756.454 1133.75 751.829C1137.36 747.896 1137.96 739.244 1130.52 740.596C1043.47 712.718 959.026 677.665 875.543 640.476L867.956 637.089C870.867 619.929 871.879 602.408 870.815 585.196C873.249 583.211 872.938 579.656 873.706 576.844C878.155 568.544 878.703 558.501 879.627 549.152L879.765 547.789C881.758 532.704 882.681 517.628 880.818 502.567C879.79 475.487 865.038 452.423 844.191 435.879C823.779 415.683 803.101 395.74 783.321 374.91C684.296 275.066 649.266 105.438 492.023 78.2507C490.021 73.0996 483.219 70.3233 479.716 75.2038C476.123 75.7685 472.518 72.7351 469.734 70.1946L468.861 69.393C453.042 55.7364 447.536 34.9339 446.956 14.7767C429.935 35.5275 450.353 85.3687 477.97 90.4258C466.14 153.835 384.689 160.235 334.339 141.319C301.945 130.699 246.982 107.082 236.625 72.9747C234.932 66.5128 240.781 66.0151 247.368 65.4546C252.317 65.0335 257.683 64.577 260.578 61.5286C271.076 55.5448 277.1 45.2014 282.427 34.8234L283.579 32.5602C284.381 29.843 286.318 26.5695 288.367 23.1077C293.036 15.2173 298.285 6.34891 291.977 0.861895C284.497 -3.36761 279.573 8.56663 273.655 22.9076ZM222.619 67.9981C192.417 70.9755 162.503 79.209 134.745 91.9311C32.1357 121.559 17.3403 241.694 29.6786 332.732C34.791 401.963 54.5306 469.673 96.0324 525.97C204.681 691.696 383.446 668.653 554.193 646.643C557.086 646.27 559.977 645.897 562.866 645.526C569.114 641.177 579.702 644.265 585.724 638.521C585.094 638.304 584.527 638.005 584.042 637.634C586.935 635.376 589.174 631.414 589.841 627.204L591.09 627.328C591.845 611.23 591.763 595.326 591.681 579.423L591.681 579.395C591.63 569.485 591.579 559.582 591.731 549.633C534.773 534.01 473.689 526.025 415.964 510.464C410.673 514.155 404.729 511.444 399.264 508.952C397.952 508.353 396.669 507.768 395.428 507.286C378.813 500.217 362.05 493.503 345.164 487.11L340.94 485.519C329.932 481.392 318.932 477.16 308.028 472.749L303.943 471.086C302.845 470.637 301.451 469.974 299.863 469.218C292.425 465.679 280.723 460.111 275.108 464.978L275.658 466.163C279.698 474.982 293.618 507.609 276.506 501.156C262.612 491.397 255.407 423.345 241.645 422.743C236.912 435.413 233.521 448.563 232.746 462.107C232.468 465.154 228.463 467.724 226.056 464.877C215.789 451.352 221.736 437.068 227.725 422.684C231.257 414.2 234.803 405.682 235.048 397.263C236.129 378.922 230.819 361.401 225.528 343.94C223.206 336.279 220.888 328.629 219.115 320.927L218.757 319.185C218.182 316.421 217.553 313.559 216.912 310.638C213.749 296.244 210.279 280.453 211.449 268.236L214.836 280.993C218.233 293.758 221.713 306.525 225.706 319.11C227.812 325.789 230.278 332.512 232.76 339.279C241.962 364.363 251.394 390.076 243.565 416.564C263.509 417.228 266.882 448.717 274.374 463.098C284.007 450.594 339.859 471.854 372.153 484.147C380.494 487.322 387.263 489.899 391.259 491.141L395.013 486.881C455.973 417.742 499.98 370.951 594.463 425.641C578.141 372.975 576.564 317.037 573.78 262.347C574.072 259.158 573.71 254.367 573.312 249.093C572.41 237.162 571.321 222.758 577.201 218.82C578.671 219.034 580.103 219.479 581.454 220.071L581.452 225.462C581.493 235.904 581.98 253.22 586.357 257.153L588.366 277.83C593.628 331.596 599.594 385.321 615.645 437.133C654.176 458.68 689.334 485.659 722.409 514.766L726.176 513.39C727.492 512.909 728.815 512.423 730.147 511.934C770.201 497.229 817.561 479.841 858 497.919C857.301 487.374 853.232 477.281 847.556 468.363C838.09 466.013 831.895 456.028 825.121 449.38C803.644 426.303 781.596 403.753 760.613 380.21C671.077 283.863 632.985 125.656 492.382 88.2863C483.087 166.14 383.513 178.563 323.508 151.919L321.231 151.046C283.93 136.646 241.777 114.912 228.677 75.3156L228.133 74.1694C226.786 71.3769 225.18 68.5303 222.619 67.9981ZM493.199 85.9471C493.171 84.9573 493.114 83.9675 493 82.9981C494.166 84.141 495.521 85.1308 497 85.9981C495.73 85.9573 494.469 85.9471 493.199 85.9471ZM46 260.998C50.0469 280.062 71.9435 286.323 88.9368 291.401L94.2464 293.424C109.253 299.169 124.799 305.632 135.595 317.771C138.669 327.72 123.572 317.849 113.468 311.244C109.665 308.758 106.57 306.734 105.417 306.404C84.7991 293.615 47.5443 291.442 46 260.998ZM681.096 356.477C685.071 354.532 682.225 347.55 678.033 349.267C663.365 355.275 651.089 365.885 638.8 375.648L637.197 376.916C636.642 377.355 637.376 378.307 637.961 377.899C651.303 368.576 666.615 363.563 681.096 356.477ZM731.133 407.014C735.046 406.596 724.904 414.731 716.9 421.15C712.581 424.614 708.884 427.579 708.356 428.43C706.155 430.344 703.583 426.944 705.931 425.286C714.411 419.301 722.768 413.158 731.133 407.014ZM192.038 418.464L191.926 418.992C189.367 430.363 177.576 436.249 170.094 444.248C165.885 449.131 159.488 454.425 152.631 460.1C133.531 475.907 110.857 494.672 121.907 515.751C125.682 521.214 134.989 519.622 134.914 512.194C131.616 494.834 143.231 481.884 154.134 469.728C156.367 467.239 158.569 464.783 160.608 462.329C167.782 454.046 174.955 445.761 182.127 437.474C186.96 431.888 192.665 426.308 192.999 418.464C193.026 417.822 192.116 417.864 192.038 418.464ZM42.2707 446.995C41.8687 443.992 41.4486 440.991 41 437.998C41.9582 441.202 42.9579 444.39 44 447.563L43.827 447.738C43.3209 448.279 42.9338 448.957 42.7286 449.736L42.6669 449.998L42.2707 446.995ZM47.0665 499.873C50.9552 495.239 53.5511 489.792 54.9763 483.998C111.977 570.275 152.515 628.752 254 668.828C247.891 690.696 231.935 709.747 222.242 728.674C171.742 804.078 108.362 872.047 63.8377 950.842C63.2895 951.234 62.731 951.627 62.1726 951.998C61.1176 951.127 60.0224 950.432 58.8216 949.872C0.832222 857.445 16.7465 770.851 33.3756 680.367C43.9868 622.628 54.8891 563.306 47.0665 499.873ZM721.129 525.823C762.917 510.37 804.527 494.983 848.906 505.409C836.429 514.708 822.453 521.775 807.515 526.269C796.165 531.113 809.878 544.883 817.522 540.268C838.673 544.597 859.908 555.675 858.819 580.355C860.241 601.229 853.325 670.374 836.483 681.656C764.697 684.328 736.359 670.908 706.466 656.751C682.088 645.205 656.676 633.17 605.819 628.974C606.269 606.684 605.388 584.276 604.51 561.954C604.337 557.539 604.163 553.126 604 548.719C644.686 554.091 682.981 539.93 721.129 525.823ZM417 504.998C417.224 505.355 417.384 505.741 417.469 506.137C419.987 506.404 422.493 506.691 425 506.998L417 504.998ZM244.977 511.215C245.07 511.082 244.858 510.92 244.749 511.04C224.185 531.853 197.43 568.982 221.545 596.375C226.349 600.874 233.855 595.204 230.643 589.303C213.269 563.09 227.494 533.159 244.977 511.215ZM852.974 515.998C843.36 522.864 833.053 528.566 822.133 533.065C822.167 534.323 821.554 535.668 821 536.656C835.374 537.798 850.344 541.512 860.434 551.998C860.924 548.163 861.403 544.317 861.771 540.471C862.7 530.576 861.005 521.721 852.974 515.998ZM694.56 665.998C689.112 691.855 675.345 715.168 667 739.884C682.673 736.429 694.747 721.822 703.884 709.258L704.158 708.84C704.602 708.156 705.054 707.432 705.517 706.689C709.551 700.228 714.487 692.322 723.266 696.521C734.236 702.895 731.305 721.251 728.908 736.262C728.058 741.583 727.276 746.483 727.203 750.281C725.318 770.172 718.853 788.78 714.445 808.102C725.772 800.36 729.027 785.096 734.548 773.2L755.795 722.221C771.415 700.816 764.161 764.914 763.354 770.964C762.902 775.694 761.901 780.434 760.899 785.181C759.086 793.77 757.268 802.381 758.683 810.998C767.491 801.518 773.04 789.605 777.702 777.518C784.17 760.706 790.073 743.678 796.227 726.756C798.354 721.334 806.421 723.237 805.251 729.208C804.854 748.414 804.539 767.619 804.233 786.825L804.003 801.229C803.997 801.641 803.961 802.171 803.921 802.769C803.693 806.133 803.322 811.604 807.328 809.732C832.096 783.73 838.447 731.74 835.224 696.81C786.535 697.986 736.86 691.67 694.56 665.998ZM47.2319 762.998C41.8312 759.008 132.607 642.438 126.726 676.089C101.401 706.058 71.8681 732.32 47.2319 762.998ZM514.862 680.138C516.119 676.373 522.084 677.992 520.827 681.778C504.508 730.814 488.633 780.036 469.203 827.938C467.719 831.589 461.744 829.98 463.238 826.287C481.102 782.27 495.956 737.137 510.902 692.066L514.862 680.138ZM142.065 698.371C153.69 695.114 136.829 713.974 126.749 725.248C123.358 729.042 120.735 731.976 120.222 732.921C97.2413 760.058 76.1861 788.719 55.2918 817.469L48.9577 826.195C48.3493 827.079 44.1546 833.279 47.1878 832.491C47.4654 832.418 47.5949 832.782 47.3742 832.935C28.0512 836.353 132.747 700.76 142.065 698.371ZM1390.54 730.998C1387.52 732.08 1384.26 731.774 1380.99 731.468C1379.6 731.338 1378.22 731.209 1376.86 731.184C1360.55 730.836 1344.62 735.091 1329.03 739.39C1283.68 751.796 1238.08 762.778 1191.62 770.125C1190.68 771.097 1189.78 772.089 1188.97 773.133C1189.77 774.497 1189.9 776.202 1188.73 777.896C1184.94 785.141 1184.85 793.266 1184.77 801.467C1184.7 808.425 1184.63 815.439 1182.29 822.018C1174.91 851.037 1155.29 883.769 1126 894.069C1135.77 903.377 1142.77 915.358 1152.83 924.341C1174.06 938.894 1197.13 922.333 1216.01 908.783C1219.13 906.549 1222.12 904.398 1224.98 902.481C1263.42 875.325 1301.95 848.359 1340.6 821.501C1357.91 807.151 1396.21 789.065 1404.49 770.053C1409.8 755.477 1400.14 741.277 1390.54 730.998ZM1127.17 764.902C1127.4 764.267 1127.63 763.633 1127.83 762.998C1127.77 763.662 1127.69 764.325 1127.6 764.998C1127.46 764.96 1127.31 764.931 1127.17 764.902ZM1090 873.854C1099.55 837.622 1109.11 801.744 1125.65 767.998C1142.89 774.093 1161.08 773.709 1179 771.878C1175.17 780.039 1174.78 788.855 1174.39 797.744C1174.2 802.281 1174 806.837 1173.34 811.335C1171.03 824.924 1166.05 837.895 1158.94 849.699C1152.04 860.254 1132.62 886.845 1118.86 883.749C1109.09 880.87 1099.94 876.587 1090 873.854ZM783.936 1538.36C782.093 1529.93 780.526 1522.76 781.133 1517C811.138 1524.07 863.982 1533.17 892.27 1520.3C892.734 1530.7 892.69 1540.59 893.572 1550.88C894.187 1557.87 898.868 1560.69 899 1567.76C877.251 1571.75 856.088 1579.04 836.614 1589.76C832.552 1591.02 826.781 1595.33 820.563 1599.97C805.786 1611 788.488 1623.91 785.608 1602.33C784.977 1596.48 786.076 1590.46 787.159 1584.52C787.608 1582.06 788.054 1579.62 788.374 1577.2C789.174 1562.33 786.323 1549.28 783.936 1538.36ZM933.548 1581C933.055 1581.33 932.534 1581.61 932 1581.86C935.931 1586.62 939.337 1591.9 944 1596L942.015 1592.92C939.359 1588.8 936.642 1584.7 933.548 1581ZM926.841 1583C919.147 1583.82 911.645 1584.3 904.041 1585.69C876.284 1590.25 849.807 1601 825.954 1615.93C818.229 1620.75 811.334 1626.82 802.47 1629.5C784.253 1636.12 766.349 1619.69 767.684 1601.93C762.606 1646.56 763.477 1692.48 766.113 1737.34C837.366 1769.57 910.216 1798.32 984.389 1823.29C1001.09 1830.29 1020.87 1832.53 1036.21 1842C1062.37 1840.35 1088.7 1831.16 1110.67 1816.8C1147.11 1791.51 1122.92 1751.4 1092.71 1733.75C1026.2 1703.74 969.595 1642.99 926.841 1583Z'
				transform='translate(275 0.001856936)'
				fill={strokeColor || '#000000'}
				fill-rule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
