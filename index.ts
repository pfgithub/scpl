import parser from "./src/ShortcutsParser";
import * as bplistc from "bplist-creator";
import {PositionedError, AsAble} from "./src/ParserData";
import {ConvertingContext} from "./src/Converter";
// export {default as parser} from "./src/ShortcutsParser";
export {PositionedError, ConvertingContext, AsAble};

export function parse(string: string, options: {makePlist?: boolean, makeShortcut?: boolean, extraParseActions?: {[key: string]: (cc: ConvertingContext, ...args: AsAble[]) => void}}) {
	const parsed = parser.parse(`${string}\n`, [1, 1]);
	if(!parsed.success) {
		throw new PositionedError("Failed to parse anything", [1, 1], [100, 1]);
	}
	if(parsed.remainingStr) {
		if(!parsed.pos) {throw new Error("!parsed.pos");}
		throw new PositionedError("Parsing error around here", parsed.pos, [parsed.pos[0] + 100, 1]);
	}

	let shortcut;
	try{
		shortcut = parsed.data.asShortcut(options.extraParseActions);
	}catch(er) {
		if(er instanceof PositionedError) {
			throw er;
		}
		throw new PositionedError(`Unknown location in error: ${er.message}`, [1, 1], [100, 1]);
	}
	if(options.makePlist) {
		return (<any>bplistc)(shortcut.build());
	}
	return shortcut;
}
