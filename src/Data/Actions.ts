import * as deepmerge from "deepmerge";

import * as builtin from "./Shortcuts 2.1.2.json";
import * as overrides from "./Overrides.json";

const merged: any = deepmerge(<any>builtin[0], <any>overrides[0]);

merged["is.workflow.actions.documentpicker.open"].Parameters[4].Hidden = true;

export default merged;
