
## Get Details of Calendar Events / GetDetailsofCalendarEvents (internally `is.workflow.actions.properties.calendarevents`)



### usage
```
GetDetailsofCalendarEvents ("Attendees" | "Calendar" | "Creation Date" | "Duration" | "File Extension" | "File Size" | "Has Alarms" | "Is All Day" | "Last Modified Date" | "Location" | "Name" | "Notes" | "Organizer" | "Start Date" | "Title" | "URL")
```

### arguments

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
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

---

### source json (for developers)

```json
{
	"ActionClass": "WFContentItemPropertiesAction",
	"AppIdentifier": "com.apple.mobilecal",
	"Category": "Calendar",
	"CreationDate": "2015-01-22T08:00:00.000Z",
	"Name": "Get Details of Calendar Events",
	"Subcategory": "Calendar",
	"WFContentItemClass": "WFCalendarEventContentItem",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"Key": "WFContentItemPropertyName",
			"Label": "Get",
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
				"URL"
			]
		}
	]
}
```
