
## Filter Locations / FilterLocations (internally `is.workflow.actions.filter.locations`)



### usage
```
FilterLocations Filter=:filter{...} Sortby=("Phone Number" | "State" | "Altitude" | "Name" | "Longitude" | "Country" | "City" | "Street" | "URL" | "Latitude" | "ZIP Code" | "Random") Order=("Oldest First" | "Newest First" | "A to Z" | "Z to A") Limit=(true | false | variable) GetItems=number
```

### arguments

---

### Filter: Filter [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#filter-field)


Accepts a :filter{} of filters.

---

### Sortby: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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

### Order: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true

**Only enabled if**: argument WFContentItemSortProperty != `Random`

Accepts a string 
or variable
containing one of the options:

- `Oldest First`
- `Newest First`
- `A to Z`
- `Z to A`

---

### Limit: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### GetItems: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Allows Variables**: true

**Only enabled if**: argument WFSwitchParameter == `true`

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
			"Label": "Sort by",
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
			"Label": "Order",
			"Items": [
				"Oldest First",
				"Newest First",
				"A to Z",
				"Z to A"
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
			"Label": "Get Items",
			"RequiredResources": [
				{
					"WFParameterKey": "WFSwitchParameter",
					"WFParameterValues": [
						true
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	]
}
```
