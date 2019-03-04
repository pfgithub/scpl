
## Get Network Details / getnetworkdetails (internally `is.workflow.actions.getwifi`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Gets information about the currently connected networks.


### usage
```
getnetworkdetails undefined=NotImplemented get="Network Name" | "BSSID" get2="Carrier Name" | "Radio Technology" | "Country Code"
```

### arguments

---

#### This paramtype is not implemented. WFNetworkPickerParameter

---

### Enumeration: get [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
Network Name
```
**Allows Variables**: true

**Only enabled if**: argument WFNetworkDetailsNetwork = `Wi-Fi`

Accepts a string 
or variable
containing one of the options:

- `Network Name`
- `BSSID`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

---

### Enumeration: get2 [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**:
```
Carrier Name
```
**Allows Variables**: true

**Only enabled if**: argument WFNetworkDetailsNetwork = `Cellular`

Accepts a string 
or variable
containing one of the options:

- `Carrier Name`
- `Radio Technology`
- `Country Code`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetNetworkDetailsAction",
	"ActionKeywords": [
		"wifi",
		"wi-fi",
		"mac",
		"address",
		"name",
		"technology",
		"code",
		"radio",
		"country",
		"carrier",
		"cellular",
		"wlan"
	],
	"Category": "Scripting",
	"CreationDate": "2015-08-20T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Gets information about the currently connected networks."
	},
	"IconName": "Wi-Fi.png",
	"Name": "Get Network Details",
	"Output": {
		"Multiple": false,
		"OutputName": "Network Details",
		"Types": [
			"NSString"
		]
	},
	"Parameters": [
		{
			"Class": "WFNetworkPickerParameter",
			"Key": "WFNetworkDetailsNetwork",
			"Label": "Network"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Network Name",
			"Items": [
				"Network Name",
				"BSSID"
			],
			"Key": "WFWiFiDetail",
			"Label": "Get",
			"RequiredResources": [
				{
					"WFParameterKey": "WFNetworkDetailsNetwork",
					"WFParameterValue": "Wi-Fi",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Carrier Name",
			"Items": [
				"Carrier Name",
				"Radio Technology",
				"Country Code"
			],
			"Key": "WFCellularDetail",
			"Label": "Get",
			"RequiredResources": [
				{
					"WFParameterKey": "WFNetworkDetailsNetwork",
					"WFParameterValue": "Cellular",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Device",
	"SuggestedNever": true
}
```
