import React from 'react';
import { PieceType } from '../types';

export const Yosemite: React.FC<PieceType> = ({ strokeColor }) => {
	return (
		<g>
			<path
				d='M170.528 162.863C172.547 164.778 176.93 168.993 181.129 170.846L185.056 170.846C185.899 170.688 186.727 170.447 187.549 170.175C188.618 167.552 188.824 164.496 188.299 161.418C185.331 144.372 182.68 127.111 184.093 109.762C185.424 93.4046 190.132 77.1276 188.861 60.6146C187.088 21.6476 149.461 -5.33535 116.52 2.55365C112.267 2.93065 108.108 4.12765 104.404 6.25565C53.0178 -15.3004 -10.4932 21.1216 1.46884 80.7036C3.76184 96.8136 7.45984 112.093 6.32384 128.512C5.77984 136.37 4.52884 144.142 3.06084 151.874C1.95884 157.676 -0.95816 164.83 1.72184 170.557C12.4878 177.356 23.7118 163.226 30.9028 151.099C34.6668 140.907 37.7938 130.472 41.3198 120.201C47.6818 101.74 49.1558 91.5436 70.1508 86.5096C79.2188 83.4166 87.3128 78.8567 94.2538 72.8446C99.5888 70.2896 102.63 65.1716 104.448 59.9966C105.354 62.5446 104.101 65.6376 103.874 68.2826C119.101 88.4646 137.944 84.6436 144.723 98.6776C149.91 111.889 152.825 125.973 156.794 139.643C157.337 141.514 167.384 159.881 170.528 162.863'
				transform='translate(109.0002 28.00045)'
				fill={strokeColor || '#000000'}
				stroke='none'
			/>
		</g>
	);
};
