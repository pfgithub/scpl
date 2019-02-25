
## Extract Archive / extractarchive (internally `is.workflow.actions.unzip`)



## description
### summary
Extracts files from the archive passed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab, and iso archives.

### input
Archive


### usage
`extractarchive a{}`

### arguments


### source json

```json
{
	"ActionClass": "WFExtractArchiveAction",
	"ActionKeywords": [
		"extract",
		"unarchive",
		"unzip",
		"contents",
		"gzip"
	],
	"Category": "Documents",
	"CreationDate": "2016-09-23T05:00:00.000Z",
	"Description": {
		"DescriptionInput": "Archive",
		"DescriptionSummary": "Extracts files from the archive passed as input. Many archive formats are supported, including zip, rar, tar.gz, tar.bz2, tar, gzip, cpio, cab, and iso archives."
	},
	"IconName": "Documents.png",
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"public.data"
		]
	},
	"Name": "Extract Archive",
	"Output": {
		"Multiple": true,
		"OutputName": "Files",
		"Types": [
			"WFGenericFileContentItem"
		]
	},
	"Parameters": [],
	"Subcategory": "Archives"
}
```
