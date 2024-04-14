import React from 'react';
import ShortHookContainer from '../ShortHookContainer';
import { sleep } from '@/utils';

const QRCodeWrapper = async () => {
  await sleep(10000);
  return (
    <>
      <ShortHookContainer>
        <h1>QR Code</h1>
      </ShortHookContainer>
    </>
  )
};

export default QRCodeWrapper;
