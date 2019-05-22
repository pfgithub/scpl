
## Get Halfway Point / GetHalfwayPoint (internally `is.workflow.actions.gethalfwaypoint`)


## description

### summary

Gets the halfway point between two locations.


### usage
```
GetHalfwayPoint FirstLocation="string" SecondLocation="string"
```

### arguments

---

### FirstLocation: Location [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"San Francisco, CA"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### SecondLocation: Location [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Philadelphia, PA"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFGetHalfwayPointAction",
	"ActionKeywords": [
		"Location",
		"Maps",
		"Two",
		"Places"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"CreationDate": "2015-08-29T17:26:33.000Z",
	"Description": {
		"DescriptionSummary": "Gets the halfway point between two locations."
	},
	"Name": "Get Halfway Point",
	"Output": {
		"OutputName": "Halfway Point",
		"Types": [
			"CLLocation"
		]
	},
	"Parameters": [
		{
			"Class": "WFLocationFieldParameter",
			"Key": "WFGetHalfwayPointFirstLocation",
			"Label": "First Location",
			"Placeholder": "San Francisco, CA",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFLocationFieldParameter",
			"Key": "WFGetHalfwayPointSecondLocation",
			"Label": "Second Location",
			"Placeholder": "Philadelphia, PA",
			"TextAlignment": "Right"
		}
	],
	"SuggestedNever": true
}
```
