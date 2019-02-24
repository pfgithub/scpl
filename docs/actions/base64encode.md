
## Base64 Encode / base64encode (internally `is.workflow.actions.base64encode`)



## description
### summary
Encodes or decodes text or files using Base64 encoding.


### usage
`base64encode mode=[string <${strInfo}>] linebreaks=[string <${strInfo}>]`

### arguments
### Enumeration: Mode / mode (internally `WFEncodeMode`)
**Default Value**: Encode
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Encode`
- `Decode`

---

### Enumeration: Line Breaks / linebreaks (internally `WFBase64LineBreakMode`)
**Default Value**: Every 76 Characters
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `None`
- `Every 64 Characters`
- `Every 76 Characters`

### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFBase64EncodingAction",
	"ActionKeywords": [
		"base",
		"64",
		"encode",
		"decode"
	],
	"Category": "Scripting",
	"CreationDate": "2015-05-03T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Encodes or decodes text or files using Base64 encoding."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFStringContentItem",
			"public.data"
		]
	},
	"Name": "Base64 Encode",
	"Output": {
		"Multiple": true,
		"OutputName": "Base64 Encoded",
		"Types": [
			"WFStringContentItem",
			"public.data"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Encode",
			"Items": [
				"Encode",
				"Decode"
			],
			"Key": "WFEncodeMode",
			"Label": "Mode"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Every 76 Characters",
			"Items": [
				"None",
				"Every 64 Characters",
				"Every 76 Characters"
			],
			"Key": "WFBase64LineBreakMode",
			"Label": "Line Breaks",
			"RequiredResources": [
				{
					"WFParameterKey": "WFEncodeMode",
					"WFParameterValue": "Encode",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Files",
	"SuggestedNever": true
}
```
</details>
