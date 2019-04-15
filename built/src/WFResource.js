"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.WFResource = WFResource;
const resourceTypes = {}; // I can't figure out what to put the type as here
exports.resourceTypes = resourceTypes;
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
exports.WFWorkflowHiddenResource = WFWorkflowHiddenResource;
class WFParameterRelationResource extends WFResource {
    constructor(data) {
        super(data);
        this.relation = this._data.WFParameterRelation || "==";
        this.argInternalName = this._data.WFParameterKey;
        this.argValue = this._data.WFParameterValue;
        this.argValues = this._data.WFParameterValues || [this.argValue];
        const relations = {
            "==": 1,
            "!=": 1,
            ">=": 1,
            "<=": 1,
            ">": 1,
            "<": 1,
            "??": 1
        };
        if (!relations[this.relation]) {
            throw new Error(`RelationResource relation type ${this.relation} is not implemented.`);
        }
    }
    genDocs() {
        return `argument ${this.argInternalName} ${this.relation} \`${this
            .argValues.join `\` or \``}\``;
    }
    shouldEnable(action) {
        const currentValue = action.parameters.get(this.argInternalName);
        const currentValueNum = +currentValue;
        const isNum = !isNaN(currentValueNum);
        switch (this.relation) {
            case "==":
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
