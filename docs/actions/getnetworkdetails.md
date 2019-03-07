
## Get Network Details / getnetworkdetails (internally `is.workflow.actions.getwifi`)


## description

### summary

Gets information about the currently connected networks.


### usage
```
getnetworkdetails network=("Wi-Fi" | "Cellular") get=("Network Name" | "BSSID") get2=("Carrier Name" | "Radio Technology" | "Country Code")
```

### arguments

---

### network: Network Type Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Wi-Fi`
- `Cellular`

---

### get: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Network Name"`
**Allows Variables**: true

**Only enabled if**: argument WFNetworkDetailsNetwork == `Wi-Fi`

Accepts a string 
or variable
containing one of the options:

- `Network Name`
- `BSSID`

---

### get2: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Carrier Name"`
**Allows Variables**: true

**Only enabled if**: argument WFNetworkDetailsNetwork == `Cellular`

Accepts a string 
or variable
containing one of the options:

- `Carrier Name`
- `Radio Technology`
- `Country Code`

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
