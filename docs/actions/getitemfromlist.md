
## Get Item from List / GetItemfromList (internally `is.workflow.actions.getitemfromlist`)


## description

### summary

Returns one or more items from the list passed as input. You can get the first item, the last item, a random item, the item at a particular index, or items in a range of indexes.


### note

Lists are one-indexed, so the first item is at index 1, the second is at index 2, etc.


### usage
```
GetItemfromList get=("First Item" | "Last Item" | "Random Item" | "Item At Index" | "Items in Range") index=number startIndex=number endIndex=number list=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"First Item"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `First Item`
- `Last Item`
- `Random Item`
- `Item At Index`
- `Items in Range`

---

### index: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `1`
**Allows Variables**: true

**Only enabled if**: argument WFItemSpecifier == `Item At Index`

		Accepts a number 
		or variable
		with a number.

---

### startIndex: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Allows Variables**: true

**Only enabled if**: argument WFItemSpecifier == `Items in Range`

		Accepts a number 
		or variable
		with a number.

---

### endIndex: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Allows Variables**: true

**Only enabled if**: argument WFItemSpecifier == `Items in Range`

		Accepts a number 
		or variable
		with a number.

---

### list: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		List
		```
**Allows Variables**: true



Accepts a variable.

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
		"ParameterKey": "WFInput",
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
	"ParameterSummary": {
		"WFItemSpecifier(First Item),WFInput": "Get ${WFItemSpecifier} from ${WFInput}",
		"WFItemSpecifier(Item At Index),WFItemIndex,WFInput": "Get ${WFItemSpecifier} ${WFItemIndex} from ${WFInput}",
		"WFItemSpecifier(Items in Range),WFItemRangeStart,WFItemRangeEnd,WFInput": "Get ${WFItemSpecifier} ${WFItemRangeStart} to ${WFItemRangeEnd} from ${WFInput}",
		"WFItemSpecifier(Last Item),WFInput": "Get ${WFItemSpecifier} from ${WFInput}",
		"WFItemSpecifier(Random Item),WFInput": "Get ${WFItemSpecifier} from ${WFInput}"
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
			"Key": "WFItemRangeStart",
			"Label": "Start Index",
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
			"Label": "End Index",
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
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "List",
			"Placeholder": "List"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Lists"
}
```
