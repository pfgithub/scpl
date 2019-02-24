
## Get Clipboard / getclipboard (internally `is.workflow.actions.getclipboard`)


> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description
### summary
Passes the contents of the clipboard to the next action.


### usage
`getclipboard `

### arguments


### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFGetClipboardAction",
	"ActionKeywords": [
		"text",
		"clipboard",
		"copy",
		"paste",
		"contents",
		"of"
	],
	"Category": "Sharing",
	"Description": {
		"DescriptionSummary": "Passes the contents of the clipboard to the next action."
	},
	"IconName": "Clipboard.png",
	"Name": "Get Clipboard",
	"Output": {
		"Multiple": true,
		"OutputName": "Clipboard",
		"Types": [
			"WFContentItem"
		]
	},
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"Subcategory": "Clipboard",
	"UnsupportedEnvironments": [
		"Background"
	]
}
```
</details>
