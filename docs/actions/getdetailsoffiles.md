
## Get Details of Files / GetDetailsofFiles (internally `is.workflow.actions.properties.files`)



### usage
```
GetDetailsofFiles ("Creation Date" | "File Size" | "File Extension" | "Last Modified Date" | "Name")
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Creation Date`
- `File Size`
- `File Extension`
- `Last Modified Date`
- `Name`

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"Category": "Documents",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"IconName": "Documents.png",
	"Input": {
		"Types": [
			"public.data"
		]
	},
	"Name": "Get Details of Files",
	"ResidentCompatible": true,
	"Subcategory": "Files",
	"SuggestedNever": true,
	"WFContentItemClass": "WFGenericFileContentItem",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemPropertyName",
			"Label": "Get",
			"Items": [
				"Creation Date",
				"File Size",
				"File Extension",
				"Last Modified Date",
				"Name"
			]
		}
	]
}
```
