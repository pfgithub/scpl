
## Choose from Menu / ChoosefromMenu (internally `is.workflow.actions.choosefrommenu`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.

> This action has a block. Make sure to end it with an end. (More info in usage below)


## description

### summary

Presents a menu and runs different actions based on which menu item was chosen.


### usage
```
ChoosefromMenu prompt="string" items=[list, items]
case
  ...
case
  ...
end
```

### arguments

---

### prompt: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### items: List [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#list-field)
**Default Value**: ```
		["One","Two"]
		```
**Allows Variables**: true



Accepts a list.

---

### source json (for developers)

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
		"Completion": "\ncase\n\t$0\nend"
	}
}
```
