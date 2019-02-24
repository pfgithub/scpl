
## Upload to Imgur / uploadtoimgur (internally `is.workflow.actions.imgur.upload`)


> This action requires that Shortcuts has permission to use [object Object].


## description
### summary
Uploads the input to Imgur.


### usage
`uploadtoimgur uploadanonymously=[string boolean|variable] directlink=[string boolean|variable] createalbum=[string boolean|variable] albumlayout=[string <${strInfo}>] albumprivacy=[string <${strInfo}>] title=[string|text] description=[string|text]`

### arguments
### Switch: Upload Anonymously / uploadanonymously (internally `WFImgurAnonymous`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Switch: Direct Link / directlink (internally `WFImgurDirectLink`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Switch: Create Album / createalbum (internally `WFImgurAlbum`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Album Layout / albumlayout (internally `WFImgurAlbumLayout`)
**Default Value**: Blog
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Blog`
- `Grid`
- `Horizontal`
- `Vertical`

---

### Enumeration: Album Privacy / albumprivacy (internally `WFImgurAlbumPrivacy`)
**Default Value**: Hidden
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Public`
- `Hidden`
- `Secret`

---

### Text Input: Title / title (internally `WFImgurTitle`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Description / description (internally `WFImgurDescription`)
**Placeholder**: Description
**Allows Variables**: true


Accepts a string 
or text
with the text.

### source json

```json
{
	"ActionClass": "WFImgurUploadAction",
	"ActionKeywords": [
		"image",
		"reddit",
		"album",
		"photo"
	],
	"AppIdentifier": "imgurmobile",
	"Category": "Photos & Video",
	"CreationDate": "2015-05-03T05:00:00.000Z",
	"Description": {
		"DescriptionNote": "Powered by Imgur (imgur.com)",
		"DescriptionSummary": "Uploads the input to Imgur."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"WFImageContentItem"
		]
	},
	"Name": "Upload to Imgur",
	"Output": {
		"Multiple": true,
		"OutputName": "Imgur URLs",
		"Types": [
			"NSURL"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Key": "WFImgurAnonymous",
			"Label": "Upload Anonymously"
		},
		{
			"Class": "WFSwitchParameter",
			"Description": "If enabled, the action will return a link to the image, and not its Imgur page.",
			"Key": "WFImgurDirectLink",
			"Label": "Direct Link",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImgurAlbum",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Description": "If enabled, the input images will be grouped into an album. Otherwise, the individual links will be returned.",
			"Key": "WFImgurAlbum",
			"Label": "Create Album"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Blog",
			"Items": [
				"Blog",
				"Grid",
				"Horizontal",
				"Vertical"
			],
			"Key": "WFImgurAlbumLayout",
			"Label": "Album Layout",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImgurAlbum",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Hidden",
			"Items": [
				"Public",
				"Hidden",
				"Secret"
			],
			"Key": "WFImgurAlbumPrivacy",
			"Label": "Album Privacy",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImgurAlbum",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFImgurTitle",
			"Label": "Title",
			"Placeholder": "optional",
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFImgurDescription",
			"Label": "Description",
			"Multiline": true,
			"Placeholder": "Description"
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFImgurAnonymous",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFAccountClass": "WFImgurAccount",
			"WFResourceClass": "WFAccountAccessResource"
		}
	]
}
```
