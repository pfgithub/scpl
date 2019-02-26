# Getting Started

[Try Shortcutslang](http://pfgithub.github.io/shortcutslang/tryit.html)

A .shorttxt file consists of a list of actions. Actions can be separated by newlines or semicolons

```swift
Text "A text action"
Text "Another text action"; Text "A text action seperated by a semicolon"
```

Actions have a documentation page detailing their name and arguments. See a list of actions [here](index) and click on one for information about it and its parameters.

The [text](actions/text) action "Passes the specified text to the next action."

Shortcutslang does not just do what shortcuts does, you can also do other things such as embedding actions inside of text fields.

```swift
Text "My text: \(Text "Hello there!")"
```

This will automatically create a variable and insert that variable into the text, equivalent to this:

```swift
Text "Hello there!" -> mv:myvariable
Text "My text: \(mv:myvariable)"
```

### Parameters

In an action's documentation page, the parameter types are listed as `string`/`text`/`list`... There are multiple ways to provide parameters of different types.

#### text type

A text can be made with a [string argument](#string-argument) or [identifier argument](#identifier-argument) or [barlist argument](#barlist-argument) or [variable argument](#variable-argument) or [action argument](#action-argument)

#### string type

String types, unlike text types, do not allow variables or actions in them.

A text can be made with a [string argument](#string-argument) or [identifier argument](#identifier-argument) or [barlist argument](#barlist-argument)

#### list type

A list can either be made with a [barlist argument](#barlist-argument) or a [array argument](#array-argument)

#### boolean type

A boolean type can be made with an [identifier argument](#identifier-argument) equal to `true` or `false`.

#### variable type

A variable type can be made with a [variable argument](#variable-argument) or an [action argument](#action-argument).

#### action type

An action type can be made with an [action argument](#action-argument) or a [variable argument](#variable-argument).

#### variable v:variableName type

A v:variableName can be made with a named [variable argument](#variable-argument).

### Special Parameters

#### Set Variable to output

Sometimes you may want to set a variable to the result of an action.

```coffeescript
Text "hello" -> v:myvar
Text "world" -> mv:mymagicvar
```

becomes

```js
Text "hello"
SetVariable (v:myvar)
Text "world" // the variable mv:mymagicvar will reference this action
```

#### List of Argument Names and Values

Sometimes you may want to provide names instead of relying on the order of arguments.

```coffeescript
ShowAlert a{showCancelButton=true, message="hi", "title"="Alert!"}
ShowAlert "Alert!" "Hi" a{showCancelButton=true}
```

becomes

```coffeescript
showAlert "Alert!" "hi" true
showAlert "Alert!" "hi" true
```

#### Input Argument

Sometimes you may want to provide input to an action other than the action above.

```coffeescript
Text "hello there"
if ^(Text "hi") Equals "hi"
```

becomes

```coffeescript
Text "hello there"
Text "hi"
if Equals "hi"
```

#### Block Actions

> Note: This syntax is temporary. In the future, block statements will have better syntax.

Sometimes an action might have a block.

```coffeescript
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

```coffeescript
Text mytext
```

#### string argument

```coffeescript
Text "Hi there \(v:my embedded variable)"
```

#### barlist argument

```js
Text
| item 1
| item 2
| \(v:"my embedded variable")
```

#### array argument

```coffeescript
List ["Item 1", "\(v:myvar)"]
```

#### variable argument

```js
GetVariable (v:myvar)
```

#### action argument

```js
GetVariable (Text "My other action")
```

### variables

There are three types of variables, `v:` named variables, `mv:` magic variables, and `s:` special attachments.

#### Named Variables

Set a named variable

```js
Text "hi"
SetVariable (v:myNamedVariable)
Text "new value"
SetVariable (v:myNamedVariable)
```

In the future, `v:myNamedVariable` will reference the value of the input to the Set Variable action. Named variables can be set multiple times and their value will update.

#### Magic Variables

Set a magic variable

```coffeescript
Text "hi" -> mv:myMagicVariable
```

In the future, `mv:myMagicVariable` will reference the Text action. Magic variables can only be set once.

#### Special Variables

- `s:clipboard` The contents of the clipboard
- `s:askwhenrun` The Ask When Run attachment
- `s:input` The input to the shortcut.
- `s:currentdate` The current date

#### Aggrandizements

Variables can have an Aggrandizements parameter passed into them.

```js
Text (mv:myVariable{as:text})
Text (v:myDictionary{as:Dictionary,key:"hi"})
Text (v:myFile{get:name})
```
