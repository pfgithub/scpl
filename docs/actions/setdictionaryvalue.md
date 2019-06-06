
## Set Dictionary Value / SetDictionaryValue (internally `is.workflow.actions.setvalueforkey`)


## description

### summary

Sets a value in the dictionary passed into the action. 


### usage
```
SetDictionaryValue key="string" value="string" WFDictionary=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### key: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Key"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### value: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Value"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### WFDictionary: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Dictionary
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSetDictionaryValueAction",
	"ActionKeywords": [
		"json",
		"plist",
		"xml",
		"urlencoded",
		"query",
		"string",
		"for",
		"key",
		"update",
		"merge"
	],
	"Category": "Scripting",
	"CreationDate": "2016-10-04T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Sets a value in the dictionary passed into the action. "
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFDictionary",
		"Required": true,
		"Types": [
			"WFDictionaryContentItem"
		]
	},
	"InputPassthrough": false,
	"Name": "Set Dictionary Value",
	"Output": {
		"Multiple": false,
		"OutputName": "Dictionary",
		"Types": [
			"WFDictionaryContentItem"
		]
	},
	"ParameterSummary": "Set ${WFDictionaryKey} to ${WFDictionaryValue} in ${WFDictionary}",
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFDictionaryKey",
			"Label": "Key",
			"Placeholder": "Key",
			"TextAlignment": "Right"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFDictionaryValue",
			"Label": "Value",
			"Placeholder": "Value",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFDictionary",
			"Placeholder": "Dictionary"
		}
	],
	"Subcategory": "Dictionaries"
}
```
