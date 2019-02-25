# Getting Started

[Try Shortcutslang](http://pfgithub.github.io/shortcutslang/tryit.html)

A .shorttxt file consists of a list of actions. Actions can be seperated by newlines or semicolons

```swift
Text "A text action"
Text "Another text action"; Text "A text action seperated by a semicolon"
```

Actions have a documentation page detailing their name and arguments. See a list of actions [here](index) and click on one for information about it and its parameters.

The [text](actions/text) action "Passes the specified text to the next action."

### Parameters

In an action's documentation page, the parameter types are listed as `string`/`text`/`list`... There are multiple ways to provide parameters of different types.

#### text type

A text can be made with a [string argument](#string-argument) or [identifier argument](#identifier-argument) or [barlist argument](#barlist-argument) or [variable argument](#variable-argument) or [action argument](#action-argument)

#### string type

String types, unlike text types, do not allow variables or actions in them.

A text can be made with a [string argument](#string-argument) or [identifier argument](#identifier-argument) or [barlist argument](#barlist-argument)

#### list type

A list can either be made with a [barlist argument](#barlist-argument) or a [array argument](#array-argument)

#### variable type

A variable type can be made with a [variable argument](#variable-argument) or an [action argument](#action-argument).

#### action type

An action type can be made with an [action argument](#action-argument) or a [variable argument](#variable-argument).

#### variable v:variableName type

A v:variableName can be made with a named [variable argument](#variable-argument).

### Special Parameters

#### Set Variable to output

Sometimes you may want to set a variable to the result of an action.

```swift
Text "hello" -> v:myvar
Text "world" -> mv:mymagicvar
```

becomes

```swift
Text "hello"
SetVariable (v:myvar)
Text "world" // the variable mv:mymagicvar will reference this action
```

#### List of Argument Names and Values

Sometimes you may want to provide names instead of relying on the order of arguments.

```swift
showAlert a{showCancelButton=true, message="hi", "title"="Alert!"}
showAlert "Alert!" "Hi" a{showCancelButton=true}
```

becomes

```swift
showAlert "Alert!" "hi" true
showAlert "Alert!" "hi" true
```

#### Input Argument

Sometimes you may want to provide input to an action other than the action above.

```swift
Text "hello there"
if ^(Text "hi") Equals "hi"
```

becomes

```swift
Text "hello there"
Text "hi"
if Equals "hi"
```

#### Block Actions

> Note: This syntax is temporary. In the future, block statements will have better syntax.

Sometimes an action might have a block.

```swift
if Equals "hello" >c:0:gid:myif
  showAlert "Alert!" "Input equals hello"
if >c:1:gid:myif
  showAlert "Alert!" "Input does not equal hello"
if >c:2:gid:myif

repeat a{wfrepeatcount=2} >c:0:gid:myrepeat
  setVariable (v:Index)
  showAlert "Alert!" "The repeat index is \(v:Index)"
repeat >c:1:gid:myrepeat
```

Usage: `c:`number (first is 0, next is 1, ...)`:gid:`name (every block action must have a unique gid name)

### Argument types

#### identifier argument

```swift
Text mytext
```

#### string argument

```swift
Text "Hi there \(v:my embedded variable)"
```

#### barlist argument

```swift
Text
| item 1
| item 2
| \(v:"my embedded variable")
```

#### array argument

```swift
List ["Item 1", "\(v:myvar)"]
```

#### variable argument

```swift
GetVariable (v:myvar)
```

#### action argument

```swift
GetVariable (Text "My other action")
```
