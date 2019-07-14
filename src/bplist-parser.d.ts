declare module "bplist-parser" {
	export function parseFile(
		file: string | Buffer,
		callback: (err: Error | undefined, result?: any) => void
	): //eslint-disable-next-line @typescript-eslint/no-explicit-any
	any;

	//eslint-disable-next-line @typescript-eslint/no-explicit-any
	export function parseBuffer(buffer: Buffer): any;
}
