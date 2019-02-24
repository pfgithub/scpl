
## Create Folder / createfolder (internally `is.workflow.actions.file.createfolder`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Makes a new folder in the specified file storage service.


### usage
`createfolder undefined=[???] path=[string|text]`

### arguments
This paramtype is not implemented. WFStorageServicePickerParameter

---

### Text Input: Path / path (internally `WFFilePath`)
**Allows Variables**: true


Accepts a string 
or text
with the text.

### other info

<details><summary>source json</summary>
```json
{
	"ActionClass": "WFCreateFolderAction",
	"ActionKeywords": [
		"directory"
	],
	"Category": "Documents",
	"CreationDate": "2017-03-13T05:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Makes a new folder in the specified file storage service."
	},
	"IconName": "Documents.png",
	"Name": "Create Folder",
	"Parameters": [
		{
			"AlwaysShowsButton": true,
			"Class": "WFStorageServicePickerParameter",
			"Key": "WFFileStorageService",
			"Label": "Service"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"Description": "The path of the new folder. For example, if you want create “Adventure” in an existing folder titled “Photos”, put “/Photos/Adventure/”",
			"DisableAutocorrection": true,
			"Key": "WFFilePath",
			"KeyboardType": "WebSearch",
			"Label": "Path",
			"TextAlignment": "Left"
		}
	],
	"Subcategory": "File Storage",
	"SuggestedAsInitialAction": false
}
```
</details>
