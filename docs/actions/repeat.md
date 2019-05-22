
## Repeat / Repeat (internally `is.workflow.actions.repeat.count`)

> This action has a block. Make sure to end it with an end. (More info in usage below)


## description

### summary

Repeats the contained actions, running them the specified number of times.


### usage
```
Repeat number
  ...
end
```

### arguments

---

### WFRepeatCount: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

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
	"Subcategory": "Control Flow",
	"BlockInfo": {
		"Example": "\n  ...\nend",
		"Completion": "\n\t$0\nend"
	}
}
```
