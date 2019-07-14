import * as builtin from "./OutActions.json";
import { ShortcutsActionSpec } from "./ActionDataTypes/ShortcutsActionSpec";

const actions = <{ [id: string]: ShortcutsActionSpec }>builtin;

export default actions;
