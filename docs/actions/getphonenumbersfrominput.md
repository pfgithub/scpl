
## Get Phone Numbers from Input / GetPhoneNumbersfromInput (internally `is.workflow.actions.detect.phonenumber`)


## description

### summary

Returns any phone numbers found in the output from the previous action.


### usage
```
GetPhoneNumbersfromInput "string"
```

### arguments

---

### input: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Input"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFCoercionAction",
	"ActionKeywords": [
		"phone",
		"number",
		"detect",
		"scan"
	],
	"Category": "Contacts",
	"CoercionItemClass": "WFPhoneNumberContentItem",
	"Description": {
		"DescriptionSummary": "Returns any phone numbers found in the output from the previous action."
	},
	"IconName": "PhoneNumber.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"WFPhoneNumber"
		]
	},
	"Name": "Get Phone Numbers from Input",
	"Output": {
		"Multiple": true,
		"OutputName": "Phone Numbers",
		"Types": [
			"WFPhoneNumberContentItem"
		]
	},
	"ParameterSummary": "Get phone numbers from ${WFInput}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Phone"
}
```
