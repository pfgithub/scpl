
## Ask for Input / askforinput (internally is.workflow.actions.ask)

> This action is not yet complete. Some arguments may be missing.

### usage
`askforinput [???][???][???][???][???][???]`

### arguments
### Text Input: Question / question (internally WFAskActionPrompt)
**Placeholder**: Enter text
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
### Text Input: Default Answer / defaultanswer (internally WFAskActionDefaultAnswer)
**Placeholder**: optional
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
unknown parameter type This paramtype is not implemented. WFDateFieldParameter
---
### Enumeration: Input Type / inputtype (internally WFInputType)
**Placeholder**: undefined
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
**Placeholder**: undefined
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
**Placeholder**: undefined
**Default Value**: undefined
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
