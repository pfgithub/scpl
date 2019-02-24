
## Show Notification / shownotification (internally `is.workflow.actions.notification`)


> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFMainThreadResource,WFLocalNotificationAccessResource.


## description
### summary
Displays a local notification.

### input
An image or video to include in the notification


### usage
`shownotification title=[string|text] body=[string|text] playsound=[string boolean|variable]`

### arguments
### Text Input: Title / title (internally `WFNotificationActionTitle`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Body / body (internally `WFNotificationActionBody`)
**Placeholder**: Charming notification message
**Default Value**: Hello World
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Switch: Play Sound / playsound (internally `WFNotificationActionSound`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
