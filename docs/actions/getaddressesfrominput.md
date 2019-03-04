
## Get Addresses from Input / getaddressesfrominput (internally `is.workflow.actions.detect.address`)


## description

### summary

Returns any street addresses found in the output from the previous action.


### usage
```
getaddressesfrominput 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"address",
		"street",
		"detect",
		"scan",
		"map"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"CoercionItemClass": "WFLocationContentItem",
	"Description": {
		"DescriptionSummary": "Returns any street addresses found in the output from the previous action."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFStreetAddress"
		]
	},
	"Name": "Get Addresses from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Addresses",
		"Types": [
			"WFLocationContentItem"
		]
	},
	"ShortName": "Get Addresses",
	"Subcategory": "Location"
}
```
