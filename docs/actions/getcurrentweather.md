
## Get Current Weather / GetCurrentWeather (internally `is.workflow.actions.weather.currentconditions`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFWeatherAttributionAccessResource,[object Object].


## description

### summary

Gets the current weather conditions at the specified location.


### usage
```
GetCurrentWeather NotImplemented
```

### arguments

---

#### This paramtype is not implemented. WFLocationParameter

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetCurrentWeatherConditionsAction",
	"ActionKeywords": [
		"current",
		"temperature",
		"visibility",
		"humidity",
		"pressure",
		"wind",
		"sunrise",
		"sunset"
	],
	"AppIdentifier": "com.apple.weather",
	"Category": "Location",
	"Description": {
		"DescriptionAttribution": {
			"Description": "Weather information provided by ${Link}",
			"Link": {
				"Text": "The Weather Channel",
				"URL": "https://www.weather.com"
			}
		},
		"DescriptionSummary": "Gets the current weather conditions at the specified location."
	},
	"IconName": "Weather.png",
	"InputPassthrough": false,
	"Name": "Get Current Weather",
	"Output": {
		"Multiple": false,
		"OutputName": "Weather Conditions",
		"Types": [
			"WFWeatherData"
		]
	},
	"ParameterSummary": "Get current weather at ${WFWeatherCustomLocation}",
	"Parameters": [
		{
			"Class": "WFLocationParameter",
			"CurrentLocationAccuracy": "HundredMeters",
			"DefaultToCurrentLocation": true,
			"Key": "WFWeatherCustomLocation",
			"Label": "Location"
		}
	],
	"RequiredResources": [
		"WFWeatherAttributionAccessResource",
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFWeatherCustomLocation",
					"WFParameterValue": {
						"isCurrentLocation": true
					},
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFLocationAccessResource"
		}
	],
	"ResidentCompatible": true,
	"Subcategory": "Weather"
}
```
