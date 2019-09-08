// accepts AsAble[] and array of arg names in positions
// -> cb(argname, argvalue)

import { AsAble } from "./ParserData";
import { ConvertingContext } from "./Converter";
import { genShortName } from "./ActionData";

type ArgData<T> = { name: string; data: T };

export function simpleParse<NamesArray extends string>(
	cc: ConvertingContext,
	names: NamesArray[],
	args: AsAble[]
): { [key in NamesArray]: AsAble | undefined } {
	const res: { [key: string]: AsAble | undefined } = {};
	ArgParser<undefined>(
		names.map(n => ({ name: n, data: undefined })),
		(arg, value) => {
			res[arg.name] = value;
		},
		value => {
			throw value.error(cc, "InputArg is not allowed for this function");
		},
		(_arg, _value) => {
			return true;
		},
		{ args, cc }
	);
	return res as any;
}
export function ArgParser(
	argnames: "any",
	cb: (arg: ArgData<string>, value: AsAble) => void,
	inputarg: (value: AsAble) => void,
	shouldEnable: (arg: ArgData<string>, value: AsAble) => boolean,
	data: { args: AsAble[]; cc: ConvertingContext },
	handlers?: {
		noArgumentExistsHandler?: (
			realKey: string,
			value: AsAble,
			paramList: string[]
		) => void;
	}
): void;
export function ArgParser<T>(
	argnames: ArgData<T>[],
	cb: (arg: ArgData<T>, value: AsAble) => void,
	inputarg: (value: AsAble) => void,
	shouldEnable: (arg: ArgData<T>, value: AsAble) => boolean,
	data: { args: AsAble[]; cc: ConvertingContext },
	handlers?: {
		noArgumentExistsHandler?: (
			realKey: string,
			value: AsAble,
			paramList: string[]
		) => void;
	}
): void;
export function ArgParser<T>(
	argnames: ArgData<T>[] | "any",
	cb: (arg: ArgData<T> | ArgData<string>, value: AsAble) => void,
	inputarg: (value: AsAble) => void,
	shouldEnable: (arg: ArgData<T> | ArgData<string>, value: AsAble) => boolean,
	data: { args: AsAble[]; cc: ConvertingContext },
	handlers: {
		noArgumentExistsHandler?: (
			realKey: string,
			value: AsAble,
			paramList: string[]
		) => void;
	} = {}
) {
	if (!handlers.noArgumentExistsHandler) {
		handlers.noArgumentExistsHandler = (key, value, paramList) => {
			throw value.error(
				cc,
				`No argument exists with the name \`${key}\`. Arguments are: ${paramList.join(
					", "
				)}`
			);
		};
	}
	const cc = data.cc;
	let parami = 0;
	const setArgs: string[] = [];
	data.args.forEach(param => {
		if (param.special === "InputArg") {
			if (!param.canBeAction(cc)) {
				throw param.error(
					cc,
					"InputArg fields only accept actions and variables."
				);
			}
			inputarg(param);
			return;
		}
		if (param.special === "Arglist") {
			if (!param.canBeRawKeyedDictionary(cc)) {
				throw param.error(
					cc,
					"ArgList fields only accept dictionaries."
				);
			}
			const dictionary = param.asRawKeyedDictionary(cc);
			Object.keys(dictionary).forEach(key_ => {
				const key = genShortName(key_);
				const value = dictionary[key_];
				const foundData =
					argnames === "any"
						? { name: key_, data: key_ }
						: argnames.find(an => an.name === key);
				if (!foundData) {
					handlers.noArgumentExistsHandler &&
						handlers.noArgumentExistsHandler(
							key_,
							value,
							argnames === "any"
								? ["anything"]
								: argnames.map(an => an.name)
						);
					return;
				}
				if (setArgs.indexOf(key) > -1) {
					throw value.error(
						cc,
						`The argument \`${key}\` has already been set for this function.`
					);
				}
				setArgs.push(key);
				cb(foundData, value);
			});
			return;
		}

		if (argnames === "any") {
			throw param.error(
				cc,
				"Labels are required on functions with variable numbers of arguments."
			);
		}

		let paramname;
		while (!paramname) {
			paramname = argnames[parami];

			if (!paramname) {
				throw param.error(
					cc,
					`This action does not have any more arguments. Arguments are: ${argnames
						.map(an => an.name)
						.join(`, `)}`
				);
			}
			if (setArgs.indexOf(paramname.name) > -1) {
				paramname = undefined;
				parami++;
				continue;
			}
			setArgs.push(paramname.name);

			if (!shouldEnable(paramname, param)) {
				paramname = undefined;
				parami++;
				continue;
			}

			parami++;
		}

		cb(paramname, param);
	});
}
