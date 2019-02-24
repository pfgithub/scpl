
## Get Dictionary from Input / getdictionaryfrominput (internally `is.workflow.actions.detect.dictionary`)



## description
### summary
Makes a dictionary from the text passed as input. JSON (like {"foo": "bar"}), key-value pairs (like foo=bar&baz=biz), and XML-based plist are supported.


### usage
`getdictionaryfrominput `

### arguments


### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"json",
		"xml",
		"plist",
		"www",
		"urlencoded",
		"form",
		"query",
		"string"
	],
	"Category": "Scripting",
	"CoercionItemClass": "WFDictionaryContentItem",
	"Description": {
		"DescriptionSummary": "Makes a dictionary from the text passed as input. JSON (like {\"foo\": \"bar\"}), key-value pairs (like foo=bar&baz=biz), and XML-based plist are supported."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSDictionary"
		]
	},
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Get Dictionary from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Dictionary",
		"Types": [
			"WFDictionaryContentItem"
		]
	},
	"ShortName": "Get Dictionary",
	"Subcategory": "Dictionaries"
}
```
</details>
