
## Get Object of Class / getobjectofclass (internally `is.workflow.actions.getclassaction`)



## description
### summary
Returns a particular object class from the input.


### usage
`getobjectofclass class=[string|text]`

### arguments
### Text Input: Class / class (internally `Class`)
**Placeholder**: NSString
**Default Value**: NSURL
**Allows Variables**: true


Accepts a string 
or text
with the text.

### source json

```json
{
	"ActionClass": "WFGetClassAction",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Returns a particular object class from the input."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"IsDebugAction": true,
	"Name": "Get Object of Class",
	"Output": {
		"Multiple": true,
		"OutputName": "Object of Class",
		"Types": [
			"WFContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "NSURL",
			"Key": "Class",
			"Label": "Class",
			"Placeholder": "NSString"
		}
	],
	"ShortName": "Object of Class",
	"Subcategory": "Content"
}
```
