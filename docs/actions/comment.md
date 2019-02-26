
## Comment / comment (internally `is.workflow.actions.comment`)


## description

### summary

This action lets you explain how part of a shortcut works. When run, this action does nothing.


### usage
```
comment a{wfcommentactiontext=[string]}
```

### arguments

---

### Text: wfcommentactiontext / wfcommentactiontext (internally `WFCommentActionText`)
**Placeholder**:
```
Enter comment...
```


Accepts a string 
with the text.

---

### source json

```json
{
	"ActionClass": "WFCommentAction",
	"ActionKeywords": [
		"note",
		"explain"
	],
	"Category": "Scripting",
	"CreationDate": "2015-08-29T17:26:33.000Z",
	"Description": {
		"DescriptionSummary": "This action lets you explain how part of a shortcut works. When run, this action does nothing."
	},
	"IconName": "Text.png",
	"InputPassthrough": true,
	"Name": "Comment",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Key": "WFCommentActionText",
			"Multiline": true,
			"Placeholder": "Enter comment..."
		}
	],
	"SuggestedNever": true
}
```
