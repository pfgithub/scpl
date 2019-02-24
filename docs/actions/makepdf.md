
## Make PDF / makepdf (internally `is.workflow.actions.makepdf`)



## description
### summary
Makes a PDF out of the input. The resulting PDF can optionally include a quarter-inch margin for better printing.


### usage
`makepdf includemargin=[string boolean|variable] include=[string <${strInfo}>] page=[string number] startpage=[string number] endpage=[string number]`

### arguments
### Switch: Include Margin / includemargin (internally `WFPDFIncludeMargin`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Include / include (internally `WFPDFIncludedPages`)
**Default Value**: All Pages
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `All Pages`
- `Single Page`
- `Page Range`

---

### Number: Page # / page (internally `WFPDFSinglePage`)
**Placeholder**: 1
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Start Page # / startpage (internally `WFPDFPageRangeStart`)
**Placeholder**: 1
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: End Page # / endpage (internally `WFPDFPageRangeEnd`)
**Placeholder**: 3
**Allows Variables**: true


Accepts a string 
or variable
with a number.

### for developers

<details><summary>source json</summary>
<p>
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
</p></details>
