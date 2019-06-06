
## Get Contacts from Input / GetContactsfromInput (internally `is.workflow.actions.detect.contacts`)


## description

### summary

Gets contacts from the result of the previous action.


### usage
```
GetContactsfromInput (v:myvar | mv:myvar | s:myvar)
```

### arguments

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
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"find",
		"detect",
		"people",
		"person",
		"email",
		"e-mail",
		"phone"
	],
	"AppIdentifier": "com.apple.MobileAddressBook",
	"Category": "Contacts",
	"CoercionItemClass": "WFContactContentItem",
	"Description": {
		"DescriptionSummary": "Gets contacts from the result of the previous action."
	},
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFContact"
		]
	},
	"Name": "Get Contacts from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Contacts",
		"Types": [
			"WFContactContentItem"
		]
	},
	"ParameterSummary": "Get contacts from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Get Contacts",
	"Subcategory": "Contacts"
}
```
