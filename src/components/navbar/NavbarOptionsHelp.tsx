import { BadgePercent, HelpCircleIcon, Rss } from 'lucide-react';

import SocialIcons from '../SocialContact';
import ThemeToggleBtn from '../ThemeToggleBtn';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface INavbarOptionsHelp{
	isMobile?:boolean
}
const NavbarOptionsHelp = ({ isMobile }:INavbarOptionsHelp) => {
	const router = useRouter();

	const handleClick = (path:string) => {
		router.push(path);
	};

	const options = [
		{
			label: 'Pricing',
			icon: <BadgePercent size={30} />,
			path: '/pricing',
		},
		{
			label: 'Blog',
			icon: <Rss size={30} />,
			path: '/blog',
		},
		{
			label: 'Help',
			icon: <HelpCircleIcon size={30} />,
			path: '/support',
		},
	];

	return (
		<div className={cn('flex items-center justify-center ',isMobile && 'mt-4 flex flex-col')}>
			{options.map((option) => (
				<p
					key={option.label}
					onClick={() => handleClick(option.path)}
					className={cn(
						'cursor-pointer md:text-base justify-center px-3 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none',
						isMobile && "w-[13rem] md:text-base px-4 py-2")}
				>
					<span className="flex flex-row items-center gap-2 justify-start">
						{ isMobile && option.icon}
						{option.label}
					</span>
				</p>
			))}
			{isMobile && <SocialIcons />}
			{isMobile && <ThemeToggleBtn moonStyle='bg-red-200 rounded-xl' sunStyle='dark:bg-gray-500 rounded-xl' className='p-4 fixed -bottom-0 left-[13rem]' />}
		</div>
	);
};

export default NavbarOptionsHelp;
