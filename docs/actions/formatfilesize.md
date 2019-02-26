
## Format File Size / formatfilesize (internally `is.workflow.actions.format.filesize`)


## description

### summary

Formats a file size into text.


### input

A file size from another action, or a number of bytes


### usage
```
formatfilesize a{format=[string <${strInfo}>] includeunits=[string boolean|variable]}
```

### arguments

---

### Enumeration: Format / format (internally `WFFileSizeFormat`)
**Default Value**:
```
Automatic
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Automatic`
- `Bytes`
- `KB`
- `MB`
- `GB`
- `TB`
- `PB`
- `EB`
- `ZB`
- `YB or Higher`

---

### Switch: Include Units / includeunits (internally `WFFileSizeIncludeUnits`)
**Default Value**:
```
true
```
**Allows Variables**: true

**Only enabled if**: argument WFFileSizeFormat != `Automatic`

Accepts a boolean
or a variable.

---

### source json

```json
{
	"ActionClass": "WFFormatFileSizeAction",
	"ActionKeywords": [
		"byte",
		"bytes",
		"megabyte",
		"megabytes",
		"count"
	],
	"Category": "Documents",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Description": {
		"DescriptionInput": "A file size from another action, or a number of bytes",
		"DescriptionNote": "1000 bytes are shown as 1 KB.",
		"DescriptionSummary": "Formats a file size into text."
	},
	"IconName": "Calculator.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFFileSizeContentItem",
			"WFNumberContentItem"
		]
	},
	"Name": "Format File Size",
	"Output": {
		"Multiple": true,
		"OutputName": "Formatted File Size",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Automatic",
			"Items": [
				"Automatic",
				"Bytes",
				"KB",
				"MB",
				"GB",
				"TB",
				"PB",
				"EB",
				"ZB",
				"YB or Higher"
			],
			"Key": "WFFileSizeFormat",
			"Label": "Format"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFFileSizeIncludeUnits",
			"Label": "Include Units",
			"RequiredResources": [
				{
					"WFParameterKey": "WFFileSizeFormat",
					"WFParameterRelation": "!=",
					"WFParameterValue": "Automatic",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Files"
}
```
