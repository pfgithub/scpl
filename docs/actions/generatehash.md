
## Generate Hash / generatehash (internally `is.workflow.actions.hash`)



## description
### summary
Generates a MD5/SHA1 hash from the input.


### usage
`generatehash type=[string <${strInfo}>]`

### arguments
### Enumeration: Type / type (internally `WFHashType`)
**Default Value**: MD5
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `MD5`
- `SHA1`
- `SHA256`
- `SHA512`

### other info

<details><summary>source json</summary>
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
</details>
