import { ShortcutsActionParameterClass } from "./Strings/ShortcutsActionParameterClass";
import { ShortcutsParameterTextContentType } from "./Strings/ShortcutsParameterTextContentType";

import { ShortcutsResourceSpec } from "./ShortcutsResourceSpec";
import { CoercionTypeClass } from "../../WFTypes/Types";

type ShortcutsVariableType = "Ask" | "Variable" | "ActionOutput" | "Clipboard";

export type ShortcutsBaseParameterSpec = {
	Class: ShortcutsActionParameterClass;
	Key: string;
	Label?: string;
	DisallowedVariableTypes?: ShortcutsVariableType[];
	Hidden?: boolean;
	RequiredResources?: ShortcutsResourceSpec[];
	Description?: string;
	IntentSlotName?: string;
	DoNotLocalizeValues?: boolean;
	Placeholder?: number | string;
};

export type ShortcutsIntentAppPickerParameterSpec = ShortcutsBaseParameterSpec & {
	DefaultValue?: string;
	IntentName: string;
};

export type ShortcutsEnumerationParameterSpec = ShortcutsBaseParameterSpec & {
	DefaultValue?: string;
	Items: string[];
	ActionKeywords?: string[]; // I think this isn't supposed to be here... getitemfromlist uses it though
};

export type ShortcutsSwitchParameterSpec = ShortcutsBaseParameterSpec & {
	DefaultValue?: boolean;
};
export type ShortcutsExpandingParameterSpec = ShortcutsBaseParameterSpec;

export type ShortcutsUberProductPickerParameterSpec = ShortcutsBaseParameterSpec;

export type ShortcutsUberSeatCountPickerParameterSpec = ShortcutsEnumerationParameterSpec;

export type ShortcutsCountryFieldParameterSpec = ShortcutsInputParameterSpec;

export type ShortcutsLocationFieldParameterSpec = ShortcutsInputParameterSpec & {
	HintDisplayMode?: "WhileProcessing" | "Always" | "Never";
};

export type ShortcutsLocationParameterSpec = ShortcutsInputParameterSpec & {
	AllowCurrentLocation?: boolean;
	CurrentLocationAccuracy?: "HundredMeters";
	DefaultToCurrentLocation?: boolean;
	SkipProcessingCurrentLocation?: boolean;
	AllowTextOnly?: boolean;
};

export type ShortcutsVariablePickerParameterSpec = ShortcutsBaseParameterSpec;

export type ShortcutsDynamicEnumerationParameterSpec = ShortcutsBaseParameterSpec & {
	NoneLabel?: string;
	AlwaysShowsButton?: boolean;
};

export type ShortcutsInputParameterSpec = ShortcutsBaseParameterSpec & {
	TextAlignment?: "Left" | "Right";
	AllowsMultipleValues?: boolean;
	DefaultValue?: number | string;
	AutocapitalizationType?: "Words" | "None";
	DisableAutocorrection?: boolean;
	DisableSmartDashes?: boolean;
	DisableSmartQuotes?: boolean;
	SyntaxHighlightingType?: "JavaScript"; // Javascript*
	SecureTextInput?: boolean;
	KeyboardType?:
		| "DecimalPad"
		| "EmailAddress"
		| "NumberPad"
		| "NumbersAndPunctuation"
		| "URL"
		| "WebSearch";
};

export type ShortcutsDateFieldParameterSpec = ShortcutsInputParameterSpec & {
	HintDisplayMode?: "WhileProcessing" | "Always" | "Never";
	HintDateMode?: "Time" | "Date" | "Date";
	ReactiveParameterKey?: "WFCalendarItemEndDate";
};

export type ShortcutsVariableFieldParameterSpec = ShortcutsInputParameterSpec;

export type ShortcutsTextInputParameterSpec = ShortcutsInputParameterSpec & {
	Multiline?: boolean;
	TextContentType?: ShortcutsParameterTextContentType;
	Prefix?: string;
};

