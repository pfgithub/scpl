
## Trigger IFTTT Applet / TriggerIFTTTApplet (internally `is.workflow.actions.ifttt`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFUnavailableResource.


## description

### summary

Triggers an IFTTT applet. Configure which applet in the IFTTT app.


### usage
```
TriggerIFTTTApplet TriggerName=("string" | variable)] WFIFTTTExtraIngredients=(number | variable) Ingredient1="string" Ingredient2="string" Ingredient3="string" Ingredient4="string" Ingredient5="string" Ingredient6="string" Ingredient7="string" Ingredient8="string" Ingredient9="string" Ingredient10="string" undefined=NotImplemented
```

### arguments

---

### TriggerName: IFTTT Trigger Name Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Placeholder**: ```
		Log to Google Sheets
		```
**Allows Variables**: true



		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### WFIFTTTExtraIngredients: Stepper Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#stepper-number-fields)


		Accepts a number 
		with a number.

---

### Ingredient1: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFIFTTTExtraIngredients >= `1`

Accepts a string 
or text
with the text.

---

### Ingredient2: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFIFTTTExtraIngredients >= `2`

Accepts a string 
or text
with the text.

---

### Ingredient3: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFIFTTTExtraIngredients >= `3`

Accepts a string 
or text
with the text.

---

### Ingredient4: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFIFTTTExtraIngredients >= `4`

Accepts a string 
or text
with the text.

---

### Ingredient5: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFIFTTTExtraIngredients >= `5`

Accepts a string 
or text
with the text.

---

### Ingredient6: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFIFTTTExtraIngredients >= `6`

Accepts a string 
or text
with the text.

---

### Ingredient7: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFIFTTTExtraIngredients >= `7`

Accepts a string 
or text
with the text.

---

### Ingredient8: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFIFTTTExtraIngredients >= `8`

Accepts a string 
or text
with the text.

---

### Ingredient9: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFIFTTTExtraIngredients >= `9`

Accepts a string 
or text
with the text.

---

### Ingredient10: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true

**Only enabled if**: argument WFIFTTTExtraIngredients >= `10`

Accepts a string 
or text
with the text.

---

#### This paramtype is not implemented. WFIFTTTAddRecipeParameter

---

### source json (for developers)

```json
{
	"ActionClass": "WFIFTTTAction",
	"ActionKeywords": [
		"automation",
		"if",
		"do",
		"hue",
		"home"
	],
	"AppIdentifier": "com.ifttt.ifttt",
	"Category": "Web",
	"CreationDate": "2016-04-28T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Triggers an IFTTT applet. Configure which applet in the IFTTT app."
	},
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFStringContentItem",
			"WFGenericFileContentItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Trigger IFTTT Applet",
	"Parameters": [
		{
			"Class": "WFIFTTTTriggerNameParameter",
			"DisallowedVariableTypes": [
				"Variable",
				"Ask"
			],
			"Key": "IFTTTTriggerName",
			"Label": "Trigger Name",
			"Placeholder": "Log to Google Sheets",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFStepperParameter",
			"DefaultValue": 0,
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Key": "WFIFTTTExtraIngredients",
			"MaximumValue": 10,
			"MinimumValue": 0,
			"StepperDescription": "Extra Ingredients",
			"StepperNoun": "Extra Ingredient",
			"StepperPluralNoun": "Extra Ingredients"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFIFTTTExtraIngredient1",
			"Label": "Ingredient 1",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFIFTTTExtraIngredients",
					"WFParameterRelation": ">=",
					"WFParameterValue": 1,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFIFTTTExtraIngredient2",
			"Label": "Ingredient 2",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFIFTTTExtraIngredients",
					"WFParameterRelation": ">=",
					"WFParameterValue": 2,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFIFTTTExtraIngredient3",
			"Label": "Ingredient 3",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFIFTTTExtraIngredients",
					"WFParameterRelation": ">=",
					"WFParameterValue": 3,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFIFTTTExtraIngredient4",
			"Label": "Ingredient 4",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFIFTTTExtraIngredients",
					"WFParameterRelation": ">=",
					"WFParameterValue": 4,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFIFTTTExtraIngredient5",
			"Label": "Ingredient 5",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFIFTTTExtraIngredients",
					"WFParameterRelation": ">=",
					"WFParameterValue": 5,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFIFTTTExtraIngredient6",
			"Label": "Ingredient 6",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFIFTTTExtraIngredients",
					"WFParameterRelation": ">=",
					"WFParameterValue": 6,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFIFTTTExtraIngredient7",
			"Label": "Ingredient 7",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFIFTTTExtraIngredients",
					"WFParameterRelation": ">=",
					"WFParameterValue": 7,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFIFTTTExtraIngredient8",
			"Label": "Ingredient 8",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFIFTTTExtraIngredients",
					"WFParameterRelation": ">=",
					"WFParameterValue": 8,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFIFTTTExtraIngredient9",
			"Label": "Ingredient 9",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFIFTTTExtraIngredients",
					"WFParameterRelation": ">=",
					"WFParameterValue": 9,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFIFTTTExtraIngredient10",
			"Label": "Ingredient 10",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFIFTTTExtraIngredients",
					"WFParameterRelation": ">=",
					"WFParameterValue": 10,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFIFTTTAddRecipeParameter",
			"Key": "IFTTTAddRecipe",
			"TriggerNameKey": "IFTTTTriggerName"
		}
	],
	"RequiredResources": [
		"WFUnavailableResource"
	]
}
```
