"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShortcutsParser_1 = require("./src/ShortcutsParser");
const bplistc = require("bplist-creator");
const ParserData_1 = require("./src/ParserData");
exports.PositionedError = ParserData_1.PositionedError;
const Converter_1 = require("./src/Converter");
exports.ConvertingContext = Converter_1.ConvertingContext;
const OutputData_1 = require("./src/OutputData");
const InverseConvertingContext_1 = require("./src/InverseConvertingContext");
const bplistp = require("bplist-parser");
function parse(string, options) {
    const parsed = ShortcutsParser_1.default.parse(string, [1, 1]);
    if (!parsed.success) {
        throw new ParserData_1.PositionedError("Failed to parse anything", [1, 1], [100, 1]);
    }
    if (parsed.remainingStr) {
        if (!parsed.pos) {
            throw new Error("!parsed.pos");
        }
        throw new ParserData_1.PositionedError("Parsing error around here", parsed.pos, [
            parsed.pos[0] + 100,
            1
        ]);
    }
    let shortcut;
    try {
        shortcut = parsed.data.asShortcut(options.extraParseActions);
    }
    catch (er) {
        if (er instanceof ParserData_1.PositionedError) {
            throw er;
        }
        throw new ParserData_1.PositionedError(`Unknown location in error: ${er.message}`, [1, 1], [100, 1]);
    }
    if (options.make) {
        const data = shortcut.build();
        const output = {};
        if (options.make.indexOf("outputdata") > -1) {
            output.outputdata = shortcut;
        }
        if (options.make.indexOf("shortcutjson") > -1) {
            output.shortcutjson = data;
        }
        if (options.make.indexOf("shortcutplist") > -1) {
            output.shortcutplist = bplistc(data);
        }
        return output;
    }
    if (options.makePlist) {
        return bplistc(shortcut.build());
    }
    return shortcut;
}
exports.parse = parse;
function inverse(data) {
    const icc = new InverseConvertingContext_1.InverseConvertingContext();
    if (data instanceof Buffer) {
        data = bplistp.parseBuffer(data);
    }
    let result = icc.createActionsAble(OutputData_1.Shortcut.inverse(data));
    return result;
}
exports.inverse = inverse;
