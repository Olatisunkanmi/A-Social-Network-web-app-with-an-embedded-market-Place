import React from 'react';
import {
	Upload,
	Story,
	Random,
	Update,
	SuggestedFriends,
	RecommendedPages,
	WeatherApi,
} from '../Components';
import { useStateContext } from '../Contexts/Context';
import '../App.css';

const Timeline = () => {
	return (
		<div className=''>
			<div
				className='m-auto 
              
                    w-4/5
                    xl:w-3/4
                   flex flex-col 
                  lg:flex-row justify-center p-5 mt-5'
			>
				<div
					className='hidden 
                                      space-y-5
                                      lg:block
                                        lg:w-1/4'
				>
					<RecommendedPages />
					<WeatherApi />
				</div>

				{/** Feed Section  */}
				<div
					className='
                                xl:block
                               space-y-5
                                lg:w-2/4 
                                lg:mx-5'
				>
					<Upload />
					<Update />
					<Update />
				</div>

				{/** Stories Section  */}

				<div
					className='
                            space-y-5
                              lg:w-1/4 '
				>
					<Story />
					<Random />
					<SuggestedFriends />
				</div>
			</div>
		</div>
	);
};

export default Timeline;
