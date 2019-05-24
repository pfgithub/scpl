
## Generate QR Code / GenerateQRCode (internally `is.workflow.actions.generatebarcode`)


## description

### summary

Generates a QR code from the input text.


### usage
```
GenerateQRCode ("Low" | "Medium" | "Quartile" | "High")
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

### source json (for developers)

```json
{
	"ActionClass": "WFGenerateMachineReadableCodeAction",
	"Category": "Text",
	"Description": {
		"DescriptionSummary": "Generates a QR code from the input text."
	},
	"IconName": "QRCode.png",
	"Input": {
		"Multiple": true,
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
		}
	],
	"ShortName": "Generate QR"
}
```
