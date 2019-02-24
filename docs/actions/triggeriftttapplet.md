
## Trigger IFTTT Applet / triggeriftttapplet (internally `is.workflow.actions.ifttt`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFUnavailableResource.


## description
### summary
Triggers an IFTTT applet. Configure which applet in the IFTTT app.


### usage
`triggeriftttapplet undefined=[???] wfiftttextraingredients=[string integer|variable] ingredient1=[string|text] ingredient2=[string|text] ingredient3=[string|text] ingredient4=[string|text] ingredient5=[string|text] ingredient6=[string|text] ingredient7=[string|text] ingredient8=[string|text] ingredient9=[string|text] ingredient10=[string|text] undefined=[???]`

### arguments
This paramtype is not implemented. WFIFTTTTriggerNameParameter

---

### Stepper Number: wfiftttextraingredients / wfiftttextraingredients (internally `WFIFTTTExtraIngredients`)


Accepts a string 
containing an integer value.

---

### Text Input: Ingredient 1 / ingredient1 (internally `WFIFTTTExtraIngredient1`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Ingredient 2 / ingredient2 (internally `WFIFTTTExtraIngredient2`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Ingredient 3 / ingredient3 (internally `WFIFTTTExtraIngredient3`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Ingredient 4 / ingredient4 (internally `WFIFTTTExtraIngredient4`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Ingredient 5 / ingredient5 (internally `WFIFTTTExtraIngredient5`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Ingredient 6 / ingredient6 (internally `WFIFTTTExtraIngredient6`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Ingredient 7 / ingredient7 (internally `WFIFTTTExtraIngredient7`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Ingredient 8 / ingredient8 (internally `WFIFTTTExtraIngredient8`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Ingredient 9 / ingredient9 (internally `WFIFTTTExtraIngredient9`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Ingredient 10 / ingredient10 (internally `WFIFTTTExtraIngredient10`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFIFTTTAddRecipeParameter

### for developers

<details><summary>source json</summary>
<p>
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
</p></details>
