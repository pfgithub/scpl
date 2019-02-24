
## Find Music / findmusic (internally `is.workflow.actions.filter.music`)


> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource.



### usage
`findmusic `

### arguments


### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFContentItemFilterAction",
	"AppIdentifier": "com.apple.Music",
	"Category": "Music",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"Input": {
		"Types": [
			"WFMPMediaContentItem",
			"WFAVAssetContentItem",
			"WFGenericFileContentItem"
		]
	},
	"Name": "Find Music",
	"RequiredResources": [
		"WFAppleMusicAccessResource"
	],
	"Subcategory": "Music",
	"WFContentItemClass": "WFMPMediaContentItem",
	"WFContentItemDefaultProperty": "Artist"
}
```
</p></details>
