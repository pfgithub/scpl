
## Set Name / SetName (internally `is.workflow.actions.setitemname`)


## description

### summary

Sets the name of the item passed as input.


### usage
```
SetName name="string" dontIncludeFileExtension=(true | false | variable) input=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### name: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Name"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### dontIncludeFileExtension: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Input
		```
**Allows Variables**: true



Accepts a variable.

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
		"ParameterKey": "WFInput",
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
	"ParameterSummary": "Set name of ${WFInput} to ${WFName}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFName",
			"Label": "Name",
			"Placeholder": "Name"
		},
		{
			"Class": "WFSwitchParameter",
			"Description": "By default, Shortcuts will automatically include a file extension if one isn't specified. Turn this on if you want to create a file with no extension.",
			"Key": "WFDontIncludeFileExtension",
			"Label": "Don't Include File Extension"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Content"
}
```
