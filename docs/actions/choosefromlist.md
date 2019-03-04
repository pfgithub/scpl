
## Choose from List / choosefromlist (internally `is.workflow.actions.choosefromlist`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource.


## description

### summary

Presents a menu of the items passed as input to the action and outputs the user's selection.


### usage
```
choosefromlist prompt="string" selectmultiple=(true | f alse | variable) selectallinitially=(true | f alse | variable)
```

### arguments

---

### prompt: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### selectmultiple: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### selectallinitially: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: argument WFChooseFromListActionSelectMultiple = `true`

Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFChooseFromListAction",
	"ActionKeywords": [
		"choose",
		"select",
		"list",
		"options",
		"menu",
		"multiple"
	],
	"Category": "Scripting",
	"CreationDate": "2014-02-05T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Presents a menu of the items passed as input to the action and outputs the user's selection."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"TypePassthrough": true,
		"Types": [
			"WFImageContentItem",
			"WFDictionaryContentItem",
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2016-11-29T06:00:00.000Z",
	"Name": "Choose from List",
	"Output": {
		"Multiple": false,
		"OutputName": "Chosen Item",
		"Types": [
			"WFContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "",
			"Description": "The instruction provided when the list is presented.",
			"DisallowedVariableTypes": [
				"Ask"
			],
			"Key": "WFChooseFromListActionPrompt",
			"Label": "Prompt",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "When enabled, multiple items may be chosen from the list.",
			"Key": "WFChooseFromListActionSelectMultiple",
			"Label": "Select Multiple"
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "When enabled, all of the items in the list will start out selected when Choose from List is presented.",
			"Key": "WFChooseFromListActionSelectAll",
			"Label": "Select All Initially",
			"RequiredResources": [
				{
					"WFParameterKey": "WFChooseFromListActionSelectMultiple",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		"WFUserInteractionResource"
	],
	"Subcategory": "Lists",
	"UserInterfaces": [
		"WatchKit",
		"UIKit",
		"UIKitWidget"
	]
}
```
