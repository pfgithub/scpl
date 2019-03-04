
## Replace Text / replacetext (internally `is.workflow.actions.text.replace`)


## description

### summary

Replaces some text passed into the action with other text.


### usage
```
replacetext findtext="string" replacewith="string" casesensitive=(true | f alse | variable) regularexpression=(true | f alse | variable)
```

### arguments

---

### findtext: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"hello"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### replacewith: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"world"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### casesensitive: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### regularexpression: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFReplaceTextAction",
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
		"DescriptionSummary": "Replaces some text passed into the action with other text."
	},
	"IconName": "Text.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"InputPassthrough": false,
	"Name": "Replace Text",
	"Output": {
		"Multiple": true,
		"OutputName": "Replace Text",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Description": "The text to be replaced.",
			"Key": "WFReplaceTextFind",
			"Label": "Find Text",
			"Placeholder": "hello"
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "The text to replace all occurrences of Find Text.",
			"Key": "WFReplaceTextReplace",
			"Label": "Replace With",
			"Placeholder": "world"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Description": "When disabled, the capitalization of letters is ignored.",
			"Key": "WFReplaceTextCaseSensitive",
			"Label": "Case Sensitive"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "When enabled, Find Text is treated as a regular expression.",
			"Key": "WFReplaceTextRegularExpression",
			"Label": "Regular Expression"
		}
	],
	"Subcategory": "Text Editing"
}
```
