
## Search iTunes Store / searchitunesstore (internally `is.workflow.actions.searchitunes`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Searches the iTunes Store, returning the items that match the specified search terms. You can get more details about the results using the Get Details of iTunes Product action.


### usage
`searchitunesstore search=[string|text] undefined=[???] undefined=[???] undefined=[???] undefined=[???] wfitemlimit=[string integer]`

### arguments
### Text Input: Search / search (internally `WFSearchTerm`)
**Placeholder**:
```
U2
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

This paramtype is not implemented. WFiTunesStoreCountryPickerParameter

---

### Stepper Number: wfitemlimit / wfitemlimit (internally `WFItemLimit`)
**Default Value**:
```
25
```
**Allows Variables**: true



Accepts a string 
or variable
containing an integer value.

### source json

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
	"AppIdentifier": "com.apple.MobileStore",
	"Category": "Music",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Searches the iTunes Store, returning the items that match the specified search terms. You can get more details about the results using the Get Details of iTunes Product action."
	},
	"InputPassthrough": false,
	"Name": "Search iTunes Store",
	"Output": {
		"Multiple": true,
		"OutputName": "iTunes Products",
		"Types": [
			"WFiTunesProductContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFSearchTerm",
			"Label": "Search",
			"Placeholder": "U2",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"Key": "WFMediaType",
			"Label": "Category"
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
	"SuggestedAsInitialAction": false
}
```
