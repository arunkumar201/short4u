import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IGridBackground{
	Comp: ReactNode;
	className?: string;
}
export const GridBackground: React.FC<IGridBackground> = ({ Comp, className }) => {
	return (
		<div className={cn("h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center", className)}>
			<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
			<div className="relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
			{Comp}
			</div>
		</div>
	);
};
