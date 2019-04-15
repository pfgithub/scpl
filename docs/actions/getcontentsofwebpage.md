
## Get Contents of Webpage / getcontentsofwebpage (internally `is.workflow.actions.getwebpagecontents`)


## description

### summary

Extracts the contents of the webpages passed into the action.


### usage
```
getcontentsofwebpage 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFGetWebPageAction",
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Extracts the contents of the webpages passed into the action."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"Name": "Get Contents of Webpage",
	"Output": {
		"Multiple": true,
		"OutputName": "Contents of Webpage",
		"Types": [
			"NSAttributedString"
		]
	},
	"ShortName": "Get Webpage",
	"Subcategory": "Web",
	"UnsupportedEnvironments": [
		"MemoryConstrained"
	]
}
```
