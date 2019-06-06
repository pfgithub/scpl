
## Set Volume / SetVolume (internally `is.workflow.actions.setvolume`)


## description

### summary

Sets the system volume.


### usage
```
SetVolume number
```

### arguments

---

### volume: Slider Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields)
**Default Value**: `0.5`
**Allows Variables**: true



		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ActionClass": "WFSetVolumeAction",
	"ActionKeywords": [
		"sound",
		"speaker",
		"loud"
	],
	"Categories": [
		"Media",
		"Scripting"
	],
	"Description": {
		"DescriptionSummary": "Sets the system volume."
	},
	"IconName": "Sound.png",
	"InputPassthrough": true,
	"Name": "Set Volume",
	"ParameterSummary": "Set volume to ${WFVolume}",
	"Parameters": [
		{
			"Class": "WFSliderParameter",
			"DefaultValue": 0.5,
			"Description": "If you set the volume using a variable, use a number between 0 and 1 (for example, pass 0.5 for half volume).",
			"Key": "WFVolume",
			"Label": "Volume"
		}
	],
	"Subcategory": "Playback"
}
```
