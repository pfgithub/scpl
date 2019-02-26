
## Random Number / randomnumber (internally `is.workflow.actions.number.random`)


## description

### summary

Passes a random number between the given minimum and maximum to the next action. The minimum and maximum numbers are included as possible results.


### usage
```
randomnumber a{minimum=[string number] maximum=[string number]}
```

### arguments

---

### Number: Minimum / minimum (internally `WFRandomNumberMinimum`)
**Placeholder**:
```
0
```
**Allows Variables**: true



Accepts a string 
or variable
with a number.

---

### Number: Maximum / maximum (internally `WFRandomNumberMaximum`)
**Placeholder**:
```
100
```
**Allows Variables**: true



Accepts a string 
or variable
with a number.

---

### source json

```json
{
	"ActionClass": "WFRandomNumberAction",
	"ActionKeywords": [
		"decimal",
		"math",
		"generate",
		"generator"
	],
	"Category": "Scripting",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Passes a random number between the given minimum and maximum to the next action. The minimum and maximum numbers are included as possible results."
	},
	"IconName": "Calculator.png",
	"Name": "Random Number",
	"Output": {
		"Multiple": false,
		"OutputName": "Random Number",
		"Types": [
			"NSDecimalNumber"
		]
	},
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFRandomNumberMinimum",
			"Label": "Minimum",
			"Placeholder": "0",
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFRandomNumberMaximum",
			"Label": "Maximum",
			"Placeholder": "100",
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Math",
	"SuggestedNever": true
}
```
