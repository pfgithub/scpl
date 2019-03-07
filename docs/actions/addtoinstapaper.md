
## Add to Instapaper / addtoinstapaper (internally `is.workflow.actions.instapaper.add`)

> This action requires that Shortcuts has permission to use WFInstapaperAccessResource,WFMainThreadResource.


## description

### summary

Adds the input to Instapaper.


### usage
```
addtoinstapaper folder=("string" | variable)]
```

### arguments

---

### folder: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

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
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Add to Instapaper",
	"Parameters": [
		{
			"AlwaysShowsButton": true,
			"Class": "WFDynamicEnumerationParameter",
			"Description": "This action will save your input to the specified folder. Leaving this empty will save the input to Instapaper's Home folder.",
			"Key": "WFInstapaperFolder",
			"Label": "Folder",
			"NoneLabel": "None"
		}
	],
	"RequiredResources": [
		"WFInstapaperAccessResource",
		"WFMainThreadResource"
	],
	"ShortName": "Add"
}
```
