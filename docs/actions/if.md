
## If / If (internally `is.workflow.actions.conditional`)

> This action is not yet complete. Some arguments may be missing.

> This action has a block. Make sure to end it with an end. (More info in usage below)


## description

### summary

Tests if a condition is true, and if so, runs the actions inside. Otherwise, the actions under “Otherwise” are run.


### usage
```
If undefined=NotImplemented undefined=NotImplemented text="string" number=number number=number number=number number=number undefined=NotImplemented undefined=NotImplemented undefined=NotImplemented undefined=NotImplemented undefined=NotImplemented undefined=NotImplemented WFEnumeration=("string" | variable)] undefined=NotImplemented
  ...
otherwise
  ...
end
```

### arguments

---

#### This paramtype is not implemented. WFConditionalSubjectParameter

---

#### This paramtype is not implemented. WFConditionalOperatorParameter

---

### text: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### number: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### number: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### number: Slider Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### number: Slider Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

#### This paramtype is not implemented. WFDatePickerParameter

---

#### This paramtype is not implemented. WFDatePickerParameter

---

#### This paramtype is not implemented. WFUnitQuantityFieldParameter

---

#### This paramtype is not implemented. WFUnitQuantityFieldParameter

---

#### This paramtype is not implemented. WFDurationQuantityFieldParameter

---

#### This paramtype is not implemented. WFDurationQuantityFieldParameter

---

### WFEnumeration: Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Placeholder**: ```
		Choose
		```
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

#### This paramtype is not implemented. WFNumericDynamicEnumerationParameter

---

### source json (for developers)

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
		"DescriptionSummary": "Tests if a condition is true, and if so, runs the actions inside. Otherwise, the actions under “Otherwise” are run."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"ParameterKey": "WFInput",
		"Types": [
			"WFContentItem"
		]
	},
	"InputPassthrough": true,
	"LastModifiedDate": "2015-01-11T06:00:00.000Z",
	"Name": "If",
	"ParameterSummary": {
		"WFInput": "If ${WFInput}",
		"WFInput,WFCondition": "If ${WFInput} ${WFCondition}",
		"WFInput,WFCondition,WFBoundedNumber": "If ${WFInput} ${WFCondition} ${WFBoundedNumber}",
		"WFInput,WFCondition,WFBoundedNumber,WFAnotherBoundedNumber": "If ${WFInput} ${WFCondition} ${WFBoundedNumber} and ${WFAnotherBoundedNumber}",
		"WFInput,WFCondition,WFConditionalActionString": "If ${WFInput} ${WFCondition} ${WFConditionalActionString}",
		"WFInput,WFCondition,WFDate": "If ${WFInput} ${WFCondition} ${WFDate}",
		"WFInput,WFCondition,WFDate,WFAnotherDate": "If ${WFInput} ${WFCondition} ${WFDate} and ${WFAnotherDate}",
		"WFInput,WFCondition,WFDuration": "If ${WFInput} ${WFCondition} ${WFDuration}",
		"WFInput,WFCondition,WFDuration,WFAnotherDuration": "If ${WFInput} ${WFCondition} ${WFDuration} and ${WFAnotherDuration}",
		"WFInput,WFCondition,WFEnumeration": "If ${WFInput} ${WFCondition} ${WFEnumeration}",
		"WFInput,WFCondition,WFMeasurement": "If ${WFInput} ${WFCondition} ${WFMeasurement}",
		"WFInput,WFCondition,WFMeasurement,WFAnotherMeasurement": "If ${WFInput} ${WFCondition} ${WFMeasurement} and ${WFAnotherMeasurement}",
		"WFInput,WFCondition,WFNumberValue": "If ${WFInput} ${WFCondition} ${WFNumberValue}",
		"WFInput,WFCondition,WFNumberValue,WFAnotherNumber": "If ${WFInput} ${WFCondition} ${WFNumberValue} and ${WFAnotherNumber}",
		"WFInput,WFCondition,WFNumericEnumeration": "If ${WFInput} ${WFCondition} ${WFNumericEnumeration}"
	},
	"Parameters": [
		{
			"Class": "WFConditionalSubjectParameter",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFInput",
			"Label": "Input"
		},
		{
			"Class": "WFConditionalOperatorParameter",
			"Key": "WFCondition",
			"Label": "Condition"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFConditionalActionString",
			"Label": "Text"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFNumberValue",
			"Label": "Number"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFAnotherNumber",
			"Label": "Number"
		},
		{
			"Class": "WFSliderParameter",
			"Key": "WFBoundedNumber",
			"Label": "Number"
		},
		{
			"Class": "WFSliderParameter",
			"Key": "WFAnotherBoundedNumber",
			"Label": "Number"
		},
		{
			"Class": "WFDatePickerParameter",
			"Key": "WFDate",
			"Label": "Date",
			"ShowsDatePicker": true
		},
		{
			"Class": "WFDatePickerParameter",
			"Key": "WFAnotherDate",
			"Label": "Date",
			"ShowsDatePicker": true
		},
		{
			"Class": "WFUnitQuantityFieldParameter",
			"Key": "WFMeasurement",
			"Label": "Number"
		},
		{
			"Class": "WFUnitQuantityFieldParameter",
			"Key": "WFAnotherMeasurement",
			"Label": "Number"
		},
		{
			"Class": "WFDurationQuantityFieldParameter",
			"Key": "WFDuration",
			"Label": "Number"
		},
		{
			"Class": "WFDurationQuantityFieldParameter",
			"Key": "WFAnotherDuration",
			"Label": "Number"
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"Key": "WFEnumeration",
			"Placeholder": "Choose"
		},
		{
			"Class": "WFNumericDynamicEnumerationParameter",
			"Key": "WFNumericEnumeration",
			"Placeholder": "Choose"
		}
	],
	"ResidentCompatible": true,
	"SettingsUI": {
		"ViewControllerClass": "WFConditionalActionSettingsViewController"
	},
	"SnappingPassthrough": true,
	"Subcategory": "Control Flow",
	"BlockInfo": {
		"Example": "\n  ...\notherwise\n  ...\nend",
		"Completion": "\n\t$0\notherwise\nend"
	}
}
```
