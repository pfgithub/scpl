
## Generate QR Code / GenerateQRCode (internally `is.workflow.actions.generatebarcode`)


## description

### summary

Generates a QR code from the input text.


### usage
```
GenerateQRCode errorCorrection=("Low" | "Medium" | "Quartile" | "High") text="string"
```

### arguments

---

### errorCorrection: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Medium"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Low`
- `Medium`
- `Quartile`
- `High`

---

### text: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Text"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGenerateMachineReadableCodeAction",
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Generates a QR code from the input text."
	},
	"IconName": "QRCode.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFText",
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"LastModifiedDate": "2015-04-06T05:00:00.000Z",
	"Name": "Generate QR Code",
	"Output": {
		"Multiple": true,
		"OutputName": "QR Code",
		"Types": [
			"UIImage"
		]
	},
	"ParameterSummary": "Generate QR code from ${WFText}",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Medium",
			"Items": [
				"Low",
				"Medium",
				"Quartile",
				"High"
			],
			"Key": "WFQRErrorCorrectionLevel",
			"Label": "Error Correction"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFText",
			"Label": "Text",
			"Placeholder": "Text"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Generate QR",
	"Subcategory": "QR Codes"
}
```
