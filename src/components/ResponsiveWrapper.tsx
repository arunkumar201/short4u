import NavBar from './navbar/NavBar';
import React from 'react';

type Props = {
	children: React.ReactNode;
}

export const ResponsiveWrapper = ({ children }: Props) => {
	return (
		<div className='absolute inset-x-0 flex justify-center items-center'>
			<div className='w-full '>
				<div className='fixed  min-w-full z-50 md:top-2 md:mb-2 '>
				<NavBar />
				</div>
				<div className="relative top-[4rem] ml-0 md:ml-32 mr-0 md:mr-32 md:px-8 md:py-2 px-3 py-3">
				  {children}
				</div>
			</div>
		</div>
	);
};
