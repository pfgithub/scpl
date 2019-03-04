
## Wait / wait (internally `is.workflow.actions.delay`)

> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description

### summary

Waits for the specified number of seconds before continuing with the next action.


### usage
```
wait wfdelaytime=number
```

### arguments

---

### Stepper Number: wfdelaytime [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Default Value**:
```
1
```
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
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 1,
			"Key": "WFDelayTime",
			"Placeholder": 0,
			"StepperDescription": "Number of Seconds",
			"StepperNoun": "Second",
			"StepperPluralNoun": "Seconds"
		}
	],
	"RequiredResources": [
		"WFMainThreadResource"
	],
	"Subcategory": "Control Flow"
}
```
