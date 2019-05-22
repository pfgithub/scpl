
## Import to Lightroom / ImporttoLightroom (internally `is.workflow.actions.lightroom.import`)


## description

### summary

Imports the photos passed as input into Lightroom


### usage
```
ImporttoLightroom ApplyPreset=(true | false | variable) PresetGroup=("B&W" | "Color" | "Creative" | "Curve" | "Grain" | "Sharpening" | "Vignetting") Preset=("string" | variable)]
```

### arguments

---

### ApplyPreset: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### PresetGroup: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Color"`
**Allows Variables**: true

**Only enabled if**: argument applyPreset == `true`

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

### Preset: Lightroom Preset Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#other-fields)
**Allows Variables**: true

**Only enabled if**: argument applyPreset == `true`

**Only enabled if**: argument presetGroup ?? ``

		Accepts a string or variable containing the option. Check the shortcuts app for a list of available options. 

---

### source json (for developers)

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
