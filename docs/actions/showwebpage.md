
## Show Web Page / showwebpage (internally `is.workflow.actions.showwebpage`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description
### summary
Shows the web URL passed into the action in a Safari View Controller, allowing you to view the web page without switching apps.


### usage
`showwebpage entersafarireader=[string boolean|variable]`

### arguments
### Switch: Enter Safari Reader / entersafarireader (internally `WFEnterSafariReader`)
**Allows Variables**: true



Accepts a string with either true or false
or a variable.

### source json

```json
{
	"ActionClass": "WFShowWebPageAction",
	"ActionKeywords": [
		"safari",
		"view",
		"controller",
		"open",
		"website",
		"preview",
		"quick",
		"look"
	],
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"CreationDate": "2016-05-17T22:30:00.000Z",
	"Description": {
		"DescriptionSummary": "Shows the web URL passed into the action in a Safari View Controller, allowing you to view the web page without switching apps."
	},
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFURLContentItem",
			"WFRichTextContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Show Web Page",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "Enter Safari Reader mode if it’s available for the given web page.",
			"Key": "WFEnterSafariReader",
			"Label": "Enter Safari Reader"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Web",
	"UserInterfaces": [
		"UIKit"
	]
}
```
