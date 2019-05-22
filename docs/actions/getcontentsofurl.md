
## Get Contents of URL / GetContentsofURL (internally `is.workflow.actions.downloadurl`)


## description

### summary

Gets the contents of URLs passed into the action. Useful for downloading files and web content, or for making API requests.


### note

To make a multipart HTTP request, choose "Form" as the request body type and add files as field values.


### output

The fetched data

### usage
```
GetContentsofURL Advanced=(true | false) Method=("GET" | "POST" | "PUT" | "PATCH" | "DELETE") Headers=(true | false) Headers={dictionary} RequestBody=("JSON" | "Form" | "File" | variable) FormValues={dictionary} JSONValues={dictionary} File=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### Advanced: Expand Arrow [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)


Accepts a boolean for if this
parameter is expanded or not.
Often expanding fields will
enable or disable other
arguments. If you are using
labels, these can be ignored.

---

### Method: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"GET"`
**Allows Variables**: true

**Only enabled if**: argument Advanced == `true`

Accepts a string 
or variable
containing one of the options:

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`

---

### Headers: Expand Arrow [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Only enabled if**: argument Advanced == `true`

Accepts a boolean for if this
parameter is expanded or not.
Often expanding fields will
enable or disable other
arguments. If you are using
labels, these can be ignored.

---

### Headers: Dictionary [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#dictionary-field)
**Allows Variables**: true

**Only enabled if**: argument Advanced == `true`

**Only enabled if**: argument ShowHeaders == `true`

Accepts a dictionary.

---

### RequestBody: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"JSON"`
**Only enabled if**: argument Advanced == `true`

**Only enabled if**: argument WFHTTPMethod != `GET`

Accepts a string 
containing one of the options:

- `JSON`
- `Form`
- `File`

---

### FormValues: Dictionary [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#dictionary-field)
**Allows Variables**: true

**Only enabled if**: argument Advanced == `true`

**Only enabled if**: argument WFHTTPBodyType == `Form`

**Only enabled if**: argument WFHTTPMethod != `GET`

Accepts a dictionary.

---

### JSONValues: Dictionary [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#dictionary-field)
**Allows Variables**: true

**Only enabled if**: argument Advanced == `true`

**Only enabled if**: argument WFHTTPBodyType == `JSON`

**Only enabled if**: argument WFHTTPMethod != `GET`

Accepts a dictionary.

---

### File: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true

**Only enabled if**: argument Advanced == `true`

**Only enabled if**: argument WFHTTPBodyType == `File`

**Only enabled if**: argument WFHTTPMethod != `GET`

Accepts a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFDownloadURLAction",
	"ActionKeywords": [
		"URL",
		"web",
		"display",
		"site",
		"open",
		"show",
		"post",
		"put",
		"api",
		"curl",
		"wget",
		"http",
		"headers",
		"request",
		"form"
	],
	"Category": "Web",
	"Description": {
		"DescriptionNote": "To make a multipart HTTP request, choose \"Form\" as the request body type and add files as field values.",
		"DescriptionResult": "The fetched data",
		"DescriptionSummary": "Gets the contents of URLs passed into the action. Useful for downloading files and web content, or for making API requests."
	},
	"IconName": "Downloads.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2016-11-11T06:00:00.000Z",
	"Name": "Get Contents of URL",
	"Output": {
		"Multiple": true,
		"OutputName": "Contents of URL",
		"Types": [
			"public.data"
		]
	},
	"Parameters": [
		{
			"Class": "WFExpandingParameter",
			"Key": "Advanced",
			"Label": "Advanced"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "GET",
			"Description": "The HTTP method to use.",
			"DoNotLocalizeValues": true,
			"Items": [
				"GET",
				"POST",
				"PUT",
				"PATCH",
				"DELETE"
			],
			"Key": "WFHTTPMethod",
			"Label": "Method",
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
			"Key": "ShowHeaders",
			"Label": "Headers",
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
			"ItemTypeName": "header",
			"Key": "WFHTTPHeaders",
			"Label": "Headers",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "ShowHeaders",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "JSON",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Items": [
				"JSON",
				"Form",
				"File"
			],
			"Key": "WFHTTPBodyType",
			"Label": "Request Body",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFHTTPMethod",
					"WFParameterRelation": "!=",
					"WFParameterValues": [
						"GET"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"AllowedValueTypes": [
				0,
				5
			],
			"Class": "WFDictionaryParameter",
			"ItemTypeName": "field",
			"Key": "WFFormValues",
			"Label": "Form Values",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFHTTPBodyType",
					"WFParameterValue": "Form",
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFHTTPMethod",
					"WFParameterRelation": "!=",
					"WFParameterValues": [
						"GET"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"AllowedValueTypes": [
				0,
				1,
				2,
				3,
				4
			],
			"Class": "WFDictionaryParameter",
			"ItemTypeName": "field",
			"Key": "WFJSONValues",
			"Label": "JSON Values",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFHTTPBodyType",
					"WFParameterValue": "JSON",
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFHTTPMethod",
					"WFParameterRelation": "!=",
					"WFParameterValues": [
						"GET"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFRequestVariable",
			"Label": "File",
			"RequiredResources": [
				{
					"WFParameterKey": "Advanced",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFHTTPBodyType",
					"WFParameterValue": "File",
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFHTTPMethod",
					"WFParameterRelation": "!=",
					"WFParameterValues": [
						"GET"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"ShortName": "Download URL",
	"Subcategory": "URLs"
}
```
