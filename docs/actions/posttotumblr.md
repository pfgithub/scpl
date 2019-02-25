
## Post to Tumblr / posttotumblr (internally `is.workflow.actions.tumblr.post`)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use [object Object],[object Object].


## description
### summary
Posts the content passed into the action to Tumblr.

### output
The URL of the new post

### usage
`posttotumblr a{undefined=[???] undefined=[???] undefined=[???] poststatus=[string <${strInfo}>] title=[string|text] source=[string|text] caption=[string|text] tags=[string|text] description=[string|text]}`

### arguments
This paramtype is not implemented. WFTumblrComposeInAppParameter

---

This paramtype is not implemented. WFTumblrBlogPickerParameter

---

This paramtype is not implemented. WFDynamicEnumerationParameter

---

### Enumeration: Post Status / poststatus (internally `WFPostState`)
**Default Value**:
```
Post Now
```
**Allows Variables**: true

**Only enabled if**: argument WFComposeInApp = `false`

Accepts a string 
or variable
containing one of the options:

- `Post Now`
- `Add to Queue`
- `Save as Draft`
- `Post Privately`

---

### Text: Title / title (internally `WFPostTitle`)
**Placeholder**:
```
optional
```
**Allows Variables**: true

**Only enabled if**: argument WFPostType = `Text` or `Link` or `Chat`

Accepts a string 
or text
with the text.

---

### Text: Source / source (internally `WFPostSource`)
**Placeholder**:
```
optional
```
**Allows Variables**: true

**Only enabled if**: argument WFPostType = `Quote`

Accepts a string 
or text
with the text.

---

### Text: Caption / caption (internally `WFPostCaption`)
**Placeholder**:
```
optional
```
**Allows Variables**: true

**Only enabled if**: argument WFPostType = `Audio` or `Video` or `Photos`
**Only enabled if**: argument WFComposeInApp = `false`

Accepts a string 
or text
with the text.

---

### Text: Tags / tags (internally `WFPostTags`)
**Placeholder**:
```
shortcuts, apple
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text: Description / description (internally `WFPostDescription`)
**Placeholder**:
```
Description
```
**Allows Variables**: true

**Only enabled if**: argument WFPostType = `Link`

Accepts a string 
or text
with the text.

### source json

```json
{
	"ActionClass": "WFTumblrPostAction",
	"ActionKeywords": [
		"blog"
	],
	"AppIdentifier": "com.tumblr.tumblr",
	"Category": "Sharing",
	"CreationDate": "2015-01-11T06:00:00.000Z",
	"Description": {
		"DescriptionResult": "The URL of the new post",
		"DescriptionSummary": "Posts the content passed into the action to Tumblr."
	},
	"Input": {
		"Multiple": true,
		"Required": true,
		"Types": [
			"NSString",
			"UIImage",
			"NSURL",
			"AVAsset"
		]
	},
	"LastModifiedDate": "2016-02-14T08:00:00.000Z",
	"Name": "Post to Tumblr",
	"Output": {
		"Multiple": false,
		"OutputName": "Tumblr Post URL",
		"Types": [
			"WFURLContentItem"
		]
	},
	"Parameters": [
		{
			"Class": "WFTumblrComposeInAppParameter",
			"Key": "WFComposeInApp",
			"Label": "Compose In Tumblr"
		},
		{
			"Class": "WFTumblrBlogPickerParameter",
			"Description": "The name of the blog to post to",
			"Key": "WFBlogName",
			"Label": "Blog",
			"RequiredResources": [
				{
					"WFParameterKey": "WFComposeInApp",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFDynamicEnumerationParameter",
			"DefaultValue": "Text",
			"Items": [
				"Text",
				"Photos",
				"Quote",
				"Link",
				"Chat",
				"Audio",
				"Video"
			],
			"Key": "WFPostType",
			"Label": "Type"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Post Now",
			"Items": [
				"Post Now",
				"Add to Queue",
				"Save as Draft",
				"Post Privately"
			],
			"Key": "WFPostState",
			"Label": "Post Status",
			"RequiredResources": [
				{
					"WFParameterKey": "WFComposeInApp",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPostTitle",
			"Label": "Title",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFPostType",
					"WFParameterValues": [
						"Text",
						"Link",
						"Chat"
					],
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPostSource",
			"Label": "Source",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFPostType",
					"WFParameterValue": "Quote",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPostCaption",
			"Label": "Caption",
			"Placeholder": "optional",
			"RequiredResources": [
				{
					"WFParameterKey": "WFPostType",
					"WFParameterValues": [
						"Audio",
						"Video",
						"Photos"
					],
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFParameterKey": "WFComposeInApp",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPostTags",
			"Label": "Tags",
			"Placeholder": "shortcuts, apple"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPostDescription",
			"Label": "Description",
			"Multiline": true,
			"Placeholder": "Description",
			"RequiredResources": [
				{
					"WFParameterKey": "WFPostType",
					"WFParameterValue": "Link",
					"WFResourceClass": "WFParameterRelationResource"
				}
			]
		}
	],
	"RequiredResources": [
		{
			"RequiredResources": [
				{
					"WFParameterKey": "WFComposeInApp",
					"WFParameterValue": false,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFTumblrAccessResource"
		},
		{
			"AppIdentifier": "com.tumblr.tumblr",
			"RequiredResources": [
				{
					"WFParameterKey": "WFComposeInApp",
					"WFParameterValue": true,
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"WFResourceClass": "WFAppInstalledResource"
		}
	],
	"Subcategory": "Social"
}
```
