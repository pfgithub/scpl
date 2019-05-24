
## Unknown Intent / UnknownIntent (internally `is.workflow.actions.sirikit.donation.handle`)



### usage
```
UnknownIntent (true | false | variable)
```

### arguments

---

### showWhenRun: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### source json (for developers)

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
