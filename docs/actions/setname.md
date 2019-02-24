
## Set Name / setname (internally `is.workflow.actions.setitemname`)



## description
### summary
Sets the name of the item passed as input.


### usage
`setname name=[string|text] advanced=[string boolean] dontincludefileextension=[string boolean|variable]`

### arguments
### Text Input: Name / name (internally `WFName`)
**Placeholder**: example
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Expand Arrow: Advanced / advanced (internally `Advanced`)


Accepts a string with either true or false for if this
parameter is expanded or not.

---

### Switch: Don't Include File Extension / dontincludefileextension (internally `WFDontIncludeFileExtension`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### source json

```json
{
	"ActionClass": "WFSetItemNameAction",
	"ActionKeywords": [
		"title"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the name of the item passed as input."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"TypePassthrough": true,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2016-10-10T19:00:00.000Z",
	"Name": "Set Name",
	"Output": {
		"Multiple": false,
		"OutputName": "Set Name",
		"Types": [
			"WFContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFName",
			"Label": "Name",
			"Placeholder": "example"
		},
		{
			"Class": "WFExpandingParameter",
			"Key": "Advanced",
			"Label": "Advanced"
		},
		{
			"Class": "WFSwitchParameter",
			"Description": "By default, Shortcuts will automatically include a file extension if one isn't specified. Turn this on if you want to create a file with no extension.",
			"Key": "WFDontIncludeFileExtension",
			"Label": "Don't Include File Extension",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Content"
}
```