/*
{
	Class: "WFCalendarPickerParameter",
	Description: "The calendar to add this event to.",
	EventKitEntityType: "Event",
	Key: "WFCalendarItemCalendar",
	Label: "Calendar"
}
*/

export type ShortcutsCalendarPickerParameterSpec = ShortcutsBaseParameterSpec & {
	EventKitEntityType: "Event" | "Reminder";
	AllowsAllCalendars?: boolean;
};

export type ShortcutsDictionaryParameterSpec = ShortcutsBaseParameterSpec & {
	AllowedValueTypes?: (0 | 1 | 2 | 3 | 4 | 5)[];
	ItemTypeName?: string;
};

export type ShortcutsNumberFieldParameterSpec = ShortcutsInputParameterSpec & {
	TextAlignment?: "Left" | "Right";
	DefaultValue?: number;
	AllowsDecimalNumbers?: boolean;
};

export type ShortcutsPlaylistPickerParameterSpec = ShortcutsBaseParameterSpec & {
	ShowLibrary?: boolean;
};
export type ShortcutsArrayParameterSpec = ShortcutsBaseParameterSpec & {
	DefaultValue: string[];
};

export type ShortcutsContactFieldParameterSpec = ShortcutsInputParameterSpec & {
	AllowsTextEntry?: boolean;
};

export type ShortcutsStepperParameterSpec = ShortcutsNumberFieldParameterSpec & {
	StepperDescription?: string;
	StepperNoun?: string;
	StepperPluralNoun?: string;
	StepperPrefix?: string;
	Pefix?: string; // seems like a duplicate... also misspelled
	MinimumValue?: number;
	MaximumValue?: number;
};

export type ShortcutsAlarmFrequencyPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsAlarmPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
0;
export type ShortcutsEvernoteNotebookPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsDictateTextLanguagePickerSpec = ShortcutsDynamicEnumerationParameterSpec & {
	Items: [];
};
export type ShortcutsStorageServicePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	AlwaysShowsButton: boolean;
	AlwaysRequiresServiceResource?: true;
};
export type ShortcutsEmailAddressFieldParameterSpec = ShortcutsTextInputParameterSpec;

export type ShortcutsTimeOffsetParameterSpec = ShortcutsBaseParameterSpec;

export type ShortcutsEvernoteTagsTagFieldParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsFilterParameterSpec = ShortcutsBaseParameterSpec & {
	ContentItemClass: CoercionTypeClass;
};

export type ShortcutsSliderParameterSpec = ShortcutsNumberFieldParameterSpec & {
	MaximumIconName?: "BrightnessSliderHigh";
	MinimumIconName?: "BrightnessSliderLow";
};
export type ShortcutsCustomDateFormatParameterSpec = ShortcutsInputParameterSpec;

export type ShortcutsMapsAppPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	SupportedApps: (
		| "Baidu Maps"
		| "Citymapper"
		| "Google Maps"
		| "Maps"
		| "Transit"
		| "Waze")[];
};

export type ShortcutsGetDistanceUnitPickerParameterSpec = ShortcutsEnumerationParameterSpec;
export type ShortcutsNetworkPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsQuantityTypePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	QuantityTypeKey?: "WFQuantitySampleType";
};

export type ShortcutsHealthQuantityFieldParameterSpec = ShortcutsTextInputParameterSpec & {
	QuantityTypeKey?: "WFQuantitySampleType";
	QuantityType?: "Active Calories" | "Walking + Running Distance";
};

export type ShortcutsHealthQuantityAdditionalFieldParameterSpec = ShortcutsHealthQuantityFieldParameterSpec;
export type ShortcutsHealthQuantityAdditionalPickerParameterSpec = ShortcutsQuantityTypePickerParameterSpec;
export type ShortcutsHealthCategoryPickerParameterSpec = ShortcutsQuantityTypePickerParameterSpec;
export type ShortcutsHealthCategoryAdditionalPickerParameterSpec = ShortcutsHealthCategoryPickerParameterSpec;
export type ShortcutsHealthCategoryStartDateFieldParameterSpec = ShortcutsHealthQuantityFieldParameterSpec;
export type ShortcutsHealthCategoryEndDateFieldParameterSpec = ShortcutsHealthQuantityFieldParameterSpec;

export type ShortcutsWorkoutTypePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsDurationQuantityFieldParameterSpec = ShortcutsNumberFieldParameterSpec & {
	DefaultUnit?: "days" | "hr" | "min" | "months" | "sec" | "weeks" | "years";
	PossibleUnits?: (
		| "days"
		| "hr"
		| "min"
		| "months"
		| "sec"
		| "weeks"
		| "years")[];
};

export type ShortcutsIFTTTTriggerNameParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsIFTTTAddRecipeParameterSpec = ShortcutsBaseParameterSpec & {
	TriggerNameKey: string;
};

export type ShortcutsImageFormatPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;

export type ShortcutsLightroomPresetPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	PresetGroupKey: "presetGroup";
};

export type ShortcutsContentArrayParameterSpec = ShortcutsBaseParameterSpec & {
	DefaultValue: string[];
};

export type ShortcutsMeasurementUnitPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	WFMeasurementUnitTypeKey: string;
};

export type ShortcutsArchiveFormatParameterSpec = ShortcutsDynamicEnumerationParameterSpec;

export type ShortcutsUnitTypePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsUnitPickerParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsAppPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	AppSearchType?: "OpenApp" | "OpenIn";
};

export type ShortcutsPhoneNumberFieldParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsTimeIntervalParameterSpec = ShortcutsTextInputParameterSpec;

export type ShortcutsUndefinedCoercionParameterSpec = ShortcutsBaseParameterSpec;

export type ShortcutsHomePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsHomeScenePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsWorkflowPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsPhotoAlbumPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsiTunesStoreCountryPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsEmailAccountPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsContactHandleFieldParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsSpeakTextRatePickerParameterSpec = ShortcutsBaseParameterSpec;
export type ShortcutsSpeakTextLanguagePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsTodoistProjectPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsTumblrBlogPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsTumblrComposeInAppParameterSpec = ShortcutsSwitchParameterSpec;
export type ShortcutsDynamicTagFieldParameterSpec = ShortcutsTextInputParameterSpec;
export type ShortcutsWunderlistListPickerParameterSpec = ShortcutsDynamicTagFieldParameterSpec;
export type ShortcutsFaceTimePickerParameterSpec = ShortcutsEnumerationParameterSpec;
export type ShortcutsNoteGroupPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsMediaPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsConditionalSubjectParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsConditionalOperatorParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsNumericDynamicEnumerationParameterSpec = ShortcutsDynamicEnumerationParameterSpec;

export type ShortcutsFileFormatSizePickerParameterSpec = ShortcutsEnumerationParameterSpec;
export type ShortcutsFlipImageDirectionPickerParameterSpec = ShortcutsEnumerationParameterSpec;

export type ShortcutsHomeServicePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsHomeCharacteristicPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsHomeAccessoryPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;
export type ShortcutsPodcastPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec;

export type ShortcutsMediaRoutePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	RouteType: "Endpoint" | "OutputDevice";
};

export type ShortcutsDatePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	ShowsDatePicker: boolean;
};

export type ShortcutsTrelloBoardPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	BoardKey?: string;
};
export type ShortcutsTrelloListPickerParameterSpec = ShortcutsTrelloBoardPickerParameterSpec;

export type ShortcutsTranslateTextLanguagePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	LanguageDetection?: boolean;
};
export type ShortcutsUnitQuantityFieldParameterSpec = ShortcutsNumberFieldParameterSpec & {
	DefaultUnit?: string;
	WFUnitType?: "Length";
};

export type ShortcutsSpeakTextVoicePickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	WFSpeakTextLanguageKey?: string;
};

export type ShortcutsSlackChannelPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	AccountParameterKey: string;
};

export type ShortcutsAccountPickerParameterSpec = ShortcutsDynamicEnumerationParameterSpec & {
	AccountClass: "WFSlackAccount" | "WFWordPressAccount";
};

type _pc<N extends string> = { Class: N };

export type ShortcutsParameterSpecMap = {
	WFIntentAppPickerParameter: ShortcutsIntentAppPickerParameterSpec;
	WFEnumerationParameter: ShortcutsEnumerationParameterSpec;
	WFSwitchParameter: ShortcutsSwitchParameterSpec;
	WFUberProductPickerParameter: ShortcutsUberProductPickerParameterSpec;
	WFUberSeatCountPickerParameter: ShortcutsUberSeatCountPickerParameterSpec;
	WFVariablePickerParameter: ShortcutsVariablePickerParameterSpec;
	WFNumberFieldParameter: ShortcutsNumberFieldParameterSpec;
	WFTextInputParameter: ShortcutsTextInputParameterSpec;
	WFDateFieldParameter: ShortcutsDateFieldParameterSpec;
	WFCalendarPickerParameter: ShortcutsCalendarPickerParameterSpec;
	WFExpandingParameter: ShortcutsExpandingParameterSpec;
	WFCountryFieldParameter: ShortcutsCountryFieldParameterSpec;
	WFPlaylistPickerParameter: ShortcutsPlaylistPickerParameterSpec;
	WFTimeOffsetParameter: ShortcutsTimeOffsetParameterSpec;
	_UndefinedCoercionClass: ShortcutsUndefinedCoercionParameterSpec;
	WFDynamicEnumerationParameter: ShortcutsDynamicEnumerationParameterSpec;
	WFVariableFieldParameter: ShortcutsVariableFieldParameterSpec;
	WFArrayParameter: ShortcutsArrayParameterSpec;
	WFContactFieldParameter: ShortcutsContactFieldParameterSpec;
	WFDictionaryParameter: ShortcutsDictionaryParameterSpec;
	WFDictateTextLanguagePickerParameter: ShortcutsDictateTextLanguagePickerSpec;
	WFStepperParameter: ShortcutsStepperParameterSpec;
	WFStorageServicePickerParameter: ShortcutsStorageServicePickerParameterSpec;
	WFEmailAddressFieldParameter: ShortcutsEmailAddressFieldParameterSpec;
	WFEvernoteNotebookPickerParameter: ShortcutsEvernoteNotebookPickerParameterSpec;
	WFEvernoteTagsTagFieldParameter: ShortcutsEvernoteTagsTagFieldParameterSpec;
	WFFilterParameter: ShortcutsFilterParameterSpec;
	WFSliderParameter: ShortcutsSliderParameterSpec;
	WFCustomDateFormatParameter: ShortcutsCustomDateFormatParameterSpec;
	WFMapsAppPickerParameter: ShortcutsMapsAppPickerParameterSpec;
	WFGetDistanceUnitPickerParameter: ShortcutsGetDistanceUnitPickerParameterSpec;
	WFNetworkPickerParameter: ShortcutsNetworkPickerParameterSpec;
	WFQuantityTypePickerParameter: ShortcutsQuantityTypePickerParameterSpec;
	WFHealthQuantityFieldParameter: ShortcutsHealthQuantityFieldParameterSpec;
	WFHealthQuantityAdditionalFieldParameter: ShortcutsHealthQuantityAdditionalFieldParameterSpec;
	WFHealthQuantityAdditionalPickerParameter: ShortcutsHealthQuantityAdditionalPickerParameterSpec;
	WFHealthCategoryPickerParameter: ShortcutsHealthCategoryPickerParameterSpec;
	WFHealthCategoryAdditionalPickerParameter: ShortcutsHealthCategoryAdditionalPickerParameterSpec;
	WFHealthCategoryStartDateFieldParameter: ShortcutsHealthCategoryStartDateFieldParameterSpec;
	WFHealthCategoryEndDateFieldParameter: ShortcutsHealthCategoryEndDateFieldParameterSpec;
	WFWorkoutTypePickerParameter: ShortcutsWorkoutTypePickerParameterSpec;
	WFDurationQuantityFieldParameter: ShortcutsDurationQuantityFieldParameterSpec; // 9
	WFIFTTTTriggerNameParameter: ShortcutsIFTTTTriggerNameParameterSpec;
	WFIFTTTAddRecipeParameter: ShortcutsIFTTTAddRecipeParameterSpec;
	WFImageConvertFormatPickerParameter: ShortcutsImageFormatPickerParameterSpec;
	WFLightroomPresetPickerParameter: ShortcutsLightroomPresetPickerParameterSpec;
	WFContentArrayParameter: ShortcutsContentArrayParameterSpec;
	WFArchiveFormatParameter: ShortcutsArchiveFormatParameterSpec;
	WFUnitTypePickerParameter: ShortcutsUnitTypePickerParameterSpec;
	WFMeasurementUnitPickerParameter: ShortcutsMeasurementUnitPickerParameterSpec;
	WFAppPickerParameter: ShortcutsAppPickerParameterSpec;
	WFPhoneNumberFieldParameter: ShortcutsPhoneNumberFieldParameterSpec;
	WFTimeIntervalParameter: ShortcutsTimeIntervalParameterSpec;
	WFWorkflowPickerParameter: ShortcutsWorkflowPickerParameterSpec;
	WFPhotoAlbumPickerParameter: ShortcutsPhotoAlbumPickerParameterSpec;
	WFiTunesStoreCountryPickerParameter: ShortcutsiTunesStoreCountryPickerParameterSpec;
	WFEmailAccountPickerParameter: ShortcutsEmailAccountPickerParameterSpec;
	WFContactHandleFieldParameter: ShortcutsContactHandleFieldParameterSpec;
	WFAccountPickerParameter: ShortcutsAccountPickerParameterSpec;
	WFSlackChannelPickerParameter: ShortcutsSlackChannelPickerParameterSpec;
	WFSpeakTextVoicePickerParameter: ShortcutsSpeakTextVoicePickerParameterSpec;
	WFSpeakTextRateParameter: ShortcutsSpeakTextRatePickerParameterSpec;
	WFSpeakTextLanguagePickerParameter: ShortcutsSpeakTextLanguagePickerParameterSpec;
	WFTranslateTextLanguagePickerParameter: ShortcutsTranslateTextLanguagePickerParameterSpec;
	WFTodoistProjectPickerParameter: ShortcutsTodoistProjectPickerParameterSpec;
	WFTrelloBoardPickerParameter: ShortcutsTrelloBoardPickerParameterSpec;
	WFTrelloListPickerParameter: ShortcutsTrelloListPickerParameterSpec;
	WFTumblrComposeInAppParameter: ShortcutsTumblrComposeInAppParameterSpec;
	WFTumblrBlogPickerParameter: ShortcutsTumblrBlogPickerParameterSpec;
	WFDynamicTagFieldParameter: ShortcutsDynamicTagFieldParameterSpec;
	WFWunderlistListPickerParameter: ShortcutsWunderlistListPickerParameterSpec;
	WFFaceTimeTypePickerParameter: ShortcutsFaceTimePickerParameterSpec;
	WFNoteGroupPickerParameter: ShortcutsNoteGroupPickerParameterSpec;
	WFMediaPickerParameter: ShortcutsMediaPickerParameterSpec;
	WFUnitQuantityFieldParameter: ShortcutsUnitQuantityFieldParameterSpec;
	WFLocationParameter: ShortcutsLocationParameterSpec;
	WFConditionalSubjectParameter: ShortcutsConditionalSubjectParameterSpec;
	WFConditionalOperatorParameter: ShortcutsConditionalOperatorParameterSpec;
	WFDatePickerParameter: ShortcutsDatePickerParameterSpec;
	WFNumericDynamicEnumerationParameter: ShortcutsNumericDynamicEnumerationParameterSpec;
	WFFileSizePickerParameter: ShortcutsFileFormatSizePickerParameterSpec;
	WFHomeServicePickerParameter: ShortcutsHomeServicePickerParameterSpec;
	WFHomeCharacteristicPickerParameter: ShortcutsHomeCharacteristicPickerParameterSpec;
	WFHomeAccessoryPickerParameter: ShortcutsHomeAccessoryPickerParameterSpec;
	WFFlipImageDirectionPickerParameter: ShortcutsFlipImageDirectionPickerParameterSpec;
	WFMediaRoutePickerParameter: ShortcutsMediaRoutePickerParameterSpec;
	WFPodcastPickerParameter: ShortcutsPodcastPickerParameterSpec;
};
// ^generate with .replace(/\|\ \((Shortcuts.+?Spec) &[\s\S]+?_pc<"(.+?)">\)/g, "$2: $1,"))

