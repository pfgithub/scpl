
## Change Case / ChangeCase (internally `is.workflow.actions.text.changecase`)


## description

### summary

Changes the case of the text passed into the action to UPPERCASE, lowercase, or Title Case.


### usage
```
ChangeCase ("UPPERCASE" | "lowercase" | "Capitalize Every Word" | "Capitalize with Title Case" | "Capitalize with sentence case." | "cApItAlIzE wItH aLtErNaTiNg CaSe.")
```

### arguments

---

### Case: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"UPPERCASE"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `UPPERCASE`
- `lowercase`
- `Capitalize Every Word`
- `Capitalize with Title Case`
- `Capitalize with sentence case.`
- `cApItAlIzE wItH aLtErNaTiNg CaSe.`

---

### source json (for developers)

```json
{
	"ActionClass": "WFChangeTextCaseAction",
	"ActionKeywords": [
		"uppercase",
		"lowercase",
		"title",
		"transform",
		"text",
		"capitalize"
	],
	"Category": "Text",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Changes the case of the text passed into the action to UPPERCASE, lowercase, or Title Case."
	},
	"IconName": "Text.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSString"
		]
	},
	"LastModifiedDate": "2015-02-19T08:00:00.000Z",
	"Name": "Change Case",
	"Output": {
		"Multiple": true,
		"OutputName": "Text",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "UPPERCASE",
			"Items": [
				"UPPERCASE",
				"lowercase",
				"Capitalize Every Word",
				"Capitalize with Title Case",
				"Capitalize with sentence case.",
				"cApItAlIzE wItH aLtErNaTiNg CaSe."
			],
			"Key": "WFCaseType",
			"Label": "Case"
		}
	],
	"Subcategory": "Text Editing",
	"SuggestedNever": true
}
```
