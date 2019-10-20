
## Hand Off Playback / HandOffPlayback (internally `is.workflow.actions.handoffplayback`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFUnavailableResource.


## description

### summary

Hands off Music or Podcasts playback between two devices.


### usage
```
HandOffPlayback undefined=NotImplemented undefined=NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFMediaRoutePickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

#### This parameter is not implemented yet.

The parameter type is WFMediaRoutePickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFHandOffPlaybackAction",
	"ActionKeywords": [
		"device",
		"airplay",
		"playback",
		"audio",
		"route"
	],
	"Attribution": "Now Playing",
	"Category": "Media",
	"Description": {
		"DescriptionSummary": "Hands off Music or Podcasts playback between two devices."
	},
	"Discontinued": true,
	"IconName": "HandoffMusic.png",
	"Name": "Hand Off Playback",
	"ParameterSummary": "Hand off playback from ${WFSourceMediaRoute} to ${WFDestinationMediaRoute}",
	"Parameters": [
		{
			"Class": "WFMediaRoutePickerParameter",
			"Description": "The device to hand off playback from.",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFSourceMediaRoute",
			"Label": "Source",
			"RouteType": "HandoffEndpoint"
		},
		{
			"Class": "WFMediaRoutePickerParameter",
			"Description": "The device to hand off playback to.",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFDestinationMediaRoute",
			"Label": "Destination",
			"RouteType": "HandoffEndpoint"
		}
	],
	"RequiredResources": [
		"WFUnavailableResource"
	],
	"Subcategory": "Playback"
}
```
