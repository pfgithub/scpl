
## Filter Files / filterfiles (internally `is.workflow.actions.filter.files`)

> This action is not yet complete. Some arguments may be missing.



### usage
```
filterfiles undefined=NotImplemented get=("Creation Date" | "File Size" | "File Extension" | "Last Modified Date" | "Name" | "Random") get2=("Oldest First" | "Newest First") limit=(true | f alse | variable) getitems=number
```

### arguments

---

#### This paramtype is not implemented. WFFilterParameter

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Creation Date`
- `File Size`
- `File Extension`
- `Last Modified Date`
- `Name`
- `Random`

---

### get2: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true

**Only enabled if**: argument WFContentItemSortProperty != `Random`

Accepts a string 
or variable
containing one of the options:

- `Oldest First`
- `Newest First`

---

### limit: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### getitems: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemFilterAction",
	"Category": "Documents",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"IconName": "Documents.png",
	"Input": {
		"Types": [
			"public.data"
		]
	},
	"Name": "Filter Files",
	"Subcategory": "Files",
	"SuggestedNever": true,
	"WFContentItemClass": "WFGenericFileContentItem",
	"Parameters": [
		{
			"Class": "WFFilterParameter",
			"Key": "WFContentItemFilter",
			"Label": "Filter",
			"ContentItemClass": "WFGenericFileContentItem"
		},
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemSortProperty",
			"Label": "Get",
			"Items": [
				"Creation Date",
				"File Size",
				"File Extension",
				"Last Modified Date",
				"Name",
				"Random"
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemSortOrder",
			"Label": "Get",
			"Items": [
				"Oldest First",
				"Newest First"
			],
			"RequiredResources": [
				{
					"WFParameterKey": "WFContentItemSortProperty",
					"WFParameterValues": [
						"Random"
					],
					"WFResourceClass": "WFParameterRelationResource",
					"WFParameterRelation": "!="
				}
			]
		},
		{
			"Class": "WFSwitchParameter",
			"Key": "WFContentItemLimitEnabled",
			"Label": "Limit"
		},
		{
			"Class": "WFStepperParameter",
			"Key": "WFContentItemLimitNumber",
			"Label": "Get Items"
		}
	]
}
```
