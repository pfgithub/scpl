
## Get Object of Class / GetObjectofClass (internally `is.workflow.actions.getclassaction`)


## description

### summary

Returns a particular object class from the input.


### usage
```
GetObjectofClass class="string" input=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### class: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"NSURL"`
**Default Value**: `"NSURL"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

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
	"ActionClass": "WFGetClassAction",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Returns a particular object class from the input."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "Input",
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"IsDebugAction": true,
	"Name": "Get Object of Class",
	"Output": {
		"Multiple": true,
		"OutputName": "Object of Class",
		"Types": [
			"WFContentItem"
		]
	},
	"ParameterSummary": "Get object of class ${Class} from ${Input}",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "NSURL",
			"Key": "Class",
			"Label": "Class",
			"Placeholder": "NSURL"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "Input",
			"Label": "Input",
			"Placeholder": "Input"
		}
	],
	"ShortName": "Object of Class",
	"Subcategory": "Content"
}
```
