
## Wait / Wait (internally `is.workflow.actions.delay`)

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Waits for the specified number of seconds before continuing with the next action.


### usage
```
Wait number
```

### arguments

---

### WFDelayTime: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**: `1`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFDelayAction",
	"ActionKeywords": [
		"time",
		"delay",
		"script",
		"wait",
		"second"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Waits for the specified number of seconds before continuing with the next action."
	},
	"IconName": "Scripting.png",
	"InputPassthrough": true,
	"Name": "Wait",
	"ParameterSummary": "Wait ${WFDelayTime}",
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFDelayTime",
			"StepperDescription": "Number of Seconds",
			"StepperNoun": "Second",
			"StepperPluralNoun": "Seconds"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"ResidentCompatible": true,
	"SnappingPassthrough": true,
	"Subcategory": "Control Flow"
}
```
