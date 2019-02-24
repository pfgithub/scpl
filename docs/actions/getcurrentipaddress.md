
## Get Current IP Address / getcurrentipaddress (internally `is.workflow.actions.getipaddress`)



## description
### summary
Returns the local or external IP address of the device.


### usage
`getcurrentipaddress address=[string <${strInfo}>] type=[string <${strInfo}>]`

### arguments
### Enumeration: Address / address (internally `WFIPAddressSourceOption`)
**Default Value**: External
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `External`
- `Local`

---

### Enumeration: Type / type (internally `WFIPAddressTypeOption`)
**Default Value**: IPv4
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `IPv4`
- `IPv6`

### source json

```json
{
	"ActionClass": "WFGetIPAddressAction",
	"ActionKeywords": [
		"network",
		"local",
		"external",
		"cellular",
		"wi-fi",
		"wifi"
	],
	"Category": "Scripting",
	"CreationDate": "2015-08-20T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Returns the local or external IP address of the device."
	},
	"IconName": "Network.png",
	"Name": "Get Current IP Address",
	"Output": {
		"Multiple": false,
		"OutputName": "Current IP Address",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "External",
			"Items": [
				"External",
				"Local"
			],
			"Key": "WFIPAddressSourceOption",
			"Label": "Address"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "IPv4",
			"Items": [
				"IPv4",
				"IPv6"
			],
			"Key": "WFIPAddressTypeOption",
			"Label": "Type"
		}
	],
	"Subcategory": "Device",
	"SuggestedNever": true
}
```
