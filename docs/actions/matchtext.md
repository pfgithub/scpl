
## Match Text / MatchText (internally `is.workflow.actions.text.match`)


## description

### summary

Searches text passed into the action for matches to a regular expression.


### output

A list of text items that matched the regular expression

### usage
```
MatchText pattern="string" caseSensitive=(true | false | variable)
```

### arguments

---

### pattern: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Default Value**: `"[0-9a-zA-Z]"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### caseSensitive: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFMatchTextAction",
	"ActionKeywords": [
		"finding",
		"matching",
		"searching",
		"regular",
		"expression",
		"regexp"
	],
	"Category": "Text",
	"Description": {
		"DescriptionResult": "A list of text items that matched the regular expression",
		"DescriptionSummary": "Searches text passed into the action for matches to a regular expression."
	},
	"IconName": "Text.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2016-05-23T07:00:00.000Z",
	"Name": "Match Text",
	"Output": {
		"Multiple": true,
		"OutputName": "Text Matches",
		"Types": [
			"WFTextMatch"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "[0-9a-zA-Z]",
			"Key": "WFMatchTextPattern",
			"Label": "Pattern"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Description": "When disabled, the capitalization of letters is ignored.",
			"Key": "WFMatchTextCaseSensitive",
			"Label": "Case Sensitive"
		}
	],
	"Subcategory": "Text Editing"
}
```
