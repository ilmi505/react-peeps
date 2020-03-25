import React from 'react';
import { PieceType } from '../../types';

export const BlazerPantsBW: React.FC<PieceType> = ({ strokeColor, backgroundColor }) => {
	return (
		<g transform='translate(-276 479)'>
			<path
				d='M155.115 2460.17C162.045 2460.31 167.392 2460.42 170.104 2460.68C214.366 2466.88 238.842 2431.03 262.194 2396.83C267.743 2388.71 273.228 2380.67 278.901 2373.32C279.669 2372.31 280.476 2371.25 281.314 2370.15C295.26 2351.89 317.674 2322.54 310.601 2308.57C310.04 2304.26 310.332 2299.68 310.727 2293.49L310.786 2292.58C311.206 2286.07 312.181 2270.94 309.864 2267.71L306.271 2265.78C306.849 2252.04 307.438 2238.03 307.998 2224.27C331.311 2228.28 355.093 2230.83 378.868 2231.39C380.422 2232.5 383.821 2234.58 384.514 2231.54C420.889 2091.69 468.252 1953.93 513.93 1819.29L527.519 1820.8C535.07 1890.7 534.497 1961.15 533.926 2031.32C533.486 2085.34 533.048 2139.19 536.321 2192.5C544.895 2194.85 553.946 2193.49 562.317 2191.89C559.711 2216.6 550.393 2231.63 541.622 2245.77C530.015 2264.48 519.366 2281.65 526.49 2317.69C522.318 2318.42 516.338 2318.03 516.026 2323.82C516.437 2342.42 614.616 2354.47 634.108 2361.55C650.743 2364.74 666.294 2367.9 681.048 2370.9C741.804 2383.24 789.018 2392.83 842.574 2390.33C845.394 2390.46 854.912 2378.2 854.082 2375.23C853.993 2375.18 853.842 2375.1 853.606 2375L846.58 2372.24C866.436 2343.74 837.387 2327.45 809.585 2311.86C803.362 2308.37 797.201 2304.92 791.666 2301.37C761.179 2283.59 729.821 2267.32 698.335 2251.84C681.857 2243.03 665.317 2235.7 647.289 2236.97C647.436 2235.26 647.591 2233.55 647.746 2231.83C649.111 2216.68 650.508 2201.18 647.556 2186.38C678.531 2185.52 711.932 2183.8 749.947 2182.46C756.136 2182.45 760.015 2182.3 762.753 2178.63L763.818 2178.23L764.528 2176.97L766.281 2176.33C727.497 1881.94 744.708 1599.64 831.618 1306.41C835.429 1294.94 839.327 1283.07 842.412 1271.28C848.649 1251.93 858.53 1234.83 865.111 1215.81C868.826 1216.28 875.804 1216.03 879.577 1215.76C879.438 1217.36 879.209 1219.48 878.955 1221.83C878.122 1229.53 877.02 1239.72 877.96 1242C979.316 1254.92 978.777 1134.87 978.344 1038.39C978.187 1003.51 978.045 971.705 982.738 950.388L961.883 934.495C981.372 936.786 1005.31 940.903 1023.87 946.278C1030.39 937.781 1034.34 909.727 1027.47 853.157C1013.41 725.029 968.758 654.005 924.846 543.948C908.677 494.012 907.216 442.108 890.585 392.522C878.167 351.961 861.58 312.377 845.649 275.326C812.244 189.888 793.679 183.219 707.582 171.476C687.015 131.407 664.104 109.929 631.249 120.09C619.721 102.77 618.749 85.6186 620.922 70.8716C622.9 50.7916 622.737 22.2936 606.965 9.57256C584.424 -2.77144 544.485 -0.499438 516.286 1.85856C474.86 4.56556 470.763 19.4436 470.388 32.9096C460.056 50.6826 460.899 74.8866 451.47 93.8456C451.08 93.7689 450.677 93.6845 450.265 93.5981C447.322 92.9816 443.87 92.2583 440.978 93.4686C431.623 93.5546 421.104 96.9446 411.524 99.0516C407.58 99.1396 402.192 105.346 401.378 116.149C385.515 123.683 368.219 123.813 351.713 126.9C204.695 156.254 125.587 342.157 52.2497 459.122C-32.5753 598.741 -6.47135 682.44 75.7737 816.341C109.826 874.24 147.455 946.716 192.292 1007.01C205.174 1011.58 218.967 1001.02 231.952 991.071C238.306 986.205 244.466 981.487 250.231 978.764C256.866 984.138 263.793 989.38 270.508 993.972C268.735 1012.21 264.968 1030 263.749 1048.25C259.96 1060.82 270.517 1068.36 281.047 1069.81C301.68 1074.95 322.478 1081 343.702 1083.47L342.604 1077.86C347.294 1078.04 356.767 1078.36 361.443 1078.48L358.269 1089.44L352.573 1089C308.051 1256.27 297.606 1427.71 278.15 1597.55C246.185 1792.72 196.748 1982.32 163.762 2176.92C187.139 2187.29 205.891 2194.79 226.53 2202.26C218.091 2217.38 210.423 2232.73 201.136 2247.58L200.256 2248.98L198.843 2249.83C196.393 2251.32 193.919 2254.04 191.483 2257.93C180.479 2282.74 163.458 2304 148.359 2321.99C132.145 2341.39 116.584 2358.16 100.794 2373.25C97.8906 2376.04 94.6766 2378.88 91.3943 2381.78C75.5959 2395.75 58.217 2411.12 66.3336 2428.78C39.6839 2457.86 118.959 2459.45 155.115 2460.17ZM165.011 641.938C150.739 610.249 148.371 601.521 175.158 570.135C218.748 510.784 251.247 456.91 281.764 397.267C286.775 551.628 289.689 705.425 293.077 858.391C241.754 790.21 196.542 715.466 165.011 641.938Z'
				transform='translate(208.6617 -60.00366)'
				fill={backgroundColor || '#FFFFFF'}
				fill-rule='evenodd'
				stroke='none'
			/>
			<path
				d='M471.068 0.437201C477.039 -3.61209 472.273 21.4116 469.406 36.4602C468.409 41.6948 467.642 45.7221 467.636 46.8982L467.434 47.8903C465.428 57.5372 461.896 68.7605 453.767 74.9472C457.516 105.65 462.182 136.255 467.926 166.638L471.305 167.082C478.773 168.073 486.249 169.118 493.732 170.165C536.472 176.144 579.469 182.159 622.835 178.106C650.291 178.323 668.468 159.524 679.537 136.207C678.787 133.457 678.037 130.718 677.267 127.968C642.399 106.601 615.996 63.2392 631.706 22.3082C632.376 20.5582 634.456 20.4382 635.527 21.3482C635.7 21.3642 635.859 21.5062 635.846 21.6972L635.289 30.3546C634.223 47.5726 633.866 65.3701 643.176 80.8582C681.114 72.2012 704.705 103.853 720.567 133.808L731.963 135.495C775.558 141.976 817.601 149.647 839.128 194.337L842.077 200.614C872.157 264.832 900.188 330.867 916.596 400.018C924.857 436.808 927.846 474.718 939.964 510.599C965.125 577.226 1000.58 639.84 1019.81 708.818C1031.74 733.706 1065.31 921.053 1032.19 922.478C1020.28 918.908 1008.15 916.018 995.886 913.967C997.777 915.408 998.466 917.858 998.107 920.358C993.827 950.388 993.506 980.808 993.526 1011.09C995.788 1084.43 993.76 1242.2 883.385 1216.88C877.715 1214.79 878.627 1207.77 879.552 1200.64C879.941 1197.64 880.333 1194.62 880.237 1191.95C879.607 1191.98 878.966 1191.97 878.327 1191.93C871.99 1209.04 863.105 1224.83 857.537 1242.22C852.817 1257.16 849.517 1273.23 842.937 1287.54C773.249 1535.53 744.481 1796.37 771.727 2053.05C773.256 2068.42 774.977 2083.77 776.898 2099.09C776.817 2102.03 777.785 2107.63 778.906 2114.12C781.529 2129.29 784.99 2149.32 777.817 2151.47C777.42 2152.24 776.046 2153.13 775.227 2153.41C770.706 2158.29 763.992 2158.28 757.514 2158.27C755.108 2158.26 752.777 2158.26 750.596 2158.5C721.747 2159.78 692.901 2160.97 664.037 2161.93C665.588 2172.92 664.623 2184.07 663.669 2195.08C663.56 2196.34 663.451 2197.6 663.346 2198.86C684.395 2199.03 703.74 2211.85 722.357 2220.56C750.006 2234.21 777.206 2248.8 803.888 2264.27C809.188 2267.98 815.895 2271.66 822.969 2275.55C848.781 2289.73 879.489 2306.59 864.626 2337.3C878.746 2343.03 859.124 2367.01 848.396 2367.28C778.562 2366.93 709.171 2351.08 640.926 2337.16C602.15 2326.91 559.839 2323.01 523.966 2305.33C513.783 2300.72 515.916 2282.35 527.117 2280.64C522.237 2244.7 531.842 2230.13 542.534 2213.93C550.063 2202.51 558.13 2190.28 562.057 2169.2C556.531 2170.1 550.427 2169.59 544.886 2168.47C535.511 2177.15 535.504 2129.58 535.499 2099.76C535.497 2088.78 535.496 2080.21 535.026 2077.75C534.94 2053.88 535.156 2030.01 535.373 2006.13L535.373 2006.12C536.026 1934.1 536.68 1862.07 529.017 1790.35L511.678 1841.44C471.254 1960.67 431.436 2080.21 399.746 2202.11C397.846 2209.47 390.126 2210.35 385.197 2207.14C364.386 2206.53 343.657 2204.57 323.126 2201.25C322.727 2211 322.317 2220.75 321.907 2230.5C328.049 2233.81 327.047 2249.3 326.233 2261.87C325.874 2267.43 325.551 2272.42 325.897 2275.54C333.789 2293.54 309.072 2325.49 292.903 2346.4C289.318 2351.03 286.153 2355.12 283.857 2358.4C261.084 2390.24 238.462 2434.8 194.419 2436.28L193.077 2436.31C160.199 2437.11 127.025 2435.19 94.4665 2430.49L90.5041 2429.84C81.2194 2428.29 70.9407 2426.02 65.5965 2417.75C61.0175 2410.67 61.5775 2401.53 67.1365 2396.12C61.3327 2375.04 77.9755 2360.53 93.089 2347.36C97.0947 2343.87 100.993 2340.47 104.337 2337.07C134.156 2308.28 161.259 2276.61 184.697 2242.41L186.044 2239.22C190.388 2228.96 195.579 2217.57 203.666 2212.66C211.378 2200.4 217.973 2187.5 224.937 2174.83C205.916 2167.84 187.187 2160.03 168.666 2151.81C164.981 2150.16 163.808 2145.37 164.453 2141.8L164.499 2141.56C200.656 1953.62 244.005 1767.02 277.721 1578.65C299.256 1405.05 308.084 1229.23 353.357 1059.45C331.393 1057.16 309.533 1050.85 287.978 1045.45C270.697 1041.77 261.959 1032.98 265.367 1014.66C266.539 998.375 269.796 982.355 271.557 966.138C266.956 962.917 262.466 959.528 258.096 956.047C249.996 962.098 241.636 967.797 233.047 973.116C212.479 987.943 196.603 990.252 183.897 965.948C147.097 907.755 111.608 848.712 78.1165 788.548C47.0495 730.832 8.54749 673.237 0.661489 606.785C-10.583 489.394 124.282 302.828 195.665 204.08C197.001 202.231 198.316 200.413 199.606 198.626C238.331 151.812 285.494 103.631 346.827 90.0182C365.693 87.2192 385.582 86.8382 403.567 79.9882C405.028 71.2362 409.133 63.1782 418.407 61.0362C428.162 58.8762 438.62 55.5402 448.447 55.2972C450.668 54.6702 453.289 54.2742 455.636 54.7072C462.361 37.2242 463.35 17.5252 471.068 0.437201ZM442.206 60.3672L440.068 60.9283C417.49 66.7598 410.183 65.9585 408.906 93.2572C403.355 130.303 382.867 162.616 373.658 198.438C369.973 211.087 373.871 234.402 391.336 230.978C396.997 229.238 401.408 236.877 397.126 240.928C384.478 252.907 372.197 265.257 359.846 277.528C409.44 445.128 473.861 608.375 552.337 764.558C555.448 770.757 546.118 776.207 543.028 770.007C465.012 613.325 400.127 450.133 349.767 282.488L348.246 277.406C346.799 273.394 358.319 262.637 367.978 253.618C373.171 248.769 377.826 244.422 379.637 241.898C345.476 225.417 365.164 181.807 383.195 141.865C392.573 121.093 401.502 101.313 402.176 86.8582C387.315 93.4002 370.467 91.0522 354.767 93.6872C324.648 98.9772 298.211 116.398 274.712 135.204C179.263 219.595 118.267 336.432 57.2525 446.558C15.6995 518.41 -4.33351 606.248 37.3655 682.679C85.7495 780.675 141.876 875.132 201.216 966.828C206.387 973.563 213.769 968.81 220.028 964.781C221.656 963.732 223.209 962.733 224.626 961.997C264.094 938.25 298.316 905.943 324.636 868.167C260.828 789.774 205.247 704.101 165.939 610.757L165.397 609.675C156.578 591.926 149.604 570.452 164.316 553.737C216.558 486.736 263.022 415.608 306.746 342.818C307.197 342.087 308.206 342.728 307.876 343.488C303.387 353.667 298.658 363.768 293.728 373.778C303.685 521.777 302.003 672.669 306.307 821.608C317.917 836.997 329.867 852.127 342.096 867.018C381.77 839.643 428.439 821.789 476.368 816.257L479.466 815.946C479.822 815.91 480.181 815.872 480.545 815.835C500.991 813.72 533.497 810.358 536.119 836.36C532.819 868.916 465.622 850.613 444.137 869.077C479.355 883.289 519.713 887.294 552.047 908.718C562.419 914.777 582.75 934.081 562.887 941.468C557.581 941.922 552.17 940.836 546.783 939.754C543.37 939.069 539.967 938.386 536.608 938.098C546.355 941.386 555.319 946.957 561.028 955.688C565.137 961.677 568.137 974.108 558.318 976.669C542.929 977.104 527.585 973.787 512.333 970.49C505.397 968.99 498.48 967.495 491.587 966.358L493.545 967.155C509.62 973.745 534.605 985.579 512.956 1003.03C497.754 1010.91 480.305 1003.86 463.791 997.188C456.762 994.348 449.903 991.577 443.457 990.054C420.293 984.658 399.53 987.303 379.162 989.898C348.404 993.817 318.549 997.62 282.688 973.438C280.995 986.871 278.455 1000.21 277.439 1013.72L277.307 1014.48C275.242 1026.81 277.01 1031.26 290.287 1033.62C306.296 1038.46 323.063 1039.98 339.698 1040.88C419.751 1045.11 500.337 1042.11 579.848 1031.84C591.289 1028.77 618.164 1031.66 622.947 1019.06C613.984 694.591 478.957 389.28 441.777 69.0282C441.166 65.9472 441.126 62.8082 442.206 60.3672ZM649.216 90.3882C655.568 89.7462 661.513 88.3602 667.897 88.0982C688.551 100.525 699.621 124.099 711.54 144.356L712.328 145.687C729.107 174.318 746.037 202.848 762.996 231.358C757.977 236.547 752.367 240.907 745.966 244.478C741.157 247.157 741.617 256.077 747.607 257.058C791.999 267.21 788.879 320.566 785.693 357.551L785.196 363.246C781.109 441.364 771.797 519.293 771.065 597.537C771.117 600.928 776.657 601.988 777.237 598.368C785.159 546.148 786.854 493.263 791.347 440.678C791.019 425.653 793.213 407.532 795.533 388.378C802.047 334.581 809.549 272.637 764.907 248.247C766.047 247.053 767.529 245.815 769.086 244.514C774.251 240.197 780.254 235.179 777.427 228.748C760.938 201.068 744.417 173.407 727.797 145.808C777.074 151.706 816.813 163.682 835.194 214.471C864.273 282.397 893.448 351.277 906.448 424.398C913.143 480.538 929.141 534.23 955.021 584.536C998.204 679.311 1035.22 781.937 1029.25 887.608C1028.89 893.377 1028.38 899.148 1027.72 904.898C996.271 896.742 963.448 892.117 931.006 895.888C915.965 754.317 825.986 632.181 813.019 489.927C809.681 455.7 811.09 421.327 812.499 386.961C814.172 346.157 815.844 305.371 809.568 264.858C809.357 263.648 807.427 263.947 807.448 265.148L807.219 270.708C805.929 301.339 804.261 328.412 802.739 353.13C795.205 475.446 791.226 540.051 854.136 692.358C844.727 692.297 835.318 692.648 825.897 693.028C824.102 693.101 822.123 693.076 820.045 693.05L820.042 693.05L820.039 693.05C812.714 692.957 804.262 692.85 798.846 696.988C790.705 703.642 793.336 720.911 795.585 735.673C796.562 742.091 797.468 748.036 797.384 752.427C798.028 758.464 806.657 757.912 814.102 757.436C817.481 757.22 820.614 757.02 822.647 757.457C816.557 781.877 820.08 807.318 823.507 832.068C823.815 834.297 824.123 836.521 824.423 838.738L824.816 841.678C826.946 851.022 826.238 862.251 832.835 869.787C836.496 873.327 842.017 871.488 843.617 866.938C845.112 862.711 843.986 858.143 842.923 853.83C842.827 853.437 842.73 853.047 842.637 852.659L841.837 849.298C838.859 836.691 836.268 823.99 834.237 811.188C831.255 793.223 829.81 774.841 824.206 757.468C831.764 757.375 839.338 757.52 846.915 757.666L846.942 757.667L846.948 757.667C857.539 757.871 868.132 758.075 878.688 757.627C908.651 839.951 941.651 935.195 879.422 1011.2C877.846 1014.32 876.456 1017.5 875.227 1020.73C833.657 1025.15 791.657 1024.64 750.256 1018.67C749.024 1001.57 751.672 984.46 754.308 967.431C755.585 959.184 756.859 950.957 757.688 942.757C762.255 848.138 760.576 753.166 757.488 658.488C748.115 470.716 738.424 267.063 667.883 94.9362C669.828 101.697 671.768 108.447 673.688 115.207C672.307 114.238 670.948 113.238 669.607 112.197C670.477 110.284 665.987 106.551 660.943 102.357C656.181 98.3974 650.924 94.0265 649.216 90.3882ZM284.057 392.818C261.349 436.244 235.221 477.564 207.408 517.797C201.447 526.388 195.327 534.868 189.109 543.287L187.959 544.762C186.984 546.002 186.007 547.225 185.039 548.436C173.66 562.677 163.547 575.332 174.367 594.667C205.132 669.522 246.324 739.818 294.047 805.058C291.025 667.641 288.355 530.189 284.057 392.818ZM486.597 691.188C487.512 679.874 479.791 655.54 465.377 667.388C457.68 667.753 450.07 671.653 442.608 673.587C413.78 678.953 384.076 679.786 354.907 682.799C352.062 682.983 348.786 682.638 345.407 682.283C337.487 681.449 328.999 680.557 324.157 686.268C321.573 690.953 321.548 697.172 321.876 702.97L321.937 703.988C316.044 722.783 319.129 743.847 341.497 747.988C335.587 767.877 329.851 793.243 338.194 812.908C340.978 817.388 348.108 816.678 349.537 811.428C350.936 804.597 350.066 797.724 349.193 790.831C348.606 786.197 348.018 781.554 348.118 776.908C347.788 770.416 347.911 763.934 348.034 757.452C348.087 754.707 348.139 751.963 348.157 749.218C393.836 751.972 439.423 751.385 485.087 753.708C492.454 753.536 490.743 740.179 489.407 729.743C488.848 725.377 488.354 721.523 488.618 719.358C488.007 709.968 487.277 700.578 486.597 691.188ZM471.997 676.627C447.823 685.043 422.438 685.657 397.1 686.271C391.205 686.414 385.312 686.556 379.438 686.797C379.481 691.345 364.838 689.944 353.509 688.86C348.138 688.346 343.513 687.903 341.548 688.199L339.197 687.997C334.143 687.589 327.792 687.523 327.737 693.728C328.447 698.487 327.674 703.445 326.9 708.411C325.908 714.776 324.913 721.155 327.037 727.148C331.612 740.038 349.64 740.175 361.995 740.268C363.414 740.279 364.757 740.289 365.997 740.318C385.847 740.768 405.697 741.247 425.547 741.768C443.377 742.238 461.268 743.127 479.117 743.257C477.507 730.538 477.068 717.497 476.098 704.788C475.709 701.875 475.622 698.791 475.535 695.675C475.349 689.013 475.159 682.207 471.997 676.627ZM804.341 702.844C809.619 697.444 824.099 701.04 854.977 694.558C861.697 712.218 868.477 729.868 875.017 747.598C862.01 747.388 849.008 747.464 836.006 747.54C826.13 747.597 816.255 747.655 806.376 747.587C806.014 745.171 805.667 742.879 805.338 740.705C801.698 716.674 800.239 707.041 804.341 702.844ZM597.398 723.327C597.357 723.158 597.328 722.997 597.297 722.837C597.688 722.928 598.087 723.007 598.478 723.077C598.139 723.172 597.744 723.228 597.398 723.327ZM598.267 727.678C616.106 817.934 630.188 909.309 635.078 1001.34L635.121 1002.25C635.17 1003.2 635.228 1004.17 635.286 1005.14C635.8 1013.66 636.348 1022.74 630.768 1029.72C624.318 1037.79 614.267 1038.81 604.737 1040.28C524.807 1052.45 443.75 1056.57 362.947 1054.12C333.12 1201.96 314.878 1351.64 303.75 1501.97C279.574 1716.77 224.697 1926.75 183.596 2138.68C247.336 2166.6 313.448 2186.41 383.307 2189.16C482.19 1823.23 667.317 1437.04 677.177 1070.99C677.706 1070.4 678.977 1070.54 679.117 1071.43C681.979 1089.01 681.257 1107.27 680.551 1125.13C680.453 1127.61 680.355 1130.08 680.267 1132.55C677.532 1194.68 670.627 1256.78 660.448 1318.09C634.602 1470.36 586.862 1617.69 537.955 1763.84C536.916 1768 537.534 1772.46 538.145 1776.87C538.497 1779.42 538.847 1781.95 538.877 1784.4C549.093 1896.17 550.138 2008.51 553.428 2120.63C553.18 2125.07 553.52 2129.71 553.861 2134.39C554.474 2142.76 555.092 2151.22 552.336 2158.7C589.273 2153.74 626.394 2151.07 663.518 2147.97L663.794 2147.79C665.331 2146.81 667.784 2145.78 669.198 2147.52C700.56 2145.05 731.956 2142.79 763.336 2140.68C718.833 1821.62 749.592 1489.02 869.996 1189.28C864.792 1184.5 864.688 1175.73 864.591 1167.54C864.546 1163.73 864.502 1160.05 863.948 1156.96C862.338 1117.21 862.425 1076.55 870.227 1037.41L868.243 1037.53C844.271 1038.9 738.791 1043.13 735.897 1025.21C733.329 1005.76 736.379 986.417 739.426 967.103C741.136 956.257 742.845 945.42 743.557 934.577C746.823 872.008 746.364 809.214 745.907 746.538C745.866 740.974 745.826 735.41 745.787 729.848C731.515 731.759 717.645 730.57 703.702 729.375C697.251 728.822 690.785 728.268 684.256 728.018C673.115 727.92 661.982 727.971 650.854 728.021L650.849 728.021C633.318 728.101 615.796 728.181 598.267 727.678ZM523.847 834.376C519.585 821.799 483.029 827.298 465.259 829.971C462.612 830.369 460.382 830.705 458.737 830.908C411.956 839.757 364.876 860.497 329.246 892.438C327.046 894.408 324.447 894.377 322.397 893.308C306.438 913.732 288.008 932.242 267.796 948.507C271.496 951.427 275.296 954.257 279.206 956.967C281.077 957.167 282.767 958.138 283.527 959.877C319.296 985.841 348.982 982.079 380.984 978.024C398.738 975.774 417.205 973.434 437.817 976.029C459.386 980.386 479.248 994.13 501.476 994.708C517.787 990.992 503.425 984.161 495.807 981.518C478.557 973.268 460.971 965.747 443.347 958.331L429.246 952.408C422.317 949.497 424.697 939.007 432.438 940.837C445.987 944.037 459.577 947.077 473.176 950.069C499.33 955.413 526.108 962.269 552.537 964.868C546.661 948.509 484.329 930.841 466.205 924.339C464.215 923.397 461.153 922.781 457.865 922.12C449.847 920.508 440.487 918.625 442.067 911.087C443.362 903.973 454.469 907.834 463.183 910.863C466.585 912.045 469.622 913.101 471.567 913.327C499.839 920.513 528.698 924.867 557.506 929.247C526.563 898.146 478.596 895.462 439.077 880.897L438.213 880.701C431.167 879.075 421.276 876.004 427.048 867.919C438.172 851.49 467.175 848.616 490.573 846.297C509.889 844.382 525.385 842.846 523.847 834.376ZM935.047 909.667C933.966 910.938 932.787 911.707 931.586 912.098C931.596 940.967 925.777 969.358 909.828 994.358C903.193 1003.17 899.444 1013.2 896.238 1023.65C879.37 1071.48 876.238 1122.87 882.386 1172.96C898.96 1148.61 905.547 1119.56 910.177 1090.92C910.427 1089.48 912.807 1089.5 913.066 1090.92C918.667 1121.58 909.039 1151.69 897.527 1180.03C891.993 1183.99 891.733 1192.89 891.514 1200.39C891.448 1202.64 891.386 1204.76 891.188 1206.59C981.384 1219.75 981.847 1095.2 982.201 999.975C982.327 966.198 982.439 936.11 986.537 917.167C986.828 915.177 988.518 913.728 990.438 913.118C972.109 910.317 953.539 910.112 935.047 909.667ZM360.007 1056.29C359.908 1055.52 359.777 1054.75 359.626 1053.98C359.978 1054 360.328 1054.01 360.667 1054.02C360.448 1054.78 360.228 1055.54 360.007 1056.29ZM657.787 2162.14L642.17 2162.62C617.876 2163.36 593.579 2164 569.267 2163.97C571.811 2181.46 566.833 2210.32 555.527 2223.91C555.506 2223.92 555.487 2223.92 555.477 2223.93C585.211 2228.43 613.482 2216.08 640.204 2204.41C642.241 2203.52 644.269 2202.63 646.287 2201.76C647.488 2188.35 652.745 2174.67 657.787 2162.14ZM545.948 2164.5L545.857 2162.98C549.198 2163.55 552.617 2163.82 556.047 2163.93C554.857 2164.14 553.677 2164.34 552.528 2164.4C551.351 2164.46 550.167 2164.46 548.981 2164.46C547.969 2164.46 546.956 2164.46 545.948 2164.5ZM567.586 2163.98L565.877 2164L565.867 2164.98C566.268 2165.65 566.336 2166.47 565.836 2167.13C565.778 2170.15 565.648 2173.18 565.417 2176.21C566.078 2172.13 566.737 2168.05 567.586 2163.98ZM224.407 2182.37C225.077 2180.02 225.706 2177.67 226.246 2175.32L227.996 2175.95L227.618 2176.47C226.377 2178.25 225.334 2180.27 224.407 2182.37ZM225.158 2195.11C227.389 2189.41 230.034 2182.64 229.737 2176.57C256.911 2186.38 284.841 2194.4 313.287 2199.55C313.098 2200.19 312.901 2200.85 312.698 2201.53C310.035 2210.44 306.541 2222.12 310.246 2230.6L310.246 2230.61L309.654 2230.92C301.894 2234.79 294.614 2229.73 285.26 2223.22C271.071 2213.34 252.111 2200.14 219.466 2209.79C221.647 2205.69 223.057 2200.58 224.426 2197C224.662 2196.38 224.907 2195.76 225.158 2195.11ZM635.317 2218.86C647.758 2212.7 661.789 2207.98 675.466 2213C729.272 2234.94 779.999 2264.78 829.569 2295.14L836.029 2299.11C861.276 2312.7 860.61 2332.22 836.858 2347.07C747.859 2341.02 660.547 2320.01 574.086 2298.28L548.456 2291.83C539.316 2291.3 538.364 2285.16 538.158 2277.59L538.138 2276.74C535.492 2258.32 538.725 2240.57 548.367 2224.61C568.031 2239.79 614.063 2228.38 635.317 2218.86ZM313.577 2239.98C300.122 2244.87 290.743 2238.13 279.765 2230.24C264.459 2219.24 246.046 2206.02 209.147 2218.97C184.385 2264.99 152.327 2306.79 115.685 2343.96C112.31 2348.16 107.22 2352.51 101.892 2357.06C86.664 2370.06 69.4968 2384.73 84.8865 2402.34L88.0683 2402.92C124.144 2409.49 160.765 2414.71 197.526 2411.74C225.306 2404.07 246.14 2381.78 262.977 2359.3C275.159 2337.68 289.408 2317.34 303.955 2297.28C311.953 2287.3 312.764 2274.61 312.727 2262.34C312.996 2254.88 313.277 2247.43 313.577 2239.98ZM550.357 2220.89C551.336 2219.07 552.318 2217.25 553.287 2215.43C552.288 2217.64 551.48 2219.89 551.777 2222.16C551.267 2221.79 550.787 2221.36 550.357 2220.89ZM863.568 2339.28C863.327 2339.69 863.096 2340.1 862.857 2340.5C863.227 2340.68 863.568 2340.94 863.886 2341.22C863.886 2340.55 863.787 2339.89 863.568 2339.28ZM100.537 2412.13C98.7565 2411.49 97.0175 2410.77 95.3365 2409.94C99.2165 2411.07 103.136 2412.07 107.086 2412.96C104.907 2412.71 102.727 2412.43 100.537 2412.13Z'
				transform='translate(201 -27.106)'
				fill={strokeColor || '#000000'}
				fill-rule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
