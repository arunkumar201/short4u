import { BookUser, BotIcon, Link2, QrCodeIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { AiShortenerWrapper } from './short-link/AiShortenerWrapper';
import { LinkInBioWrapper } from './short-link/LinkInBioWrapper';
import QRCodeWrapper from './short-link/QRCodeWrapper';
import ShortLinkWrapper from './short-link/ShortLinkWrapper';

export const ShortLinkTabs = () => {
    return (
        <div className="grid w-full gap-4">
            <Tabs defaultValue="short-link" className="p-2">
                <TabsList className="flex space-x-4 gap-y-2 flex-wrap h-fit rounded-2xl px-3 py-5 text-[#144272]  dark:text-[#FBF8DD] font-semibold bg-inherit dark:bg-inherit items-center">
                    <TabsTrigger
                        value="short-link"
                        className="rounded-2xl md:text-lg text-xs font-normal text-balance"
                    >
                        <Link2 className="md:h-6 md:w-6 h-5 w-5" />
                        <span className="ml-1">Short Link</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="qr-code"
                        className="rounded-2xl  md:text-lg text-xs font-normal text-balance"
                    >
                        <QrCodeIcon className="md:h-6 md:w-6 h-5 w-5" />
                        <span className="ml-1">QR Code</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="ai-shortener"
                        className="rounded-2xl  md:text-lg text-xs font-normal text-balance"
                    >
                        <BotIcon className="md:h-6 md:w-6 h-5 w-5" />
                        <span className="ml-1">AI Shortener</span>
                    </TabsTrigger>
                    <TabsTrigger
                        value="link-in-bio"
                        className="rounded-2xl  md:text-lg text-xs font-normal text-balance"
                    >
                        <BookUser className="md:h-6 md:w-6 h-5 w-5" />
                        <span className="ml-1">Link-in-bio</span>
                    </TabsTrigger>
                </TabsList>
                <TabsContent
                    value="short-link"
                    className="text-gray-50 dark:text-zinc-50"
                >
                    <ShortLinkWrapper />
                </TabsContent>
                <TabsContent value="qr-code">
                    <QRCodeWrapper />
                </TabsContent>
                <TabsContent value="ai-shortener">
                    <AiShortenerWrapper />
                </TabsContent>
                <TabsContent value="link-in-bio">
                    <LinkInBioWrapper />
                </TabsContent>
            </Tabs>
        </div>
    );
};
