
## Post to WordPress / posttowordpress (internally `is.workflow.actions.wordpress.post`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use [object Object].


## description
### summary
Posts the input to a WordPress blog as a new post or page.

### output
The URL of the new blog post

### usage
`posttowordpress a{undefined=[???] undefined=[???] title=[string|text] undefined=[???] undefined=[???] undefined=[???] undefined=[???] undefined=[???] advanced=[boolean] allowcomments=[string boolean|variable] slug=[string|text] excerpt=[string|text] undefined=[???] undefined=[???] featuredimage=[variable] customfields=[boolean] customfields=[dictionary]}`

### arguments
This paramtype is not implemented. WFAccountPickerParameter

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

### Text: Title / title (internally `Title`)
**Placeholder**:
```
Quarterly Results
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

This paramtype is not implemented. WFDynamicTagFieldParameter

---

This paramtype is not implemented. WFDynamicTagFieldParameter

---

### Expand Arrow: Advanced / advanced (internally `Advanced`)


Accepts a boolean for if this
parameter is expanded or not.

---

### Switch: Allow Comments / allowcomments (internally `AllowComments`)
**Allows Variables**: true

**Only enabled if**: argument Advanced = `true`

Accepts a boolean
or a variable.

---

### Text: Slug / slug (internally `Slug`)
**Placeholder**:
```
quarterly-results
```
**Allows Variables**: true

**Only enabled if**: argument Advanced = `true`

Accepts a string 
or text
with the text.

---

### Text: Excerpt / excerpt (internally `Excerpt`)
**Placeholder**:
```
An overall great quarter
```
**Allows Variables**: true

**Only enabled if**: argument Advanced = `true`

Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFDateFieldParameter

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

### Variable Picker: Featured Image / featuredimage (internally `ThumbnailImage`)
**Allows Variables**: true

**Only enabled if**: argument Advanced = `true`

Accepts a variable.

---

### Expand Arrow: Custom Fields / customfields (internally `ShowCustomFields`)
**Only enabled if**: argument Advanced = `true`

Accepts a boolean for if this
parameter is expanded or not.

---

### Dictionary: Custom Fields / customfields (internally `CustomFields`)
**Allows Variables**: true

**Only enabled if**: argument Advanced = `true`
**Only enabled if**: argument ShowCustomFields = `true`

Accepts a dictionary.

### source json

```json
{
	"ActionClass": "WFWordPressPostAction",
	"AppIdentifier": "org.wordpress",
	"Category": "Sharing",
	"CreationDate": "2015-11-24T06:00:00.000Z",
	"Description": {
		"DescriptionResult": "The URL of the new blog post",
		"DescriptionSummary": "Posts the input to a WordPress blog as a new post or page."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFRichTextContentItem",
			"WFStringContentItem",
			"WFImageContentItem"
		]
	},
	"LastModifiedDate": "2016-03-08T06:00:00.000Z",
	"Name": "Post to WordPress",
	"Output": {
		"Multiple": false,
		"OutputName": "WordPress Post URL",
		"Types": [
			"NSURL"
		]
	},
	"Parameters": [
		{
			"AccountClass": "WFWordPressAccount",
			"Class": "WFAccountPickerParameter",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Key": "WFAccount",
			"Label": "Account"
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Key": "Blog",
			"Label": "Blog"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "Title",
			"Label": "Title",
			"Placeholder": "Quarterly Results",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"Key": "Type",
			"Label": "Type"
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"Key": "Format",
			"Label": "Format"
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"Key": "Status",
			"Label": "Status"
		},
		{
			"Class": "WFDynamicTagFieldParameter",
			"Key": "Categories",
			"Label": "Categories",
			"Placeholder": "Finance, News",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDynamicTagFieldParameter",
			"Key": "Tags",
			"Label": "Tags",
			"Placeholder": "stock market, trends",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFExpandingParameter",
			"Key": "Advanced",
			"Label": "Advanced"
		},
		{
			"Class": "WFSwitchParameter",
			"Key": "AllowComments",
			"Label": "Allow Comments",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "Slug",
			"Label": "Slug",
			"Placeholder": "quarterly-results",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "Excerpt",
			"Label": "Excerpt",
			"Placeholder": "An overall great quarter",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDateFieldParameter",
			"Key": "Date",
			"Label": "Publish Date",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"Key": "Template",
			"Label": "Template",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "ThumbnailImage",
			"Label": "Featured Image",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFExpandingParameter",
			"Key": "ShowCustomFields",
			"Label": "Custom Fields",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFDictionaryParameter",
			"Key": "CustomFields",
			"Label": "Custom Fields",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "ShowCustomFields",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		{
			"WFAccountClass": "WFWordPressAccount",
			"WFResourceClass": "WFAccountAccessResource"
		}
	]
}
```
