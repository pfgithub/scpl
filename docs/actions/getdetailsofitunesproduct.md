
## Get Details of iTunes Product / getdetailsofitunesproduct (internally `is.workflow.actions.properties.itunesstore`)



### usage
```
getdetailsofitunesproduct get=("Currency Code" | "Is Explicit" | "Genre" | "Store URL" | "Name" | "Release Date" | "Price" | "Artwork URL" | "Streamable" | "Store ID" | "Artist" | "Formatted Price" | "Artwork" | "Description" | "Duration")
```

### arguments

---

### get: Get Property [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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
	"WFContentItemClass": "WFiTunesProductContentItem"
}
```
