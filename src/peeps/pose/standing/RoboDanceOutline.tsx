import React from 'react';
import { PieceType } from '../../types';

export const RoboDanceOutline: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g transform='translate(-276 479)'>
			<path
				d='M1301.1 714.847C1311.07 714.031 1327.73 712.44 1337.72 710.76C1341.69 710.091 1344.57 712.314 1345 716.206C1345.18 729.323 1328.74 734.148 1314.47 738.333C1308.43 740.106 1302.78 741.764 1298.95 743.889C1307.37 741.895 1326.97 739.156 1329.71 749.894C1331.92 760.045 1325.57 761.868 1318.37 763.933C1316.6 764.442 1314.77 764.966 1313.01 765.632C1243.59 788.475 1168.17 795.41 1095.53 786.77C1090.2 811.348 1044.94 862.521 1020.03 869.896C998.499 875.166 973.569 863.301 951.709 852.898C945.533 849.958 939.602 847.136 934.063 844.849C869.627 812.656 806.285 753.95 787.908 683.486C774.67 777.13 764.421 863.969 780.058 956.694C784.317 981.949 797.987 1024.97 804.107 1049.95C803.938 1047.02 810.462 1056.68 816.912 1066.24C820.551 1071.63 824.166 1076.98 826.542 1080.02C859.456 1115.07 821.229 1156.85 787.908 1175.94C969.689 1466.91 852.841 1855.76 976.003 2164.04C977.002 2167.32 978.882 2171.46 980.931 2175.96C987.813 2191.1 996.609 2210.44 980.42 2215.87C973.883 2230.37 938.61 2234.41 923.971 2238.95C931.903 2261.51 940.283 2294.05 952.114 2314.97C952.119 2314.97 952.238 2314.92 952.457 2314.82C955.445 2313.48 976.928 2303.84 976.003 2314.97C981.026 2317.91 992.11 2323.83 1004.57 2330.49C1029.44 2343.78 1059.8 2360 1058.52 2361.31C1110.21 2378.9 1169.91 2385.26 1208.73 2425.66C1209.36 2426.36 1210.03 2427.09 1210.71 2427.84C1217.23 2434.96 1225.65 2444.16 1221.58 2453.65C1232.81 2458.3 1238.33 2473.56 1235.11 2485.64C1222.11 2528.13 1069.22 2523.06 980.535 2520.11C958.721 2519.39 940.791 2518.8 929.781 2519.07C917.855 2517.58 900.414 2517.15 880.826 2516.67C827.966 2515.37 759.474 2513.69 741.577 2489.62C733.316 2480.49 735.236 2462.71 746.981 2457.91C741.419 2453.71 743.807 2441.63 745.892 2431.1C746.863 2426.19 747.768 2421.62 747.773 2418.33C748.965 2410.29 762.893 2331.46 770.167 2336.8C772.069 2332.84 775.739 2330.57 780.058 2329.43C784.696 2301.8 786.787 2273.96 787.908 2246.04C784.025 2245.49 779.689 2244.97 775.612 2244.02C767.362 2250.55 760.915 2234.14 756.578 2223.11C755.401 2220.11 754.38 2217.51 753.52 2215.87C662.886 1960.48 734.446 1636.56 587.527 1397.06C524.735 1522.58 421.77 1797.65 371.505 1928.9C347.027 1989.17 347.122 2043.78 312.144 2099.2C303.142 2113.59 261.069 2171.24 256.193 2164.04C251.622 2197.26 242.728 2230.84 234.585 2263.6C234.585 2267.29 234.585 2273.14 248.267 2276.49C262.235 2280.76 270.775 2294.35 281.741 2303.15C288.698 2299.82 291.87 2302.45 285.439 2306.42C293.812 2313.68 302.852 2320.26 312.144 2326.1C320.899 2322.96 329.893 2320.39 315.958 2328.45C368.956 2365.48 456.541 2360.79 480.774 2430.12C482.08 2434.38 480.172 2437.69 477.188 2439.51C483.648 2445.05 493.542 2465.47 480.459 2468.21C373.863 2478.09 284.383 2476.66 177.774 2467.63C147.677 2461.99 54.9325 2464.44 42.2441 2438.09C38.638 2430.89 37.807 2419.29 44.5532 2414.03C45.2652 2412.22 46.2652 2410.45 47.6053 2409C40.6649 2402.68 41.0515 2391.54 41.4042 2381.37C41.5387 2377.5 41.6683 2373.76 41.3851 2370.49C42.6521 2343.92 51.0374 2290.03 73.2582 2274.97C76.3533 2273.31 79.8144 2272.59 83.2455 2273.14C101.259 2231.72 104.224 2187.16 127.901 2148.69C126.275 2147.92 123.652 2146.77 120.353 2145.32C98.5327 2135.76 47.0951 2113.22 58.1636 2099.2C204.308 1852.03 315.156 1420.11 428.72 1157.69C412.311 1132.5 392.724 1107.3 379.371 1081.07C350.703 1062.91 321.655 1045.44 291.803 1029.27C275.923 1030.06 253.973 1024.8 240.689 1017.09C230.688 1068.23 174.582 978.124 168.788 959.384C142.724 976.723 179.603 1063.53 193.525 1081.07C194.708 1082.79 197.477 1086.02 200.74 1089.83C208.723 1099.16 219.663 1111.94 217.565 1114.4C198.703 1131.13 182.366 1103.68 169.58 1082.2C165.367 1075.12 161.54 1068.7 158.135 1064.71C101.585 982.927 65.455 883.414 67.0391 783.926C63.1933 782.662 59.1266 781.495 54.9954 780.309C31.4909 773.56 5.89635 766.212 7.00801 737.048C5.69296 711.164 0.928799 689.557 0.00576767 663.653C-0.259382 657.846 17.6419 660.507 22.4835 661.227L22.8326 661.279C7.02201 484.263 103.609 314.709 224.514 190.508C291.215 116.908 405.327 41.4623 508.129 56.7052C519.388 58.3746 512.945 65.5445 524.329 69.392C530.999 59.0757 536.721 46.7584 539.472 34.8683C539.998 25.9392 543.148 15.944 550.32 9.97488C575.078 -6.13673 613.514 0.779748 641.056 6.48965C662.238 11.4033 686.718 20.8125 691.521 44.2736C694.439 43.7337 695.98 54.1793 697.2 62.449C697.801 66.5269 698.325 70.0758 698.897 71.5173C702.347 86.713 702.585 93.3374 706.514 108.418C737.407 116.631 754.164 157.632 779.116 174.489C842.413 213.31 886.218 271.359 886.347 347.014C886.535 394.268 893.451 441.466 906.615 486.913C909.37 498.513 913.322 510.385 917.329 522.422C928.66 556.463 940.43 591.821 926.82 626.083C940.495 623.932 948.609 635.847 956.259 647.083C960.245 652.936 964.105 658.605 968.561 662.004C988.45 667.318 1006.3 670.742 1026.38 673.754C1031.43 674.349 1036.02 674.578 1040.4 674.797C1050.96 675.325 1060.28 675.79 1071.73 681.188C1077.25 685.036 1076.99 692.441 1077.41 698.169C1118.28 681.75 1161.27 658.602 1199.35 637.263C1199.87 637.081 1200.39 636.894 1200.92 636.704C1214.73 631.791 1234.95 624.598 1246.44 635.306C1252.1 641.841 1248.96 644.305 1244.27 647.992C1243.34 648.72 1242.35 649.497 1241.36 650.361C1230.03 660.226 1214.74 673.954 1203.13 683.486C1234.98 686.098 1273.85 686.371 1305.33 681.188C1307.48 680.845 1309.67 680.284 1311.87 679.719C1317.44 678.291 1323.11 676.838 1328.5 678.806C1348.83 689.955 1325.28 702.152 1309.32 710.421C1306.14 712.065 1303.27 713.553 1301.1 714.847ZM227.172 971.919C224.289 960.794 223.137 934.405 222.968 922.914C222.724 857.865 235.795 794.33 248.873 730.756C259.919 677.063 270.97 623.341 274.011 568.657C276.162 540.774 275.529 512.744 271.999 485.014C255.848 529.269 237.761 572.842 217.565 615.466C203.821 640.546 194.941 670.102 175.638 691.601C180.281 691.737 212.24 694.654 196.325 701.538C190.271 724.966 176.337 747.859 169.705 771.132C169.141 773.655 168.872 776.85 168.592 780.183C167.651 791.375 166.579 804.12 153.775 798.17C152.008 799.496 141.887 800.43 139.606 801.054C146.925 864.131 195.053 920.419 227.172 971.919Z'
				transform='translate(131.9971 -19)'
				fill={backgroundColor || '#FFFFFF'}
				fill-rule='evenodd'
				stroke='none'
			/>
			<path
				d='M544.031 4.655C543.584 2.129 542.83 0.448 541.725 0C540.838 1.974 540.125 4.028 539.502 6.125C539.452 6.206 539.395 6.278 539.349 6.365C537.616 9.693 537.435 13.507 536.714 17.171C536.076 19.74 535.377 22.282 534.484 24.734C532.721 29.5873 530.388 34.0299 527.966 38.4278L525.88 42.195C519.857 35.669 510.363 32.371 501.397 31.353C492.746 30.37 483.906 30.31 475.209 30.034L474.683 30.0172C466.477 29.7549 457.696 29.4743 449.736 31.543C449.333 31.648 449.259 32.043 449.416 32.336C269.765 42.037 87.2417 310.743 42.9177 459.829C26.0347 518.094 16.5687 579.644 22.8337 640.268L22.4845 640.215C17.6419 639.482 -0.25851 636.771 0.00283221 642.686C0.928726 669.071 5.69273 695.154 7.00773 721.519C5.89612 751.225 31.4899 758.71 54.993 765.584C59.1243 766.792 63.191 767.981 67.0367 769.269C65.4527 870.604 101.584 971.967 158.13 1055.27C160.63 1058.25 163.548 1062.34 166.798 1066.89C181.409 1087.37 202.756 1117.29 223.269 1098.75C226.223 1095.23 225.551 1091.04 221.93 1088.36L221.397 1087.96C216.115 1083.83 212.211 1077.56 208.487 1071.97L207.744 1070.87C193.821 1053.01 150.719 965.648 168.783 947.987C177.873 967.407 210.855 1025.61 236.732 1012.76C240.623 1009.32 242.293 1004.69 242.701 999.576C243.722 999.832 244.749 1000.07 245.781 1000.28C254.812 1008.28 281.322 1020.12 290.918 1019.29C294.121 1020.87 297.32 1022.45 300.517 1024.04C309.374 1029.03 318.162 1034.13 326.894 1039.33C333.808 1043.92 340.911 1048.15 348.13 1052.2C352.31 1054.79 356.475 1057.4 360.632 1060.02C363.855 1068.39 369.502 1076.42 373.943 1083.67C376.714 1088.19 379.82 1093.8 383.536 1098.7C387.628 1105.33 392.194 1111.63 396.878 1117.53C403.072 1125.33 410.814 1132.2 416.308 1140.51C422.448 1149.79 421.58 1159.94 418.348 1170.14C414.994 1180.73 410.196 1190.92 405.94 1201.17L365.281 1299.08L362.733 1305.23C358.499 1315.5 354.323 1325.79 350.202 1336.1C348.509 1340.33 346.967 1344.6 345.509 1348.9C252.181 1568.16 152.632 1869.24 50.9327 2080.73C41.389 2093.15 84.8257 2111.96 112.239 2123.11L116.425 2124.81C116.545 2125.18 116.65 2125.54 116.759 2125.92C112.737 2134.58 110.738 2144.8 108.414 2153.86C105.496 2165.23 102.513 2176.59 99.4637 2187.93C96.4127 2199.28 93.3667 2210.69 90.4467 2222.13C86.5117 2232.2 82.5507 2242.22 78.3807 2252.06C78.2177 2252.48 78.0477 2252.9 77.8807 2253.31C72.5167 2253.62 67.8257 2255.89 64.2557 2259.48C63.8387 2259.61 63.4347 2259.87 63.1007 2260.31C42.6567 2287.7 35.8707 2323.59 34.1557 2357.07C34.4278 2359.92 34.3112 2363.57 34.1852 2367.52C33.8684 2377.45 33.492 2389.25 39.0817 2394.9C37.1527 2397.15 36.0677 2400.04 35.5167 2403.2C30.7687 2409.09 31.7687 2419.32 35.0137 2425.92C47.1814 2461.56 316.933 2463.58 372.392 2463.21L375.516 2463.18C414.225 2462.48 452.672 2460.19 491.213 2456.6C496.989 2455.37 498.285 2450.65 497.384 2445.27L497.283 2444.71C498.466 2438.06 496.043 2429.39 490.791 2424.57C491.918 2422.76 492.331 2420.46 491.529 2417.8C467.296 2347.18 377.715 2351.96 324.718 2314.25C325.008 2314.08 325.285 2313.91 325.553 2313.75L326.694 2313.06C327.856 2312.66 329.026 2312.28 330.207 2311.94C335.771 2310.34 333.353 2301.53 327.814 2303.26C323.523 2304.6 319.398 2306.27 315.497 2308.27C308.111 2303.25 300.938 2297.76 294.201 2291.8C296.198 2290.55 298.223 2289.34 300.258 2288.15C303.189 2287.61 306.22 2287.33 309.368 2287.31C313.378 2287.29 314.486 2283.31 312.934 2280.7L313.885 2280.13C313.423 2280.05 312.936 2280.02 312.435 2280.02C311.726 2279.21 310.706 2278.63 309.368 2278.5C300.629 2277.64 292.451 2279.68 285.155 2283.61C276.522 2275.13 268.655 2264.93 257.029 2261.32C266.369 2257.91 270.744 2247.57 258.928 2244.58C254.059 2244.14 249.069 2245.81 244.326 2247.78L243.348 2248.18C250.596 2218.49 256.048 2188.12 260.384 2157.94C261.62 2158.15 262.844 2158.29 264.044 2158.32C268.936 2158.44 272.226 2154.71 274.596 2150.28L275.373 2150.16C284.253 2146.42 288.369 2136.18 294.503 2129.22C313.691 2102.74 329.833 2074.09 343.566 2044.44C394.041 1899.41 469.306 1658.14 530.274 1521.16C549.796 1477.3 567.225 1437.35 587.507 1393.79C734.422 1637.74 662.865 1937.13 753.494 2197.26C754.353 2198.93 755.374 2201.58 756.55 2204.62C760.759 2215.53 766.956 2231.58 774.861 2226.44C774.922 2226.49 774.979 2226.54 775.05 2226.58C776.944 2227.64 778.843 2228.95 780.906 2229.65C781.877 2229.99 782.744 2229.65 783.353 2229.03C784.03 2231.76 784.092 2234.81 784.151 2237.68C784.171 2238.68 784.191 2239.66 784.237 2240.59C784.476 2245.49 784.605 2250.39 784.662 2255.29C784.771 2264.99 784.529 2274.69 783.892 2284.37C782.988 2292.61 781.935 2300.83 780.652 2309.03C775.865 2309.92 771.453 2312.37 768.269 2316.33C763.835 2321.86 762.121 2328.84 761.004 2335.71L760.828 2336.82C760.556 2338.57 760.331 2340.31 760.216 2342.01C754.598 2363.55 749.186 2394.38 747.937 2402.26L747.75 2403.48C747.743 2406.83 746.839 2411.49 745.868 2416.48C743.783 2427.22 741.394 2439.52 746.957 2443.8C735.211 2448.69 733.293 2466.8 741.552 2476.1C759.449 2500.62 827.938 2502.33 880.797 2503.65C900.384 2504.14 917.825 2504.57 929.75 2506.1C940.657 2505.82 958.927 2506.41 981.385 2507.14C1073.78 2510.13 1237.04 2515.42 1250.07 2472.05C1253.29 2459.74 1247.77 2444.2 1236.54 2439.46C1240.6 2429.79 1232.19 2420.42 1225.67 2413.17C1225.14 2412.58 1224.62 2412 1224.12 2411.44L1223.69 2410.95C1184.87 2369.8 1128.02 2355.78 1076.33 2337.87C1076.92 2337.25 1078.42 2336.14 1080.18 2334.84C1084.17 2331.89 1089.46 2327.98 1088.4 2326.67C1079.91 2327.04 1071.67 2329.75 1063.95 2333.46C1053.79 2329.73 1043.69 2325.75 1033.85 2321.19C1061.33 2298.57 1046.14 2304.95 1027.25 2316.72L1026.08 2317.45C1023.95 2316.33 1021.8 2315.21 1019.66 2314.1C1019.87 2313.16 1019.65 2312.14 1018.79 2311.33C1016.08 2308.79 1012.54 2307.77 1009.2 2306.22C1005.63 2304.56 1002.15 2302.67 998.808 2300.57C992.626 2296.71 987.427 2290.56 980.964 2287.35C979.976 2286.86 978.964 2286.57 977.948 2286.44C973.772 2282.67 963.668 2286.25 958.956 2289.71L958.742 2289.62C946.912 2268.31 938.093 2245.58 930.162 2222.6C944.8 2217.97 977.742 2216.23 984.279 2201.46C1002.15 2195.35 993.79 2171.4 988.212 2155.41C987.362 2152.98 986.576 2150.72 985.958 2148.75L985.684 2147.85C862.527 1833.84 979.931 1460.35 798.156 1163.98C830.914 1144.86 867.54 1099.17 837.49 1063.71C836.648 1062.06 835.727 1060.45 834.794 1058.91C830.28 1051.41 825.418 1044.16 820.982 1036.63C820.755 1035.67 820.554 1034.7 820.417 1033.7C820.154 1031.88 819.015 1030.98 817.669 1030.76C813.214 1022.57 809.254 1014.17 805.501 1005.63C782.318 896.142 776.076 783.95 791.519 672.666C809.895 744.438 869.597 798.532 934.031 831.324C939.57 833.653 945.501 836.528 951.677 839.522C973.537 850.12 998.466 862.205 1019.99 856.836C1044.91 849.324 1090.16 797.2 1095.5 772.165C1168.13 780.966 1243.55 773.902 1312.97 750.634C1313.71 750.348 1314.51 750.051 1315.35 749.737C1324.63 746.281 1339.01 740.921 1336.49 729.105C1333.85 718.606 1321.74 720.32 1313.33 722.271L1312.29 722.515C1315.91 720.473 1320.48 718.923 1325.19 717.329C1337.24 713.247 1350.14 708.876 1349.96 695.197C1349.52 691.233 1346.65 688.969 1342.67 689.649C1332.68 691.361 1322.72 692.601 1312.75 693.433C1313.26 693.124 1313.79 692.802 1314.34 692.469C1327.96 684.248 1353.1 669.061 1329.67 655.978C1323.72 653.766 1316.89 655.15 1310.54 656.436C1308.86 656.776 1307.22 657.109 1305.64 657.367L1303.95 657.647C1273.01 662.723 1241.64 664.807 1210.36 662.195C1221.97 652.485 1233.99 643.269 1245.32 633.222C1251.34 627.883 1258.17 620.766 1251.4 612.794C1239.82 601.804 1214.68 609.325 1200.59 614.33L1199.31 614.787C1161.23 636.523 1124.53 659.628 1083.67 676.353C1083.56 674.938 1083.6 673.451 1083.64 671.953C1083.75 667.275 1083.87 662.498 1079.69 659.529C1068.42 654.115 1055.34 653.572 1042.62 653.044C1037.07 652.813 1031.58 652.585 1026.35 651.956C1007.65 649.1 990.89 644.997 972.616 640.077L968.529 638.97C963.8 635.295 960.535 629.42 957.295 623.591C951.623 613.384 946.027 603.316 932.788 605.437C945.603 572.578 933.013 540.204 920.611 508.316C915.185 494.363 909.795 480.503 906.585 466.736C893.421 420.444 886.505 372.37 886.318 324.237C886.195 247.191 842.38 188.04 779.09 148.507C778.735 148.216 778.382 147.923 778.029 147.629L775.919 145.854C773.182 142.972 770.505 140.015 767.89 136.965C762.379 130.538 757.046 123.943 751.452 117.584C748.907 113.615 746.212 109.754 743.061 106.227C740.273 102.78 737.146 99.668 733.138 97.228C732.826 97.038 732.498 96.872 732.18 96.689C725.501 92.124 717.947 88.939 709.96 87.357C706.181 72.797 702.156 58.304 698.874 43.622C698.4 42.4592 697.882 39.0049 697.268 34.9119C695.933 26.0162 694.146 14.1035 691.377 16.141C686.299 28.999 690.933 145.355 715.703 130.155C718.142 160.418 718.619 203.902 685.259 217.279C627.971 235.129 554.597 109.9 528.91 63.2604L527.398 60.505C533.944 63.0324 539.519 48.1545 542.41 32.5068L542.584 31.548C543.772 27.762 544.744 23.901 545.539 20.016L545.634 19.5538C545.715 19.1705 545.797 18.7855 545.88 18.3991C546.664 14.7402 547.475 10.9584 546.632 7.317C546.315 5.948 545.261 5.039 544.031 4.655ZM498.064 38.707C484.161 42.091 469.914 43.473 455.931 46.28C359.562 57.777 285.678 126.142 222.035 194.022C101.476 320.699 31.3327 476.568 36.5097 652.735C79.5627 660.581 122.172 672.066 166.037 674.575C161.302 667.4 165.973 658.889 170.196 651.195C171.658 648.53 173.067 645.963 174.013 643.583C237.46 520.953 286.449 385.579 326.23 256.474L325.149 262.109C312.658 326.905 298.108 391.426 275.9 453.668C282.333 447.341 388.011 363.261 379.751 391.063C347.464 416.308 310.997 436.313 277.166 459.48C304.399 550.485 286.54 642.304 268.735 733.853C260.24 777.528 251.757 821.142 248.189 864.576C245.413 894.477 245.654 924.586 241.923 954.374C241.285 955.887 241.236 958.105 241.185 960.378C241.123 963.164 241.059 966.034 239.909 967.799C241.456 975.705 244.71 982.909 251.425 989.08C254.252 991.678 257.338 993.928 260.582 995.936C268.681 997.158 276.816 1000.28 283.412 1003.17C298.089 1009.6 311.006 1019.08 324.125 1028.13L324.476 1028.37C345.629 1039.24 366.76 1051.6 387.969 1064.48L388.916 1064.97C396.805 1069.11 404.871 1072.85 411.745 1078.59C412.058 1078.86 412.267 1079.16 412.404 1079.47L425.286 1087.43C528.472 1151.13 634.865 1214.13 755.845 1168.66C789.836 1154.96 839.251 1127.21 832.905 1084.31C831.654 1080.19 829.751 1076.32 827.599 1072.56C827.001 1071.75 826.386 1070.96 825.767 1070.18C821.079 1064.25 815.832 1058.81 811.761 1052.41C810.105 1049.81 808.62 1047.12 807.321 1044.36C806.403 1044.08 805.587 1043.44 805.073 1042.31C799.25 1029.61 793.546 1016.89 788.234 1003.95C741.687 841.625 769.617 670.561 797.031 502.658C807.547 438.252 817.987 374.312 824.118 311.509C824.483 308.417 824.89 305.317 825.297 302.213C826.598 292.291 827.906 282.318 827.902 272.367C827.902 271.754 828.79 271.774 828.839 272.367C836.639 330.185 830.722 388.541 823.306 446.098C813.811 518.102 801.336 589.807 792.765 661.941C815.55 734.651 879.36 787.19 946.363 818.695C957.763 824.113 969.419 828.941 981.304 833.193L982.101 833.47C983.511 833.963 984.941 834.486 986.386 835.014C998.319 839.376 1011.26 844.107 1022.5 835.845C1046.68 819.431 1063.74 794.384 1079.41 770.263C1073.07 769.576 1066.73 768.981 1060.38 768.544C1044.78 786.389 1025.67 801.538 1005.5 813.918C997.287 818.63 987.951 816.637 984.152 807.414C980.806 799.294 984.405 789.9 987.484 781.862C987.705 781.286 987.923 780.717 988.136 780.156L988.595 778.931C1004.69 735.516 1032.63 695.729 1070.36 668.541C1041.9 662.848 1012.33 663.021 985.022 651.769C986.261 653.071 985.118 654.502 984.153 655.71C983.958 655.954 983.771 656.189 983.612 656.412C983.949 658.985 982.08 660.866 979.783 661.555C957.501 690.677 940.614 725.165 937.088 762.099C938.026 774.679 926.773 789.207 915.937 775.999C907.462 739.231 940.8 681.771 970.115 659.083C940.718 638.899 949.287 609.771 930.831 609.637C926.062 618.794 919.839 627.561 911.996 634.363C908.451 637.246 904.146 639.42 900.341 641.978C896.339 644.669 892.173 638.749 895.342 635.499L896.178 634.494C908.215 620.091 922.509 605.934 924.995 586.45C928.226 564.874 919.836 543.044 912.103 522.926C911.236 520.67 910.377 518.436 909.544 516.226C893.701 474.205 883.193 430.483 878.074 385.866C875.855 370.573 875.518 355.062 875.18 339.572C874.636 314.571 874.093 289.625 865.646 265.74C862.927 254.967 859.016 245.155 854.222 236.049C854.108 235.954 853.995 235.857 853.892 235.738C848.201 229.153 843.655 221.828 838.349 214.931C832.8 207.716 826.784 200.85 820.412 194.353C809.763 183.497 798.006 174.439 785.75 165.717C785.523 165.635 785.294 165.529 785.064 165.393C782.768 164.036 780.563 162.388 778.435 160.577L778.228 160.433C771.101 155.478 763.828 150.1 758.265 143.373C752.805 136.768 748.919 129.066 744.461 121.791C738.367 114.355 732.558 106.388 725.209 100.192C721.052 97.818 716.726 95.581 713.016 92.612C712.409 92.358 711.792 92.117 711.164 91.889C712.745 98.337 715.137 104.27 717.292 110.82C720.414 109.502 724.687 110.963 725.212 115.774L725.405 117.57C728.54 147.032 730.127 182.685 712.806 208.194C674.664 263.513 617.693 216.283 588.88 177.385C563.023 146.362 541.285 111.854 525.232 74.768L524.966 74.2778C521.977 68.6025 515.498 51.2961 513.668 42.98C509.039 40.542 503.407 39.361 498.064 38.707ZM217.558 597.678C237.753 554.262 255.841 509.879 271.99 464.802C282.114 549.694 265.432 632.869 248.755 716.015C239.585 761.735 230.417 807.446 225.709 853.429L225.089 860.385C222.589 888.652 220.491 917.563 227.671 945.247C195.552 892.79 154.921 850.964 147.601 786.715C149.882 786.079 152.003 785.128 153.77 783.777C168.753 790.869 172.549 771.885 174.95 759.875C175.159 758.832 175.357 757.841 175.551 756.924L175.699 756.237C182.332 732.531 190.265 709.213 196.32 685.35C211.914 678.478 181.534 675.487 175.942 675.24L175.632 675.228C175.82 675.075 176.004 674.912 176.187 674.735C194.951 652.688 203.998 623.084 217.558 597.678ZM314.542 485.89C314.247 485.44 313.576 485.729 313.684 486.253C356.301 603.195 401.804 728.722 495.396 815.074C498.064 817.399 501.77 813.781 499.307 811.163C466.521 776.3 437.89 737.64 414.03 696.166C374.503 629.186 349.525 554.96 314.542 485.89ZM129.104 515.984C111.799 511.266 87.5214 504.646 81.902 513.697C75.6369 528.525 102.124 541.501 114.385 544.237L115.117 544.392C115.879 544.586 116.196 543.435 115.443 543.216C104.542 539.921 94.864 530.327 90.262 520.101C89.7 519.344 89.739 519.127 90.381 519.448C111.774 522.615 132.737 529.273 153.628 534.98C154.212 535.143 154.806 535.31 155.407 535.479C165.608 538.349 178.085 541.859 187.767 536.655C194.997 528.302 182.41 527.189 172.968 526.353C169.578 526.053 166.594 525.789 165.077 525.239C157.729 523.628 150.538 521.357 143.268 519.438C140.002 518.956 134.951 517.578 129.104 515.984ZM411.923 555.599L411.838 555.491L412.035 555.704C434.625 580.149 457.523 619.795 476.238 651.058C477.897 668.285 453.432 625.881 433.74 591.75C424.14 575.111 415.675 560.438 411.923 555.599ZM877.03 566.62C895.813 569.569 861.746 591.358 852.136 597.504C851.347 598.009 850.723 598.408 850.306 598.683C849.287 599.07 845.755 601.664 841.303 604.934C830.401 612.94 813.98 624.999 815.418 618.644C831.055 598.568 852.632 575.17 877.03 566.62ZM1241.46 620.358C1217.07 616.327 1196.68 628.815 1176.46 641.197C1167.56 646.648 1158.69 652.078 1149.53 656.07C1147.16 657.085 1144.28 658.382 1141.01 659.85C1119.5 669.512 1081.47 686.597 1066.38 679.702C1042.54 702.646 1022.42 729.453 1008.35 759.531C1012.18 759.302 1016.02 759.132 1019.86 759.01C1026.81 756.779 1034.22 756.665 1041.44 758.812C1062.68 759.046 1083.92 760.424 1105.16 761.802C1156.19 765.113 1207.18 768.421 1258.01 755.853L1259.67 755.544C1274.45 752.738 1324.93 742.067 1327.81 731.61C1327.19 727.855 1317.84 730.469 1313.12 731.789C1312.12 732.07 1311.33 732.292 1310.87 732.382C1290.12 736.469 1269.05 738.418 1248.02 740.465C1242.18 741.031 1242.25 731.935 1248.02 731.357C1273.33 728.839 1297.3 719.34 1320.52 709.457C1322.99 708.362 1329.53 706.095 1334.05 703.154C1312.6 706.802 1290.49 707.435 1268.79 706.661C1261.31 705.694 1260.79 694.342 1268.79 694.566C1283.44 696.186 1297.44 688.952 1309.4 681.316L1312.01 679.626C1331.95 666.627 1330.55 666.063 1305.35 670.895C1268.32 677.638 1230.85 677.388 1193.45 674.815C1188.11 674.725 1184.43 667.543 1188.84 663.696C1206.06 648.827 1224.52 635.567 1241.46 620.358ZM7.36173 645.652C12.6147 645.197 18.4527 644.845 23.2047 642.98C23.5957 645.684 24.1917 648.376 25.2657 650.88C7.48369 647.748 18.703 653.914 27.1645 656.425L27.9407 656.647C28.8017 658.992 31.4897 659.612 33.5307 658.621C83.9327 674.244 137.297 688.217 190.278 686.509C171.323 711.868 157.158 741.492 148.88 772.063C147.351 771.918 145.804 771.835 144.297 771.694C142.851 769.422 139.757 769.353 137.579 770.771C106.597 764.866 76.3804 754.976 46.3339 745.348L39.8977 743.29C31.8897 740.586 26.1037 737.592 23.6427 729.064C18.3197 701.281 13.2427 673.361 7.36173 645.652ZM981.022 650.909C980.818 650.624 980.606 650.344 980.388 650.073C981.048 650.321 981.707 650.576 982.369 650.819C982.177 650.868 981.989 650.934 981.81 651.041L981.324 651.341L981.022 650.909ZM406.869 876.777C380.692 844.141 251.938 521.033 342.927 716.784C375.266 784.931 401.885 857.885 455.236 913.101C458.925 917.066 454.065 924.032 449.271 920.831C432.05 909.332 418.112 894.079 406.869 876.777ZM1071.3 674.898L1071.71 674.512C1072.31 676.321 1073.48 677.932 1075.06 678.918C1072.44 679.323 1069.91 679.279 1067.61 678.508C1068.14 678.006 1068.65 677.492 1069.18 676.995L1069.34 676.841C1069.73 676.453 1070.44 675.723 1071.3 674.898ZM1003.5 770.616L1003.44 770.625L1002.58 772.851C1002.29 773.602 1001.99 774.36 1001.69 775.123C1001.83 775.06 1001.98 775.002 1002.12 774.942C1002.43 774.633 1002.73 774.32 1003.04 773.991C1002.97 772.855 1003.11 771.716 1003.5 770.616ZM73.1967 771.182C93.8707 883.447 123.416 1001.56 205.74 1085.5C180.119 1049.4 160.195 1007.27 154.398 963.128C154.158 951.283 158.471 938.77 171.575 937.016C173.811 936.716 175.51 938.72 176.309 940.502L176.386 940.679C181.541 952.987 188.244 964.692 196.181 975.417L196.959 976.432C202.948 984.178 228.37 1015.76 231.917 1000.66C229.321 924.359 150.478 892.9 137.566 787.811C115.474 785.471 94.5097 777.078 73.1967 771.182ZM241.521 985.645C241.954 987.838 242.32 990.05 242.545 992.24C244.795 992.956 247.021 993.739 249.235 994.553C247.893 993.348 246.616 992.071 245.419 990.712C244.024 989.127 242.716 987.426 241.521 985.645ZM242.798 997.419C242.816 996.251 242.775 995.065 242.69 993.867C243.918 994.677 245.154 995.473 246.404 996.246C245.173 996.547 243.969 996.935 242.798 997.419ZM375.557 1070.14C375.701 1070.03 375.833 1069.9 375.949 1069.75C377.085 1070.48 378.225 1071.2 379.359 1071.93C382.984 1079.19 387.078 1086.36 391.433 1093.48C386.121 1085.77 380.967 1077.82 375.557 1070.14ZM709.942 1823.57C679.89 1539.06 668.401 1430.29 383.076 1074.33C500.118 1154.69 655.898 1249.11 795.288 1165.73C807.966 1194.9 820.224 1224.34 830.517 1254.44C938.968 1555.28 851.874 1893.19 976.877 2189C975.519 2190.14 974.521 2192.1 974.455 2194.21C958.248 2195.77 942.465 2203.23 926.269 2206.08C880.471 2216.78 833.378 2219.23 786.488 2219.87L782.47 2219.92L782.431 2219.91C781.445 2219.59 780.121 2219.68 778.727 2219.81L777.32 2219.95C767.126 2180.14 751.721 2141.63 744.141 2101.05C727.539 1990.16 718.063 1900.45 709.942 1823.57ZM427.71 1176.44C430.152 1169.41 431.955 1161.88 431.714 1154.4C482.099 1228.35 534.89 1301.12 579.191 1378.98C578.052 1383.76 575.901 1388.43 573.732 1392.56C568.644 1402.27 563.252 1411.81 558.252 1421.57C557.082 1423.85 555.931 1426.14 554.791 1428.43C553.243 1430.74 551.705 1433.05 550.185 1435.36C522.296 1478.26 507.107 1530.53 483.999 1587.24L482.273 1591.49C426.513 1728.98 373.586 1891.63 333.031 2009.79L330.539 2017.04C315.284 2050.08 298.468 2082.59 277.372 2112.33C272.699 2121.36 261.026 2128.7 260.593 2139.01L258.09 2141.46C247.099 2135.7 216.046 2135.54 205.187 2131.91C158.423 2122.76 113.22 2105.87 71.9937 2082C181.412 1853.16 292.314 1529.48 382.661 1288.01C388.761 1273.02 394.796 1258 400.886 1243.01C409.86 1220.92 419.884 1198.97 427.71 1176.44ZM135.347 2132.45C134.736 2133.8 133.634 2134.91 132.046 2135.4C131.48 2137.91 130.895 2140.41 130.271 2142.9C129.221 2155.78 124.363 2168.55 119.339 2180.43C118.994 2181.25 118.655 2182.07 118.314 2182.89C115 2192.77 111.526 2202.63 108.099 2212.5C105.503 2222.76 103.216 2233.1 100.826 2243.4C100.365 2250.39 99.3727 2257.33 97.8477 2264.18C97.7767 2264.5 97.6817 2264.79 97.5767 2265.07C99.9717 2266.14 102.284 2267.38 104.464 2268.63C150.459 2303.2 158.644 2297.34 181.128 2281.23C190.718 2274.35 202.91 2265.62 221.749 2257.36C221.451 2255.18 222.293 2253.18 223.203 2251.01C223.401 2250.54 223.603 2250.06 223.797 2249.57L223.937 2249.21C224.003 2249.04 224.068 2248.86 224.134 2248.69C224.03 2247.64 224.091 2246.52 224.368 2245.32C230.749 2219.21 239.634 2193.55 247.95 2168C249.281 2164.15 250.822 2160.39 252.397 2156.64C212.451 2156.13 172.939 2145.48 135.347 2132.45ZM118.066 2145.13C117.293 2148.54 116.451 2151.91 115.684 2155.16L114.553 2160.01C116.162 2155.11 117.431 2150.14 118.066 2145.13ZM792.095 2228.64C835.351 2235.33 879.622 2232.22 922.477 2224.12C924.529 2245.76 930.675 2266.82 938.111 2287.17C939.857 2291.86 941.357 2296.72 943.957 2300.68C901.139 2350.22 875.378 2340.61 834.056 2325.21C823.447 2321.26 811.812 2316.92 798.599 2313.11C800.242 2284.72 797.105 2256.6 792.095 2228.64ZM189.664 2294.6C210.142 2281.37 231.64 2270.33 254.744 2262.38C266.241 2265.41 272.463 2276.5 279.659 2285.74L280.316 2286.57C271.701 2292.52 264.6 2301.12 259.668 2310.43C256.396 2313.46 253.34 2316.69 250.625 2320.19C247.237 2325.27 254.961 2331.23 259.091 2326.72C267.685 2315.42 276.462 2303.77 288.409 2295.67C294.17 2301.98 300.32 2307.91 306.707 2313.61C300.93 2317.75 295.913 2322.77 291.935 2328.66C284.371 2334.32 278.245 2340.77 281.383 2345.88C284.43 2350.8 290.273 2348.12 293.118 2344.57C299.38 2335.83 306.35 2327.13 315.189 2320.92C335.571 2338.24 358.735 2351.72 383.895 2360.76C417.195 2373.14 460.791 2383.07 473.59 2420.67L473.554 2420.67C417.253 2421.35 360.938 2422.03 304.73 2419.06C222.545 2416.36 141.225 2403.58 59.4287 2396.84C59.9567 2396.16 60.1297 2395.25 59.5187 2394.45C57.8317 2392.24 55.3267 2391.24 53.5697 2389.13C54.7611 2384.27 54.124 2378.11 53.5077 2372.16C52.9678 2366.94 52.4437 2361.88 53.1787 2357.97C52.9137 2333.37 61.6867 2283.14 62.2157 2282.23C67.9387 2272.41 79.0927 2265.8 89.6117 2272.89C89.6583 2272.92 89.8877 2273.13 90.2842 2273.49C96.0886 2278.77 137.691 2316.61 166.043 2308.07C174.791 2305.23 182.054 2299.55 189.664 2294.6ZM956.824 2310.62C963.169 2304.79 972.088 2302.08 978.003 2295.97C988.876 2306.75 1000.63 2316.86 1013.79 2324.87C1005.37 2331.82 986.5 2336.87 985.305 2348.78C985.498 2359.55 1002.77 2360.43 998.626 2350.31C1005.91 2342.82 1015.13 2337.48 1022.91 2330.46C1030.83 2335.14 1038.96 2339.34 1047.24 2343.21C1039.52 2349.37 1028.06 2354.22 1026.36 2364.83C1025.76 2370.02 1031.44 2372.43 1035.53 2371.81C1046.05 2368.06 1051.87 2355.48 1061.31 2349.44C1118.51 2372.5 1184.12 2386.71 1222.5 2439.31C1221.12 2440.01 1220.13 2441.04 1219.49 2442.25C1209.74 2440.72 1199.83 2442.65 1189.96 2444.57C1184.68 2445.6 1179.41 2446.63 1174.19 2447.12C1127.83 2454.08 1081.06 2458.27 1034.22 2459.96C955.529 2462.38 876.608 2457.92 798.521 2448.31C787.205 2446.42 775.899 2443.44 765.003 2439.52C767.18 2412.18 770.298 2384.35 771.449 2356.64C772.739 2355.6 773.501 2353.8 773.209 2351.97C772.308 2346.37 772.547 2338.36 774.414 2331.74C774.703 2331.28 775.002 2330.84 775.332 2330.41C779.185 2325.43 785.702 2324.03 791.706 2324.4C792.193 2324.43 792.683 2324.49 793.176 2324.57C793.992 2324.99 794.78 2325.49 795.528 2326.09C795.845 2326.14 796.152 2326.17 796.476 2326.23C796.692 2326.26 796.885 2326.32 797.066 2326.39C797.216 2326.14 797.347 2325.87 797.479 2325.6C801.197 2326.74 804.981 2328.27 808.608 2328.45C812.127 2329.98 815.649 2331.57 819.18 2333.16C844.88 2344.75 871.034 2356.53 899.668 2351.19C924.458 2347.16 938.887 2325.8 956.824 2310.62ZM51.1797 2394.21C50.9817 2394.45 50.7737 2394.69 50.5517 2394.91C50.7497 2395.32 50.9017 2395.74 51.0137 2396.17L53.1127 2396.34C52.3837 2395.74 51.7417 2395 51.1797 2394.21ZM50.6507 2400.11C50.1917 2401.01 49.4427 2401.84 48.3337 2402.48C46.7319 2403.4 47.1089 2407.65 47.3338 2410.18C47.3784 2410.68 47.417 2411.12 47.433 2411.45L47.4387 2411.59C47.5437 2415.15 47.7657 2418.69 48.0737 2422.23C51.3137 2425.16 55.4567 2427.38 60.0597 2428.72C200.245 2451.1 343.12 2452.92 484.658 2444.79C484.007 2441.03 481.256 2437.93 478.821 2434.78C391.52 2442.21 302.17 2434.81 214.631 2427.56L208.085 2427.02C155.687 2420.13 100.787 2417.27 50.6507 2400.11ZM762.216 2443.67C759.648 2446.28 755.197 2447.42 751.255 2446.17C739.932 2478.36 791.487 2480.99 820.418 2482.46C824.961 2482.69 828.946 2482.89 832.043 2483.18C856.368 2485.77 1299.46 2508.83 1224.53 2454.22C1136.61 2487.75 842.572 2491.45 762.216 2443.67Z'
				transform='translate(129.9969 -0.0018)'
				fill={strokeColor || '#000000'}
				fill-rule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
