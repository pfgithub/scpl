
## Encode Media / EncodeMedia (internally `is.workflow.actions.encodemedia`)


## description

### summary

Re-encodes the media passed as input at the specified size, optionally converting to audio.


### usage
```
EncodeMedia audioOnly=(true | false | variable) format=("M4A" | "AIFF") size=("640x480" | "960x540" | "1280x720" | "1920x1080" | "HEVC 1920x1080" | "HEVC 3840x2160" | "Passthrough") speed=("0.5X" | "Normal" | "2X" | "Custom") customSpeed=number metadata=(true | false) title="string" artist="string" album="string" genre="string" year="string" artwork=(v:myvar | mv:myvar | s:myvar)
```

### arguments

---

### audioOnly: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Allows Variables**: true



Accepts a boolean
or a variable.

---

### format: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"M4A"`
**Allows Variables**: true

**Only enabled if**: argument WFMediaAudioOnly == `true`

Accepts a string 
or variable
containing one of the options:

- `M4A`
- `AIFF`

---

### size: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Passthrough"`
**Allows Variables**: true

**Only enabled if**: argument WFMediaAudioOnly == `false`

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

### speed: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Normal"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `0.5X`
- `Normal`
- `2X`
- `Custom`

---

### customSpeed: Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#number-field)
**Placeholder**: `1.0`
**Allows Variables**: true

**Only enabled if**: argument WFMediaSpeed == `Custom`

		Accepts a number 
		or variable
		with a number.

---

### metadata: Expand Arrow [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)


Accepts a boolean for if this
parameter is expanded or not.
Often expanding fields will
enable or disable other
arguments. If you are using
labels, these can be ignored.

---

### title: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"My Great Track"`
**Allows Variables**: true

**Only enabled if**: argument Metadata == `true`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### artist: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Nicholas Fryingpan"`
**Allows Variables**: true

**Only enabled if**: argument Metadata == `true`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### album: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Abbey Road"`
**Allows Variables**: true

**Only enabled if**: argument Metadata == `true`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### genre: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Indie"`
**Allows Variables**: true

**Only enabled if**: argument Metadata == `true`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### year: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"2001"`
**Allows Variables**: true

**Only enabled if**: argument Metadata == `true`

Accepts a string 
or text
with the text. Does not allow newlines.

---

### artwork: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Allows Variables**: true

**Only enabled if**: argument Metadata == `true`

Accepts a variable.

---

### source json (for developers)

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
