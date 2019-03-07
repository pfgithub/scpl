
## Convert Image / convertimage (internally `is.workflow.actions.image.convert`)


## description

### summary

Converts the images passed into the action to the specified image format.


### usage
```
convertimage format=("JPEG" | "PNG" | "TIFF" | "GIF" | "JPEG-2000" | "BMP" | "PDF" | "Match Input") quality=number preservemetadata=(true | f alse | variable)
```

### arguments

---

### format: Image Format Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"JPEG"`
**Allows Variables**: true



Accepts a string 
or variable
containing one of the options:

- `JPEG`
- `PNG`
- `TIFF`
- `GIF`
- `JPEG-2000`
- `BMP`
- `PDF`
- `Match Input`

---

### quality: Slider Number [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#slider-number-fields)
**Default Value**: `0.75`
**Allows Variables**: true

**Only enabled if**: argument WFImageFormat == `JPEG` or `JPEG-2000`

		Accepts a number 
		or variable
		with a number.

---

### preservemetadata: Switch [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#switch-or-expanding-or-boolean-fields)
**Default Value**: ```
		true
		```
**Allows Variables**: true

**Only enabled if**: argument WFImageFormat == `JPEG` or `PNG` or `TIFF` or `HEIF` or `Match Input`

Accepts a boolean
or a variable.

---

### source json (for developers)

```json
{
	"ActionClass": "WFImageConvertAction",
	"ActionKeywords": [
		"jpeg",
		"jpg",
		"png",
		"bmp",
		"tiff",
		"strip",
		"remove",
		"preserve",
		"metadata"
	],
	"Category": "Photos & Video",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionSummary": "Converts the images passed into the action to the specified image format."
	},
	"IconName": "Image.png",
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"UIImage"
		]
	},
	"InputPassthrough": false,
	"Name": "Convert Image",
	"Output": {
		"Multiple": false,
		"OutputName": "Converted Image",
		"Types": [
			"UIImage"
		]
	},
	"Parameters": [
		{
			"Class": "WFImageConvertFormatPickerParameter",
			"DefaultValue": "JPEG",
			"Key": "WFImageFormat",
			"Label": "Format"
		},
		{
			"Class": "WFSliderParameter",
			"DefaultValue": 0.75,
			"Description": "Allows you to choose the image quality used when compressing the image file. Higher quality images will look better, but result in larger files.",
			"Key": "WFImageCompressionQuality",
			"Label": "Quality",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImageFormat",
					"WFParameterValues": [
						"JPEG",
						"JPEG-2000"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFSwitchParameter",
			"DefaultValue": true,
			"Description": "When Preserve Metadata is turned off, all metadata, such as the GPS coordinates where the photo was taken, will be stripped from the image file.",
			"Key": "WFImagePreserveMetadata",
			"Label": "Preserve Metadata",
			"RequiredResources": [
				{
					"WFParameterKey": "WFImageFormat",
					"WFParameterValues": [
						"JPEG",
						"PNG",
						"TIFF",
						"HEIF",
						"Match Input"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"Subcategory": "Images"
}
```
