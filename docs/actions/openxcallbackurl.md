
## Open X-Callback URL / openxcallbackurl (internally `is.workflow.actions.openxcallbackurl`)


> This action requires that Shortcuts has permission to use WFURLOpenResource.


## description
### summary
Performs the specified x-callback-url action. The x-success, x-cancel, and x-error parameters will be added automatically.

### output
When the app that's opened calls back to Shortcuts using x-success, it may include parameters in the URL. These will be passed as output to the next action, as text if there is just one parameter, or as a dictionary if there are multiple (use Get Dictionary Value to access it).

### usage
`openxcallbackurl customcallback=[string boolean|variable] successkey=[string|text] cancelkey=[string|text] errorkey=[string|text] customxsuccessurl=[string boolean|variable] xsuccessurl=[string|text]`

### arguments
### Switch: Custom Callback / customcallback (internally `WFXCallbackCustomCallbackEnabled`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Text Input: Success Key / successkey (internally `WFXCallbackCustomSuccessKey`)
**Default Value**: x-success
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Cancel Key / cancelkey (internally `WFXCallbackCustomCancelKey`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Error Key / errorkey (internally `WFXCallbackCustomErrorKey`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Switch: Custom X-Success URL / customxsuccessurl (internally `WFXCallbackCustomSuccessURLEnabled`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Text Input: X-Success URL / xsuccessurl (internally `WFXCallbackCustomSuccessURL`)
**Default Value**: shortcuts://callback
**Allows Variables**: true


Accepts a string 
or text
with the text.

### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFOpenXCallbackURLAction",
	"ActionKeywords": [
		"xcallback"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionResult": "When the app that's opened calls back to Shortcuts using x-success, it may include parameters in the URL. These will be passed as output to the next action, as text if there is just one parameter, or as a dictionary if there are multiple (use Get Dictionary Value to access it).",
		"DescriptionSummary": "Performs the specified x-callback-url action. The x-success, x-cancel, and x-error parameters will be added automatically."
	},
	"IconName": "URL.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFURLContentItem"
		]
	},
	"LastModifiedDate": "2016-02-18T18:00:00.000Z",
	"Name": "Open X-Callback URL",
	"Output": {
		"Multiple": false,
		"OutputName": "X-Callback Result",
		"Types": [
			"NSString",
			"NSDictionary"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"Description": "Turn this on if you want to open a callback URL that is not x-callback-url compliant and uses keys other than “x-success”, “x-error”, and “x-cancel”.",
			"Key": "WFXCallbackCustomCallbackEnabled",
			"Label": "Custom Callback"
		},
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "x-success",
			"Key": "WFXCallbackCustomSuccessKey",
			"KeyboardType": "URL",
			"Label": "Success Key",
			"RequiredResources": [
				{
					"WFParameterKey": "WFXCallbackCustomCallbackEnabled",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFXCallbackCustomCancelKey",
			"KeyboardType": "URL",
			"Label": "Cancel Key",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFXCallbackCustomCallbackEnabled",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFXCallbackCustomErrorKey",
			"KeyboardType": "URL",
			"Label": "Error Key",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFXCallbackCustomCallbackEnabled",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFSwitchParameter",
			"Description": "If enabled, Shortcuts will use a custom success callback URL. This is useful if the app you are calling uses placeholders in the x-success URL to pass output.",
			"Key": "WFXCallbackCustomSuccessURLEnabled",
			"Label": "Custom X-Success URL"
		},
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "shortcuts://callback",
			"Description": "For example, you might use shortcuts://callback?result=[[output]]",
			"Key": "WFXCallbackCustomSuccessURL",
			"KeyboardType": "URL",
			"Label": "X-Success URL",
			"RequiredResources": [
				{
					"WFParameterKey": "WFXCallbackCustomSuccessURLEnabled",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		"WFURLOpenResource"
	],
	"ShortName": "Open X-Callback",
	"Subcategory": "X-Callback",
	"UnsupportedEnvironments": [
		"Extension"
	]
}
```
</details>
