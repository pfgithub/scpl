
## Search Giphy / searchgiphy (internally `is.workflow.actions.giphy`)


> This action requires that Shortcuts has permission to use [object Object].


## description
### summary
Searches for GIFs representing the text specified using Giphy.


### usage
`searchgiphy search=[string|text] showgifpicker=[string boolean|variable] wfgiphylimit=[string integer] selectmultiple=[string boolean|variable]`

### arguments
### Text Input: Search / search (internally `WFGiphyQuery`)
**Placeholder**: leave blank for trending
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Switch: Show GIF Picker / showgifpicker (internally `WFGiphyShowPicker`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Stepper Number: wfgiphylimit / wfgiphylimit (internally `WFGiphyLimit`)
**Default Value**: 1
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

---

### Switch: Select Multiple / selectmultiple (internally `WFGiphySelectMultiple`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### other info

<details><summary>source json</summary>
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
</details>
