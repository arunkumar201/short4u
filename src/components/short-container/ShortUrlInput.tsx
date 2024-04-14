import { Button } from "../ui/button"

export const ShortUrlInput = () => {
	return (
		<div className="w-full flex flex-col gap-y-4 items-start justify-center mt-4">
			<input type="text" placeholder="eg. https://www..acme.com" className="input input-bordered input-accent w-full max-w-xs focus:outline-0 text-gray-50" />
			<Button className="w-fit rounded-xl" variant={"secondary"}>Get your link</Button>
		</div>
	)
}
