
## Add to Variable / addtovariable (internally `is.workflow.actions.appendvariable`)



## description
### summary
Appends this action's input to the specified variable, creating the variable if it does not exist.

This allows you to make a variable hold multiple items.

### output
The updated contents of the variable.

### usage
`addtovariable variable=[string|variable v:variableName]`

### arguments
### Variable Field: Variable / variable (internally `WFVariableName`)
**Placeholder**: Variable Name
**Allows Variables**: true


Accepts a string with the name of the named variable (v:) you want to set,
or a named variable (v:) that you want to set.

