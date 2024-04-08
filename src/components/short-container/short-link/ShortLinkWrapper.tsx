import React from 'react';
import ShortHookContainer from '../ShortHookContainer';
import { sleep } from '@/utils';

const ShortLinkWrapper = async () => {
  await sleep(10000);
  return (
    <ShortHookContainer>
      <h1 className="text-gray-800">welcome to Short link widget </h1>
    </ShortHookContainer>
  );
};

export default ShortLinkWrapper;
