
## Upload to CloudApp / uploadtocloudapp (internally `is.workflow.actions.cloudapp.upload`)


> This action requires that Shortcuts has permission to use WFCloudAppAccessResource.


## description
### summary
Uploads the input to CloudApp and returns the CloudApp URL.

### output
CloudApp URL

### usage
`uploadtocloudapp linkprivacy=[string <${strInfo}>]`

### arguments
### Enumeration: Link Privacy / linkprivacy (internally `WFCloudAppPrivacyType`)
**Default Value**: Private
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Private`
- `Public`
