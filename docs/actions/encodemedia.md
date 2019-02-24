
## Encode Media / encodemedia (internally `is.workflow.actions.encodemedia`)



## description
### summary
Re-encodes the media passed as input at the specified size, optionally converting to audio.


### usage
`encodemedia audioonly=[string boolean|variable] format=[string <${strInfo}>] size=[string <${strInfo}>] speed=[string <${strInfo}>] customspeed=[string number] metadata=[string boolean] title=[string|text] artist=[string|text] album=[string|text] genre=[string|text] year=[string|text] artwork=[variable]`

### arguments
### Switch: Audio Only / audioonly (internally `WFMediaAudioOnly`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Format / format (internally `WFMediaAudioFormat`)
**Default Value**: M4A
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `M4A`
- `AIFF`

---

### Enumeration: Size / size (internally `WFMediaSize`)
**Default Value**: Passthrough
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `640x480`
- `960x540`
- `1280x720`
- `1920x1080`
- `HEVC 1920x1080`
- `HEVC 3840x2160`
- `Passthrough`

---

### Enumeration: Speed / speed (internally `WFMediaSpeed`)
**Default Value**: Normal
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `0.5X`
- `Normal`
- `2X`
- `Custom`

---

### Number: Custom Speed / customspeed (internally `WFMediaCustomSpeed`)
**Placeholder**: 1.0
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Expand Arrow: Metadata / metadata (internally `Metadata`)


Accepts a string with either true or false for if this
parameter is expanded or not.

---

### Text Input: Title / title (internally `WFMetadataTitle`)
**Placeholder**: My Great Track
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Artist / artist (internally `WFMetadataArtist`)
**Placeholder**: Nicholas Fryingpan
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Album / album (internally `WFMetadataAlbum`)
**Placeholder**: Abbey Road
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Genre / genre (internally `WFMetadataGenre`)
**Placeholder**: Indie
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Year / year (internally `WFMetadataYear`)
**Placeholder**: 2001
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Variable Picker: Artwork / artwork (internally `WFMetadataArtwork`)
**Allows Variables**: true


Accepts a variable.

### source json

```json
{
	"ActionClass": "WFEncodeMediaAction",
	"ActionKeywords": [
		"quicktime",
		"render",
		"audio",
		"transcode",
		"metadata",
		"artwork",
		"id3",
		"video"
	],
	"Category": "Photos & Video",
	"Description": {
		"DescriptionSummary": "Re-encodes the media passed as input at the specified size, optionally converting to audio."
	},
	"IconName": "QuickTime.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"AVAsset"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2016-05-23T07:00:00.000Z",
	"Name": "Encode Media",
	"Output": {
		"Multiple": true,
		"OutputName": "Encoded Media",
		"Types": [
			"AVAsset"
		]
	},
	"Parameters": [
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": false,
			"Key": "WFMediaAudioOnly",
			"Label": "Audio Only"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "M4A",
			"Items": [
				"M4A",
				"AIFF"
			],
			"Key": "WFMediaAudioFormat",
			"Label": "Format",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMediaAudioOnly",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Passthrough",
			"Items": [
				"640x480",
				"960x540",
				"1280x720",
				"1920x1080",
				"HEVC 1920x1080",
				"HEVC 3840x2160",
				"Passthrough"
			],
			"Key": "WFMediaSize",
			"Label": "Size",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMediaAudioOnly",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Normal",
			"Items": [
				"0.5X",
				"Normal",
				"2X",
				"Custom"
			],
			"Key": "WFMediaSpeed",
			"Label": "Speed"
		},
		{
			"AllowsDecimalNumbers": true,
			"Class": "WFNumberFieldParameter",
			"Description": "A number greater than zero that indicates how fast or slow to encode the media. Values between 0.0 and 1.0 slow down the media.",
			"Key": "WFMediaCustomSpeed",
			"Label": "Custom Speed",
			"Placeholder": "1.0",
			"RequiredResources": [
				{
					"WFParameterKey": "WFMediaSpeed",
					"WFParameterValue": "Custom",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFExpandingParameter",
			"Key": "Metadata",
			"Label": "Metadata"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFMetadataTitle",
			"Label": "Title",
			"Placeholder": "My Great Track",
			"RequiredResources": [
				{
					"WFParameterKey": "Metadata",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFMetadataArtist",
			"Label": "Artist",
			"Placeholder": "Nicholas Fryingpan",
			"RequiredResources": [
				{
					"WFParameterKey": "Metadata",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFMetadataAlbum",
			"Label": "Album",
			"Placeholder": "Abbey Road",
			"RequiredResources": [
				{
					"WFParameterKey": "Metadata",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFMetadataGenre",
			"Label": "Genre",
			"Placeholder": "Indie",
			"RequiredResources": [
				{
					"WFParameterKey": "Metadata",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFMetadataYear",
			"Label": "Year",
			"Placeholder": "2001",
			"RequiredResources": [
				{
					"WFParameterKey": "Metadata",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"TextAlignment": "Right"
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFMetadataArtwork",
			"Label": "Artwork",
			"RequiredResources": [
				{
					"WFParameterKey": "Metadata",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Video"
}
```
