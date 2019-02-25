
## Unknown Intent / unknownintent (internally `is.workflow.actions.sirikit.donation.handle`)




### usage
`unknownintent a{showwhenrun=[string boolean|variable]}`

### arguments
### Switch: Show When Run / showwhenrun (internally `ShowWhenRun`)
**Default Value**:
```
true
```
**Allows Variables**: true



Accepts a boolean
or a variable.

### source json

```json
{
	"ActionClass": "WFHandleDonatedIntentAction",
	"Discoverable": false,
	"InputPassthrough": true,
	"Name": "Unknown Intent",
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "ShowWhenRun",
			"Label": "Show When Run"
		}
	]
}
```
