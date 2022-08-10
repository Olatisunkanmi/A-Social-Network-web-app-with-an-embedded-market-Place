import React from 'react';
import { useEffect } from 'react';
import { DeleteForever } from '@material-ui/icons';
import { useStateContext } from '../Contexts/Context';

const Widget = () => {
	return (
		<div>
			<div
				className={`w-2/3 border-stone-600 border-2 absolute right-0 top-10 p-5 bg-shade-300 bg-white first-letter:first-line:marker:placeholder: 
                                      }`}
			>
				<div className={`flex flex-row items-center`}>
					<button className=''>
						<DeleteForever />
					</button>

					<div>
						<p className='text-xs'>Remove widget from Feed</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Widget;
