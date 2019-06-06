
## Show in iTunes Store / ShowiniTunesStore (internally `is.workflow.actions.showinstore`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Shows the iTunes products or App Store apps passed as input in a store sheet. This is useful with the Search iTunes Store and Search App Store actions.


### usage
```
ShowiniTunesStore (v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### product: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Product
		```
**Allows Variables**: true



Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFShowInStoreAction",
	"ActionKeywords": [
		"app",
		"song",
		"music",
		"movie",
		"ebook",
		"audiobook",
		"tv",
		"album",
		"store"
	],
	"AppIdentifier": "com.apple.MobileStore",
	"Category": "Media",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Shows the iTunes products or App Store apps passed as input in a store sheet. This is useful with the Search iTunes Store and Search App Store actions."
	},
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFProduct",
		"Required": true,
		"Types": [
			"WFiTunesProductContentItem",
			"WFAppStoreAppContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Show in iTunes Store",
	"ParameterSummary": "Show ${WFProduct} in iTunes Store",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFProduct",
			"Label": "Product",
			"Placeholder": "Product"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"UserInterfaces": [
		"UIKit"
	]
}
```