export type ShortcutsParameterSpec =
	| (ShortcutsIntentAppPickerParameterSpec &
			_pc<"WFIntentAppPickerParameter">)
	| (ShortcutsEnumerationParameterSpec & _pc<"WFEnumerationParameter">)
	| (ShortcutsSwitchParameterSpec & _pc<"WFSwitchParameter">)
	| (ShortcutsUberProductPickerParameterSpec &
			_pc<"WFUberProductPickerParameter">)
	| (ShortcutsUberSeatCountPickerParameterSpec &
			_pc<"WFUberSeatCountPickerParameter">)
	| (ShortcutsVariablePickerParameterSpec & _pc<"WFVariablePickerParameter">)
	| (ShortcutsNumberFieldParameterSpec & _pc<"WFNumberFieldParameter">)
	| (ShortcutsTextInputParameterSpec & _pc<"WFTextInputParameter">)
	| (ShortcutsDateFieldParameterSpec & _pc<"WFDateFieldParameter">)
	| (ShortcutsCalendarPickerParameterSpec & _pc<"WFCalendarPickerParameter">)
	| (ShortcutsExpandingParameterSpec & _pc<"WFExpandingParameter">)
	| (ShortcutsCountryFieldParameterSpec & _pc<"WFCountryFieldParameter">)
	| (ShortcutsPlaylistPickerParameterSpec & _pc<"WFPlaylistPickerParameter">)
	| (ShortcutsTimeOffsetParameterSpec & _pc<"WFTimeOffsetParameter">)
	| (ShortcutsUndefinedCoercionParameterSpec & _pc<"_UndefinedCoercionClass">)
	| (ShortcutsDynamicEnumerationParameterSpec &
			_pc<"WFDynamicEnumerationParameter">)
	| (ShortcutsVariableFieldParameterSpec & _pc<"WFVariableFieldParameter">)
	| (ShortcutsArrayParameterSpec & _pc<"WFArrayParameter">)
	| (ShortcutsContactFieldParameterSpec & _pc<"WFContactFieldParameter">)
	| (ShortcutsDictionaryParameterSpec & _pc<"WFDictionaryParameter">)
	| (ShortcutsDictateTextLanguagePickerSpec &
			_pc<"WFDictateTextLanguagePickerParameter">)
	| (ShortcutsStepperParameterSpec & _pc<"WFStepperParameter">)
	| (ShortcutsStorageServicePickerParameterSpec &
			_pc<"WFStorageServicePickerParameter">)
	| (ShortcutsEmailAddressFieldParameterSpec &
			_pc<"WFEmailAddressFieldParameter">)
	| (ShortcutsEvernoteNotebookPickerParameterSpec &
			_pc<"WFEvernoteNotebookPickerParameter">)
	| (ShortcutsEvernoteTagsTagFieldParameterSpec &
			_pc<"WFEvernoteTagsTagFieldParameter">)
	| (ShortcutsFilterParameterSpec & _pc<"WFFilterParameter">)
	| (ShortcutsSliderParameterSpec & _pc<"WFSliderParameter">)
	| (ShortcutsCustomDateFormatParameterSpec &
			_pc<"WFCustomDateFormatParameter">)
	| (ShortcutsMapsAppPickerParameterSpec & _pc<"WFMapsAppPickerParameter">)
	| (ShortcutsGetDistanceUnitPickerParameterSpec &
			_pc<"WFGetDistanceUnitPickerParameter">)
	| (ShortcutsNetworkPickerParameterSpec & _pc<"WFNetworkPickerParameter">)
	| (ShortcutsQuantityTypePickerParameterSpec &
			_pc<"WFQuantityTypePickerParameter">)
	| (ShortcutsHealthQuantityFieldParameterSpec & // why is this even necessary
			_pc<"WFHealthQuantityFieldParameter">)
	| (ShortcutsHealthQuantityAdditionalFieldParameterSpec &
			_pc<"WFHealthQuantityAdditionalFieldParameter">)
	| (ShortcutsHealthQuantityAdditionalPickerParameterSpec &
			_pc<"WFHealthQuantityAdditionalPickerParameter">)
	| (ShortcutsHealthCategoryPickerParameterSpec &
			_pc<"WFHealthCategoryPickerParameter">)
	| (ShortcutsHealthCategoryAdditionalPickerParameterSpec &
			_pc<"WFHealthCategoryAdditionalPickerParameter">)
	| (ShortcutsHealthCategoryStartDateFieldParameterSpec &
			_pc<"WFHealthCategoryStartDateFieldParameter">)
	| (ShortcutsHealthCategoryEndDateFieldParameterSpec & // there are 7 of these
			_pc<"WFHealthCategoryEndDateFieldParameter">)
	| (ShortcutsWorkoutTypePickerParameterSpec &
			_pc<"WFWorkoutTypePickerParameter">)
	| (ShortcutsDurationQuantityFieldParameterSpec &
			_pc<"WFDurationQuantityFieldParameter">) // 9
	| (ShortcutsIFTTTTriggerNameParameterSpec &
			_pc<"WFIFTTTTriggerNameParameter">)
	| (ShortcutsIFTTTAddRecipeParameterSpec & _pc<"WFIFTTTAddRecipeParameter">)
	| (ShortcutsImageFormatPickerParameterSpec &
			_pc<"WFImageConvertFormatPickerParameter">)
	| (ShortcutsLightroomPresetPickerParameterSpec &
			_pc<"WFLightroomPresetPickerParameter">)
	| (ShortcutsContentArrayParameterSpec & _pc<"WFContentArrayParameter">)
	| (ShortcutsArchiveFormatParameterSpec & _pc<"WFArchiveFormatParameter">)
	| (ShortcutsUnitTypePickerParameterSpec & _pc<"WFUnitTypePickerParameter">)
	| (ShortcutsMeasurementUnitPickerParameterSpec &
			_pc<"WFMeasurementUnitPickerParameter">)
	| (ShortcutsAppPickerParameterSpec & _pc<"WFAppPickerParameter">)
	| (ShortcutsPhoneNumberFieldParameterSpec &
			_pc<"WFPhoneNumberFieldParameter">)
	| (ShortcutsTimeIntervalParameterSpec & _pc<"WFTimeIntervalParameter">)
	| (ShortcutsWorkflowPickerParameterSpec & _pc<"WFWorkflowPickerParameter">)
	| (ShortcutsPhotoAlbumPickerParameterSpec &
			_pc<"WFPhotoAlbumPickerParameter">)
	| (ShortcutsiTunesStoreCountryPickerParameterSpec &
			_pc<"WFiTunesStoreCountryPickerParameter">)
	| (ShortcutsEmailAccountPickerParameterSpec &
			_pc<"WFEmailAccountPickerParameter">)
	| (ShortcutsContactHandleFieldParameterSpec &
			_pc<"WFContactHandleFieldParameter">)
	| (ShortcutsAccountPickerParameterSpec & _pc<"WFAccountPickerParameter">)
	| (ShortcutsSlackChannelPickerParameterSpec &
			_pc<"WFSlackChannelPickerParameter">)
	| (ShortcutsSpeakTextVoicePickerParameterSpec &
			_pc<"WFSpeakTextVoicePickerParameter">)
	| (ShortcutsSpeakTextRatePickerParameterSpec &
			_pc<"WFSpeakTextRateParameter">)
	| (ShortcutsSpeakTextLanguagePickerParameterSpec &
			_pc<"WFSpeakTextLanguagePickerParameter">)
	| (ShortcutsTranslateTextLanguagePickerParameterSpec &
			_pc<"WFTranslateTextLanguagePickerParameter">)
	| (ShortcutsTodoistProjectPickerParameterSpec &
			_pc<"WFTodoistProjectPickerParameter">)
	| (ShortcutsTrelloBoardPickerParameterSpec &
			_pc<"WFTrelloBoardPickerParameter">)
	| (ShortcutsTrelloListPickerParameterSpec &
			_pc<"WFTrelloListPickerParameter">)
	| (ShortcutsTumblrComposeInAppParameterSpec &
			_pc<"WFTumblrComposeInAppParameter">)
	| (ShortcutsTumblrBlogPickerParameterSpec &
			_pc<"WFTumblrBlogPickerParameter">)
	| (ShortcutsDynamicTagFieldParameterSpec &
			_pc<"WFDynamicTagFieldParameter">)
	| (ShortcutsWunderlistListPickerParameterSpec &
			_pc<"WFWunderlistListPickerParameter">)
	| (ShortcutsFaceTimePickerParameterSpec &
			_pc<"WFFaceTimeTypePickerParameter">)
	| (ShortcutsNoteGroupPickerParameterSpec &
			_pc<"WFNoteGroupPickerParameter">)
	| (ShortcutsMediaPickerParameterSpec & _pc<"WFMediaPickerParameter">)
	| (ShortcutsUnitQuantityFieldParameterSpec &
			_pc<"WFUnitQuantityFieldParameter">)
	| (ShortcutsLocationParameterSpec & _pc<"WFLocationParameter">)
	| (ShortcutsConditionalSubjectParameterSpec &
			_pc<"WFConditionalSubjectParameter">)
	| (ShortcutsConditionalOperatorParameterSpec &
			_pc<"WFConditionalOperatorParameter">)
	| (ShortcutsDatePickerParameterSpec & _pc<"WFDatePickerParameter">)
	| (ShortcutsNumericDynamicEnumerationParameterSpec &
			_pc<"WFNumericDynamicEnumerationParameter">)
	| (ShortcutsFileFormatSizePickerParameterSpec &
			_pc<"WFFileSizePickerParameter">)
	| (ShortcutsHomeServicePickerParameterSpec &
			_pc<"WFHomeServicePickerParameter">)
	| (ShortcutsHomeCharacteristicPickerParameterSpec &
			_pc<"WFHomeCharacteristicPickerParameter">)
	| (ShortcutsHomeAccessoryPickerParameterSpec &
			_pc<"WFHomeAccessoryPickerParameter">)
	| (ShortcutsFlipImageDirectionPickerParameterSpec &
			_pc<"WFFlipImageDirectionPickerParameter">)
	| (ShortcutsMediaRoutePickerParameterSpec &
			_pc<"WFMediaRoutePickerParameter">)
	| (ShortcutsPodcastPickerParameterSpec & _pc<"WFPodcastPickerParameter">);
