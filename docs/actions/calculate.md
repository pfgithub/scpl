
## Calculate / calculate (internally `is.workflow.actions.math`)


## description

### summary

Performs a number operation on the input and returns the result.


### usage
```
calculate operation=("+" | "-" | "×" | "÷" | "…") scientificoperation=("Modulus" | "x^2" | "x^3" | "x^y" | "e^x" | "10^x" | "ln(x)" | "log(x)" | "√x" | "∛x" | "x!" | "sin(x)" | "cos(x)" | "tan(x)" | "abs(x)") operand=number operand2=number
```

### arguments

---

### operation: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"+"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `+`
- `-`
- `×`
- `÷`
- `…`

---

### scientificoperation: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true

**Only enabled if**: argument WFMathOperation = `…`

Accepts a string 
or variable
containing one of the options:

- `Modulus`
- `x^2`
- `x^3`
- `x^y`
- `e^x`
- `10^x`
- `ln(x)`
- `log(x)`
- `√x`
- `∛x`
- `x!`
- `sin(x)`
- `cos(x)`
- `tan(x)`
- `abs(x)`

---

### operand: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `0`
**Allows Variables**: true

**Only enabled if**: argument WFMathOperation != `…`

		Accepts a number 
		or variable
		with a number.

---

### operand2: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `3`
**Allows Variables**: true

**Only enabled if**: argument WFMathOperation = `…`

**Only enabled if**: argument WFScientificMathOperation = `Modulus` or `x^y`

		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFMathAction",
	"ActionKeywords": [
		"scientific",
		"math",
		"calculator",
		"number",
		"add",
		"addition",
		"subtract",
		"subtraction",
		"multiply",
		"multiplication",
		"times",
		"divide",
		"division",
		"modulus",
		"square",
		"squared",
		"exponent",
		"exponential",
		"power",
		"^",
		"ln",
		"log",
		"logarithm",
		"root",
		"sin",
		"cos",
		"tan",
		"sine",
		"cosine",
		"tangent",
		"trig",
		"abs",
		"absolute",
		"value",
		"factorial"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Performs a number operation on the input and returns the result."
	},
	"IconName": "Calculator.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"NSDecimalNumber"
		]
	},
	"LastModifiedDate": "2015-02-03T08:00:00.000Z",
	"Name": "Calculate",
	"Output": {
		"Multiple": false,
		"OutputName": "Calculation Result",
		"Types": [
			"NSDecimalNumber"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "+",
			"Items": [
				"+",
				"-",
				"×",
				"÷",
				"…"
			],
			"Key": "WFMathOperation",
			"Label": "Operation"
		},
		{
			"Class": "WFEnumerationParameter",
			"Items": [
				"Modulus",
				"x^2",
				"x^3",
				"x^y",
				"e^x",
				"10^x",
				"ln(x)",
				"log(x)",
				"√x",
				"∛x",
				"x!",
				"sin(x)",
				"cos(x)",
				"tan(x)",
				"abs(x)"
			],
			"Key": "WFScientificMathOperation",
			"Label": "Scientific Operation",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMathOperation",
					"WFParameterValue": "…",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFMathOperand",
			"Label": "Operand",
			"Placeholder": "0",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMathOperation",
					"WFParameterRelation": "!=",
					"WFParameterValue": "…",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFScientificMathOperand",
			"Label": "Operand",
			"Placeholder": "3",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMathOperation",
					"WFParameterValue": "…",
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFScientificMathOperation",
					"WFParameterValues": [
						"Modulus",
						"x^y"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Math"
}
```
