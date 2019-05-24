
## Search Web / SearchWeb (internally `is.workflow.actions.searchweb`)

> This action requires that Shortcuts has permission to use WFURLOpenResource.


## description

### summary

Searches the web for the text provided as input.


### usage
```
SearchWeb ("Amazon" | "Bing" | "DuckDuckGo" | "eBay" | "Google" | "Reddit" | "Twitter" | "Yahoo!" | "YouTube")
```

### arguments

---

### search: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Google"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Amazon`
- `Bing`
- `DuckDuckGo`
- `eBay`
- `Google`
- `Reddit`
- `Twitter`
- `Yahoo!`
- `YouTube`

---

### source json (for developers)

```json
{
	"ActionClass": "WFSearchWebAction",
	"ActionKeywords": [
		"Amazon",
		"Bing",
		"DuckDuckGo",
		"eBay",
		"Google",
		"Reddit",
		"Twitter",
		"Yahoo!",
		"YouTube",
		"Internet",
		"Website"
	],
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"CreationDate": "2015-08-29T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Searches the web for the text provided as input."
	},
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"InputPassthrough": true,
	"Name": "Search Web",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Google",
			"Items": [
				"Amazon",
				"Bing",
				"DuckDuckGo",
				"eBay",
				"Google",
				"Reddit",
				"Twitter",
				"Yahoo!",
				"YouTube"
			],
			"Key": "WFSearchWebDestination",
			"Label": "Search"
		}
	],
	"RequiredResources": [
		"WFURLOpenResource"
	],
	"Subcategory": "Web"
}
```
