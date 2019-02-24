
## Get Contents of URL / getcontentsofurl (internally `is.workflow.actions.downloadurl`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Gets the contents of URLs passed into the action. Useful for downloading files and web content, or for making API requests.

### output
The fetched data

### usage
`getcontentsofurl advanced=[string boolean] method=[string <${strInfo}>] headers=[string boolean] undefined=[???] requestbody=[string <${strInfo}>|variable] undefined=[???] undefined=[???] file=[variable]`

### arguments
### Expand Arrow: Advanced / advanced (internally `Advanced`)


Accepts a string with either true or false for if this
parameter is expanded or not.

---

### Enumeration: Method / method (internally `WFHTTPMethod`)
**Default Value**: GET
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `GET`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`

---

### Expand Arrow: Headers / headers (internally `ShowHeaders`)


Accepts a string with either true or false for if this
parameter is expanded or not.

---

This paramtype is not implemented. WFDictionaryParameter

---

### Enumeration: Request Body / requestbody (internally `WFHTTPBodyType`)
**Default Value**: JSON


Accepts a string 
containing one of the options:

- `JSON`
- `Form`
- `File`

---

This paramtype is not implemented. WFDictionaryParameter

---

This paramtype is not implemented. WFDictionaryParameter

---

### Variable Picker: File / file (internally `WFRequestVariable`)
**Allows Variables**: true


Accepts a variable.

### other info

<details><summary>source json</summary>
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
</details>
