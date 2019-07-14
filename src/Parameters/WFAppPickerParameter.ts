import { ConvertingContext } from "../Converter";
import { AsAble } from "../ParserData";
import { appNames } from "../Data/AppNames";

import { WFParameter } from "./WFParameter";

import { ShortcutsAppPickerParameterSpec } from "../Data/ActionDataTypes/ShortcutsParameterSpec";

export class WFAppPickerParameter extends WFParameter {
	_data: ShortcutsAppPickerParameterSpec;
	constructor(
		data: ShortcutsAppPickerParameterSpec,
		name = "App",
		docs: string = "https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields"
	) {
		super(data, name, docs);
		this._data = data;
	}
	genDocsArgName() {
		return `("app name" | "com.identifier.for.app")]`;
	}
	genDocs() {
		return `${super.genDocs()}

Accepts a string containing a supported app or an app identifier.
You can use [this shortcut](https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8) to get an app identifier for an unsupported app.
Supported apps are:
${Object.keys(appNames)
	.map(appName => `- \`${appName}\` (${appNames[appName].name})`)
	.join("\n")}
- Any other app by entering its id from [this shortcut](https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8)
		`;
	}
	build(cc: ConvertingContext, parse: AsAble) {
		if (parse.canBeString(cc)) {
			const res = parse.asString(cc);
			const appName = res.toLowerCase().replace(/[^a-z0-9]/g, "");
			if (appNames[appName]) {
				return appNames[appName].id;
			}
			if (res.indexOf(".") === -1) {
				throw parse.error(
					cc,
					`The app ${res} is not supported by default. Enter its app id which you can get from this shortcut: https://www.icloud.com/shortcuts/7aff3fcdd0ca4bbc9c0d1b70e2825ed8 (More info on the documentation page for this action)`
				);
			}
			return res;
		}
		throw parse.error(
			cc,
			`${
				this.name
			} fields can only contain strings with an app name or identifier.`
		);
	}
}
