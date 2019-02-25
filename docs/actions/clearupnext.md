
## Clear Up Next / clearupnext (internally `is.workflow.actions.clearupnext`)


> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,[object Object].


## description
### summary
Clears all the music in your Up Next queue.


### usage
`clearupnext a{}`

### arguments


### source json

```json
{
	"ActionClass": "WFClearUpNextAction",
	"ActionKeywords": [
		"song",
		"music",
		"itunes",
		"up next",
		"apple",
		"album",
		"next",
		"play",
		"clear"
	],
	"AppIdentifier": "com.apple.Music",
	"Category": "Music",
	"CreationDate": "2017-02-14T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Clears all the music in your Up Next queue."
	},
	"InputPassthrough": true,
	"Name": "Clear Up Next",
	"RequiredResources": [
		"WFAppleMusicAccessResource",
		{
			"WFDeviceAttributes": {
				"WFDeviceAttributeSystemVersion": {
					"WFSystemVersion": "10.3",
					"WFSystemVersionRelation": ">="
				}
			},
			"WFResourceClass": "WFDeviceAttributesResource"
		}
	],
	"Subcategory": "Up Next"
}
```
