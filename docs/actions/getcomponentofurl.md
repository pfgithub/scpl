
## Get Component of URL / GetComponentofURL (internally `is.workflow.actions.geturlcomponent`)


## description

### summary

Gets the specified part of the URL passed into the action.


### note

URLs are structured as follows: scheme://user:password@host:port/path?query#fragment


### usage
```
GetComponentofURL uRL="string" component=("Scheme" | "User" | "Password" | "Host" | "Port" | "Path" | "Query" | "Fragment")
```

### arguments

---

### uRL: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### component: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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
	"Attribution": "URL",
	"Category": "Web",
	"Description": {
		"DescriptionNote": "URLs are structured as follows: scheme://user:password@host:port/path?query#fragment",
		"DescriptionSummary": "Gets the specified part of the URL passed into the action."
	},
	"IconName": "URL.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFURL",
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
	"ParameterSummary": "Get ${WFURLComponent} from ${WFURL}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFURL",
			"KeyboardType": "URL",
			"Label": "URL"
		},
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
	"ResidentCompatible": true,
	"ShortName": "Get Component",
	"Subcategory": "URLs",
	"SuggestedNever": true
}
```
