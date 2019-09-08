
## Run Home Scene / RunHomeScene (internally `is.workflow.actions.runscene`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFHomeKitAccessResource.


## description

### summary

Sets a Home scene.


### usage
```
RunHomeScene undefined=NotImplemented undefined=NotImplemented
```

### arguments

---

#### This parameter is not implemented yet.

The parameter type is WFHomePickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

#### This parameter is not implemented yet.

The parameter type is WFHomeScenePickerParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

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
