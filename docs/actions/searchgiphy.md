
## Search Giphy / searchgiphy (internally `is.workflow.actions.giphy`)

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Searches for GIFs representing the text specified using Giphy.


### usage
```
searchgiphy search="string" showgifpicker=(true | f alse | variable) wfgiphylimit=number selectmultiple=(true | f alse | variable)
```

### arguments

---

### search: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"leave blank for trending"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### showgifpicker: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### wfgiphylimit: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `1`
**Allows Variables**: true

**Only enabled if**: argument WFGiphyShowPicker = `false`

		Accepts a number 
		or variable
		with a number.

---

### selectmultiple: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: argument WFGiphyShowPicker = `true`

Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGiphyAction",
	"ActionKeywords": [
		"gif"
	],
	"Category": "Web",
	"CreationDate": "2015-02-19T08:00:00.000Z",
	"Description": {
		"DescriptionNote": "Powered by Giphy (giphy.com)",
		"DescriptionSummary": "Searches for GIFs representing the text specified using Giphy."
	},
	"IconName": "Giphy",
	"Name": "Search Giphy",
	"Output": {
		"Multiple": true,
		"OutputName": "GIFs",
		"Types": [
			"WFGiphyObject"
		]
	},
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"Key": "WFGiphyQuery",
			"Label": "Search",
			"Placeholder": "leave blank for trending",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFGiphyShowPicker",
			"Label": "Show GIF Picker"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFGiphyLimit",
			"RequiredResources": [
				{
					"WFParameterKey": "WFGiphyShowPicker",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"StepperDescription": "Number of GIFs",
			"StepperNoun": "GIF",
			"StepperPluralNoun": "GIFs",
			"StepperPrefix": "Get"
		},
		{
			"Class": "WFSwitchParameter",
			"Key": "WFGiphySelectMultiple",
			"Label": "Select Multiple",
			"RequiredResources": [
				{
					"WFParameterKey": "WFGiphyShowPicker",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFGiphyShowPicker",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFUserInteractionResource"
		}
	],
	"Subcategory": "Giphy",
	"UserInterfaces": [
		"UIKit",
		"WatchKit"
	]
}
```
