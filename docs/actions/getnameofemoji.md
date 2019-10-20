
## Get Name of Emoji / GetNameofEmoji (internally `is.workflow.actions.getnameofemoji`)


## description

### summary

Gets the names of emoji passed into the action.


### usage
```
GetNameofEmoji "string"
```

### arguments

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
	"ActionClass": "WFGetEmojiNameAction",
	"Category": "Documents",
	"CreationDate": "2015-03-07T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets the names of emoji passed into the action."
	},
	"IconName": "Smiley.png",
	"Input": {
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"InputPassthrough": false,
	"Name": "Get Name of Emoji",
	"Output": {
		"Multiple": true,
		"OutputName": "Name of Emoji",
		"Types": [
			"NSString"
		]
	},
	"ParameterSummary": "Get name of emoji in ${WFInput}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFInput",
			"Label": "Text",
			"Placeholder": "Text"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Get Emoji Name",
	"Subcategory": "Text",
	"SuggestedNever": true
}
```
