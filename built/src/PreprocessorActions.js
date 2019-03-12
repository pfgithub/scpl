"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const preprocessorActions = {
    "@set": (cc, name, value) => {
        if (!name.canBeString(cc)) {
            throw name.error(cc, "Name to set must be a string with no variables.");
        }
        cc.setParserVariable(name.asString(cc), value);
    },
    "@foreach": (cc, list, method) => {
        if (!list.canBeAbleArray(cc)) {
            throw list.error(cc, "List must be a list.");
        }
        if (!method.canBeAction(cc)) {
            throw method.error(cc, "Method must be action, for example `@{Text \"\\(@:repeatitem)\"}`");
        }
        list.asAbleArray(cc).forEach(item => {
            let newCC = cc.in();
            newCC.setParserVariable("repeatitem", item);
            method.asAction(newCC);
        });
    }
};
exports.default = preprocessorActions;
/*

current issue:
if value can be any AsAble, that can't become a class unless you changed all the values everywhere or something
canBeX checks if it has a property and the only way to fake that is have variables be proxies but that stops working
when you use .asString on them

possible "solution": if(instanceof PreprocessorVariable) {preprocessorvariable.getValue()}

*/
