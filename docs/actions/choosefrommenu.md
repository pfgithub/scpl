
## Choose from Menu / choosefrommenu (internally `is.workflow.actions.choosefrommenu`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.

> This action has a block. Make sure to end it with an end. (More info in usage below)


## description

### summary

Presents a menu and runs different actions based on which menu item was chosen.


### usage
```
choosefrommenu a{prompt=[string|text] items=[list]}
case
  ...
case
  ...
end
```

### arguments

---

### Text: Prompt / prompt (internally `WFMenuPrompt`)
**Placeholder**:
```
optional
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### List: Items / items (internally `WFMenuItems`)
**Default Value**:
```
One,Two
```
**Allows Variables**: true



Accepts a list.

---

### source json

```json
{
	"ActionClass": "WFChooseFromMenuAction",
	"ActionKeywords": [
		"list",
		"prompt",
		"select",
		"action",
		"sheet",
		"switch"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Presents a menu and runs different actions based on which menu item was chosen."
	},
	"IconName": "Scripting.png",
	"InputPassthrough": true,
	"Name": "Choose from Menu",
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Description": "The instruction provided when the menu is presented.",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFMenuPrompt",
			"Label": "Prompt",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFArrayParameter",
			"DefaultValue": [
				"One",
				"Two"
			],
			"Key": "WFMenuItems",
			"Label": "Items"
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"ShortName": "Menu",
	"Subcategory": "Control Flow",
	"SuggestedAsInitialAction": true,
	"BlockInfo": {
		"Example": "\ncase\n  ...\ncase\n  ...\nend",
		"Completion": "\ncase\n  $0\nend"
	}
}
```
