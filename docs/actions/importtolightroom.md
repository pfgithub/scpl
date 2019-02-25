
## Import to Lightroom / importtolightroom (internally `is.workflow.actions.lightroom.import`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Imports the photos passed as input into Lightroom


### usage
`importtolightroom a{applypreset=[string boolean|variable] presetgroup=[string <${strInfo}>] undefined=[???]}`

### arguments
### Switch: Apply Preset / applypreset (internally `applyPreset`)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### Enumeration: Preset Group / presetgroup (internally `presetGroup`)
**Default Value**:
```
Color
```
**Allows Variables**: true

**Only enabled if**: argument applyPreset = `true`

Accepts a string 
or variable
containing one of the options:

- `B&W`
- `Color`
- `Creative`
- `Curve`
- `Grain`
- `Sharpening`
- `Vignetting`

---

This paramtype is not implemented. WFLightroomPresetPickerParameter

### source json

```json
{
	"ActionClass": "WFImportToLightroomAction",
	"ActionKeywords": [],
	"AppIdentifier": "com.adobe.lrmobile",
	"Category": "Photos & Video",
	"Description": {
		"DescriptionSummary": "Imports the photos passed as input into Lightroom"
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFPhotoMediaContentItem"
		]
	},
	"InputPassthrough": true,
	"IntentName": "THImportIntent",
	"Name": "Import to Lightroom",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Key": "applyPreset",
			"Label": "Apply Preset"
		},
		{
			"AlwaysShowsButton": true,
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Color",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"DoNotLocalizeValues": true,
			"Items": [
				"B&W",
				"Color",
				"Creative",
				"Curve",
				"Grain",
				"Sharpening",
				"Vignetting"
			],
			"Key": "presetGroup",
			"Label": "Preset Group",
			"RequiredResources": [
				{
					"WFParameterKey": "applyPreset",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"AlwaysShowsButton": true,
			"Class": "WFLightroomPresetPickerParameter",
			"DoNotLocalizeValues": true,
			"Key": "preset",
			"Label": "Preset",
			"PresetGroupKey": "presetGroup",
			"RequiredResources": [
				{
					"WFParameterKey": "applyPreset",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "presetGroup",
					"WFParameterRelation": "??",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	]
}
```
