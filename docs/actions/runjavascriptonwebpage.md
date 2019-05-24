
## Run JavaScript on Webpage / RunJavaScriptonWebpage (internally `is.workflow.actions.runjavascriptonwebpage`)

> This action requires that Shortcuts has permission to use [object Object].


## description

### summary

Runs JavaScript on a Safari webpage passed in as input


### note

Safari Webpage items are only available when running your shortcut as an Action Extension in Safari.


### input

Safari webpages


### output

The output from the JavaScript (JSON)

### usage
```
RunJavaScriptonWebpage "string"
```

### arguments

---

### javaScript: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"JavaScript"`
**Default Value**: `"var result = [];
// Get all links from the page
var elements = document.querySelectorAll("a");
for (let element of elements) {
	result.push({
		"url": element.href,
		"text": element.innerText
	});
}

// Call completion to finish
completion(result);"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

```json
{
	"ActionClass": "WFRunJavaScriptOnWebPageAction",
	"ActionKeywords": [
		"script",
		"safari",
		"java",
		"javascript",
		"webpage",
		"webkit",
		"browser",
		"json"
	],
	"AppIdentifier": "com.apple.mobilesafari",
	"Category": "Web",
	"Description": {
		"DescriptionInput": "Safari webpages",
		"DescriptionNote": "Safari Webpage items are only available when running your shortcut as an Action Extension in Safari.",
		"DescriptionResult": "The output from the JavaScript (JSON)",
		"DescriptionSummary": "Runs JavaScript on a Safari webpage passed in as input"
	},
	"Input": {
		"Multiple": false,
		"Required": true,
		"Types": [
			"WFSafariWebPageContentItem"
		]
	},
	"InputPassthrough": false,
	"LastModifiedDate": "2015-01-11T06:00:00.000Z",
	"Name": "Run JavaScript on Webpage",
	"Output": {
		"Multiple": false,
		"OutputName": "JavaScript Result",
		"Types": [
			"WFDictionaryContentItem",
			"WFStringContentItem",
			"WFBooleanContentItem",
			"WFNumberContentItem"
		]
	},
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DefaultValue": "var result = [];\n// Get all links from the page\nvar elements = document.querySelectorAll(\"a\");\nfor (let element of elements) {\n\tresult.push({\n\t\t\"url\": element.href,\n\t\t\"text\": element.innerText\n\t});\n}\n\n// Call completion to finish\ncompletion(result);",
			"DisableAutocorrection": true,
			"DisableSmartDashes": true,
			"DisableSmartQuotes": true,
			"Key": "WFJavaScript",
			"Label": "JavaScript",
			"Multiline": true,
			"Placeholder": "JavaScript",
			"SyntaxHighlightingType": "JavaScript"
		}
	],
	"RequiredResources": [
		{
			"WFDeviceAttributes": {
				"WFDeviceAttributeSystemVersion": {
					"WFSystemVersion": "12",
					"WFSystemVersionRelation": ">="
				}
			},
			"WFResourceClass": "WFDeviceAttributesResource"
		}
	],
	"ShortName": "Run JavaScript",
	"Subcategory": "Safari",
	"SuggestedNever": true
}
```
