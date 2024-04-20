import React from 'react';
import ShortHookContainer from '../ShortHookContainer';
import {ShortUrlInput} from '../ShortUrlInput';
import { sleep } from '@/utils';

const ShortLinkWrapper = async () => {
  await sleep(1000);
  return (
    <ShortHookContainer>
      <h1 className='font-sans text-2xl font-bold tracking-wider'>Shorten a Long URL</h1>
      <ShortUrlInput/>
    </ShortHookContainer>
  );
};

export default ShortLinkWrapper;
