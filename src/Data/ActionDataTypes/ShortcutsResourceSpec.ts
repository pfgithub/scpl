import { ShortcutsResourceClass } from "./Strings/ShortcutsResourceClass";
import { ShortcutsAppIdentifier } from "./Strings/ShortcutsAppIdentifier";

type Relation = "==" | "!=" | ">=" | "<=" | ">" | "<";

export type ShortcutsBaseResourceSpec = {
	WFResourceClass: ShortcutsResourceClass;
	RequiredResources?: ShortcutsResourceSpec[];
};

export type ShortcutsUserInteractionResourceSpec = ShortcutsBaseResourceSpec;

export type ShortcutsParameterRelationResourceSpec =
	| ShortcutsBaseResourceSpec & {
			WFParameterKey: string;
			WFParameterValue: string | number | boolean;
			WFParameterRelation?: Relation;
	  }
	| {
			WFParameterKey: string;
			WFParameterValues: (string | number | boolean)[];
			WFParameterRelation?: Relation;
	  }
	| {
			WFParameterKey: string;
			WFParameterRelation?: "??";
	  };

export type ShortcutsUnavailableResourceSpec = ShortcutsBaseResourceSpec & {
	WFUnavailableResourceReason: string;
};
/*
WFDeviceAttributes: {
	WFDeviceAttributeSystemVersion: {
		WFSystemVersion: "10.3",
		WFSystemVersionRelation: ">="
	}
},
WFResourceClass: "WFDeviceAttributesResource"
*/
export type ShortcutsDeviceAttributesResourceSpec = ShortcutsBaseResourceSpec & {
	WFDeviceAttributes: {
		WFDeviceAttributeSystemVersion?: {
			WFSystemVersion: string;
			WFSystemVersionRelation?: Relation;
		};
		WFDeviceAttributeIdiom?: "Phone" | "Pad";
		WFDeviceAttributeCapabilities?: "Vibration"[];
	};
};

export type ShortcutsWorkflowTypeResourceSpec = ShortcutsBaseResourceSpec & {
	WFWorkflowType: "WatchKit";
};

export type ShortcutsAppInstalledResourceSpec = ShortcutsBaseResourceSpec & {
	AppIdentifier: ShortcutsAppIdentifier;
};

export type ShortcutsHealthKitAccessResourceSpec = ShortcutsBaseResourceSpec & {
	AccessType?: "Read" | "Write";
	ReadableObjectTypeIdentifierKeyPath?: string;
	ReadableType?: "Quantity" | "Category" | "Workout";
	ReadableObjectTypeIdentifierParameterKey?: string;
	Resources?: (
		| {
				AccessType: "Write";
				ReadableType: "Workout";
		  }
		| {
				AccessType: "Write";
				ReadableObjectTypeIdentifier: "Walking + Running Distance";
				ReadableType: "Quantity";
		  }
		| {
				AccessType: "Write";
				ReadableObjectTypeIdentifier: "Active Calories";
				ReadableType: "Quantity";
		  })[];
};

export type ShortcutsAccountAccessResourceSpec = ShortcutsBaseResourceSpec & {
	WFAccountClass:
		| "WFImgurAccount"
		| "WFSlackAccount"
		| "WFTodoistAccount"
		| "WFWordPressAccount"
		| "WFWunderlistAccount";
};

export type ShortcutsEmailAccessResourceSpec = ShortcutsBaseResourceSpec;

export type ShortcutsTumblrAccessResourceSpec = ShortcutsBaseResourceSpec;

type _rc<N extends string> = { WFResourceClass: N };

export type ShortcutsResourceSpec =
	| ShortcutsResourceClass
	| (ShortcutsUserInteractionResourceSpec & _rc<"WFUserInteractionResource">)
	| (ShortcutsParameterRelationResourceSpec &
			_rc<"WFParameterRelationResource">)
	| (ShortcutsUnavailableResourceSpec & _rc<"WFUnavailableResource">)
	| (ShortcutsDeviceAttributesResourceSpec &
			_rc<"WFDeviceAttributesResource">)
	| (ShortcutsWorkflowTypeResourceSpec & _rc<"WFWorkflowTypeResource">)
	| (ShortcutsHealthKitAccessResourceSpec & _rc<"WFHealthKitAccessResource">)
	| (ShortcutsAppInstalledResourceSpec & _rc<"WFAppInstalledResource">)
	| (ShortcutsAccountAccessResourceSpec & _rc<"WFAccountAccessResource">)
	| (ShortcutsEmailAccessResourceSpec & _rc<"WFEmailAccessResource">)
	| (ShortcutsTumblrAccessResourceSpec & _rc<"WFTumblrAccessResource">);
