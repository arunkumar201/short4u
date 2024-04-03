import React,{ Suspense } from 'react'

import ShortHookWrapper from './ShortHookWrapper'
import { ShortLinkTabs } from './ShortLinkTabs'

const FreeShortHookBlock = async () => {
	return (
		<ShortHookWrapper>
			<div className='mb-6'>FreeShortHookBlock</div>
			<Suspense fallback={<h1>loading...</h1>}>
				<ShortLinkTabs />
			</Suspense>
		</ShortHookWrapper>
	)
}

export default FreeShortHookBlock
