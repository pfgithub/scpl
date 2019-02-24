
## Quick Look / quicklook (internally `is.workflow.actions.previewdocument`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description
### summary
Displays a preview of the input.


### usage
`quicklook fullscreen=[string boolean|variable]`

### arguments
### Switch: Full Screen / fullscreen (internally `WFQuickLookActionFullScreen`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### source json

```json
{
	"ActionClass": "WFQuickLookAction",
	"ActionKeywords": [
		"preview",
		"show",
		"file",
		"document",
		"quicklook",
		"quick",
		"look"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Displays a preview of the input."
	},
	"IconName": "Quick Look.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"InputPassthrough": true,
	"Name": "Quick Look",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"Key": "WFQuickLookActionFullScreen",
			"Label": "Full Screen",
			"RequiredResources": [
				{
					"WFDeviceAttributes": {
						"WFDeviceAttributeIdiom": "Pad"
					},
					"WFResourceClass": "WFDeviceAttributesResource"
				}
			]
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Previewing",
	"UserInterfaces": [
		"WatchKit",
		"UIKit"
	]
}
```
