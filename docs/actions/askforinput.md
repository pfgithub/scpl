
## Ask for Input / askforinput (internally is.workflow.actions.ask)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFUserInteractionResource.

### usage
`askforinput question=[string|text] defaultanswer=[string|text] undefined=[???] inputtype=[string <${strInfo}>] granularity=[string <${strInfo}>] skiptowatchdictation=[string|variable]`

### arguments
### Text Input: Question / question (internally WFAskActionPrompt)
**Placeholder**: Enter text
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
### Text Input: Default Answer / defaultanswer (internally WFAskActionDefaultAnswer)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
This paramtype is not implemented. WFDateFieldParameter
---
### Enumeration: Input Type / inputtype (internally WFInputType)
**Default Value**: Text
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Text`
- `Number`
- `URL`
- `Date`
---
### Enumeration: Granularity / granularity (internally WFAskActionDateGranularity)
**Default Value**: Date
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Date`
- `Time`
- `Date and Time`
---
### Switch: Skip to Watch Dictation / skiptowatchdictation (internally WFAskActionImmediateDictation)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
