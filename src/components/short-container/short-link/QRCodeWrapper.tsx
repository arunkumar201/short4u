import React from 'react';
import { sleep } from '@/utils';

const QRCodeWrapper = async () => {
  await sleep(10000);
  return <div className="text-gray-900"></div>;
};

export default QRCodeWrapper;
