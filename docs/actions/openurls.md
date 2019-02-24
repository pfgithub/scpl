
## Open URLs / openurls (internally `is.workflow.actions.openurl`)


> This action requires that Shortcuts has permission to use WFURLOpenResource.


## description
### summary
Opens URLs passed into the action in Safari.


### usage
`openurls `

### arguments


### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFOpenURLAction",
	"ActionKeywords": [
		"URL",
		"web",
		"display",
		"site",
		"open",
		"show",
		"multiple"
	],
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Opens URLs passed into the action in Safari."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSURL"
		]
	},
	"InputPassthrough": true,
	"IntentIdentifier": "sirikit.intents.custom.com.apple.mobilesafari.OpenURLsIntent",
	"LastModifiedDate": "2015-12-14T08:00:00.000Z",
	"Name": "Open URLs",
	"Parameters": [],
	"RequiredResources": [
		"WFURLOpenResource"
	],
	"Subcategory": "Safari"
}
```
</p></details>
