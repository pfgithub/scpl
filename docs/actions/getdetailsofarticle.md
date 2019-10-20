
## Get Details of Article / GetDetailsofArticle (internally `is.workflow.actions.properties.articles`)



### usage
```
GetDetailsofArticle ("Name" | "Title" | "Published Date" | "Author" | "Number of Words" | "Main Image URL" | "URL" | "Excerpt")
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Name`
- `Title`
- `Published Date`
- `Author`
- `Number of Words`
- `Main Image URL`
- `URL`
- `Excerpt`

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"CreationDate": "2015-02-13T08:00:00.000Z",
	"Name": "Get Details of Article",
	"Subcategory": "Articles",
	"WFContentItemClass": "WFArticleContentItem",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemPropertyName",
			"Label": "Get",
			"Items": [
				"Name",
				"Title",
				"Published Date",
				"Author",
				"Number of Words",
				"Main Image URL",
				"URL",
				"Excerpt"
			]
		}
	]
}
```
