
## Search App Store / searchappstore (internally `is.workflow.actions.searchappstore`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Searches the App Store, returning the apps that match the specified search terms. You can get more details about the results using the Get Details of App Store App action.


### usage
`searchappstore search=[string|text] undefined=[???] undefined=[???] undefined=[???] wfitemlimit=[string integer]`

### arguments
### Text Input: Search / search (internally `WFSearchTerm`)
**Placeholder**: Shortcuts
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

This paramtype is not implemented. WFiTunesStoreCountryPickerParameter

---

### Stepper Number: wfitemlimit / wfitemlimit (internally `WFItemLimit`)
**Default Value**: 25
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFSearchiTunesAction",
	"ActionKeywords": [
		"app",
		"song",
		"music",
		"movie",
		"ebook",
		"audiobook",
		"tv",
		"album",
		"store"
	],
	"AppIdentifier": "com.apple.AppStore",
	"Category": "Apps",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Searches the App Store, returning the apps that match the specified search terms. You can get more details about the results using the Get Details of App Store App action."
	},
	"InputPassthrough": false,
	"Name": "Search App Store",
	"Output": {
		"Multiple": true,
		"OutputName": "App Store Apps",
		"Types": [
			"WFAppStoreAppContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFSearchTerm",
			"Label": "Search",
			"Placeholder": "Shortcuts",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"Key": "WFAttribute",
			"Label": "Search By"
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"Key": "WFEntity",
			"Label": "Results"
		},
		{
			"Class": "WFiTunesStoreCountryPickerParameter",
			"Key": "WFCountry",
			"Label": "Country"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 25,
			"Key": "WFItemLimit",
			"MaximumValue": 100,
			"MinimumValue": 1,
			"Pefix": "Get",
			"StepperDescription": "Number of Items",
			"StepperNoun": "Item",
			"StepperPluralNoun": "Items"
		}
	],
	"SuggestedNever": true
}
```
</p></details>
