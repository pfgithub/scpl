// accepts AsAble[] and array of arg names in positions
// -> cb(argname, argvalue)

import { AsAble } from "./ParserData";
import { ConvertingContext } from "./Converter";
import { genShortName } from "./ActionData";

type ArgData<T> = { name: string; data: T };

export function ArgParser<T>(
	argnames: ArgData<T>[],
	cb: (arg: ArgData<T>, value: AsAble) => void,
	inputarg: (value: AsAble) => void,
	shouldEnable: (arg: ArgData<T>, value: AsAble) => boolean,
	data: { args: AsAble[]; cc: ConvertingContext }
) {
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
				const foundData = argnames.find(an => an.name === key);
				if (!foundData) {
					throw value.error(
						cc,
						`No argument exists with the name \`${key}\`. Arguments are: ${argnames
							.map(an => an.name)
							.join(`, `)}`
					);
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
