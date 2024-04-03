import { BookUser,BotIcon,Link2,QrCodeIcon } from "lucide-react"
import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs"

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
				<TabsContent value="short-link" className="text-gray-50 dark:text-zinc-50">
					<div className="text-gray-50 dark:text-zinc-50">
						<div>
							<div className="text-gray-800 dark:text-zinc-50text-gray-800 dark:text-zinc-50 p-4">
								<p>Welcome to the Short Link tab. This is your feed.</p>
							</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="qr-code">
					<div className="">
						<div>
							<div className="text-gray-800 dark:text-zinc-50text-gray-800 dark:text-zinc-50 p-4">
								<p>Check out your QR,in the QR CODE  tab.</p>
							</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="ai-shortener">
					<div className="">
						<div>
							<div className="text-gray-800 dark:text-zinc-50text-gray-800 dark:text-zinc-50 p-4">
								<p>AI Shortener.</p>
							</div>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="link-in-bio">
					<div className="">
						<div>
							<div className="text-gray-800 dark:text-zinc-50text-gray-800 dark:text-zinc-50 p-4">
								<p>Link in Bio.</p>
							</div>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}
