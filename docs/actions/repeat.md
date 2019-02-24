
## Repeat / repeat (internally `is.workflow.actions.repeat.count`)



## description
### summary
Repeats the contained actions, running them the specified number of times.


### usage
`repeat wfrepeatcount=[string integer]`

### arguments
### Stepper Number: wfrepeatcount / wfrepeatcount (internally `WFRepeatCount`)
**Allows Variables**: true


Accepts a string 
or variable
containing an integer value.

### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFFiniteRepeatAction",
	"ActionKeywords": [
		"loop",
		"while",
		"for"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Repeats the contained actions, running them the specified number of times."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"Required": false,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2015-05-12T07:00:00.000Z",
	"Name": "Repeat",
	"Output": {
		"Multiple": true,
		"OutputName": "Repeat",
		"Types": [
			"WFContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFStepperParameter",
			"Key": "WFRepeatCount",
			"StepperDescription": "Repetitions",
			"StepperNoun": "Time",
			"StepperPluralNoun": "Times",
			"StepperPrefix": "Repeat"
		}
	],
	"Subcategory": "Control Flow"
}
```
</details>
