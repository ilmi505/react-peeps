import React from 'react';
import { PieceType } from '../types';

export const GlassRound: React.FC<PieceType> = ({ strokeColor }) => {
	return (
		<g>
			<path
				d='M375.513 33.9959C378.273 31.6829 383.089 31.1349 386.423 31.1279C394.028 32.5829 390.88 44.1729 376.385 36.9629C398.166 128.052 258.709 131.937 282.237 45.3469C268.157 41.9599 253.29 41.6839 240.365 48.1139C251.522 87.8139 214.401 125.982 171.734 116.181C144.179 109.783 125.789 88.4229 134.308 57.0269C128.899 58.7229 118.76 57.3109 115.622 53.0899C104.775 52.1634 93.9913 50.8415 83.2204 49.5212C59.091 46.5633 35.0273 43.6135 10.4674 45.1359C7.12749 45.5983 7.31436 47.952 7.50111 50.304C7.68714 52.6469 7.87304 54.9883 4.57241 55.4569C-3.01759 54.7649 -0.0355915 41.9389 5.39841 39.8539C13.0234 34.3889 78.5984 39.8119 116.105 49.6479C121.083 46.3825 128.583 47.3802 134.493 48.1664C135.445 48.2929 136.355 48.414 137.206 48.5109C144.594 30.0029 168.272 6.93191 192.028 10.8229C213.793 12.0919 232.079 20.6889 239.509 45.2399C250.854 34.9489 271.426 31.6259 284.509 39.4079C291.765 23.0939 304.532 10.8229 321.737 5.28991C343.585 -10.2001 368.707 11.0429 375.513 33.9959ZM358.311 87.4579C346.17 100.003 325.902 103.603 309.749 96.8749C268.273 79.5459 288.574 25.4959 320.561 10.9809C324.557 9.98491 329.894 7.62191 334.761 7.08591C334.928 7.0043 335.168 7.04274 335.465 7.09029C335.954 7.1686 336.598 7.27161 337.32 6.90391C372.591 10.8419 380.623 65.5939 358.311 87.4579ZM164.916 105.906C185.6 114.302 210.916 108.73 224.533 90.6689C249.948 57.3679 225.561 0.903908 166.504 23.0949C138.547 41.8849 124.054 89.8139 164.916 105.906ZM135.953 50.6509C135.915 50.6329 135.877 50.6239 135.838 50.6059C136.054 50.5109 136.27 50.4159 136.485 50.3189C136.415 50.5019 136.339 50.6829 136.271 50.8659C136.165 50.7929 136.072 50.7079 135.953 50.6509Z'
				transform='translate(13.99969 7.999794)'
				fill={strokeColor || '#000000'}
				fill-rule='evenodd'
				stroke='none'
			/>
		</g>
	);
};
