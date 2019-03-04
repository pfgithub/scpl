
## Generate Hash / generatehash (internally `is.workflow.actions.hash`)


## description

### summary

Generates a MD5/SHA1 hash from the input.


### usage
```
generatehash type="MD5" | "SHA1" | "SHA256" | "SHA512"
```

### arguments

---

### Enumeration: type [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
MD5
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `MD5`
- `SHA1`
- `SHA256`
- `SHA512`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

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
		}
	],
	"Subcategory": "Files",
	"SuggestedNever": true
}
```
