import { BookUser, BotIcon, Link2, QrCodeIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const ShortLinkWrapper = dynamic(
  () => import('./short-link/ShortLinkWrapper'),
  {
    ssr: true,
  },
);
const QRCodeWrapper = dynamic(() => import('./short-link/QRCodeWrapper'), {
  ssr: true,
});

export const ShortLinkTabs = async () => {
  return (
    <div className="grid w-full gap-4">
      <Tabs defaultValue="short-link" className="p-2">
        <TabsList className="flex space-x-4 rounded-2xl px-3 py-5">
          <TabsTrigger value="short-link" className="rounded-2xl ">
            <Link2 className="h-4 w-4" />
            <span className="ml-2">Short Link</span>
          </TabsTrigger>
          <TabsTrigger value="qr-code" className="rounded-2xl">
            <QrCodeIcon className="h-4 w-4" />
            <span className="ml-2">QR Code</span>
          </TabsTrigger>
          <TabsTrigger value="ai-shortener" className="rounded-2xl">
            <BotIcon className="h-4 w-4" />
            <span className="ml-2">AI Shortener</span>
          </TabsTrigger>
          <TabsTrigger value="link-in-bio" className="rounded-2xl">
            <BookUser className="h-4 w-4" />
            <span className="ml-2">Link-in-bio</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="short-link"
          className="text-gray-50 dark:text-zinc-50"
        >
          <Suspense fallback={<h1 className="text-gray-700">Loading...</h1>}>
            <ShortLinkWrapper />
          </Suspense>
        </TabsContent>
        <TabsContent value="qr-code">
          <Suspense fallback={<h1 className="text-gray-700">Loading...</h1>}>
            <QRCodeWrapper />
          </Suspense>
        </TabsContent>
        <TabsContent value="ai-shortener">
          <Suspense fallback={<h1 className="text-gray-700">Loading...</h1>}>
            <ShortLinkWrapper />
          </Suspense>
        </TabsContent>
        <TabsContent value="link-in-bio">
          <Suspense fallback={<h1 className="text-gray-700">Loading...</h1>}>
            <ShortLinkWrapper />
          </Suspense>
        </TabsContent>
      </Tabs>
    </div>
  );
};
