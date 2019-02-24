
## Upload to CloudApp / uploadtocloudapp (internally `is.workflow.actions.cloudapp.upload`)


> This action requires that Shortcuts has permission to use WFCloudAppAccessResource.


## description
### summary
Uploads the input to CloudApp and returns the CloudApp URL.

### output
CloudApp URL

### usage
`uploadtocloudapp linkprivacy=[string <${strInfo}>]`

### arguments
### Enumeration: Link Privacy / linkprivacy (internally `WFCloudAppPrivacyType`)
**Default Value**:
```
Private
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Private`
- `Public`

### source json

```json
{
	"ActionClass": "WFCloudAppUploadAction",
	"AppSection": "CloudApp",
	"Category": "Web",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionResult": "CloudApp URL",
		"DescriptionSummary": "Uploads the input to CloudApp and returns the CloudApp URL."
	},
	"IconName": "CloudApp.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFGenericFileContentItem",
			"WFURLContentItem"
		]
	},
	"LastModifiedDate": "2015-11-24T06:00:00.000Z",
	"Name": "Upload to CloudApp",
	"Output": {
		"Multiple": true,
		"OutputName": "CloudApp URLs",
		"Types": [
			"NSURL"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Private",
			"Items": [
				"Private",
				"Public"
			],
			"Key": "WFCloudAppPrivacyType",
			"Label": "Link Privacy"
		}
	],
	"RequiredResources": [
		"WFCloudAppAccessResource"
	],
	"ShortName": "Upload"
}
```
