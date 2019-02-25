
## Add to Pinboard / addtopinboard (internally `is.workflow.actions.pinboard.add`)


> This action requires that Shortcuts has permission to use WFPinboardAccessResource.


## description
### summary
Adds the URL passed into the action to your Pinboard.


### usage
`addtopinboard a{title=[string|text] tags=[string|text] public=[string boolean|variable] unread=[string boolean|variable] description=[string|text]}`

### arguments
### Text: Title / title (internally `WFPinTitle`)
**Placeholder**:
```
optional
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text: Tags / tags (internally `WFPinTags`)
**Placeholder**:
```
apple longread
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Switch: Public / public (internally `WFPinPublic`)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### Switch: Unread / unread (internally `WFPinUnread`)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### Text: Description / description (internally `WFPinDescription`)
**Placeholder**:
```
Description
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

### source json

```json
{
	"ActionClass": "WFPinboardAddAction",
	"ActionKeywords": [
		"URL",
		"web",
		"later",
		"save",
		"pinboard"
	],
	"AppSection": "Pinboard",
	"Category": "Web",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Adds the URL passed into the action to your Pinboard."
	},
	"IconName": "Pinboard.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Add to Pinboard",
	"Parameters": [
		{
			"AutocapitalizationType": "Words",
			"Class": "WFTextInputParameter",
			"Key": "WFPinTitle",
			"Label": "Title",
			"Placeholder": "optional"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"Key": "WFPinTags",
			"Label": "Tags",
			"Placeholder": "apple longread"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFPinPublic",
			"Label": "Public"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFPinUnread",
			"Label": "Unread"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPinDescription",
			"Label": "Description",
			"Multiline": true,
			"Placeholder": "Description"
		}
	],
	"RequiredResources": [
		"WFPinboardAccessResource"
	]
}
```
