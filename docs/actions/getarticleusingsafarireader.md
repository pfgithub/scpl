
## Get Article using Safari Reader / GetArticleusingSafariReader (internally `is.workflow.actions.getarticle`)


## description

### summary

Gets article details, including body text, author, publish date, and more, from every URL passed into the action.


### note

Use a Get Details of Article action immediately after this action to get specific details about the article. This action only supports getting one article from each URL.


### usage
```
GetArticleusingSafariReader "string"
```

### arguments

---

### uRL: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"web",
		"pages",
		"author",
		"word",
		"excerpt",
		"title",
		"content",
		"body",
		"published",
		"reader"
	],
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"CoercionItemClass": "WFArticleContentItem",
	"CreationDate": "2015-02-13T08:00:00.000Z",
	"Description": {
		"DescriptionNote": "Use a Get Details of Article action immediately after this action to get specific details about the article. This action only supports getting one article from each URL.",
		"DescriptionSummary": "Gets article details, including body text, author, publish date, and more, from every URL passed into the action."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFWebPage",
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"InputPassthrough": false,
	"Name": "Get Article using Safari Reader",
	"Output": {
		"OutputName": "Article",
		"Types": [
			"WFArticleContentItem"
		]
	},
	"ParameterSummary": "Get article from ${WFWebPage}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFWebPage",
			"KeyboardType": "URL",
			"Label": "URL"
		}
	],
	"ShortName": "Get Article",
	"Subcategory": "Articles"
}
```
