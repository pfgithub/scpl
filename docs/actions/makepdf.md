
## Make PDF / makepdf (internally `is.workflow.actions.makepdf`)


## description

### summary

Makes a PDF out of the input. The resulting PDF can optionally include a quarter-inch margin for better printing.


### usage
```
makepdf includemargin=(true | f alse | variable) include=("All Pages" | "Single Page" | "Page Range") page=number startpage=number endpage=number
```

### arguments

---

### includemargin: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### include: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"All Pages"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `All Pages`
- `Single Page`
- `Page Range`

---

### page: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `1`
**Allows Variables**: true

**Only enabled if**: argument WFPDFIncludedPages = `Single Page`

		Accepts a number 
		or variable
		with a number.

---

### startpage: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `1`
**Allows Variables**: true

**Only enabled if**: argument WFPDFIncludedPages = `Page Range`

		Accepts a number 
		or variable
		with a number.

---

### endpage: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `3`
**Allows Variables**: true

**Only enabled if**: argument WFPDFIncludedPages = `Page Range`

		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFMakePDFAction",
	"ActionKeywords": [
		"make",
		"generate",
		"pdf",
		"print"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Makes a PDF out of the input. The resulting PDF can optionally include a quarter-inch margin for better printing."
	},
	"IconName": "PDF.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Make PDF",
	"Output": {
		"Multiple": false,
		"OutputName": "PDF",
		"Types": [
			"WFPDFContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Key": "WFPDFIncludeMargin",
			"Label": "Include Margin"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "All Pages",
			"Items": [
				"All Pages",
				"Single Page",
				"Page Range"
			],
			"Key": "WFPDFIncludedPages",
			"Label": "Include"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFPDFSinglePage",
			"Label": "Page #",
			"Placeholder": "1",
			"RequiredResources": [
				{
					"WFParameterKey": "WFPDFIncludedPages",
					"WFParameterValue": "Single Page",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFPDFPageRangeStart",
			"Label": "Start Page #",
			"Placeholder": "1",
			"RequiredResources": [
				{
					"WFParameterKey": "WFPDFIncludedPages",
					"WFParameterValue": "Page Range",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Key": "WFPDFPageRangeEnd",
			"Label": "End Page #",
			"Placeholder": "3",
			"RequiredResources": [
				{
					"WFParameterKey": "WFPDFIncludedPages",
					"WFParameterValue": "Page Range",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		}
	],
	"Subcategory": "Printing",
	"UnsupportedEnvironments": [
		"MemoryConstrained"
	]
}
```
