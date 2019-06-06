
## Get Text from Input / GetTextfromInput (internally `is.workflow.actions.detect.text`)


## description

### summary

Returns text from the previous action's output.

For example, this action can get the name of a photo or song, or the text of a webpage.


### usage
```
GetTextfromInput (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

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
		"ParameterKey": "WFInput",
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
	"ParameterSummary": "Get text from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Get Text"
}
```
