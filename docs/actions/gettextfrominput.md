
## Get Text from Input / GetTextfromInput (internally `is.workflow.actions.detect.text`)


## description

### summary

Returns text from the previous action's output.

For example, this action can get the name of a photo or song, or the text of a webpage.


### usage
```
GetTextfromInput 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"find",
		"search",
		"detect",
		"scan",
		"e-mail",
		"emails"
	],
	"Category": "Text",
	"CoercionItemClass": "WFStringContentItem",
	"Description": {
		"DescriptionSummary": "Returns text from the previous action's output.\n\nFor example, this action can get the name of a photo or song, or the text of a webpage."
	},
	"IconName": "Text.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"Name": "Get Text from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Text",
		"Types": [
			"WFStringContentItem"
		]
	},
	"ShortName": "Get Text"
}
```
