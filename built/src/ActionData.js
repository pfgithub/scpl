"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const OutputData_1 = require("./OutputData");
const HelpfulActions_1 = require("./HelpfulActions");
const ParserData_1 = require("./ParserData");
const Actions_1 = require("./Data/Actions");
function genShortName(longName, internalName) {
    // lower case
    let shortName = (longName || internalName || "nameless").toLowerCase();
    // remove special characters
    shortName = shortName.replace(/[^A-Za-z0-9]/g, "");
    return shortName;
}
class WFResource {
    constructor(data) {
        this._data = data;
    }
    shouldEnable(_action) {
        return true;
    }
    genDocs() {
        return `Always enabled`;
    }
}
const resourceTypes = {}; // I can't figure out what to put the type as here
class WFDeviceAttributesResource extends WFResource {
    shouldEnable(_action) {
        return true;
    }
    genDocs() {
        return `Device attributes match \`${JSON.stringify(this._data.WFDeviceAttributes)}\` This action is always enabled inside Shortcutslang.`;
    }
}
resourceTypes.WFDeviceAttributesResource = WFDeviceAttributesResource;
class WFWorkflowTypeResource extends WFResource {
    shouldEnable(_action) {
        return true;
    }
    genDocs() {
        return `Workflow type is \`${this._data.WFWorkflowType}\`. This action is always enabled inside Shortcutslang.`;
    }
}
resourceTypes.WFWorkflowTypeResource = WFWorkflowTypeResource;
class WFWorkflowHiddenResource extends WFResource {
    shouldEnable(_action) {
        return false;
    }
    genDocs() {
        return `This action is always **disabled** inside Shortcutslang.`;
    }
}
class WFParameterRelationResource extends WFResource {
    constructor(data) {
        super(data);
        this.relation = this._data.WFParameterRelation || "=";
        this.argInternalName = this._data.WFParameterKey;
        this.argValue = this._data.WFParameterValue;
        this.argValues = this._data.WFParameterValues || [this.argValue];
        const relations = { "=": 1, "!=": 1, ">=": 1, "<=": 1, ">": 1, "<": 1, "??": 1 };
        if (!(relations)[this.relation]) {
            throw new Error(`RelationResource relation type ${this.relation} is not implemented.`);
        }
    }
    genDocs() {
        return `argument ${this.argInternalName} ${this.relation} \`${this.argValues.join `\` or \``}\``;
    }
    shouldEnable(action) {
        const currentValue = action.parameters.get(this.argInternalName);
        const currentValueNum = +currentValue;
        const isNum = !isNaN(currentValueNum);
        switch (this.relation) {
            case "=":
                return this.argValues.some((val) => val === currentValue);
            case "!=":
                return this.argValues.indexOf(currentValue) === -1;
            case ">=":
                if (!isNum) {
                    return false;
                }
                return currentValueNum >= this.argValue;
            case "<=":
                if (!isNum) {
                    return false;
                }
                return currentValueNum <= this.argValue;
            case ">":
                if (!isNum) {
                    return false;
                }
                return currentValueNum > this.argValue;
            case "<":
                if (!isNum) {
                    return false;
                }
                return currentValueNum < this.argValue;
            case "??":
                return action.parameters.has(this.argInternalName);
            default:
                throw new Error(`RelationResource relation type ${this.relation} is not implemented.`);
        }
    }
}
resourceTypes.WFParameterRelationResource = WFParameterRelationResource;
class WFParameter {
    constructor(data, typeName) {
        this._data = data;
        this.defaultValue = this._data.DefaultValue;
        this.requiredResources = this._data.RequiredResources || [];
        this.allowsVariables = (this._data.DisallowedVariableTypes || []).join `` !== "AskVariable";
        this.name = this._data.Label;
        this.internalName = this._data.Key;
        this.shortName = genShortName(this.name, this.internalName);
        this.name = this.name || this.shortName;
        this.typeName = typeName;
        this.requiredResources = this.requiredResources.map((resource) => {
            const type = resource.WFResourceClass;
            const resourceClass = resourceTypes[type];
            if (!resourceClass) {
                throw new Error(`${type} is not a defined resource class.`);
            }
            // @ts-ignore
            return new resourceClass(resource);
        });
        if (this._data.Hidden) {
            this.requiredResources.push(new WFWorkflowHiddenResource({ Hidden: true }));
        }
    }
    shouldEnable(action) {
        return this.requiredResources.every((resource) => resource.shouldEnable(action));
    }
    genDocsArgName() {
        return "[???]";
    }
    genDocsAutocompletePlaceholder() {
        return `:${this._data.DefaultValue ? `${this.genDocsArgName()}:"${this._data.DefaultValue}"` : `${this.genDocsArgName()}`}`;
    }
    genDocs() {
        let docs = `### ${this.typeName}: ${this.name} / ${this.shortName} (internally \`${this.internalName}\`)\n`;
        if (this._data.Placeholder) {
            docs += `**Placeholder**:
\`\`\`
${this._data.Placeholder}
\`\`\`
`;
        }
        if (this._data.DefaultValue) {
            docs += `**Default Value**:
\`\`\`
${this._data.DefaultValue}
\`\`\`
`;
        }
        if (this.allowsVariables) {
            docs += `**Allows Variables**: ${this.allowsVariables}\n\n`;
        }
        docs += `${this.requiredResources.map(resource => `**Only enabled if**: ${resource.genDocs()}`).join("\n\n")}`;
        return docs;
    }
    build(_cc, parse) {
        throw parse.error("Cannot build undefined parameter");
    }
}
const types = {};
class WFEnumerationParameter extends WFParameter {
    constructor(data, name) {
        super(data, name || "Enumeration");
        this.options = this._data.Items;
    }
    genDocsAutocompletePlaceholder() {
        return `|${this.options.map(o => `"${o}"`).join(",")}${this.allowsVariables ? `,variable` : ``}|`;
    }
    genDocsArgName() {
        const strInfo = this.options.join(" | ");
        return this.allowsVariables ? `[string <${strInfo}>]` : `[string <${strInfo}>|variable]`;
    }
    genDocs() {
        return `${super.genDocs()}

Accepts a string ${this.allowsVariables ? `
or variable` : ""}
containing one of the options:

- \`${this.options.join(`\`\n- \``)}\``;
    }
    build(cc, parse) {
        // asVariable may require additional actions to be inserted above this one.
        // for example, if ^("hello") (v:comparison) "hi"
        if (ParserData_1.canBeVariable(parse)) {
            const res = parse.asVariable(cc);
            if (!this.allowsVariables) {
                throw parse.error("This enumeration field does not allow variables.");
            }
            return res;
        }
        else if (ParserData_1.canBeString(parse)) {
            const res = parse.asString(); // asString returns a string like ""
            if (this.options.indexOf(res) > -1) {
                return res;
            }
            throw parse.error(`This enumeration field can only be one of the following: ${this.options.join(", ")}`);
        }
        else {
            throw parse.error("This enumeration field only accepts strings and variables.");
        }
    }
}
types.WFEnumerationParameter = WFEnumerationParameter;
class WFStorageServicePickerParameter extends WFEnumerationParameter {
    constructor(data, name) {
        super(data, name || "Storage Service Picker");
        this.options = ["iCloud Drive", "Dropbox"];
    }
}
types.WFStorageServicePickerParameter = WFStorageServicePickerParameter;
class WFWorkflowPickerParameter extends WFParameter {
    constructor(data, name = "Shortcut Picker") {
        super(data, name);
    }
    genDocsArgName() {
        return `[string|variable]`;
    }
    genDocs() {
        return `${super.genDocs()}

	Accepts a string ${this.allowsVariables ? `
	or variable` : ""}
	with the name of the shortcut to run`;
    }
    build(cc, parse) {
        // asVariable may require additional actions to be inserted above this one.
        // for example, if ^("hello") (v:comparison) "hi"
        if (ParserData_1.canBeVariable(parse)) {
            const res = parse.asVariable(cc);
            return res;
        }
        else if (ParserData_1.canBeString(parse)) {
            const res = parse.asString(); // asString returns a string like ""
            return res;
        }
        throw parse.error("This shortcut field only accepts strings and variables.");
    }
}
types.WFWorkflowPickerParameter = WFWorkflowPickerParameter;
class WFNumberFieldParameter extends WFParameter {
    constructor(data, name = "Number") {
        super(data, name);
    }
    genDocsArgName() {
        return this.allowsVariables ? `[number]` : `[number|variable]`;
    }
    genDocs() {
        return `${super.genDocs()}

Accepts a number ${this.allowsVariables ? `
or variable` : ""}
with a number.`;
    }
    build(cc, parse) {
        if (ParserData_1.canBeVariable(parse)) {
            const res = parse.asVariable(cc);
            if (!this.allowsVariables) {
                throw parse.error("This number field does not allow variables.");
            }
            return res;
        }
        else if (ParserData_1.canBeNumber(parse)) {
            const num = parse.asNumber(); // asString returns a string like "" <-- that's a string
            return num;
        }
        throw parse.error("This number field only accepts variables or numbers");
    }
}
types.WFNumberFieldParameter = WFNumberFieldParameter;
class WFStepperParameter extends WFNumberFieldParameter {
    constructor(data) {
        super(data, "Stepper Number");
    }
    build(cc, parse) {
        const val = super.build(cc, parse);
        if (typeof val === "number") {
            if (!Number.isInteger(val) || val < 0) {
                throw parse.error("This stepper number field can only contain positive integer numbers");
            }
        }
        return val;
    }
}
class WFSliderParameter extends WFNumberFieldParameter {
    constructor(data) {
        super(data, "Slider Number");
    }
    build(cc, parse) {
        const val = super.build(cc, parse);
        if (typeof val === "number") {
            if (val < 0 || val > 1) {
                throw parse.error("This number field can only contain numbers from 0 to 1");
            }
        }
        return val;
    }
}
types.WFStepperParameter = WFStepperParameter;
class WFContentArrayParameter extends WFParameter {
    constructor(data) {
        super(data, "List");
    }
    genDocsArgName() {
        return `[list]`;
    }
    genDocs() {
        return `${super.genDocs()}

Accepts a list.`;
    }
    build(cc, parse) {
        if (!ParserData_1.canBeList(parse)) {
            throw parse.error("To make a content array, the argument must be a list");
        }
        const list = parse.asList(cc);
        return list;
    }
}
types.WFContentArrayParameter = WFContentArrayParameter;
types.WFArrayParameter = class extends WFContentArrayParameter {
}; // not sure what the difference is
types.WFSliderParameter = WFSliderParameter;
class WFVariablePickerParameter extends WFParameter {
    constructor(data) {
        super(data, "Variable Picker");
    }
    genDocsArgName() {
        return `[variable]`;
    }
    genDocs() {
        return `${super.genDocs()}

Accepts a variable.`;
    }
    build(cc, parse) {
        if (!ParserData_1.canBeVariable(parse)) {
            throw parse.error("To make a variable picker, the argument must be a variable");
        }
        const variable = parse.asVariable(cc);
        return variable;
    }
}
types.WFVariablePickerParameter = WFVariablePickerParameter;
class WFTextInputParameter extends WFParameter {
    constructor(data, name) {
        super(data, name || "Text");
    }
    genDocsArgName() {
        return !this.allowsVariables ? `[string]` : `[string|text]`;
    }
    genDocs() {
        return `${super.genDocs()}

Accepts a string ${this.allowsVariables ? `
or text` : ""}
with the text.`;
    }
    build(cc, parse) {
        if (!this.allowsVariables) {
            if (!ParserData_1.canBeString(parse)) {
                throw parse.error("To make a text input that does not allow variables, the argument must be a string");
            }
            return parse.asString();
        }
        if (!ParserData_1.canBeText(parse)) {
            throw parse.error("To make a text input, the argument must be a text");
        }
        return parse.asText(cc);
    }
}
types.WFTextInputParameter = WFTextInputParameter;
class WFDateFieldParameter extends WFTextInputParameter {
    constructor(data, name) {
        super(data, name || "Date");
    }
}
types.WFDateFieldParameter = WFDateFieldParameter;
class WFEmailAddressFieldParameter extends WFParameter {
    constructor(data) {
        super(data, "Text Input");
    }
    genDocsArgName() {
        return `[string|string array|variable]`;
    }
    genDocs() {
        return `${super.genDocs()}

Accepts a string or string array or variable of email addresses.`;
    }
    build(cc, parse) {
        if (ParserData_1.canBeVariable(parse)) {
            return parse.asVariable(cc);
        }
        if (ParserData_1.canBeArray(parse)) {
            return parse.asArray();
        }
        if (ParserData_1.canBeString(parse)) {
            return [parse.asString()];
        }
        throw parse.error("To make an email address, the argument must be a variable, array, or string");
    }
}
types.WFEmailAddressFieldParameter = WFEmailAddressFieldParameter;
class WFDictionaryParameter extends WFParameter {
    constructor(data) {
        super(data, "Dictionary");
    }
    genDocsArgName() {
        return `[dictionary]`;
    }
    genDocs() {
        return `${super.genDocs()}

Accepts a dictionary.`;
    }
    build(cc, parse) {
        if (!ParserData_1.canBeDictionary(parse)) {
            throw parse.error("To make a dictionary, the argument must be a dictionary");
        }
        return parse.asDictionary(cc);
    }
}
types.WFDictionaryParameter = WFDictionaryParameter;
class WFSwitchParameter extends WFParameter {
    constructor(data) {
        super(data, "Switch");
    }
    genDocsArgName() {
        return this.allowsVariables ? `[string boolean|variable]` : `[string boolean]`;
    }
    genDocs() {
        return `${super.genDocs()}

Accepts a boolean${this.allowsVariables ? `
or a variable.` : ""}`;
    }
    build(cc, parse) {
        if (ParserData_1.canBeVariable(parse)) {
            if (!this.allowsVariables) {
                throw parse.error("This boolean field does not accept variables");
            }
            return parse.asVariable(cc);
        }
        else if (ParserData_1.canBeBoolean(parse)) {
            return parse.asBoolean();
        }
        throw parse.error("This boolean field only accepts booleans or variables");
    }
}
types.WFSwitchParameter = WFSwitchParameter;
class WFExpandingParameter extends WFParameter {
    constructor(data) {
        super(data, "Expand Arrow");
        this.allowsVariables = false;
    }
    genDocsArgName() {
        return `[boolean]`;
    }
    genDocs() {
        return `${super.genDocs()}

Accepts a boolean for if this
parameter is expanded or not.`;
    }
    build(_cc, parse) {
        if (ParserData_1.canBeBoolean(parse)) {
            return parse.asBoolean();
        }
        throw parse.error("This expanding field only accepts booleans");
    }
}
types.WFExpandingParameter = WFExpandingParameter;
class WFVariableFieldParameter extends WFParameter {
    constructor(data) {
        super(data, "Variable Field");
    }
    genDocsArgName() {
        return `[string|variable v:variableName]`;
    }
    genDocs() {
        const docs = `${super.genDocs()}

Accepts a string with the name of the named variable (v:) you want to set,
or a named variable (v:) that you want to set.
`;
        return docs;
    }
    build(cc, parse) {
        const varname = ParserData_1.canBeString(parse) ? parse.asString() : ParserData_1.canBeStringVariable(parse) ? parse.asStringVariable() : (() => { throw parse.error("To make a variable field, the argument must be a string or string variable"); })();
        cc.vardata[varname] = true;
        return varname;
    }
}
types.WFVariableFieldParameter = WFVariableFieldParameter;
const _debugMissingTypes = {};
const _debugTypes = {};
class WFAction {
    constructor(data, id) {
        this._data = data;
        this.id = id;
        this.isComplete = true;
        this._parameters = [];
        if (this._data.Parameters) {
            this._parameters = this._data.Parameters.map((param) => {
                _debugTypes[param.Class] = {
                    paramClass: param.Class,
                    missing: !types[param.Class],
                    count: _debugTypes[param.Class]
                        ? _debugTypes[param.Class].count + 1
                        : 1
                };
                if (types[param.Class]) {
                    const type = types[param.Class];
                    return new type(param);
                }
                this.isComplete = false;
                _debugMissingTypes[param.Class] =
                    _debugMissingTypes[param.Class] !== undefined
                        ? _debugMissingTypes[param.Class] + 1
                        : 1;
                return `This paramtype is not implemented. ${param.Class}`;
            });
        }
        this.internalName = this.id;
        this.name = this._data.Name;
        this.shortName = genShortName(this.name, this.internalName);
        this.name = this.name || this.shortName;
    }
    get actionOutputType() {
        // TODO !!! used for the default output type in variables
        return this._data.Output.Types[0];
    }
    get inputPassthrough() {
        return this._data.InputPassthrough;
    }
    get hasVariable() {
        return !this.inputPassthrough;
    }
    get requiresInput() {
        return true;
    }
    genDocsParams() {
        return this._parameters.map(param => {
            if (typeof param === "string") {
                return { argType: `[???]` };
            }
            return {
                argName: param.shortName,
                argType: param.genDocsArgName(),
                argAutocompletePlaceholder: param.genDocsAutocompletePlaceholder()
            };
        });
    }
    genDocsAutocompleteUsage() {
        return `${this.shortName} a{
${this.genDocsParams().map((arg, i) => `  ${arg.argName}=\${${i + 1}${arg.argAutocompletePlaceholder}}`).join(",\n")}
}${this._data.BlockInfo ? this._data.BlockInfo.Completion : ""}
`;
    }
    genDocsUsage() {
        return `\`\`\`
${this.shortName} a{${this.genDocsParams().map(({ argName, argType }) => `${argName}=${argType}`).join(" ")}}${this._data.BlockInfo ? this._data.BlockInfo.Example : ""}
\`\`\``;
    }
    genDocs() {
        const docs = `
## ${this.name} / ${this.shortName} (internally \`${this.internalName}\`)
${this.isComplete ? "" : `
> This action is not yet complete. Some arguments may be missing.
`}${this._data.RequiredResources ? `
> This action requires that Shortcuts has permission to use ${this._data.RequiredResources}.
` : ""}${this._data.BlockInfo ? `
> This action has a block. Make sure to end it with an end. (More info in usage below)
` : ""}
${this._data.Description ? `
## description${this._data.Description.DescriptionSummary ? `

### summary

${this._data.Description.DescriptionSummary}
` : ""}${this._data.Description.DescriptionInput ? `

### input

${this._data.Description.DescriptionInput}
` : ""}${this._data.Description.DescriptionResult ? `

### output

${this._data.Description.DescriptionResult}` : ""}` : ""}

### usage
${this.genDocsUsage()}

### arguments

---

${this._parameters.map(param => (typeof param === "string") ? `#### ${param}` : param.genDocs()).join(`

---

`)}

---

### source json

\`\`\`json
${JSON.stringify(this._data, null, "\t")}
\`\`\`
`;
        return docs;
    }
    build(cc, controlFlowData, ...params) {
        let parami = 0;
        let actionAbove = cc.lastVariableAction;
        // TODO actionAbove = cc.lastVariableAction
        //
        const action = new OutputData_1.Action(this.name, this.id);
        if (controlFlowData) {
            const { uuid, number } = controlFlowData;
            action.parameters.set("WFControlFlowMode", number);
            action.parameters.set("GroupingIdentifier", uuid);
            params = []; // Params should be ignored if we are a second or third... in control flow
        }
        else if (this._data.BlockInfo) {
            // this action has a block.
            const { uuid, number } = cc.pushControlFlow(this); // Add the controlflow
            action.parameters.set("WFControlFlowMode", number);
            action.parameters.set("GroupingIdentifier", uuid);
        }
        params.forEach(param => {
            if (param.special === "InputArg") {
                if (!ParserData_1.canBeAction(param)) {
                    throw param.error("To use a param as an inputarg, it must be an action");
                }
                actionAbove = param.asAction(cc);
                return;
            }
            if (param.special === "ControlFlowMode") {
                throw param.error("ControlFlowMode is no longer implemented. Please use the Flow and End actions instead.");
            }
            if (param.special === "Arglist") {
                if (!ParserData_1.canBeRawKeyedDictionary(param)) {
                    throw new Error("To use a param as an arglist, it must be a raw keyed dictionary");
                }
                const dictionary = param.asRawKeyedDictionary();
                Object.keys(dictionary).forEach(key => {
                    const value = dictionary[key];
                    const shortKey = genShortName(key);
                    const paramtype = this._parameters.find(param => typeof param !== "string" && param.shortName === shortKey);
                    if (typeof paramtype === "string") {
                        throw value.error("Internal error, this code should be unreachable");
                    }
                    if (!paramtype) {
                        throw param.error(`This action does not have a parameter named ${shortKey}.`);
                    }
                    if (action.parameters.has(paramtype.internalName)) {
                        throw new Error(`The parameter named ${shortKey} was already set.`);
                    }
                    action.parameters.set(paramtype.internalName, paramtype.build(cc, value));
                });
                return;
            }
            let paramtype;
            while (!paramtype) {
                paramtype = this._parameters[parami];
                if (!paramtype) {
                    throw param.error(`There are no more arguments for this action.`);
                }
                if (typeof paramtype === "string") {
                    throw param.error(`This action is not supported yet. Reason: ${paramtype}`);
                }
                if (action.parameters.has(paramtype.internalName)) {
                    paramtype = undefined;
                    parami++;
                    continue;
                } // Param [name] was already set
                if (!paramtype.shouldEnable(action)) {
                    paramtype = undefined;
                    parami++;
                    continue;
                } // If the required resources are not set, skip
                parami++;
            }
            action.parameters.set(paramtype.internalName, paramtype.build(cc, param));
        });
        if (actionAbove && this.requiresInput && actionAbove.uuid !== (cc.lastVariableAction || { uuid: undefined }).uuid) {
            cc.add(HelpfulActions_1.getVariable(new OutputData_1.MagicVariable(actionAbove)));
        }
        // TODO if(actionAbove) cc.add(getVariableAction(actionAbove))
        cc.add(action);
        return action;
    }
}
exports.WFAction = WFAction;
// let textAction = new WFAction(actionList[0]["is.workflow.actions.gettext"], "is.workflow.acitons.gettext");
// console.log(
// 	textAction.build(new IdentifierParse("Hellothere"))
// );
const actionsByName = {};
const actionsByID = {};
Object.keys(Actions_1.default).forEach(key => {
    // console.log(key);
    const value = Actions_1.default[key];
    const action = new WFAction(value, key);
    if (actionsByName[action.shortName]) {
        console.warn(`WARNING, ${action.shortName} (${action.internalName}) is already defined`); //eslint-disable-line no-console
        return;
    }
    actionsByID[key] = action;
    actionsByName[action.shortName] = action;
    // actions[action.name.toLowerCase().split` `.join``] = action;
});
function genReadme() {
    const totalActions = Object.keys(actionsByID).length;
    const completedActions = Object.values(actionsByID).filter(action => action.isComplete).length;
    const typeList = Object.values(_debugTypes)
        .sort((a, b) => a.count - b.count)
        .map(({ paramClass, count, missing }) => `- [${missing ? " " : "x"}] ${missing ? "" : "Complete - "}${count}: ${paramClass}`);
    return `[![Banner image](image0.jpg)](https://pfgithub.github.io/shortcutslang/)

Banner by ROP#2788 on the [routinehub.co](https://routinehub.co) discord server.



# Shortcutslang

[Getting Started Guide](https://pfgithub.github.io/shortcutslang/gettingstarted.html)

[Syntax Documentation](https://pfgithub.github.io/shortcutslang/syntax.html)

[Try Shortcutslang in a web browser](https://pfgithub.github.io/shortcutslang/tryit.html)

${completedActions}/${totalActions} builtin actions supported

## All Actions:

${Object.values(actionsByID).sort((a, b) => a.name > b.name ? 1 : (a.name < b.name ? -1 : 0)).map(action => `- [${action.name}](actions/${action.shortName})${action.isComplete ? "" : " (Incomplete)"}`).join(`\n`)}

## Parameter Types:

\\# actions used in: parameter type

${typeList.join(`\n`)}

`;
}
exports.genReadme = genReadme;
/*
console.log("All Actions:", Object.keys(actionsByID).length);
console.log("Complete   :", Object.values(actionsByID).filter(action=>action.isComplete).length);
console.log("Missing    :", Object.keys(_debugMissingTypes).length);
console.log("List:", Object.keys(_debugMissingTypes)
    .map(a=>[a, _debugMissingTypes[a]])
    .sort((a, b) => a[1] - b[1])
    .map(([a, b])=>`${a}: ${b}`)
);
*/
function getActionFromID(id) {
    if (!actionsByID[id]) {
        throw new Error(`There is no action with the id \`${id}\``);
    }
    return actionsByID[id];
}
exports.getActionFromID = getActionFromID;
function getActionFromName(name) {
    name = name.toLowerCase();
    if (!actionsByName[name]) {
        return undefined;
    }
    return actionsByName[name];
}
exports.getActionFromName = getActionFromName;
exports.allActions = Object.values(actionsByID);
// let getValueForKeyAction = new WFAction(actionList[0]["is.workflow.actions.getvalueforkey"], "is.workflow.acitons.getvalueforkey");
// console.log(
// 	getValueForKeyAction.build(
// 		new IdentifierParse("Value"),
// 		new IdentifierParse("myvalue")
// 	).build()
// );
