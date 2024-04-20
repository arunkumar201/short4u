import { Button } from "../ui/button"

export const ShortUrlInput = () => {
	return (
		<div className="w-full flex flex-col gap-y-4 items-start justify-center mt-4">
			<div className="flex flex-col gap-y-2 w-full items-start justify-center">
				<p className="dark:text-gray-50 text-accent text-lg md:text-xl">Paste your long URL</p>
				<label className="relative input input-bordered flex items-center gap-2 w-full max-w-4xl p-4">
					<input type="text" placeholder="eg. https://www.acme.com" className="text-gray-50 w-full  bg-gray-700 dark:bg-inherit" />
					<Button className="absolute right-2 text-secondary-foreground  badge badge-success dark:text-secondary w-fit rounded-xl ">Get your link</Button>
				</label>
			</div>
			<div className="flex flex-col justify-center items-center w-full gap-y-3">
				<p className="text-primary dark:text-primary-foreground text-sm md:text-lg">
					No credit card required. All plans are free for 14 days.
				</p>
				<div className="flex flex-row gap-3">
					<Button variant={"secondary"} >Short Links</Button>
					<Button variant={"secondary"}>QR code</Button>
				</div>
			</div>
		</div>
	)
}
