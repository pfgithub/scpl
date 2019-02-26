
## If / if (internally `is.workflow.actions.conditional`)

> This action has a block. Make sure to end it with an end. (More info in usage below)


## description

### summary

Tests if any item passed as input matches the specified condition, and if so, runs the actions inside. Otherwise, the actions under “Otherwise” are run.


### usage
```
if a{input=[string <${strInfo}>|variable] number=[string number] value=[string|text]}
  ...
otherwise
  ...
end
```

### arguments

---

### Enumeration: Input / input (internally `WFCondition`)
**Default Value**:
```
Contains
```


Accepts a string 
containing one of the options:

- `Equals`
- `Contains`
- `Is Greater Than`
- `Is Less Than`

---

### Number: Number / number (internally `WFNumberValue`)
**Placeholder**:
```
7
```
**Allows Variables**: true

**Only enabled if**: argument WFCondition = `Is Greater Than` or `Is Less Than`

Accepts a string 
or variable
with a number.

---

### Text: Value / value (internally `WFConditionalActionString`)
**Placeholder**:
```
example
```
**Allows Variables**: true

**Only enabled if**: argument WFCondition = `Contains` or `Equals`

Accepts a string 
or text
with the text.

---

### source json

```json
{
	"ActionClass": "WFConditionalAction",
	"ActionKeywords": [
		"statement",
		"conditional",
		"then"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Tests if any item passed as input matches the specified condition, and if so, runs the actions inside. Otherwise, the actions under “Otherwise” are run."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFStringContentItem",
			"WFNumberContentItem"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2015-01-11T06:00:00.000Z",
	"Name": "If",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Contains",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Items": [
				"Equals",
				"Contains",
				"Is Greater Than",
				"Is Less Than"
			],
			"Key": "WFCondition",
			"Label": "Input"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFNumberValue",
			"Label": "Number",
			"Placeholder": "7",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCondition",
					"WFParameterValues": [
						"Is Greater Than",
						"Is Less Than"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "",
			"Key": "WFConditionalActionString",
			"Label": "Value",
			"Placeholder": "example",
			"RequiredResources": [
				{
					"WFParameterKey": "WFCondition",
					"WFParameterValues": [
						"Contains",
						"Equals"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"SettingsUI": {
		"ViewControllerClass": "WFConditionalActionSettingsViewController"
	},
	"Subcategory": "Control Flow",
	"BlockInfo": {
		"Example": "\n  ...\notherwise\n  ...\nend"
	}
}
```
