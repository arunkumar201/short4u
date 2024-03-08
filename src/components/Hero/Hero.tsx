import { GridBackground } from '../GridBackground'
import React from 'react'

type Props = {}

export const Hero = (_props: Props) => {
	return (
		<>
			<GridBackground
				Comp={<h1>Hello World</h1>}
				className="w-[12rem] h-[12rem] rounded-2xl"
			/>
		</>
	)
}
