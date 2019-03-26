
## Show Webpage / showwebpage (internally `is.workflow.actions.showwebpage`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Shows the web URL passed into the action in a Safari View Controller, allowing you to view the webpage without switching apps.


### usage
```
showwebpage entersafarireader=(true | f alse | variable)
```

### arguments

---

### entersafarireader: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFShowWebPageAction",
	"ActionKeywords": [
		"safari",
		"view",
		"controller",
		"open",
		"website",
		"preview",
		"quick",
		"look"
	],
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"CreationDate": "2016-05-17T22:30:00.000Z",
	"Description": {
		"DescriptionSummary": "Shows the web URL passed into the action in a Safari View Controller, allowing you to view the webpage without switching apps."
	},
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFURLContentItem",
			"WFRichTextContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Show Webpage",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "Enter Safari Reader mode if it’s available for the given webpage.",
			"Key": "WFEnterSafariReader",
			"Label": "Enter Safari Reader"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Web",
	"UserInterfaces": [
		"UIKit"
	]
}
```
