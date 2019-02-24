
## Get Instapaper Bookmarks / getinstapaperbookmarks (internally `is.workflow.actions.instapaper.get`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFInstapaperAccessResource.


## description
### summary
Gets the contents of a folder in Instapaper. Requires Instapaper Premium.


### usage
`getinstapaperbookmarks undefined=[???] wfbookmarkcount=[string integer]`

### arguments
This paramtype is not implemented. WFDynamicEnumerationParameter

---

### Stepper Number: wfbookmarkcount / wfbookmarkcount (internally `WFBookmarkCount`)
**Default Value**: 5
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

### source json

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
