
## Split Text / SplitText (internally `is.workflow.actions.text.split`)


## description

### summary

Separates text passed into the action into a list.


### usage
```
SplitText separator=("New Lines" | "Spaces" | "Every Character" | "Custom") custom="string"
```

### arguments

---

### separator: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"New Lines"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `New Lines`
- `Spaces`
- `Every Character`
- `Custom`

---

### custom: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Text"`
**Allows Variables**: true

**Only enabled if**: argument WFTextSeparator == `Custom`

Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFTextComponentsAction",
	"ActionKeywords": [
		"separate",
		"delimiter"
	],
	"Category": "Text",
	"Description": {
		"DescriptionSummary": "Separates text passed into the action into a list."
	},
	"IconName": "Text.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2016-10-10T19:00:00.000Z",
	"Name": "Split Text",
	"Output": {
		"Multiple": true,
		"OutputName": "Split Text",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "New Lines",
			"Items": [
				"New Lines",
				"Spaces",
				"Every Character",
				"Custom"
			],
			"Key": "WFTextSeparator",
			"Label": "Separator"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFTextCustomSeparator",
			"Label": "Custom",
			"Placeholder": "Text",
			"RequiredResources": [
				{
					"WFParameterKey": "WFTextSeparator",
					"WFParameterValue": "Custom",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Text Editing",
	"WFTextComponentsMode": "Split"
}
```
