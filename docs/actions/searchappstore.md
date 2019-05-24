
## Search App Store / SearchAppStore (internally `is.workflow.actions.searchappstore`)


## description

### summary

Searches the App Store, returning the apps that match the specified search terms. You can get more details about the results using the Get Details of App Store App action.


### usage
```
SearchAppStore search="string" searchBy=("string" | variable)] results=("string" | variable)] region=("string" | variable)] WFItemLimit=number
```

### arguments

---

### search: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Shortcuts"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### searchBy: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### results: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### region: iTunes Store Country Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
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
			"Label": "Region"
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
