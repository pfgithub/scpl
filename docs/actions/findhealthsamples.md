
## Find Health Samples / findhealthsamples (internally `is.workflow.actions.filter.health.quantity`)


> This action requires that Shortcuts has permission to use WFHealthKitResource,[object Object],[object Object].


## description

### usage
`findhealthsamples a{}`

### arguments


### source json

```json
{
	"ActionClass": "WFFindHealthSamplesAction",
	"AppIdentifier": "com.apple.Health",
	"Category": "Health",
	"CreationDate": "2015-07-03T07:00:00.000Z",
	"Description": {
		"DescriptionNote": "If you only see some but not all of your data in the results, make sure that “Allow Shortcuts to read data” is set to on in the Health app."
	},
	"Name": "Find Health Samples",
	"RequiredResources": [
		"WFHealthKitResource",
		{
			"AccessType": "Read",
			"ReadableObjectTypeIdentifierKeyPath": "readableSampleType",
			"ReadableType": "Quantity",
			"WFResourceClass": "WFHealthKitAccessResource"
		},
		{
			"AccessType": "Read",
			"ReadableObjectTypeIdentifierKeyPath": "readableSampleType",
			"ReadableType": "Category",
			"WFResourceClass": "WFHealthKitAccessResource"
		}
	],
	"Subcategory": "Get",
	"SuggestedAsInitialAction": false,
	"WFContentItemClass": "WFHKSampleContentItem",
	"WFContentItemDefaultProperty": "Value"
}
```
