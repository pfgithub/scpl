
## Run Home Scene / runhomescene (internally `is.workflow.actions.runscene`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFHomeKitAccessResource.


## description

### summary

Sets a Home scene.


### usage
```
runhomescene a{undefined=[???] undefined=[???]}
```

### arguments

---

#### This paramtype is not implemented. WFHomePickerParameter

---

#### This paramtype is not implemented. WFHomeScenePickerParameter

---

### source json

```json
{
	"ActionClass": "WFRunSceneAction",
	"ActionKeywords": [
		"homekit",
		"home",
		"scene"
	],
	"AppIdentifier": "com.apple.Home",
	"Category": "Home",
	"Description": {
		"DescriptionSummary": "Sets a Home scene."
	},
	"InputPassthrough": true,
	"Name": "Run Home Scene",
	"Parameters": [
		{
			"AlwaysShowsButton": true,
			"Class": "WFHomePickerParameter",
			"Description": "The home in which the scene is configured",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFHomeName",
			"Label": "Home"
		},
		{
			"AlwaysShowsButton": true,
			"Class": "WFHomeScenePickerParameter",
			"Key": "WFHomeSceneName",
			"Label": "Scene"
		}
	],
	"RequiredResources": [
		"WFHomeKitAccessResource"
	]
}
```
