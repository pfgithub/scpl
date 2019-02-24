
## Get Pinboard Bookmarks / getpinboardbookmarks (internally `is.workflow.actions.pinboard.get`)


> This action requires that Shortcuts has permission to use WFPinboardAccessResource.


## description
### summary
Gets bookmarks in your Pinboard account.


### usage
`getpinboardbookmarks tags=[string|text] wfbookmarkcount=[string integer]`

### arguments
### Text Input: Tags / tags (internally `WFPinTags`)
**Placeholder**: apple longread
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Stepper Number: wfbookmarkcount / wfbookmarkcount (internally `WFBookmarkCount`)
**Default Value**: 5
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

### source json

```json
{
	"ActionClass": "WFPinboardGetAction",
	"ActionKeywords": [
		"URL",
		"web",
		"later",
		"save",
		"pinboard"
	],
	"AppSection": "Pinboard",
	"Category": "Web",
	"CreationDate": "2015-04-23T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets bookmarks in your Pinboard account."
	},
	"IconName": "Pinboard.png",
	"Name": "Get Pinboard Bookmarks",
	"Output": {
		"Multiple": true,
		"OutputName": "Pinboard Bookmarks",
		"Types": [
			"WFURLContentItem"
		]
	},
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"Description": "If specified, only items matching all of these tags will be returned. Supports a maximum of three tags.",
			"Key": "WFPinTags",
			"Label": "Tags",
			"Placeholder": "apple longread"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 5,
			"Key": "WFBookmarkCount",
			"StepperDescription": "Number of Bookmarks",
			"StepperNoun": "Bookmark",
			"StepperPluralNoun": "Bookmarks",
			"StepperPrefix": "Get"
		}
	],
	"RequiredResources": [
		"WFPinboardAccessResource"
	],
	"ShortName": "Get Bookmarks"
}
```
