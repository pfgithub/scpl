
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

#### This paramtype is not implemented. WFMediaRoutePickerParameter

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
	"Category": "Scripting",
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
			"Description": "The device to set playback destination to.",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFMediaRoute",
			"Label": "Device",
			"RouteType": "OutputDevice"
		}
	]
}
```
