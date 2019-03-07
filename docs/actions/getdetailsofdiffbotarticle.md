
## Get Details of Diffbot Article / getdetailsofdiffbotarticle (internally `is.workflow.actions.properties.articles`)


## description

### usage
```
getdetailsofdiffbotarticle get=("Name" | "Title" | "Published Date" | "Author" | "Number of Words" | "Main Image URL" | "URL" | "Excerpt")
```

### arguments

---

### get: Get Property [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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
	"WFContentItemClass": "WFArticleContentItem"
}
```
