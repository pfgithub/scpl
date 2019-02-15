const {Shortcut, Action, Parameters, DictionaryItem, Text, MagicVariable, NamedVariable, Variable, Attachment, DictionaryFieldValue, Parameter, Aggrandizements, DictionaryKeyAggrandizement, CoercionAggrandizement, Aggrandizement} = require("./OutputData");

class Parse {
	constructor() {
	}
}

class DictionaryParse extends Parse {

}
class ListParse extends Parse {
	constructor(items) {
		super();
		this.items = items;
	}
	asList(cc) { // -> Parse[]
		// this.items is Parse[]
		return this.items;
	}
}
class BarlistParse extends ListParse {
	asText(cc) { // -> Text
		const finalText = new Text;
		this.items.forEach((item, i) => {
			finalText.add(item.asText());
			if(this.items.length - 1 !== i) {
				finalText.add("\n");
			}
		});
		// this.data.join`\n` but for non-strings
		// finalText.add(...this.data.items.map(i=>i.asText()));
		return finalText;
	}
}

class CharsParse extends Parse {
	// [...string|Parse(has asVariable)]
	constructor(items) {
		super();
		this.items = items;
	}
	asText(cc) {
		const text = new Text;
		this.items.forEach(item => {
			if(typeof item === "string") {
				return text.add(item);
			}
			return text.add(item.asVariable(cc));
		});
		return text;
	}
}
class IdentifierParse extends Parse {
	constructor(data) {
		super();
		this.value = data;
	}
	asText(cc) {
		const text = new Text;
		text.add(this.value);
		return text;
	}
}
class ParenthesisParse extends Parse {

}
class ParamListParse extends DictionaryParse {

}
class ActionParse extends Parse {
	asVariable(context) { // returns the Variable for this ActionParse
		
	}
	asAction(context) { // returns an Action for this ActionParse

	}
}
class VariableParse extends Parse {
	constructor(type, name, options) {
		super();
		this.type = type;
		this.name = name;
		this.options = options;
	}
	asVariable(context) {
		/*

		parse text -> "Parse" types
		WFAction.from(parseaction)







        ._.   ._.   ._.._.._.   ._.._.._.
        |||---|||   ||| ' |||   ||| ' |||
        '*'   '*'   '*'   '*'   '*'   '*'



     _
 ,'     '.
|         |
 `.  _  ,'









		Text "hi" -> mv:hi ;;;;; ??

,-.-.
| ' |

		 */
		// ...
		// namedvariables are easy
		// magic variables require a data object of all variables so they can have their json value
	}
}
class ArgflagParse extends Parse {
	// VariableParse
	constructor(data) {
		super(data);
	}
}
class InputArgParse extends ActionParse { // ? ¿
}
// Text::asString
// Text::build

function text(name, args) {
	const strarg = args[0];
	const text = strarg.asText();
}

module.exports = {
	ActionParse,
	DictionaryParse,
	CharsParse,
	IdentifierParse,
	InputArgParse,
	ParamListParse,
	BarlistParse,
	ListParse,
	VariableParse
};
