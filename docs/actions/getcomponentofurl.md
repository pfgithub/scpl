
## Get Component of URL / GetComponentofURL (internally `is.workflow.actions.geturlcomponent`)


## description

### summary

Gets the specified part of the URL passed into the action.


### note

URLs are structured as follows: scheme://user:password@host:port/path?query#fragment


### usage
```
GetComponentofURL ("Scheme" | "User" | "Password" | "Host" | "Port" | "Path" | "Query" | "Fragment")
```

### arguments

---

### Component: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Scheme"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Scheme`
- `User`
- `Password`
- `Host`
- `Port`
- `Path`
- `Query`
- `Fragment`

---

### source json (for developers)

```json
{
	"ActionClass": "WFURLGetComponentAction",
	"ActionKeywords": [
		"Scheme",
		"User",
		"Password",
		"Host",
		"Port",
		"Path",
		"Query",
		"Fragment"
	],
	"Category": "Web",
	"Description": {
		"DescriptionNote": "URLs are structured as follows: scheme://user:password@host:port/path?query#fragment",
		"DescriptionSummary": "Gets the specified part of the URL passed into the action."
	},
	"IconName": "URL.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"InputPassthrough": false,
	"Name": "Get Component of URL",
	"Output": {
		"Multiple": false,
		"OutputName": "Component of URL",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Scheme",
			"Items": [
				"Scheme",
				"User",
				"Password",
				"Host",
				"Port",
				"Path",
				"Query",
				"Fragment"
			],
			"Key": "WFURLComponent",
			"Label": "Component"
		}
	],
	"ShortName": "Get Component",
	"Subcategory": "URLs",
	"SuggestedNever": true
}
```
