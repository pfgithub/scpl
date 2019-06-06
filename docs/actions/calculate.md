
## Calculate / Calculate (internally `is.workflow.actions.math`)


## description

### summary

Performs a number operation on the input and returns the result.


### usage
```
Calculate number=number operation=("+" | "-" | "×" | "÷" | "…") scientificOperation=("Modulus" | "x^2" | "x^3" | "x^y" | "e^x" | "10^x" | "ln(x)" | "log(x)" | "√x" | "∛x" | "x!" | "sin(x)" | "cos(x)" | "tan(x)" | "abs(x)") operand=number operand=number
```

### arguments

---

### number: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `Number`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

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

### scientificOperation: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true

**Only enabled if**: argument WFMathOperation == `…`

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
**Placeholder**: `Number`
**Allows Variables**: true

**Only enabled if**: argument WFMathOperation != `…`

		Accepts a number 
		or variable
		with a number.

---

### operand: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `Number`
**Allows Variables**: true

**Only enabled if**: argument WFMathOperation == `…`

**Only enabled if**: argument WFScientificMathOperation == `Modulus` or `x^y`

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
	"Attribution": "Math",
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Performs a number operation on the input and returns the result."
	},
	"IconName": "Calculator.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
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
	"ParameterCollapsingBehavior": "Never",
	"ParameterSummary": {
		"WFInput,WFMathOperation(...),WFScientificMathOperation(Modulus),WFScientificMathOperand": "${WFInput} ${WFMathOperation} ${WFScientificMathOperand}",
		"WFInput,WFMathOperation,WFMathOperand": "${WFInput} ${WFMathOperation} ${WFMathOperand}"
	},
	"Parameters": [
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFInput",
			"Label": "Number",
			"Placeholder": "Number"
		},
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
			"Placeholder": "Number",
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
			"Placeholder": "Number",
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
	"ResidentCompatible": true,
	"Subcategory": "Math"
}
```
