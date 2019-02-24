
## Get File of Type / getfileoftype (internally `is.workflow.actions.gettypeaction`)



## description
### summary
Returns a particular file type from the input.


### usage
`getfileoftype type=[string|text]`

### arguments
### Text Input: Type / type (internally `WFFileType`)
**Placeholder**: UTI
**Default Value**: public.rtf
**Allows Variables**: true


Accepts a string 
or text
with the text.

### source json

```json
{
	"ActionClass": "WFGetTypeAction",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Returns a particular file type from the input."
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
	"Name": "Get File of Type",
	"Output": {
		"Multiple": true,
		"OutputName": "File of Type",
		"Types": [
			"public.data"
		]
	},
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DefaultValue": "public.rtf",
			"DisableAutocorrection": true,
			"Key": "WFFileType",
			"KeyboardType": "URL",
			"Label": "Type",
			"Placeholder": "UTI"
		}
	],
	"Subcategory": "Content"
}
```
