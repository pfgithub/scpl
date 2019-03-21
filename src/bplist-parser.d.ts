declare module "bplist-parser"{

export function parseFile(file: string | Buffer, callback: (err: Error | undefined, result?: any) => void): any;

export function parseBuffer(buffer: Buffer): any;

}
