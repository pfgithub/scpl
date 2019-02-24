
## Number / number (internally `is.workflow.actions.number`)



## description
### summary
Passes a number to the next action.


### usage
`number number=[string number]`

### arguments
### Number: Number / number (internally `WFNumberActionNumber`)
**Placeholder**: 42
**Allows Variables**: true


Accepts a string 
or variable
with a number.

### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFNumberAction",
	"ActionKeywords": [
		"decimal",
		"math"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Passes a number to the next action."
	},
	"IconName": "Calculator.png",
	"Name": "Number",
	"Output": {
		"Multiple": false,
		"OutputName": "Number",
		"Types": [
			"NSDecimalNumber"
		]
	},
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFNumberActionNumber",
			"Label": "Number",
			"Placeholder": "42",
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Math",
	"SuggestedNever": true
}
```
</p></details>
