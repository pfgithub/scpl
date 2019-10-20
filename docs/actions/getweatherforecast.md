
## Get Weather Forecast / GetWeatherForecast (internally `is.workflow.actions.weather.forecast`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFWeatherAttributionAccessResource,WFLocationAccessResource.


## description

### summary

Gets an hourly or daily weather forecast at the specified location.


### usage
```
GetWeatherForecast undefined=NotImplemented type=("Hourly" | "Daily")
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFLocationParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### type: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Daily"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Hourly`
- `Daily`

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetWeatherForecastAction",
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
		"DescriptionSummary": "Gets an hourly or daily weather forecast at the specified location."
	},
	"IconName": "Weather.png",
	"InputPassthrough": false,
	"Name": "Get Weather Forecast",
	"Output": {
		"Multiple": true,
		"OutputName": "Weather Conditions",
		"Types": [
			"WFWeatherData"
		]
	},
	"ParameterSummary": "Get ${WFWeatherForecastType} forecast at ${WFWeatherCustomLocation}",
	"Parameters": [
		{
			"Class": "WFLocationParameter",
			"CurrentLocationAccuracy": "HundredMeters",
			"DefaultToCurrentLocation": true,
			"Key": "WFWeatherCustomLocation",
			"Label": "Location"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Daily",
			"Items": [
				"Hourly",
				"Daily"
			],
			"Key": "WFWeatherForecastType",
			"Label": "Type"
		}
	],
	"RequiredResources": [
		"WFWeatherAttributionAccessResource",
		"WFLocationAccessResource"
	],
	"ResidentCompatible": true,
	"Subcategory": "Weather"
}
```
