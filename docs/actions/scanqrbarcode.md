
## Scan QR/Bar Code / ScanQRBarCode (internally `is.workflow.actions.scanbarcode`)

> This action requires that Shortcuts has permission to use WFUserInteractionResource,WFCameraAccessResource.


## description

### summary

Scans a QR code or bar code using the camera, and returns the text/URL that is found.


### usage
```
ScanQRBarCode 
```

### arguments

---



---

### source json (for developers)

```json
{
	"ActionClass": "WFScanMachineReadableCodeAction",
	"Category": "Documents",
	"Description": {
		"DescriptionSummary": "Scans a QR code or bar code using the camera, and returns the text/URL that is found."
	},
	"IconName": "QRCode.png",
	"LastModifiedDate": "2015-01-11T06:00:00.000Z",
	"Name": "Scan QR/Bar Code",
	"Output": {
		"Multiple": false,
		"OutputName": "QR/Bar Code",
		"Types": [
			"AVMetadataMachineReadableCodeObject"
		]
	},
	"ParameterSummary": "Scan QR/Bar Code",
	"RequiredResources": [
		"WFUserInteractionResource",
		"WFCameraAccessResource"
	],
	"ShortName": "Scan Bar Code",
	"Subcategory": "QR Codes",
	"UnsupportedEnvironments": [
		"Extension"
	],
	"UserInterfaces": [
		"UIKit"
	]
}
```
