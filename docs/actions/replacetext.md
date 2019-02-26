
## Replace Text / replacetext (internally `is.workflow.actions.text.replace`)


## description

### summary

Replaces some text passed into the action with other text.


### usage
```
replacetext a{findtext=[string|text] replacewith=[string|text] casesensitive=[string boolean|variable] regularexpression=[string boolean|variable]}
```

### arguments

---

### Text: Find Text / findtext (internally `WFReplaceTextFind`)
**Placeholder**:
```
hello
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text: Replace With / replacewith (internally `WFReplaceTextReplace`)
**Placeholder**:
```
world
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Switch: Case Sensitive / casesensitive (internally `WFReplaceTextCaseSensitive`)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### Switch: Regular Expression / regularexpression (internally `WFReplaceTextRegularExpression`)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json

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
