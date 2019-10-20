
## Replace Text / ReplaceText (internally `is.workflow.actions.text.replace`)


## description

### summary

Replaces some text passed into the action with other text.


### usage
```
ReplaceText findText="string" replaceWith="string" caseSensitive=(true | false | variable) regularExpression=(true | false | variable) text="string"
```

### arguments

---

### findText: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Hello"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### replaceWith: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"World"`
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

### regularExpression: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### text: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

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
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Replaces some text passed into the action with other text."
	},
	"IconName": "Text.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"InputPassthrough": false,
	"Name": "Replace Text",
	"Output": {
		"Multiple": true,
		"OutputName": "Updated Text",
		"Types": [
			"NSString"
		]
	},
	"ParameterSummary": "Replace ${WFReplaceTextFind} with ${WFReplaceTextReplace} in ${WFInput}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Description": "The text to be replaced.",
			"Key": "WFReplaceTextFind",
			"Label": "Find Text",
			"Placeholder": "Hello"
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "The text to replace all occurrences of Find Text.",
			"Key": "WFReplaceTextReplace",
			"Label": "Replace With",
			"Placeholder": "World"
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
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFInput",
			"Label": "Text"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Text Editing"
}
```
