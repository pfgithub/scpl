
## Delete Files / deletefiles (internally `is.workflow.actions.file.delete`)



## description
### summary
Delete the files passed in as input.


### usage
`deletefiles confirmbeforedeleting=[string boolean|variable]`

### arguments
### Switch: Confirm Before Deleting / confirmbeforedeleting (internally `WFDeleteFileConfirmDeletion`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFDeleteFileAction",
	"ActionKeywords": [
		"delete",
		"files",
		"remove",
		"obliterate"
	],
	"Category": "Documents",
	"CreationDate": "2017-03-13T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Delete the files passed in as input."
	},
	"IconName": "Documents.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"Name": "Delete Files",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Description": "When enabled, this action will confirm with you before deleting the file.",
			"Key": "WFDeleteFileConfirmDeletion",
			"Label": "Confirm Before Deleting"
		}
	],
	"Subcategory": "File Storage"
}
```
</p></details>
