
## Get Items from Pocket / getitemsfrompocket (internally `is.workflow.actions.pocket.get`)

> This action requires that Shortcuts has permission to use WFPocketAccessResource.


## description

### summary

Returns items in your Pocket account.


### usage
```
getitemsfrompocket a{wfpocketitemcount=[string integer] type=[string <Unread | Archived | All>] search=[string|text] tag=[string|text]}
```

### arguments

---

### Stepper Number: wfpocketitemcount / wfpocketitemcount (internally `WFPocketItemCount`)
**Allows Variables**: true



Accepts a string 
or variable
containing an integer value.

---

### Enumeration: Type / type (internally `WFPocketItemState`)
**Default Value**:
```
All
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Unread`
- `Archived`
- `All`

---

### Text: Search / search (internally `WFPocketItemSearchTerm`)
**Placeholder**:
```
optional
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text: Tag / tag (internally `WFPocketItemSearchTags`)
**Placeholder**:
```
optional
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json

```json
{
	"ActionClass": "WFPocketGetAction",
	"AppIdentifier": "com.ideashower.ReadItLaterPro",
	"Category": "Web",
	"Description": {
		"DescriptionSummary": "Returns items in your Pocket account."
	},
	"Name": "Get Items from Pocket",
	"Output": {
		"Multiple": true,
		"OutputName": "Items from Pocket",
		"Types": [
			"NSURL"
		]
	},
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"Key": "WFPocketItemCount",
			"StepperDescription": "Number of Items",
			"StepperNoun": "Item",
			"StepperPluralNoun": "Items",
			"StepperPrefix": "Get"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "All",
			"Items": [
				"Unread",
				"Archived",
				"All"
			],
			"Key": "WFPocketItemState",
			"Label": "Type"
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "If specified, only items with titles or URLs matching this search will be returned.",
			"Key": "WFPocketItemSearchTerm",
			"Label": "Search",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Description": "If specified, only items matching this tag will be returned.",
			"Key": "WFPocketItemSearchTags",
			"Label": "Tag",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		}
	],
	"RequiredResources": [
		"WFPocketAccessResource"
	],
	"ShortName": "Get Pocket Items"
}
```
