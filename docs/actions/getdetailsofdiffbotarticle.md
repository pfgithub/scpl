
## Get Details of Diffbot Article / GetDetailsofDiffbotArticle (internally `is.workflow.actions.properties.articles`)


## description

### note

Powered by Diffbot (diffbot.com)


### usage
```
GetDetailsofDiffbotArticle ("Name" | "Title" | "Published Date" | "Author" | "Number of Words" | "Main Image URL" | "URL" | "Excerpt")
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
	"Category": "Web",
	"CreationDate": "2015-02-13T08:00:00.000Z",
	"Description": {
		"DescriptionNote": "Powered by Diffbot (diffbot.com)"
	},
	"IconName": "RichText.png",
	"Name": "Get Details of Diffbot Article",
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
