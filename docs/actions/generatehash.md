
## Generate Hash / GenerateHash (internally `is.workflow.actions.hash`)


## description

### summary

Generates a MD5/SHA1 hash from the input.


### usage
```
GenerateHash type=("MD5" | "SHA1" | "SHA256" | "SHA512") input=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### type: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"MD5"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `MD5`
- `SHA1`
- `SHA256`
- `SHA512`

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGenerateHashAction",
	"ActionKeywords": [
		"crypto"
	],
	"Category": "Scripting",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Generates a MD5/SHA1 hash from the input."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFGenericFileContentItem"
		]
	},
	"Name": "Generate Hash",
	"Output": {
		"Multiple": true,
		"OutputName": "Hash",
		"Types": [
			"NSString"
		]
	},
	"ParameterSummary": "Generate ${WFHashType} hash of ${WFInput}",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "MD5",
			"Items": [
				"MD5",
				"SHA1",
				"SHA256",
				"SHA512"
			],
			"Key": "WFHashType",
			"Label": "Type"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Files",
	"SuggestedNever": true
}
```
