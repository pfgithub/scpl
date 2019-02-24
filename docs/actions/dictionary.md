
## Dictionary / dictionary (internally `is.workflow.actions.dictionary`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Passes the specified list of key-value pairs to the next action as a dictionary.


### usage
`dictionary undefined=[???]`

### arguments
This paramtype is not implemented. WFDictionaryParameter

### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFDictionaryAction",
	"ActionKeywords": [
		"json",
		"plist"
	],
	"Category": "Scripting",
	"CreationDate": "2016-11-10T20:00:00.000Z",
	"Description": {
		"DescriptionNote": "When coerced to text, the dictionary is represented as JSON.",
		"DescriptionSummary": "Passes the specified list of key-value pairs to the next action as a dictionary."
	},
	"IconName": "Scripting.png",
	"Name": "Dictionary",
	"Output": {
		"Multiple": false,
		"OutputName": "Dictionary",
		"Types": [
			"NSDictionary"
		]
	},
	"Parameters": [
		{
			"AllowedValueTypes": [
				0,
				1,
				2,
				3,
				4
			],
			"Class": "WFDictionaryParameter",
			"Key": "WFItems",
			"Label": "Items"
		}
	],
	"Subcategory": "Dictionaries",
	"SuggestedNever": true
}
```
</details>
