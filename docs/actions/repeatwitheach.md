
## Repeat with Each / repeatwitheach (internally `is.workflow.actions.repeat.each`)

> This action has a block. Make sure to end it with an end. (More info in usage below)


## description

### summary

Takes a list of items as input, and runs the contained actions once for each item in the list.


### input

A list of items


### output

Every item passed to the “End Repeat” action

### usage
```
repeatwitheach 
  ...
end
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFForEachRepeatAction",
	"ActionKeywords": [
		"loop",
		"while",
		"for"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionInput": "A list of items",
		"DescriptionResult": "Every item passed to the “End Repeat” action",
		"DescriptionSummary": "Takes a list of items as input, and runs the contained actions once for each item in the list."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"Required": false,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2015-05-12T07:00:00.000Z",
	"Name": "Repeat with Each",
	"Output": {
		"Multiple": true,
		"OutputName": "Repeat with Each",
		"Types": [
			"WFContentItem"
		]
	},
	"Subcategory": "Control Flow",
	"BlockInfo": {
		"Example": "\n  ...\nend",
		"Completion": "\n\t$0\nend"
	}
}
```
