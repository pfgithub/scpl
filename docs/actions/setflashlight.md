
## Set Flashlight / setflashlight (internally `is.workflow.actions.flashlight`)


## description

### summary

Turns on or off the flashlight near the device's camera.


### usage
```
setflashlight a{flashlight=[string <Off | On | Toggle>] brightness=[string number]}
```

### arguments

---

### Enumeration: Flashlight / flashlight (internally `WFFlashlightSetting`)
**Default Value**:
```
On
```
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `Off`
- `On`
- `Toggle`

---

### Slider Number: Brightness / brightness (internally `WFFlashlightLevel`)
**Default Value**:
```
1
```
**Allows Variables**: true

**Only enabled if**: argument WFFlashlightSetting = `On` or `Toggle`
**Only enabled if**: This action is always **disabled** inside Shortcutslang.

Accepts a string 
or variable
containing a number value from 0 to 1.

---

### source json

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
