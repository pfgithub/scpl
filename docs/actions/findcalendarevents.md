
## Find Calendar Events / FindCalendarEvents (internally `is.workflow.actions.filter.calendarevents`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFCalendarAccessResource.



### usage
```
FindCalendarEvents filter=:filter{...} sortby=("Attendees" | "Calendar" | "Creation Date" | "Duration" | "File Extension" | "File Size" | "Has Alarms" | "Is All Day" | "Last Modified Date" | "Location" | "Name" | "Notes" | "Organizer" | "Start Date" | "Title" | "URL" | "Random") order=("Oldest First" | "Newest First" | "Latest First" | "Smallest First" | "Biggest First" | "Ascending" | "Descending" | "Shortest First" | "Longest First" | "A to Z" | "Z to A") limit=(true | false | variable) getItems=number
```

### arguments

---

### filter: Filter [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#filter-field)


Accepts a :filter{} of filters. This filter supports:

- ~~attendees~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Battendees%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~calendar~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bcalendar%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~creationdate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bcreationdate%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~duration~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bduration%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~fileextension~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bfileextension%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~filesize~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bfilesize%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~hasalarms~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bhasalarms%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~isallday~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bisallday%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~lastmodifieddate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Blastmodifieddate%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~location~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Blocation%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~name~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bname%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~notes~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bnotes%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~organizer~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Borganizer%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~startdate~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Bstartdate%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~title~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Btitle%7D%20%28in%20WFCalendarEventContentItem%29))
- ~~url~~ (Not yet supported. [Submit an Issue](https://github.com/pfgithub/shortcutslang/issues/new?title=Add%20support%20for%20%3Afilter%7Burl%7D%20%28in%20WFCalendarEventContentItem%29)).
			
Example: `:filter{name is testname}`

---

### sortby: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Attendees`
- `Calendar`
- `Creation Date`
- `Duration`
- `File Extension`
- `File Size`
- `Has Alarms`
- `Is All Day`
- `Last Modified Date`
- `Location`
- `Name`
- `Notes`
- `Organizer`
- `Start Date`
- `Title`
- `URL`
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
	"AppIdentifier": "com.apple.mobilecal",
	"Attribution": "Calendar",
	"Category": "Calendar",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"Name": "Find Calendar Events",
	"RequiredResources": [
		"WFCalendarAccessResource"
	],
	"ShortName": "Find Events",
	"Subcategory": "Calendar",
	"SuggestedAsInitialAction": false,
	"WFContentItemClass": "WFCalendarEventContentItem",
	"WFContentItemDefaultProperty": "Calendar",
	"WatchCompatible": true,
	"Parameters": [
		{
			"Class": "WFFilterParameter",
			"Key": "WFContentItemFilter",
			"Label": "Filter",
			"ContentItemClass": "WFCalendarEventContentItem"
		},
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemSortProperty",
			"Label": "Sort by",
			"Items": [
				"Attendees",
				"Calendar",
				"Creation Date",
				"Duration",
				"File Extension",
				"File Size",
				"Has Alarms",
				"Is All Day",
				"Last Modified Date",
				"Location",
				"Name",
				"Notes",
				"Organizer",
				"Start Date",
				"Title",
				"URL",
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
