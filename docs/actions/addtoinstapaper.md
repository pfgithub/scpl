
## Add to Instapaper / addtoinstapaper (internally `is.workflow.actions.instapaper.add`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFInstapaperAccessResource,WFMainThreadResource.


## description
### summary
Adds the input to Instapaper.


### usage
`addtoinstapaper a{undefined=[???]}`

### arguments
This paramtype is not implemented. WFDynamicEnumerationParameter

### source json

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
