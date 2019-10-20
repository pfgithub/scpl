
## Find Contacts / FindContacts (internally `is.workflow.actions.filter.contacts`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFContactAccessResource.



### usage
```
FindContacts filter=:filter{...} sortby=("Email Address" | "Phonetic First Name" | "Prefix" | "URL" | "Nickname" | "Last Name" | "Phone Number" | "Has Photo" | "File Size" | "Creation Date" | "Last Modified Date" | "Middle Name" | "Company" | "Department" | "Name" | "Contact Photo" | "First Name" | "Phonetic Last Name" | "File Extension" | "Street Address" | "Suffix" | "Job Title" | "Notes" | "Birthday" | "Group" | "Phonetic Middle Name" | "Random") order=("Oldest First" | "Newest First" | "Latest First" | "Smallest First" | "Biggest First" | "Ascending" | "Descending" | "Shortest First" | "Longest First" | "A to Z" | "Z to A") limit=(true | false | variable) getItems=number
```

### arguments

---

### filter: Filter [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#filter-field)


Accepts a :filter{} of filters. This filter supports:

- ~~emailaddress~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bemailaddress%7D%20%28in%20WFContactContentItem%29))
- ~~phoneticfirstname~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bphoneticfirstname%7D%20%28in%20WFContactContentItem%29))
- ~~prefix~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bprefix%7D%20%28in%20WFContactContentItem%29))
- ~~url~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Burl%7D%20%28in%20WFContactContentItem%29))
- ~~nickname~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bnickname%7D%20%28in%20WFContactContentItem%29))
- ~~lastname~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Blastname%7D%20%28in%20WFContactContentItem%29))
- ~~phonenumber~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bphonenumber%7D%20%28in%20WFContactContentItem%29))
- ~~hasphoto~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bhasphoto%7D%20%28in%20WFContactContentItem%29))
- ~~filesize~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bfilesize%7D%20%28in%20WFContactContentItem%29))
- ~~creationdate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bcreationdate%7D%20%28in%20WFContactContentItem%29))
- ~~lastmodifieddate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Blastmodifieddate%7D%20%28in%20WFContactContentItem%29))
- ~~middlename~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bmiddlename%7D%20%28in%20WFContactContentItem%29))
- ~~company~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bcompany%7D%20%28in%20WFContactContentItem%29))
- ~~department~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bdepartment%7D%20%28in%20WFContactContentItem%29))
- name (Supported for is, isnot, contains, doesnotcontain, beginswith, endswith)
- ~~contactphoto~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bcontactphoto%7D%20%28in%20WFContactContentItem%29))
- ~~firstname~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bfirstname%7D%20%28in%20WFContactContentItem%29))
- ~~phoneticlastname~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bphoneticlastname%7D%20%28in%20WFContactContentItem%29))
- ~~fileextension~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bfileextension%7D%20%28in%20WFContactContentItem%29))
- ~~streetaddress~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bstreetaddress%7D%20%28in%20WFContactContentItem%29))
- ~~suffix~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bsuffix%7D%20%28in%20WFContactContentItem%29))
- ~~jobtitle~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bjobtitle%7D%20%28in%20WFContactContentItem%29))
- ~~notes~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bnotes%7D%20%28in%20WFContactContentItem%29))
- ~~birthday~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bbirthday%7D%20%28in%20WFContactContentItem%29))
- ~~group~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bgroup%7D%20%28in%20WFContactContentItem%29))
- ~~phoneticmiddlename~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bphoneticmiddlename%7D%20%28in%20WFContactContentItem%29)).
			
Example: `:filter{name is testname}`

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
- `Latest First`
- `Smallest First`
- `Biggest First`
- `Ascending`
- `Descending`
- `Shortest First`
- `Longest First`
- `A to Z`
- `Z to A`

---

### limit: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### getItems: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
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
	"Attribution": "Contacts",
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
				"Latest First",
				"Smallest First",
				"Biggest First",
				"Ascending",
				"Descending",
				"Shortest First",
				"Longest First",
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
