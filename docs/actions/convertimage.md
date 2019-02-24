
## Convert Image / convertimage (internally `is.workflow.actions.image.convert`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Converts the images passed into the action to the specified image format.


### usage
`convertimage undefined=[???] quality=[string number] preservemetadata=[string boolean|variable]`

### arguments
This paramtype is not implemented. WFImageConvertFormatPickerParameter

---

### Slider Number: Quality / quality (internally `WFImageCompressionQuality`)
**Default Value**: 0.75
**Allows Variables**: true


Accepts a string 
or variable
containing a number value from 0 to 1.

---

### Switch: Preserve Metadata / preservemetadata (internally `WFImagePreserveMetadata`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

### source json

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
