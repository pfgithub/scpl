
## Get Item from List / getitemfromlist (internally `is.workflow.actions.getitemfromlist`)


## description

### summary

Returns one or more items from the list passed as input. You can get the first item, the last item, a random item, the item at a particular index, or items in a range of indexes.


### usage
```
getitemfromlist get="First Item" | "Last Item" | "Random Item" | "Item At Index" | "Items in Range" index=number getitemsfromindex=number toindex=number
```

### arguments

---

### Enumeration: get [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
First Item
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `First Item`
- `Last Item`
- `Random Item`
- `Item At Index`
- `Items in Range`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

---

### Number: index [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
1
```
**Allows Variables**: true

**Only enabled if**: argument WFItemSpecifier = `Item At Index`

		Accepts a number 
		or variable
		with a number.

---

### Number: getitemsfromindex [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
optional
```
**Default Value**:
```
1
```
**Allows Variables**: true

**Only enabled if**: argument WFItemSpecifier = `Items in Range`

		Accepts a number 
		or variable
		with a number.

---

### Number: toindex [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**:
```
optional
```
**Allows Variables**: true

**Only enabled if**: argument WFItemSpecifier = `Items in Range`

		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetItemFromListAction",
	"Category": "Scripting",
	"Description": {
		"DescriptionNote": "Lists are one-indexed, so the first item is at index 1, the second is at index 2, etc.",
		"DescriptionSummary": "Returns one or more items from the list passed as input. You can get the first item, the last item, a random item, the item at a particular index, or items in a range of indexes."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"TypePassthrough": true,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2016-05-23T07:00:00.000Z",
	"Name": "Get Item from List",
	"Output": {
		"Multiple": true,
		"OutputName": "Item from List",
		"Types": [
			"WFContentItem"
		]
	},
	"Parameters": [
		{
			"ActionKeywords": [
				"indices",
				"subset"
			],
			"Class": "WFEnumerationParameter",
			"DefaultValue": "First Item",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Items": [
				"First Item",
				"Last Item",
				"Random Item",
				"Item At Index",
				"Items in Range"
			],
			"Key": "WFItemSpecifier",
			"Label": "Get"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFItemIndex",
			"Label": "Index",
			"Placeholder": "1",
			"RequiredResources": [
				{
					"WFParameterKey": "WFItemSpecifier",
					"WFParameterValue": "Item At Index",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"DefaultValue": 1,
			"Key": "WFItemRangeStart",
			"Label": "Get Items From Index",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFItemSpecifier",
					"WFParameterValue": "Items in Range",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFNumberFieldParameter",
			"Key": "WFItemRangeEnd",
			"Label": "To Index",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFItemSpecifier",
					"WFParameterValue": "Items in Range",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Lists"
}
```
