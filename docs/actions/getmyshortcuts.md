
## Get My Shortcuts / getmyshortcuts (internally `is.workflow.actions.getmyworkflows`)



## description
### summary
Gets the shortcuts stored on this device. For example, you could use this action with the Make Archive action to zip up your shortcuts.


### usage
`getmyshortcuts `

### arguments


### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFGetMyWorkflowsAction",
	"ActionKeywords": [
		"installed",
		"downloaded",
		"workflow"
	],
	"AppIdentifier": "is.workflow.my.app",
	"Category": "Scripting",
	"CreationDate": "2015-08-16T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets the shortcuts stored on this device. For example, you could use this action with the Make Archive action to zip up your shortcuts."
	},
	"Name": "Get My Shortcuts",
	"Output": {
		"Multiple": true,
		"OutputName": "My Shortcuts",
		"Types": [
			"WFWorkflow"
		]
	},
	"Subcategory": "Shortcuts",
	"SuggestedNever": true
}
```
</p></details>
