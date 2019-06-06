
## Add to Instapaper / AddtoInstapaper (internally `is.workflow.actions.instapaper.add`)

> This action requires that Shortcuts has permission to use WFInstapaperAccessResource,WFMainThreadResource.


## description

### summary

Adds the input to Instapaper.


### usage
```
AddtoInstapaper folder=("string" | variable)] uRL="string"
```

### arguments

---

### folder: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### uRL: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"URL"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFInstapaperAddAction",
	"AppIdentifier": "com.marcoarment.instapaperpro",
	"Category": "Web",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Adds the input to Instapaper."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInputURL",
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Add to Instapaper",
	"ParameterSummary": "Add ${WFInputURL}",
	"Parameters": [
		{
			"AlwaysShowsButton": true,
			"Class": "WFDynamicEnumerationParameter",
			"Description": "This action will save your input to the specified folder. Leaving this empty will save the input to Instapaper's Home folder.",
			"Key": "WFInstapaperFolder",
			"Label": "Folder",
			"NoneLabel": "None"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFInputURL",
			"KeyboardType": "URL",
			"Label": "URL",
			"Placeholder": "URL",
			"TextContentType": "URL"
		}
	],
	"RequiredResources": [
		"WFInstapaperAccessResource",
		"WFMainThreadResource"
	],
	"ShortName": "Add"
}
```
