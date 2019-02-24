
## Get Device Details / getdevicedetails (internally `is.workflow.actions.getdevicedetails`)



## description
### summary
Gets information about the current device.


### usage
`getdevicedetails get=[string <${strInfo}>]`

### arguments
### Enumeration: Get / get (internally `WFDeviceDetail`)
**Default Value**: Device Name
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Device Name`
- `Device Model`
- `System Version`
- `Screen Width`
- `Screen Height`
- `Current Volume`
- `Current Brightness`

### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFGetDeviceDetailsAction",
	"ActionKeywords": [
		"name",
		"model",
		"screen",
		"dimensions",
		"version",
		"system",
		"os",
		"ios",
		"software",
		"current",
		"brightness",
		"volume",
		"firmware"
	],
	"Category": "Scripting",
	"CreationDate": "2016-03-07T08:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets information about the current device."
	},
	"IconName": "Scripting.png",
	"InputPassthrough": false,
	"Name": "Get Device Details",
	"Output": {
		"Multiple": false,
		"OutputName": "Device Details",
		"Types": [
			"NSString",
			"NSNumber"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Device Name",
			"Items": [
				"Device Name",
				"Device Model",
				"System Version",
				"Screen Width",
				"Screen Height",
				"Current Volume",
				"Current Brightness"
			],
			"Key": "WFDeviceDetail",
			"Label": "Get"
		}
	],
	"ShortName": "Device Details",
	"Subcategory": "Device",
	"SuggestedAsInitialAction": false
}
```
</details>
