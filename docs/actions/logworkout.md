
## Log Workout / LogWorkout (internally `is.workflow.actions.health.workout.log`)

> This action is not yet complete. Some arguments may be missing.

> This action requires that Shortcuts has permission to use WFHealthKitResource,[object Object].


## description

### summary

Adds a workout into the Health app. You can log all kinds of activities, from running and cycling to playing a sport.


### usage
```
LogWorkout undefined=NotImplemented date="string" undefined=NotImplemented undefined=NotImplemented undefined=NotImplemented
```

### arguments

---

#### This paramtype is not implemented. WFWorkoutTypePickerParameter

---

### date: Date [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"optional"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

#### This paramtype is not implemented. WFDurationQuantityFieldParameter

---

#### This paramtype is not implemented. WFHealthQuantityFieldParameter

---

#### This paramtype is not implemented. WFHealthQuantityFieldParameter

---

### source json (for developers)

```json
{
	"ActionClass": "WFLogWorkoutAction",
	"ActionKeywords": [
		"health",
		"workout",
		"sport",
		"fitness",
		"activity"
	],
	"AppIdentifier": "com.apple.Health",
	"Category": "Health",
	"CreationDate": "2015-06-16T07:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Adds a workout into the Health app. You can log all kinds of activities, from running and cycling to playing a sport."
	},
	"Name": "Log Workout",
	"Output": {
		"Multiple": false,
		"OutputName": "Workout",
		"Types": [
			"WFHKWorkoutContentItem"
		]
	},
	"ParameterSummary": "Log ${WFWorkoutReadableActivityType} workout",
	"Parameters": [
		{
			"Class": "WFWorkoutTypePickerParameter",
			"Key": "WFWorkoutReadableActivityType",
			"Label": "Type"
		},
		{
			"Class": "WFDateFieldParameter",
			"Description": "The date and time of the start of the workout",
			"Key": "WFWorkoutDate",
			"Label": "Date",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"AllowsDecimalNumbers": false,
			"Class": "WFDurationQuantityFieldParameter",
			"Description": "The duration of the workout (optional)",
			"Key": "WFWorkoutDuration",
			"Label": "Duration",
			"Placeholder": "30",
			"PossibleUnits": [
				"sec",
				"min",
				"hr"
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFHealthQuantityFieldParameter",
			"Description": "The calories burned during the activity (optional)",
			"Key": "WFWorkoutCaloriesQuantity",
			"Label": "Calories",
			"Placeholder": "400",
			"QuantityType": "Active Calories",
			"TextAlignment": "Right"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFHealthQuantityFieldParameter",
			"Description": "The distance covered during the activity. Only provide this if it makes sense for the activity. (optional)",
			"Key": "WFWorkoutDistanceQuantity",
			"Label": "Distance",
			"Placeholder": "10",
			"QuantityType": "Walking + Running Distance",
			"TextAlignment": "Right"
		}
	],
	"RequiredResources": [
		"WFHealthKitResource",
		{
			"Resources": [
				{
					"AccessType": "Write",
					"ReadableType": "Workout"
				},
				{
					"AccessType": "Write",
					"ReadableObjectTypeIdentifier": "Walking + Running Distance",
					"ReadableType": "Quantity"
				},
				{
					"AccessType": "Write",
					"ReadableObjectTypeIdentifier": "Active Calories",
					"ReadableType": "Quantity"
				}
			],
			"WFResourceClass": "WFHealthKitAccessResource"
		}
	],
	"Subcategory": "Log"
}
```
