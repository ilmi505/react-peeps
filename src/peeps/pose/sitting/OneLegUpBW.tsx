import React from 'react';
import { PieceType } from '../../types';

export const OneLegUpBW: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g transform='translate(-172 456)'>
			<path
				d='M667.834 1592.07C684.941 1595.67 702.504 1597.49 720.033 1597.49C748.379 1597.49 776.183 1592.81 802.671 1583.59L802.926 1583.5L803.187 1583.43C818.41 1579.6 836.335 1570.2 842.065 1557.81C844.741 1552.02 844.464 1546.12 841.221 1539.77L840.099 1537.57L840.891 1535.23C852.961 1499.72 782.781 1459.29 736.342 1432.53C722.147 1424.35 709.889 1417.29 701.673 1411.43L689.373 1402.66L704.437 1400.78C707.274 1400.42 708.618 1397.62 708.497 1395.73C708.312 1392.85 704.95 1392.24 702.163 1392.24C699.022 1392.24 693.433 1393.09 684.633 1397.12L681.547 1398.54L678.73 1396.66C674.363 1393.73 669.82 1390.56 664.841 1386.96L652.539 1378.07L667.695 1376.33C728.932 1369.29 848.992 1353 965.062 1323.03C1091.29 1290.44 1179.9 1250.67 1228.45 1204.8L1228.59 1204.67C1267 1170.71 1292.26 1117.91 1292.95 1070.14C1293.44 1036.34 1281.56 1007.05 1258.61 985.415C1225.68 961.591 1181.04 950.007 1122.17 950.007C1080.07 950.007 1036.51 955.609 994.391 961.027C966.669 964.593 940.484 967.962 916.253 969.525L910.747 969.881L909.928 964.506C899.559 896.507 896.631 826.945 893.798 759.674C891.115 695.941 888.341 630.037 879.22 565.75C863.14 442.82 844.91 303.483 800.568 174.123C792.301 151.555 781.368 136.747 766.163 127.52C752.042 118.95 733.644 114.959 708.265 114.959C707.618 114.959 706.176 114.968 706.176 114.968L706.033 114.962C695.591 114.553 684.803 113.632 674.371 112.741C660.525 111.56 646.209 110.338 632.826 110.338C631.191 110.338 629.57 110.356 627.908 110.394C622.144 110.487 617.602 111.311 614.019 112.912L608.479 115.388L606.043 109.895C603.675 104.555 601.557 98.8243 599.749 92.8599L599.496 92.0264L599.501 89.927L599.501 89.8809C599.52 82.3722 599.54 74.6095 598.924 67.1157C596.859 42.0207 588.527 24.5649 573.451 13.7514C560.475 4.44423 542.716 0.0768455 517.561 0.00492599L514.736 0C495.061 0 474.732 0.959584 461.341 12.4214C454.283 18.4626 450.024 28.159 449.657 39.0247C449.512 43.3153 449.935 47.7368 450.321 51.1092L450.46 52.321L450.1 53.4874C438.831 90.0777 421.66 114.897 397.606 129.362L396.16 130.231L393.544 130.227C265.203 130.227 162.696 189.665 104.907 297.593L104.722 297.94L104.49 298.26C93.228 313.866 82.396 330.631 72.289 348.095C70.949 350.926 69.187 353.799 67.324 356.835C59.439 369.69 57.613 375.066 63.081 379.634L66.284 382.308L64.83 386.189C54.199 414.566 44.22 443.737 34.568 471.947C30.266 484.521 25.819 497.521 21.367 510.295C20.072 514.764 18.3 519.252 16.585 523.594L16.5836 523.597C12.8312 533.1 9.28716 542.075 10.355 550.66L10.478 551.65L10.266 552.625C8.28802 561.668 9.05102 570.492 12.358 576.836L12.644 577.384L12.808 577.979C14.855 585.353 22.793 609.934 39.001 616.593L39.987 616.998L40.77 617.715C52.079 628.044 67.183 636.516 86.946 643.618L92.643 645.665L90.505 651.256C44.747 770.863 26.746 896.973 9.48702 1037.65C2.02602 1091.93 -4.46198 1155.56 3.98802 1215.91C13.266 1282.16 38.8 1332.01 82.052 1368.31L83.944 1369.9L84.141 1372.34C85.709 1391.74 97.049 1420.68 121.867 1420.91L124.313 1420.93L126.047 1422.63C132.183 1428.66 138.883 1431.46 147.134 1431.46C158.421 1431.46 170.814 1426.11 182.801 1420.94L183.52 1420.63L183.67 1420.57C216.82 1408.3 253.763 1400.04 296.606 1395.34L299.065 1395.07L301.003 1396.58C301.644 1397.09 302.603 1397.37 303.637 1397.37C305.004 1397.37 306.342 1396.87 307.128 1396.07L308.357 1394.81L310.084 1394.41C313.052 1393.73 316.19 1393.4 319.679 1393.4C327.611 1393.4 335.837 1395.19 343.094 1396.77C348.941 1398.04 354.466 1399.25 358.577 1399.25C363.318 1399.25 363.993 1397.85 364.54 1395.56L365.522 1391.45L369.793 1391.03C385.161 1389.54 400.766 1387.32 415.855 1385.17C429.455 1383.23 443.517 1381.22 457.469 1379.74L471.306 1378.27L462.89 1389.19C452.876 1402.19 452.203 1423.03 461.254 1439.88L462.699 1442.57L461.316 1445.29C452.575 1462.49 454.961 1477.53 468.823 1492.62C481.459 1506.38 501.622 1517.66 517.824 1526.72C520.025 1527.95 522.169 1529.15 524.282 1530.35C565.666 1554.32 614.301 1580.83 667.834 1592.07ZM701.918 970.847C712.823 951.988 717.401 929.68 715.162 906.32C706.865 861.194 705.22 811.674 709.983 750.517C711.319 726.327 712.645 702.133 713.97 677.941C716.983 622.924 720.099 566.035 723.31 510.092L735.246 509.632C739.407 539.855 743.696 570.582 747.845 600.295C763.608 713.215 779.908 829.98 792.803 945.24C793.049 947.385 793.236 949.552 793.418 951.649C794.093 959.453 794.73 966.824 798.172 972.906L802.452 980.475L793.739 981.641C780.13 983.465 763.193 985.733 746.906 985.733C731.08 985.733 717.413 983.643 705.123 979.345L698.37 976.983L701.918 970.847Z'
				transform='translate(106.9999 -77.0026)'
				fill={backgroundColor || '#FFFFFF'}
				fill-rule='evenodd'
				stroke='none'
			/>
			<path
				d='M999.584 931.858C1092.6 919.895 1198 906.339 1268.44 957.565C1335.93 1020.74 1300.31 1131.14 1238.57 1185.72C1126.19 1291.87 829.644 1340.97 674.365 1358.82C678.875 1362.08 683.435 1365.28 688.075 1368.38C726.465 1350.78 725.925 1381.42 711.165 1383.26C719.144 1388.95 731.354 1395.98 745.346 1404.04C794.679 1432.46 866.172 1473.65 852.554 1513.71C866.345 1540.73 833.885 1559.9 810.644 1565.75C766.415 1581.15 718.394 1584.08 672.554 1574.43C620.415 1563.49 572.804 1538.44 527.215 1512.04C525.161 1510.88 523.027 1509.68 520.837 1508.46C487.018 1489.54 439.657 1463.06 461.925 1419.25C452.615 1401.92 451.724 1378.27 464.085 1362.24C434.755 1365.35 405.715 1370.69 376.355 1373.54C373.664 1384.8 361.753 1382.2 347.772 1379.16C337.847 1377 326.878 1374.61 317.425 1376.79C313.835 1380.46 307.275 1380.98 303.245 1377.83C265.655 1381.96 227.825 1389.36 191.755 1402.72L191.18 1402.97C169.966 1412.12 146.812 1422.12 127.785 1403.43C100.064 1403.18 86.0446 1373.06 84.1346 1349.43C-14.3054 1266.84 -6.19642 1127.82 9.51458 1013.53C25.5446 882.899 43.5536 749.554 90.8646 625.912C73.1246 619.539 56.1146 611.078 42.6646 598.794C26.8136 592.283 17.2546 571.637 12.9946 556.29C8.50458 547.681 8.41458 537.092 10.3746 528.138C9.12041 518.076 13.0896 508.028 16.9678 498.21C18.6897 493.851 20.3936 489.538 21.6146 485.288C36.0746 443.808 49.7546 402.082 65.1746 360.928C54.835 352.291 61.9385 340.713 68.1632 330.566C69.9756 327.612 71.7134 324.779 72.9246 322.176C82.9046 304.917 93.7946 287.956 105.575 271.633C165.775 159.221 272.314 100.858 400.455 101.144C435.644 79.985 449.775 37.7762 457.525 0C470.064 48.5722 440.185 112.353 386.955 127.424C394.595 138.367 400.545 150.494 407.445 161.891C443.144 218.925 528.335 243.393 589.965 216.521C625.234 197.835 633.144 154.838 631.865 118.835C615.755 136.004 601.885 92.1207 599.554 80.9701C596.335 65.4065 596.965 49.1829 602.885 34.3187C603.295 33.2844 604.675 33.4814 604.795 34.565C606.715 51.6357 610.515 68.5783 617.515 84.3586C622.495 82.1324 628.265 81.4035 633.785 81.3138C648.94 80.9586 664.899 82.3206 680.854 83.6822C691.398 84.5821 701.939 85.4817 712.245 85.8854C763.285 85.4914 794.285 100.03 812.205 148.987C855.625 275.604 873.855 409.598 891.144 541.751C909.915 674.031 901.695 808.252 921.835 940.317C945.869 938.766 972.189 935.381 999.584 931.858ZM623.625 96.1396C622.375 94.0021 621.185 91.8153 620.045 89.599C623.905 89.7467 627.665 89.8847 631.465 90.5151C631.354 94.511 631.46 98.528 631.567 102.553C631.624 104.689 631.68 106.827 631.705 108.965C629.804 104.453 626.085 100.336 623.625 96.1396ZM23.6046 531.112C21.7336 549.089 31.4146 566.032 43.7336 579.3C64.0046 599.967 92.7846 608.921 120.125 616.486C188.564 635.132 256.984 653.818 325.325 672.8C351.095 680.129 377.185 686.344 402.655 694.589C414.115 698.244 428.605 699.15 434.555 710.872C434.617 710.703 434.731 710.377 434.889 709.927C436.591 705.063 443.365 685.705 445.205 693.801C437.855 713.551 439.685 735.843 442.825 756.322C445.665 774.84 448.885 793.398 449.865 812.144C449.312 831.612 447.621 851.057 445.93 870.504C442.595 908.844 439.261 947.187 444.655 985.707C465.415 970.853 463.325 940.553 469.075 918.203C471.695 904.944 474.585 891.774 477.605 878.604C479.465 870.468 493.035 872.241 492.415 880.574C490.894 901.23 490.605 921.906 490.115 942.612C490.439 945.874 490.109 951.192 489.74 957.13C488.926 970.23 487.926 986.344 493.355 990.051C503.539 994.779 506.966 974.923 509.212 961.915C509.885 958.012 510.452 954.726 511.064 952.905C515.455 932.495 519.535 912.026 523.304 891.498C524.635 884.297 536.365 886.12 536.105 893.202C535.275 915.553 534.304 937.893 533.405 960.244C533.316 962.401 533.148 964.738 532.971 967.185C532.027 980.284 530.854 996.56 540.535 1005.51C548.611 997.826 549.07 986.19 549.512 975.015C549.688 970.555 549.861 966.168 550.515 962.135C552.425 940.326 554.335 918.508 556.245 896.689C556.955 888.612 569.644 888.415 569.215 896.689C568.195 925.551 569.015 957.003 575.135 984.111C575.495 986.022 575.875 987.923 576.265 989.834C576.535 989.509 576.795 989.193 577.045 988.859C576.155 987.48 575.595 985.914 575.415 984.22C583.275 983.964 585.405 969.73 584.285 962.736C585.035 953.388 585.045 943.881 585.415 934.594C587.314 886.819 587.275 838.257 574.365 791.793C555.215 720.062 512.345 684.207 456.505 639.997C381.935 577.577 300.465 522.72 221.575 466.681C216.535 467.715 213.255 463.421 213.925 458.79C217.035 444.163 235.445 430.993 244.385 418.336C237.938 419.834 231.951 416.028 226.365 412.477C224.863 411.522 223.39 410.585 221.945 409.776C215.435 406.121 208.845 402.595 202.185 399.195C165.984 380.293 127.605 365.902 88.5946 353.904C70.2546 401.126 54.6146 449.225 37.7646 496.96C33.4546 508.368 31.0046 521.242 23.6046 531.112ZM900.655 942.74C879.945 805.435 892.125 665.56 870.775 528.098C863.925 472.562 854.054 417.557 844.175 362.513C807.615 368.945 772.265 381.702 740.915 401.412C740.355 418.828 739.505 436.234 738.535 453.639C744.955 482.383 750.554 511.165 756.095 540.066C778.685 660.832 795.734 782.582 811.175 904.412C811.532 910.395 812.488 916.432 813.446 922.479C815.222 933.695 817.005 944.948 814.984 955.969C843.415 950.728 871.925 945.961 900.655 942.74ZM728.085 888.119C718.655 837.005 718.915 785.213 722.945 733.538C727.375 653.395 731.675 573.233 736.275 493.1C756.245 638.137 777.535 783.006 793.814 928.506C794.974 938.632 794.795 949.349 799.905 958.382C771.665 962.165 741.564 965.977 714.105 956.373C726.155 935.539 730.405 911.819 728.085 888.119ZM84.1046 1333.2C10.7746 1260.76 -3.45542 1140.08 23.6346 1045.22C26.0446 1010.05 38.3446 976.527 49.3646 943.222C84.4546 842.197 130.605 745.003 185.955 653.237C254.625 672.101 323.175 691.466 392.005 709.709C401.484 711.768 410.974 715.836 420.705 716.427C424.185 718.644 427.675 721.087 431.295 723.233C427.41 742.263 429.029 761.586 430.642 780.833C431.217 787.7 431.791 794.557 432.115 801.387C433.234 821.836 431.025 841.862 428.314 862.095C428.095 864.218 427.828 866.685 427.528 869.444C423.681 904.931 414.616 988.526 437.805 1004.79C442.583 1007.09 447.075 1004.25 450.739 1001.92C453.569 1000.13 455.904 998.648 457.495 1000.1C460.785 997.803 463.855 994.819 466.355 991.529C476.005 1022.73 491.775 1051.68 501.515 1082.92C505.574 1097.3 512.54 1114.47 519.901 1132.61C536.036 1172.38 554.074 1216.84 547.585 1246.91C540.275 1273.95 508.295 1279.78 485.215 1288.62C458.545 1297.9 431.575 1306.41 404.165 1313.33C390.785 1284.93 377.995 1256.27 365.445 1227.49C308.085 1094.74 257.285 959.219 211.885 822.083C211.035 819.039 200.595 786.06 198.685 795.26C198.525 794.314 197.335 791.871 196.885 793.96C204.585 826.161 212.394 858.352 220.845 890.375C200.085 887.469 177.765 886.337 158.765 896.512C157.785 897.034 158.505 898.323 159.474 898.167C178.557 894.858 197.065 899.656 215.431 904.417C218.719 905.269 222.003 906.121 225.285 906.924C255.635 1010.23 294.795 1110.92 336.245 1210.35C327.585 1207.59 317.986 1208.76 308.541 1209.91C304.005 1210.46 299.506 1211.01 295.165 1211.11C253.025 1215.47 211.365 1224.69 171.555 1239.03C121.515 1255.25 86.1346 1276.41 84.1046 1333.2ZM676.075 1346.37C677.905 1344.51 678.675 1342.06 676.965 1339.2C671.437 1332.14 660.942 1335.02 652.665 1337.29C651.045 1337.74 649.511 1338.16 648.115 1338.48C644.894 1335.8 641.695 1333.11 638.615 1330.27C639.337 1325.79 635.93 1322.32 632.631 1318.96C631.047 1317.35 629.489 1315.76 628.425 1314.1C625.205 1310.33 622.175 1306.04 618.314 1302.88C611.714 1297.73 603.327 1298.64 595.138 1299.52C591.649 1299.9 588.202 1300.27 584.945 1300.17C576.535 1289.47 567.875 1279.11 559.875 1268.06C569.095 1252.56 569.745 1234.41 566.685 1217.14C708.115 1163.48 830.535 1061.87 983.495 1038.39C988.755 1037.51 991.705 1031.12 990.394 1026.43C979.724 1000.97 826.394 1066.67 803.474 1078.57C735.875 1110.93 672.554 1151.28 606.855 1186.88C593.155 1194.16 578.085 1198.07 563.105 1201.85C540.085 1126.3 501.144 1057.04 471.285 984.2C473.224 980.841 474.875 977.315 476.275 973.69C475.285 1013.75 514.245 1013.19 519.625 975.187C517.405 994.996 532.385 1037.42 554.005 1009.58C559.075 1002.59 560.875 993.637 561.734 984.604C562.845 990.849 564.105 997.065 565.505 1003.26C571.054 1015.53 586.205 1000.61 589.724 994.208C591.755 993.844 593.655 992.918 595.045 991.785C633.275 997.094 678.304 996.789 706.355 966.607C744.593 981.276 786.112 973.595 825.92 966.23C835.645 964.43 845.267 962.65 854.715 961.219C878.209 958.518 901.725 955.477 925.266 952.432C999.839 942.789 1074.65 933.114 1149.74 934.111C1193.85 936.672 1245.89 943.794 1273.79 981.432C1309.58 1035.69 1289.35 1108.96 1249.87 1155.93C1154.9 1276.17 828.915 1328.46 676.075 1346.37ZM98.9046 1348.21C97.4446 1326.52 101.095 1299.52 117.165 1283.35C153.945 1252.26 205.445 1242.48 251.405 1231.22C272.814 1226.99 294.515 1224.18 316.305 1222.79C318.059 1222.65 319.921 1222.63 321.815 1222.61C328.267 1222.55 335.093 1222.49 339.314 1217.6C342.125 1224.26 344.974 1230.91 347.825 1237.56C256.325 1225.57 65.4246 1267.22 118.885 1392.57C107.564 1380.3 100.064 1365.37 98.9046 1348.21ZM317.705 1270.51C337.625 1266.27 359.175 1278.7 370.835 1293.89C372.905 1296.59 374.745 1299.45 376.355 1302.43C368.585 1285.15 360.915 1267.83 353.385 1250.46C273.655 1243.39 138.595 1254.55 121.495 1350.07C120.255 1366.22 124.685 1385.19 137.835 1396.06C150.719 1406.82 165.805 1400.38 179.974 1394.34C184.477 1392.42 188.887 1390.54 193.105 1389.26C217.925 1380.61 243.435 1374.26 269.325 1369.99C268.855 1350.48 268.325 1330.67 263.935 1311.71C272.655 1294.46 289.205 1361.67 288.974 1367.18C292.545 1366.74 296.105 1366.34 299.685 1365.97C299.025 1346.22 298.935 1326.29 301.665 1306.7C301.755 1305.9 302.825 1305.73 303.105 1306.51C306.974 1316.33 310.045 1326.53 312.715 1336.76C316.355 1345.64 313.775 1358.46 324.095 1363.01C334.525 1367.37 346.035 1368.05 356.945 1370.99C359.095 1370.89 361.205 1370.63 363.224 1370.14C366.635 1369.31 365.785 1364.66 362.894 1364.18C363.144 1363.56 363.335 1362.85 363.545 1362.05C364.115 1362.01 364.695 1361.98 365.275 1361.94C363.776 1355.8 365.341 1349.59 366.923 1343.31C368.413 1337.4 369.917 1331.43 368.894 1325.41C367.965 1297.96 344.465 1276.74 317.705 1273.1C316.394 1272.84 316.425 1270.79 317.705 1270.51ZM569.585 1306.21C562.855 1297.05 557.705 1287.03 553.495 1276.51C529.175 1300.3 487.175 1309.26 455.465 1321.23C457.906 1323.81 460.317 1326.39 462.699 1328.94C496.857 1365.49 524.932 1395.53 551.295 1326.56C555.695 1318.61 561.935 1311.21 569.585 1306.21ZM385.795 1323.42C385.165 1324.75 384.265 1326.15 384.245 1327.75C383.605 1322.25 382.355 1316.81 380.455 1311.6C382.234 1315.54 384.015 1319.48 385.795 1323.42ZM683.945 1388.39C682.215 1388.79 680.474 1389.22 678.745 1389.68C667.515 1392.69 656.625 1396.84 646.035 1401.56C645.155 1401.95 644.435 1401.01 645.025 1400.28C651.845 1391.99 660.325 1384.36 669.765 1378.13C660.045 1370.75 650.665 1362.77 642.135 1354.19C630.365 1357.21 619.535 1361.89 608.635 1367.51C599.575 1367.5 630.275 1344.77 633.224 1344.62C624.635 1335.08 618.314 1324.1 610.984 1313.67C610.755 1314.57 610.335 1315.6 609.865 1316.32C603.365 1310.46 593.415 1311.56 585.635 1316.82C570.885 1321.7 565.405 1338 559.125 1350.08C540.915 1389.9 504.765 1392.69 476.285 1360.66C446.224 1415.6 519.314 1448.15 560.984 1464.67C593.785 1479.05 630.085 1495.07 663.045 1509.57C673.245 1514.19 683.355 1518.97 694.554 1520.67C724.995 1526.99 756.564 1526.03 787.045 1520.48C796.474 1518.77 805.814 1516.6 815.064 1514.1C820.375 1512.66 828.775 1511.65 832.285 1507.2C839.359 1481.69 775.138 1443.95 727.591 1416C708.395 1404.71 691.917 1395.03 683.945 1388.39ZM388.365 1359.95C390.984 1359.66 393.605 1359.35 396.224 1359.02C419.835 1356.07 443.314 1351.88 467.015 1349.78C460.505 1341.36 455.205 1332.21 450.205 1322.92C437.525 1326.92 424.775 1330.68 411.945 1334.16C402.965 1337.42 388.825 1340.86 384.445 1329.54C385.255 1337 384.695 1344.59 383.185 1351.94C386.545 1353.02 388.635 1356.49 388.365 1359.95ZM819.265 1544.47C713.234 1592.1 600.984 1539.06 510.564 1482.52C489.695 1470.87 462.245 1454.35 466.465 1426.92C481.835 1449.4 507.175 1462.21 531.495 1473.31C572.355 1491.78 613.484 1509.66 654.445 1527.9C658.314 1540.74 676.814 1541.23 687.995 1544.08C737.765 1553.73 791.265 1548.93 838.105 1529.68C835.394 1537.71 826.525 1541.4 819.265 1544.47Z'
				transform='translate(99.99972 -53.9982)'
				fill={strokeColor || '#000000'}
				fill-rule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
