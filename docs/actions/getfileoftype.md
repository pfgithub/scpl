
## Get File of Type / GetFileofType (internally `is.workflow.actions.gettypeaction`)


## description

### summary

Returns a particular file type from the input.


### usage
```
GetFileofType type="string" input=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### type: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"UTI"`
**Default Value**: `"public.rtf"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

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
	"ActionClass": "WFGetTypeAction",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Returns a particular file type from the input."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"IsDebugAction": true,
	"Name": "Get File of Type",
	"Output": {
		"Multiple": true,
		"OutputName": "File of Type",
		"Types": [
			"public.data"
		]
	},
	"ParameterSummary": "Get file of ${WFFileType} from ${WFInput}",
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DefaultValue": "public.rtf",
			"DisableAutocorrection": true,
			"Key": "WFFileType",
			"KeyboardType": "URL",
			"Label": "Type",
			"Placeholder": "UTI"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"Subcategory": "Content"
}
```
