
## Post to WordPress / posttowordpress (internally `is.workflow.actions.wordpress.post`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Posts the input to a WordPress blog as a new post or page.


### output

The URL of the new blog post

### usage
```
posttowordpress undefined=NotImplemented undefined=NotImplemented title="string" undefined=NotImplemented undefined=NotImplemented undefined=NotImplemented undefined=NotImplemented undefined=NotImplemented advanced=true|false allowcomments=true|false|variable slug="string" excerpt="string" publishdate="string" undefined=NotImplemented featuredimage=v:myvar|mv:myvar|s:myvar customfields=true|false customfields2={dictionary}
```

### arguments

---

#### This paramtype is not implemented. WFAccountPickerParameter

---

#### This paramtype is not implemented. WFDynamicEnumerationParameter

---

### Text: title [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**:
```
Quarterly Results
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

#### This paramtype is not implemented. WFDynamicEnumerationParameter

---

#### This paramtype is not implemented. WFDynamicEnumerationParameter

---

#### This paramtype is not implemented. WFDynamicEnumerationParameter

---

#### This paramtype is not implemented. WFDynamicTagFieldParameter

---

#### This paramtype is not implemented. WFDynamicTagFieldParameter

---

### Expand Arrow: advanced [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)


Accepts a boolean for if this
parameter is expanded or not.
Often expanding fields will
enable or disable other
arguments. If you are using
labels, these can be ignored.

---

### Switch: allowcomments [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true

**Only enabled if**: argument Advanced = `true`

Accepts a boolean
or a variable.

---

### Text: slug [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
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

### Text: excerpt [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
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

### Date: publishdate [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**:
```
optional
```
**Allows Variables**: true

**Only enabled if**: argument Advanced = `true`

Accepts a string 
or text
with the text.

---

#### This paramtype is not implemented. WFDynamicEnumerationParameter

---

### Variable Picker: featuredimage [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true

**Only enabled if**: argument Advanced = `true`

Accepts a variable.

---

### Expand Arrow: customfields [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Only enabled if**: argument Advanced = `true`

Accepts a boolean for if this
parameter is expanded or not.
Often expanding fields will
enable or disable other
arguments. If you are using
labels, these can be ignored.

---

### Dictionary: customfields2 [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#dictionary-field)
**Allows Variables**: true

**Only enabled if**: argument Advanced = `true`

**Only enabled if**: argument ShowCustomFields = `true`

Accepts a dictionary.

---

### source json (for developers)

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
