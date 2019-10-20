
## Format File Size / FormatFileSize (internally `is.workflow.actions.format.filesize`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Formats a file size into text.


### note

1000 bytes are shown as 1 KB.


### input

A file size from another action, or a number of bytes


### usage
```
FormatFileSize undefined=NotImplemented includeUnits=(true | false | variable) fileSize=number
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFFileSizePickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### includeUnits: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true

**Only enabled if**: argument WFFileSizeFormat != `Automatic`

Accepts a boolean
or a variable.

---

### fileSize: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `File Size`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

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
	"AppIdentifier": "com.apple.calculator",
	"Attribution": "Math",
	"Category": "Scripting",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Description": {
		"DescriptionInput": "A file size from another action, or a number of bytes",
		"DescriptionNote": "1000 bytes are shown as 1 KB.",
		"DescriptionSummary": "Formats a file size into text."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFFileSize",
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
	"ParameterSummary": "Format ${WFFileSize} into ${WFFileSizeFormat}",
	"Parameters": [
		{
			"Class": "WFFileSizePickerParameter",
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
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFFileSize",
			"Label": "File Size",
			"Placeholder": "File Size"
		}
	],
	"Subcategory": "Numbers"
}
```
