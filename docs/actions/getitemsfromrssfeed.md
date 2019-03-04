
## Get Items from RSS Feed / getitemsfromrssfeed (internally `is.workflow.actions.rss`)


## description

### summary

Downloads the latest items from an RSS feed.


### usage
```
getitemsfromrssfeed url="string" wfrssitemquantity=number
```

### arguments

---

### Text: url [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Default Value**:
```
https://www.apple.com/newsroom/rss-feed.rss
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Stepper Number: wfrssitemquantity [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**:
```
10
```
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFRSSFeedAction",
	"ActionKeywords": [
		"article",
		"podcast",
		"text",
		"clipboard",
		"copy",
		"paste"
	],
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Downloads the latest items from an RSS feed."
	},
	"IconName": "RSS.png",
	"LastModifiedDate": "2015-02-19T08:00:00.000Z",
	"Name": "Get Items from RSS Feed",
	"Output": {
		"Multiple": true,
		"OutputName": "Items from RSS Feed",
		"Types": [
			"WFArticle",
			"NSURL"
		]
	},
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DefaultValue": "https://www.apple.com/newsroom/rss-feed.rss",
			"DisableAutocorrection": true,
			"Key": "WFRSSFeedURL",
			"KeyboardType": "URL",
			"Label": "URL",
			"TextContentType": "URL"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 10,
			"Key": "WFRSSItemQuantity",
			"StepperDescription": "Number of Items",
			"StepperNoun": "Item",
			"StepperPluralNoun": "Items",
			"StepperPrefix": "Get"
		}
	],
	"ShortName": "Get RSS Items",
	"Subcategory": "URLs"
}
```
