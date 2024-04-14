import React from 'react';
import ShortHookWrapper from './ShortHookWrapper';
import { ShortLinkTabs } from './ShortLinkTabs';

export const FreeShortHookBlock = async () => {
  return (
    <ShortHookWrapper>
      <ShortLinkTabs />
    </ShortHookWrapper>
  );
};
