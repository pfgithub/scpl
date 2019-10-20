
## Show in BlindSquare / ShowinBlindSquare (internally `is.workflow.actions.showinblindsquare`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFURLOpenResource,[object Object],[object Object].


## description

### summary

Opens BlindSquare showing information about the place passed as input, so you can save it as a favorite, start tracking it, or start simulation mode.


### usage
```
ShowinBlindSquare startSimulation=(true | false | variable) undefined=NotImplemented
```

### arguments

---

### startSimulation: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

#### This parameter is not implemented yet.

The parameter type is WFLocationParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### source json (for developers)

```json
{
	"ActionClass": "WFShowInBlindSquareAction",
	"AppIdentifier": "com.mipsoft.blindsquare",
	"Category": "Location",
	"CreationDate": "2015-08-20T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Opens BlindSquare showing information about the place passed as input, so you can save it as a favorite, start tracking it, or start simulation mode."
	},
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
		"Required": true,
		"Types": [
			"CLLocation",
			"MKMapItem"
		]
	},
	"InputPassthrough": true,
	"Name": "Show in BlindSquare",
	"ParameterSummary": "Show ${WFInput}",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Key": "WFBlindSquareSimulation",
			"Label": "Start Simulation"
		},
		{
			"Class": "WFLocationParameter",
			"Key": "WFInput",
			"Label": "Location"
		}
	],
	"RequiredResources": [
		"WFURLOpenResource",
		{
			"AppIdentifier": "com.mipsoft.blindsquare",
			"WFResourceClass": "WFAppInstalledResource"
		},
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFInput",
					"WFParameterValue": {
						"isCurrentLocation": true
					},
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFLocationAccessResource"
		}
	],
	"ShortName": "Show BlindSquare",
	"Subcategory": "Maps"
}
```
