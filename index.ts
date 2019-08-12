import parser from "./src/ShortcutsParser";
import { ParseResult } from "./src/Production";
import * as bplistc from "bplist-creator";
import { PositionedError, AsAble, ActionsParse } from "./src/ParserData";
import { ConvertingContext } from "./src/Converter";
import { Shortcut, WFShortcut } from "./src/OutputData";
import { InverseConvertingContext } from "./src/InverseConvertingContext";
import * as bplistp from "bplist-parser";
// export {default as parser} from "./src/ShortcutsParser";
export { PositionedError, ConvertingContext, AsAble, WFShortcut };

export {
	allActions,
	getActionFromID,
	getActionFromName
} from "./src/ActionData";

export function parse(
	string: string,
	options: {
		make?: ("shortcutjson" | "shortcutplist" | "outputdata")[];
		useWarnings?: boolean;

		// --- don't use unless necessary: ---
		extraParseActions?: {
			[key: string]: (cc: ConvertingContext, ...args: AsAble[]) => void;
		};
		ccOverride?: ConvertingContext;

		// --- unused: ---
		generateScPLData?: boolean;

		// --- deprecated: ---
		makePlist?: boolean;
		makeShortcut?: boolean;
		fileLoader?: (filename: string) => string;
	}
) {
	let parsed: ParseResult;
	try {
		parsed = parser.parse(string, [1, 1]);
	} catch (er) {
		if (er instanceof PositionedError) {
			throw er;
		}
		throw new PositionedError(
			`Error somewhere: ${er.toString()}`,
			[1, 1],
			[100, 1]
		);
	}
	if (!parsed.success) {
		throw new PositionedError("Failed to parse anything", [1, 1], [100, 1]);
	}
	if (parsed.remainingStr) {
		if (!parsed.pos) {
			throw new Error("!parsed.pos");
		}
		throw new PositionedError("Parsing error around here", parsed.pos, [
			parsed.pos[0] + 100,
			1
		]);
	}

	const generateScPLData =
		options.generateScPLData === undefined ? true : false;

	let cc: ConvertingContext;

	if (options.ccOverride) {
		cc = options.ccOverride;
	} else {
		cc = new ConvertingContext();
	}
	const converterActions = options.extraParseActions;
	if (converterActions) {
		Object.keys(converterActions).forEach(key => {
			cc.setParserAction(key, converterActions[key]);
		});
	}
	cc.useWarnings = !!options.useWarnings;

	let shortcut;
	try {
		shortcut = (<ActionsParse>parsed.data).asShortcut(cc, {
			useWarnings: !!options.useWarnings
		});
	} catch (er) {
		if (er instanceof PositionedError) {
			throw er;
		}
		throw new PositionedError(
			`Unknown location in error: ${er.message}`,
			[1, 1],
			[100, 1]
		);
	}
	if (options.make) {
		const data = shortcut.build();
		const output: {
			shortcutjson?: WFShortcut;
			shortcutplist?: Buffer;
			outputdata?: Shortcut;
			warnings?: PositionedError[];
		} = {};
		if (options.make.indexOf("outputdata") > -1) {
			output.outputdata = shortcut;
		}
		if (options.make.indexOf("shortcutjson") > -1) {
			output.shortcutjson = data;
		}
		if (options.make.indexOf("shortcutplist") > -1) {
			//eslint-disable-next-line @typescript-eslint/no-explicit-any
			output.shortcutplist = (<any>bplistc)(data);
		}
		if (options.useWarnings) {
			output.warnings = cc.warnings;
		}
		return output;
	}
	if (options.makePlist) {
		//eslint-disable-next-line @typescript-eslint/no-explicit-any
		return (<any>bplistc)(shortcut.build());
	}
	return shortcut;
}

export function inverse(data: WFShortcut | Buffer): string {
	const icc = new InverseConvertingContext();
	if (data instanceof Buffer) {
		data = <WFShortcut>bplistp.parseBuffer(data);
	}
	const result = icc.createActionsAble(Shortcut.inverse(data));
	return result;
}
