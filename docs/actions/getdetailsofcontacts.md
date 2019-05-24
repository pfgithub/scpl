
## Get Details of Contacts / GetDetailsofContacts (internally `is.workflow.actions.properties.contacts`)



### usage
```
GetDetailsofContacts ("Email Address" | "Phonetic First Name" | "Prefix" | "URL" | "Nickname" | "Last Name" | "Phone Number" | "Has Photo" | "File Size" | "Creation Date" | "Last Modified Date" | "Middle Name" | "Company" | "Department" | "Name" | "Contact Photo" | "First Name" | "Phonetic Last Name" | "File Extension" | "Street Address" | "Suffix" | "Job Title" | "Notes" | "Birthday" | "Group" | "Phonetic Middle Name")
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"AppIdentifier": "com.apple.MobileAddressBook",
	"Category": "Contacts",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"Name": "Get Details of Contacts",
	"Subcategory": "Contacts",
	"WFContentItemClass": "WFContactContentItem",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemPropertyName",
			"Label": "Get",
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
				"Phonetic Middle Name"
			]
		}
	]
}
```
