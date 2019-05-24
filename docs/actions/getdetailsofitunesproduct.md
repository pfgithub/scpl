
## Get Details of iTunes Product / GetDetailsofiTunesProduct (internally `is.workflow.actions.properties.itunesstore`)



### usage
```
GetDetailsofiTunesProduct ("Currency Code" | "Is Explicit" | "Genre" | "Store URL" | "Name" | "Release Date" | "Price" | "Artwork URL" | "Streamable" | "Store ID" | "Artist" | "Formatted Price" | "Artwork" | "Description" | "Duration")
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Currency Code`
- `Is Explicit`
- `Genre`
- `Store URL`
- `Name`
- `Release Date`
- `Price`
- `Artwork URL`
- `Streamable`
- `Store ID`
- `Artist`
- `Formatted Price`
- `Artwork`
- `Description`
- `Duration`

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"AppIdentifier": "com.apple.MobileStore",
	"Category": "Music",
	"CreationDate": "2016-03-15T07:00:00.000Z",
	"Name": "Get Details of iTunes Product",
	"WFContentItemClass": "WFiTunesProductContentItem",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemPropertyName",
			"Label": "Get",
			"Items": [
				"Currency Code",
				"Is Explicit",
				"Genre",
				"Store URL",
				"Name",
				"Release Date",
				"Price",
				"Artwork URL",
				"Streamable",
				"Store ID",
				"Artist",
				"Formatted Price",
				"Artwork",
				"Description",
				"Duration"
			]
		}
	]
}
```
