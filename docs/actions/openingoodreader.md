
## Open in GoodReader / openingoodreader (internally `is.workflow.actions.goodreader.open`)

> This action requires that Shortcuts has permission to use WFURLOpenResource,[object Object].


## description

### summary

Opens a file in GoodReader.


### usage
```
openingoodreader 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFSendToGoodReaderAction",
	"ActionKeywords": [
		"save",
		"file",
		"document"
	],
	"AppIdentifier": "com.goodiware.goodreader4",
	"Category": "Documents",
	"CreationDate": "2015-02-03T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Opens a file in GoodReader."
	},
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"InputPassthrough": true,
	"Name": "Open in GoodReader",
	"RequiredResources": [
		"WFURLOpenResource",
		{
			"AppIdentifier": "com.goodiware.goodreader4",
			"WFResourceClass": "WFAppInstalledResource"
		}
	]
}
```
