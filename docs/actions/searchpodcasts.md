
## Search Podcasts / SearchPodcasts (internally `is.workflow.actions.searchpodcasts`)


## description

### summary

Searches Podcasts, returning the items that match the specified search terms.


### usage
```
SearchPodcasts search="string" searchBy=("string" | variable)] results=("string" | variable)] country=("string" | variable)] WFItemLimit=number
```

### arguments

---

### search: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"The Daily"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### searchBy: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
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

### WFItemLimit: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
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
		"podcast"
	],
	"AppIdentifier": "com.apple.podcasts",
	"CreationDate": "2019-01-23T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Searches Podcasts, returning the items that match the specified search terms."
	},
	"InputPassthrough": false,
	"Name": "Search Podcasts",
	"Output": {
		"Multiple": true,
		"OutputName": "Podcasts",
		"Types": [
			"WFiTunesProductContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFSearchTerm",
			"Label": "Search",
			"Placeholder": "The Daily",
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
	"Storefront": "Podcasts",
	"SuggestedAsInitialAction": false
}
```
