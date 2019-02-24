
## Run JavaScript on Web Page / runjavascriptonwebpage (internally is.workflow.actions.runjavascriptonwebpage)

### usage
`runjavascriptonwebpage [???]`

### arguments
### Text Input: JavaScript / javascript (internally WFJavaScript)
**Placeholder**: JavaScript
**Default Value**: var result = [];
// Get all links from the page
var elements = document.querySelectorAll("a");
for (let element of elements) {
	result.push({
		"url": element.href,
		"text": element.innerText
	});
}

// Call completion to finish
completion(result);
**Allows Variables**: true


Accepts a string 
or text
with the text.
