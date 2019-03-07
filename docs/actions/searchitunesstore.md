
## Search iTunes Store / searchitunesstore (internally `is.workflow.actions.searchitunes`)


## description

### summary

Searches the iTunes Store, returning the items that match the specified search terms. You can get more details about the results using the Get Details of iTunes Product action.


### usage
```
searchitunesstore search="string" category=("string" | variable)] searchby=("string" | variable)] results=("string" | variable)] country=("string" | variable)] wfitemlimit=number
```

### arguments

---

### search: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"U2"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### category: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### searchby: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### results: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### country: iTunes Store Country Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### wfitemlimit: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `25`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

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
