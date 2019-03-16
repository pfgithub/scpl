
## Filter Locations / filterlocations (internally `is.workflow.actions.filter.locations`)

> This action is not yet complete. Some arguments may be missing.



### usage
```
filterlocations undefined=NotImplemented get=("Phone Number" | "State" | "Altitude" | "Name" | "Longitude" | "Country" | "City" | "Street" | "URL" | "Latitude" | "ZIP Code" | "Random") get2=("Oldest First" | "Newest First") limit=(true | f alse | variable) getitems=number
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

- `Phone Number`
- `State`
- `Altitude`
- `Name`
- `Longitude`
- `Country`
- `City`
- `Street`
- `URL`
- `Latitude`
- `ZIP Code`
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
	"Category": "Location",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"IconName": "Location.png",
	"Name": "Filter Locations",
	"WFContentItemClass": "WFLocationContentItem",
	"Parameters": [
		{
			"Class": "WFFilterParameter",
			"Key": "WFContentItemFilter",
			"Label": "Filter",
			"ContentItemClass": "WFLocationContentItem"
		},
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemSortProperty",
			"Label": "Get",
			"Items": [
				"Phone Number",
				"State",
				"Altitude",
				"Name",
				"Longitude",
				"Country",
				"City",
				"Street",
				"URL",
				"Latitude",
				"ZIP Code",
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
