
## Add to Reading List / addtoreadinglist (internally `is.workflow.actions.readinglist`)


## description

### summary

Adds URLs passed into the action to your reading list.


### usage
```
addtoreadinglist a{}
```

### arguments

---



---

### source json

```json
{
	"ActionClass": "WFAddToReadingListAction",
	"ActionKeywords": [
		"URL",
		"web",
		"later",
		"save",
		"reading",
		"list"
	],
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Adds URLs passed into the action to your reading list."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Add to Reading List",
	"ShortName": "Read Later",
	"Subcategory": "Safari"
}
```
