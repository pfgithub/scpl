"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShortcutsParser_1 = require("./src/ShortcutsParser");
const bplistc = require("bplist-creator");
const ParserData_1 = require("./src/ParserData");
exports.PositionedError = ParserData_1.PositionedError;
const Converter_1 = require("./src/Converter");
exports.ConvertingContext = Converter_1.ConvertingContext;
function parse(string, options) {
    const parsed = ShortcutsParser_1.default.parse(`${string}\n`, [1, 1]);
    if (!parsed.success) {
        throw new ParserData_1.PositionedError("Failed to parse anything", [1, 1], [100, 1]);
    }
    if (parsed.remainingStr) {
        if (!parsed.pos) {
            throw new Error("!parsed.pos");
        }
        throw new ParserData_1.PositionedError("Parsing error around here", parsed.pos, [parsed.pos[0] + 100, 0]);
    }
    let shortcut;
    try {
        shortcut = parsed.data.asShortcut();
    }
    catch (er) {
        if (er instanceof ParserData_1.PositionedError) {
            throw er;
        }
        throw new ParserData_1.PositionedError(`Unknown location in error: ${er.message}`, [1, 1], [100, 1]);
    }
    if (options.makePlist) {
        return bplistc(shortcut.build());
    }
}
exports.parse = parse;
