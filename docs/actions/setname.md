
## Set Name / setname (internally `is.workflow.actions.setitemname`)


## description

### summary

Sets the name of the item passed as input.


### usage
```
setname name="string" advanced=(true | false) dontincludefileextension=(true | f alse | variable)
```

### arguments

---

### name: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"example"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### advanced: Expand Arrow [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)


Accepts a boolean for if this
parameter is expanded or not.
Often expanding fields will
enable or disable other
arguments. If you are using
labels, these can be ignored.

---

### dontincludefileextension: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: argument Advanced = `true`

Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSetItemNameAction",
	"ActionKeywords": [
		"title"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Sets the name of the item passed as input."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"TypePassthrough": true,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2016-10-10T19:00:00.000Z",
	"Name": "Set Name",
	"Output": {
		"Multiple": false,
		"OutputName": "Set Name",
		"Types": [
			"WFContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFName",
			"Label": "Name",
			"Placeholder": "example"
		},
		{
			"Class": "WFExpandingParameter",
			"Key": "Advanced",
			"Label": "Advanced"
		},
		{
			"Class": "WFSwitchParameter",
			"Description": "By default, Shortcuts will automatically include a file extension if one isn't specified. Turn this on if you want to create a file with no extension.",
			"Key": "WFDontIncludeFileExtension",
			"Label": "Don't Include File Extension",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Content"
}
```
