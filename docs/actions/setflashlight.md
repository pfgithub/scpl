
## Set Flashlight / setflashlight (internally `is.workflow.actions.flashlight`)


## description

### summary

Turns on or off the flashlight near the device's camera.


### usage
```
setflashlight flashlight=("Off" | "On" | "Toggle") brightness=number
```

### arguments

---

### flashlight: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"On"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Off`
- `On`
- `Toggle`

---

### brightness: Slider Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields)
**Default Value**: `1`
**Allows Variables**: true

**Only enabled if**: argument WFFlashlightSetting == `On` or `Toggle`

**Only enabled if**: This action is always **disabled** inside Shortcutslang.

		Accepts a number 
		or variable
		with a number.

---

### source json (for developers)

```json
{
	"ACECommandClass": "SASettingSetFlashlight",
	"ActionClass": "WFToggleFlashlightAction",
	"ActionKeywords": [
		"flash",
		"torch"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionSummary": "Turns on or off the flashlight near the device's camera."
	},
	"IconName": "Flashlight.png",
	"InputPassthrough": true,
	"Name": "Set Flashlight",
	"Parameters": [
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "On",
			"Items": [
				"Off",
				"On",
				"Toggle"
			],
			"Key": "WFFlashlightSetting",
			"Label": "Flashlight"
		},
		{
			"Class": "WFSliderParameter",
			"DefaultValue": 1,
			"Hidden": true,
			"Key": "WFFlashlightLevel",
			"Label": "Brightness",
			"RequiredResources": [
				{
					"WFParameterKey": "WFFlashlightSetting",
					"WFParameterValues": [
						"On",
						"Toggle"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Device"
}
```
