
## Set Playback Destination / SetPlaybackDestination (internally `is.workflow.actions.setplaybackdestination`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Sets playback destination to a device.


### usage
```
SetPlaybackDestination NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFMediaRoutePickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSetPlaybackDestinationAction",
	"ActionKeywords": [
		"device",
		"airplay",
		"playback",
		"audio",
		"route"
	],
	"Attribution": "AirPlay",
	"Categories": [
		"Scripting",
		"Media"
	],
	"Description": {
		"DescriptionSummary": "Sets playback destination to a device."
	},
	"IconName": "AirPlayAudio.png",
	"Name": "Set Playback Destination",
	"ParameterSummary": "Set playback destination to ${WFMediaRoute}",
	"Parameters": [
		{
			"AlwaysShowsButton": true,
			"Class": "WFMediaRoutePickerParameter",
			"DefaultValue": "Local",
			"Description": "The device to set playback destination to.",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFMediaRoute",
			"Label": "Device",
			"RouteType": "OutputDevice"
		}
	],
	"Subcategory": "Device",
	"WatchCompatible": true
}
```
