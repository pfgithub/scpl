
## Create Folder / createfolder (internally `is.workflow.actions.file.createfolder`)


## description

### summary

Makes a new folder in the specified file storage service.


### usage
```
createfolder service="iCloud Drive" | "Dropbox" path="string"
```

### arguments

---

### Enumeration: service [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `iCloud Drive`
- `Dropbox`

[Documentation](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)

---

### Text: path [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

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
