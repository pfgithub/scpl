
## Get Instapaper Bookmarks / GetInstapaperBookmarks (internally `is.workflow.actions.instapaper.get`)

> This action requires that Shortcuts has permission to use WFInstapaperAccessResource.


## description

### summary

Gets the contents of a folder in Instapaper. Requires Instapaper Premium.


### usage
```
GetInstapaperBookmarks folder=("string" | variable)] WFBookmarkCount=number
```

### arguments

---

### folder: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### WFBookmarkCount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `5`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFInstapaperGetAction",
	"AppIdentifier": "com.marcoarment.instapaperpro",
	"Category": "Web",
	"CreationDate": "2015-04-23T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets the contents of a folder in Instapaper. Requires Instapaper Premium."
	},
	"Name": "Get Instapaper Bookmarks",
	"Output": {
		"Multiple": true,
		"OutputName": "Instapaper Bookmarks",
		"Types": [
			"WFURLContentItem"
		]
	},
	"Parameters": [
		{
			"AlwaysShowsButton": true,
			"Class": "WFDynamicEnumerationParameter",
			"Description": "The folder to get bookmarks from. Leaving this empty will get items from Instapaper's Home folder.",
			"Key": "WFInstapaperFolder",
			"Label": "Folder",
			"NoneLabel": "None"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 5,
			"Key": "WFBookmarkCount",
			"StepperDescription": "Number of Bookmarks",
			"StepperNoun": "Bookmark",
			"StepperPluralNoun": "Bookmarks",
			"StepperPrefix": "Get"
		}
	],
	"RequiredResources": [
		"WFInstapaperAccessResource"
	],
	"ShortName": "Get Bookmarks"
}
```
