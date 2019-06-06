
## Get Items from RSS Feed / GetItemsfromRSSFeed (internally `is.workflow.actions.rss`)


## description

### summary

Downloads the latest items from an RSS feed.


### usage
```
GetItemsfromRSSFeed uRL="string" WFRSSItemQuantity=number
```

### arguments

---

### uRL: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"RSS feed"`
**Default Value**: `"https://www.apple.com/newsroom/rss-feed.rss"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### WFRSSItemQuantity: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `10`
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
	"ParameterSummary": "Get ${WFRSSItemQuantity} from ${WFRSSFeedURL}",
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DefaultValue": "https://www.apple.com/newsroom/rss-feed.rss",
			"DisableAutocorrection": true,
			"Key": "WFRSSFeedURL",
			"KeyboardType": "URL",
			"Label": "URL",
			"Placeholder": "RSS feed",
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
	"ResidentCompatible": true,
	"ShortName": "Get RSS Items",
	"Subcategory": "URLs"
}
```
