
## Find Contacts / findcontacts (internally `is.workflow.actions.filter.contacts`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFContactAccessResource.



### usage
```
findcontacts undefined=NotImplemented sortby=("Email Address" | "Phonetic First Name" | "Prefix" | "URL" | "Nickname" | "Last Name" | "Phone Number" | "Has Photo" | "File Size" | "Creation Date" | "Last Modified Date" | "Middle Name" | "Company" | "Department" | "Name" | "Contact Photo" | "First Name" | "Phonetic Last Name" | "File Extension" | "Street Address" | "Suffix" | "Job Title" | "Notes" | "Birthday" | "Group" | "Phonetic Middle Name" | "Random") order=("Oldest First" | "Newest First" | "A to Z" | "Z to A") limit=(true | f alse | variable) getitems=number
```

### arguments

---

#### This paramtype is not implemented. WFFilterParameter

---

### sortby: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Email Address`
- `Phonetic First Name`
- `Prefix`
- `URL`
- `Nickname`
- `Last Name`
- `Phone Number`
- `Has Photo`
- `File Size`
- `Creation Date`
- `Last Modified Date`
- `Middle Name`
- `Company`
- `Department`
- `Name`
- `Contact Photo`
- `First Name`
- `Phonetic Last Name`
- `File Extension`
- `Street Address`
- `Suffix`
- `Job Title`
- `Notes`
- `Birthday`
- `Group`
- `Phonetic Middle Name`
- `Random`

---

### order: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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

### limit: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### getitems: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
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
	"AppIdentifier": "com.apple.MobileAddressBook",
	"Category": "Contacts",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"LastModifiedDate": "2015-12-14T08:00:00.000Z",
	"Name": "Find Contacts",
	"RequiredResources": [
		"WFContactAccessResource"
	],
	"Subcategory": "Contacts",
	"SuggestedAsInitialAction": false,
	"WFContentItemClass": "WFContactContentItem",
	"Parameters": [
		{
			"Class": "WFFilterParameter",
			"Key": "WFContentItemFilter",
			"Label": "Filter",
			"ContentItemClass": "WFContactContentItem"
		},
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemSortProperty",
			"Label": "Sort by",
			"Items": [
				"Email Address",
				"Phonetic First Name",
				"Prefix",
				"URL",
				"Nickname",
				"Last Name",
				"Phone Number",
				"Has Photo",
				"File Size",
				"Creation Date",
				"Last Modified Date",
				"Middle Name",
				"Company",
				"Department",
				"Name",
				"Contact Photo",
				"First Name",
				"Phonetic Last Name",
				"File Extension",
				"Street Address",
				"Suffix",
				"Job Title",
				"Notes",
				"Birthday",
				"Group",
				"Phonetic Middle Name",
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
