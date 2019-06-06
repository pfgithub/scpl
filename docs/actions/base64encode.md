
## Base64 Encode / Base64Encode (internally `is.workflow.actions.base64encode`)


## description

### summary

Encodes or decodes text or files using Base64 encoding.


### usage
```
Base64Encode mode=("Encode" | "Decode") lineBreaks=("None" | "Every 64 Characters" | "Every 76 Characters") input=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### mode: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Encode"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Encode`
- `Decode`

---

### lineBreaks: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Every 76 Characters"`
**Allows Variables**: true

**Only enabled if**: argument WFEncodeMode == `Encode`

Accepts a string 
or variable
containing one of the options:

- `None`
- `Every 64 Characters`
- `Every 76 Characters`

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFBase64EncodingAction",
	"ActionKeywords": [
		"base",
		"64",
		"encode",
		"decode"
	],
	"Category": "Scripting",
	"CreationDate": "2015-05-03T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Encodes or decodes text or files using Base64 encoding."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFStringContentItem",
			"public.data"
		]
	},
	"Name": "Base64 Encode",
	"Output": {
		"Multiple": true,
		"OutputName": "Base64 Encoded",
		"Types": [
			"WFStringContentItem",
			"public.data"
		]
	},
	"ParameterSummary": "${WFEncodeMode} ${WFInput} with base64",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Encode",
			"Items": [
				"Encode",
				"Decode"
			],
			"Key": "WFEncodeMode",
			"Label": "Mode"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Every 76 Characters",
			"Items": [
				"None",
				"Every 64 Characters",
				"Every 76 Characters"
			],
			"Key": "WFBase64LineBreakMode",
			"Label": "Line Breaks",
			"RequiredResources": [
				{
					"WFParameterKey": "WFEncodeMode",
					"WFParameterValue": "Encode",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Files",
	"SuggestedNever": true
}
```
