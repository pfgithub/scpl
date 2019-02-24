
## Set Volume / setvolume (internally `is.workflow.actions.setvolume`)



## description
### summary
Sets the system volume.


### usage
`setvolume volume=[string number]`

### arguments
### Slider Number: Volume / volume (internally `WFVolume`)
**Default Value**: 0.5
**Allows Variables**: true


Accepts a string 
or variable
containing a number value from 0 to 1.

### for developers

<details><summary>source json</summary>
<p>
```json
{
	"ActionClass": "WFSetVolumeAction",
	"ActionKeywords": [
		"sound",
		"speaker",
		"loud"
	],
	"Category": "Music",
	"Description": {
		"DescriptionSummary": "Sets the system volume."
	},
	"IconName": "Sound.png",
	"InputPassthrough": true,
	"Name": "Set Volume",
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
</p></details>
