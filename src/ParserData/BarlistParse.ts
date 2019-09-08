import { ConvertingContext } from "../Converter";
import {
	ListParse,
	AsText,
	AsString,
} from "../ParserData";
import { Text } from "../OutputData";

export class BarlistParse extends ListParse implements AsText, AsString {
	canBeString(_cc: ConvertingContext): true {
		return true;
	}
	asString(cc: ConvertingContext) {
		return this.items
			.map(item => {
				if (!item.canBeString(cc)) {
					item.warn(
						cc,
						"This barlist can only contain strings with no variables."
					);
					return "[variable]";
				}
				return item.asString(cc);
			})
			.join("\n");
	}
	canBeText(_cc: ConvertingContext): true {
		return true;
	}
	asText(cc: ConvertingContext) {
		// -> Text
		const finalText = new Text();
		this.items.forEach((item, i) => {
			if (!item.canBeText(cc)) {
				throw item.error(cc, "This barlist can only contain strings.");
			}
			finalText.add(item.asText(cc));
			if (this.items.length - 1 !== i) {
				finalText.add("\n");
			}
		});
		// this.data.join`\n` but for non-strings
		// finalText.add(...this.data.items.map(i=>i.asText()));
		return finalText;
	}
	canBeTimeOffsetParameter(_cc: ConvertingContext): true {
		return <true>false; // hmm...
	}
}