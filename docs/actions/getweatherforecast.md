
## Get Weather Forecast / getweatherforecast (internally `is.workflow.actions.weather.forecast`)

> This action requires that Shortcuts has permission to use WFWeatherAttributionAccessResource,WFLocationAccessResource.


## description

### summary

Gets an hourly or daily weather forecast at the specified location.


### usage
```
getweatherforecast at=("Current Location" | "Custom Location" | variable) location="string" type=("Hourly" | "Daily")
```

### arguments

---

### at: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Current Location"`


Accepts a string 
containing one of the options:

- `Current Location`
- `Custom Location`

---

### location: Location [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Cupertino, CA"`
**Allows Variables**: true

**Only enabled if**: argument WFWeatherLocation == `Custom Location`

Accepts a string 
or text
with the text.

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
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Current Location",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Items": [
				"Current Location",
				"Custom Location"
			],
			"Key": "WFWeatherLocation",
			"Label": "At"
		},
		{
			"Class": "WFLocationFieldParameter",
			"HintDisplayMode": "Never",
			"Key": "WFWeatherCustomLocation",
			"Label": "Location",
			"Placeholder": "Cupertino, CA",
			"RequiredResources": [
				{
					"WFParameterKey": "WFWeatherLocation",
					"WFParameterValue": "Custom Location",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
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
	"Subcategory": "Weather",
	"UnsupportedEnvironments": [
		"Background"
	]
}
```
