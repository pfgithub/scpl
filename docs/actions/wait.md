
## Wait / wait (internally `is.workflow.actions.delay`)


> This action requires that Shortcuts has permission to use WFMainThreadResource.


## description
### summary
Waits for the specified number of seconds before continuing with the next action.


### usage
`wait wfdelaytime=[string integer]`

### arguments
### Stepper Number: wfdelaytime / wfdelaytime (internally `WFDelayTime`)
**Default Value**: 1
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

### source json

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
