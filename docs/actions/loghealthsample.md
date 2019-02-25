
## Log Health Sample / loghealthsample (internally `is.workflow.actions.health.quantity.log`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFHealthKitResource,[object Object].


## description
### summary
Adds a data point into the Health app. You can log anything that the Health app supports, including your weight, steps taken, running distance, caloric intake and more.


### usage
`loghealthsample a{undefined=[???] undefined=[???] undefined=[???] undefined=[???] undefined=[???] undefined=[???] undefined=[???] undefined=[???]}`

### arguments
This paramtype is not implemented. WFQuantityTypePickerParameter

---

This paramtype is not implemented. WFHealthQuantityFieldParameter

---

This paramtype is not implemented. WFHealthQuantityAdditionalFieldParameter

---

This paramtype is not implemented. WFHealthQuantityAdditionalPickerParameter

---

This paramtype is not implemented. WFHealthCategoryPickerParameter

---

This paramtype is not implemented. WFHealthCategoryAdditionalPickerParameter

---

This paramtype is not implemented. WFHealthCategoryStartDateFieldParameter

---

This paramtype is not implemented. WFHealthCategoryEndDateFieldParameter

### source json

```json
{
	"ActionClass": "WFLogHealthSampleAction",
	"ActionKeywords": [
		"health",
		"quantity",
		"steps",
		"weight",
		"fitness"
	],
	"AppIdentifier": "com.apple.Health",
	"Category": "Health",
	"CreationDate": "2015-06-16T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Adds a data point into the Health app. You can log anything that the Health app supports, including your weight, steps taken, running distance, caloric intake and more."
	},
	"LastModifiedDate": "2016-12-06T08:00:00.000Z",
	"Name": "Log Health Sample",
	"Output": {
		"Multiple": false,
		"OutputName": "Health Sample",
		"Types": [
			"WFHKSampleContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFQuantityTypePickerParameter",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFQuantitySampleType",
			"Label": "Type"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFHealthQuantityFieldParameter",
			"Key": "WFQuantitySampleQuantity",
			"KeyboardType": "DecimalPad",
			"Label": "Value",
			"Placeholder": "10",
			"QuantityTypeKey": "WFQuantitySampleType",
			"TextAlignment": "Right"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFHealthQuantityAdditionalFieldParameter",
			"Key": "WFQuantitySampleAdditionalQuantity",
			"KeyboardType": "DecimalPad",
			"Placeholder": "10",
			"QuantityTypeKey": "WFQuantitySampleType",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFHealthQuantityAdditionalPickerParameter",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFQuantitySampleAdditionalEnumeration",
			"Label": "Reason"
		},
		{
			"Class": "WFHealthCategoryPickerParameter",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFCategorySampleEnumeration",
			"Label": "Value"
		},
		{
			"Class": "WFHealthCategoryAdditionalPickerParameter",
			"DisallowedVariableTypes": [
				"Variable"
			],
			"Key": "WFCategorySampleAdditionalEnumerationKey",
			"Label": "Value"
		},
		{
			"Class": "WFHealthCategoryStartDateFieldParameter",
			"Description": "The date and time of the data point. The current date will be used if you don't provide a date.",
			"Key": "WFQuantitySampleDate",
			"Label": "Date",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFHealthCategoryEndDateFieldParameter",
			"Description": "The date and time for the end of the data point. The current date will be used if you don't provide a date.",
			"Key": "WFSampleEndDate",
			"Label": "End Date",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		}
	],
	"RequiredResources": [
		"WFHealthKitResource",
		{
			"AccessType": "Write",
			"ReadableObjectTypeIdentifierParameterKey": "WFQuantitySampleType",
			"ReadableType": "Quantity",
			"WFResourceClass": "WFHealthKitAccessResource"
		}
	],
	"Subcategory": "Log"
}
```
