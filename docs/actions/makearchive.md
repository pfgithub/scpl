
## Make Archive / makearchive (internally `is.workflow.actions.makezip`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Makes an archive out of the files passed as input. Supports creating zip, tar.gz, tar.bz2, tar, gzip, cpio, or iso archives.

### output
Archive

### usage
`makearchive archivename=[string|text] undefined=[???]`

### arguments
### Text Input: Archive Name / archivename (internally `WFZIPName`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFArchiveFormatParameter

### source json

```json
{
	"ActionClass": "WFMakeArchiveAction",
	"ActionKeywords": [
		"make",
		"generate",
		"gzip"
	],
	"Category": "Documents",
	"Description": {
		"DescriptionResult": "Archive",
		"DescriptionSummary": "Makes an archive out of the files passed as input. Supports creating zip, tar.gz, tar.bz2, tar, gzip, cpio, or iso archives."
	},
	"IconName": "Documents.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFContentItem"
		]
	},
	"LastModifiedDate": "2016-09-23T05:00:00.000Z",
	"Name": "Make Archive",
	"Output": {
		"Multiple": false,
		"OutputName": "Archive",
		"Types": [
			"WFGenericFileContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTextInputParameter",
			"Key": "WFZIPName",
			"Label": "Archive Name",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFArchiveFormatParameter",
			"Key": "WFArchiveFormat",
			"Label": "Format"
		}
	],
	"Subcategory": "Archives"
}
```
