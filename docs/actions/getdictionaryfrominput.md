
## Get Dictionary from Input / GetDictionaryfromInput (internally `is.workflow.actions.detect.dictionary`)


## description

### summary

Makes a dictionary from the text passed as input. JSON (like {"foo": "bar"}), key-value pairs (like foo=bar&baz=biz), and XML-based plist are supported.


### usage
```
GetDictionaryfromInput (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"json",
		"xml",
		"plist",
		"www",
		"urlencoded",
		"form",
		"query",
		"string"
	],
	"Category": "Scripting",
	"CoercionItemClass": "WFDictionaryContentItem",
	"Description": {
		"DescriptionSummary": "Makes a dictionary from the text passed as input. JSON (like {\"foo\": \"bar\"}), key-value pairs (like foo=bar&baz=biz), and XML-based plist are supported."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"NSDictionary"
		]
	},
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Get Dictionary from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Dictionary",
		"Types": [
			"WFDictionaryContentItem"
		]
	},
	"ParameterSummary": "Get dictionary from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Get Dictionary",
	"Subcategory": "Dictionaries"
}
```
