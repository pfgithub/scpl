# Getting Started

### Basic Actions

Shortcutslang tries to be familiar to read and write. To write an action, put the action name with no spaces and a list of arguments in order.

```coffeescript
ActionName "Action" "Arguments"
```

For example, the text action is named [Text](actions/text) and has one field, the text inside it.

```coffeescript
Text "This is my text"
```

### Argument Labels

More complex actions have multiple fields

```coffeescript
GetFile "iCloud Drive" true false
```

For these actions, you can put labels to know which field is which.

```coffeescript
GetFile service="iCloud Drive" showdocumentpicker=true selectmultiple=false
```

### Block Actions

Other actions have blocks, like the if action and choose from menu action

```coffeescript
Text "hello"
If "Equals" "hello"
	ShowAlert title="Alert!" message="It equals hello"
Otherwise
	ShowAlert title="Alert!" message="It does not equal hello"
End If
```

### Variables

Variables are marked with type`:`varname. For example, a named variable called `Input` would be `v:Input`. There are 3 variable types, `v` for named variable, `mv` for magic variable, and `s` for special variables like the clipboard variable and shortcut input variable. To use a variable with spaces in the name, surround the name with quotes like `v:"Repeat Index"`

#### Using Variables

Variables can be used directly as a field value to an action or they can be put within strings or barlists (more info below).

```coffeescript
Text mv:MyMagicVariable
Text "Backslash parenthesis are used to put a variable inside text, like \(v:ThisVariable)."
```

```javascript
Text
| The same is used for \(v:Variables) in barlists.
```

#### Setting Variables

Named variables are set just like how they are in shortcuts, using the [SetVariable](actions/setvariable) action. For example,

```coffeescript
Text "My text"
SetVariable "MyVariable"

# now you can use it
ShowResult "My text is \(v:MyVariable)"
```

Magic variables are magical and don't require an action to set. Instead you use the `->` arrow set syntax to say that the action is magical.

```coffeescript
Text "My text" -> mv:Magic

# now you can use it
ShowResult "Magic! \(mv:Magic)"
```

You cannot set special variables, they are special.

## Field Types

Shortcuts has many different field types, for each field type there are many ways you can write them in shortcutslang

### Text Field

Many actions have text fields of different sizes. The [Text](actions/text) action has a multiline text field, and the [Save file](actions/savefile) action has a single line text field to enter a destination path.

Text fields can be used with strings and multiline text fields can also be made with barlists

```javascript
Text "This is a text field with a string"

Text
| This is a multiline text field using a barlist.
| This is the second line
| This is a variable: \(v:MyVariable)
```


Some text fields do not allow variables, such as the [Comment](actions/comment) action.

```javascript
Comment
| This text field does not allow variables
```

```coffeescript
Comment
| \(v:Variable) # Not Allowed
```

Actions shown: [Text](actions/text) | [Comment](actions/comment)

### Enum (Select) Field

An Enum Field has a list of options to choose from, such as the Condition field in [if](actions/if) or the operator field in [calculate](actions/calculate).

```coffeescript
Calculate "+" 1
```

If you enter a value that is not allowed, shortcutslang will throw an error. Unlike action names, enum fields are case and space sensitive and must be exact.

Some enum fields allow variables, and some do not.

```coffeescript
Calculate v:Operand 3
```

Actions shown: [Calculate](actions/calculate)

If an enum field does not allow variables, it will error when you try to use a variable.

Enum fields cannot have mixed text and variables, so `"\(v:Not) Equals"` is never allowed.

### Number Field

Number fields accept a number.

```coffeescript
Number 29.5
```

Negative numbers require quotes around them, like

```coffeescript
Number "-924"
```

```coffeescript
Number -924 # Syntax Error, Not Allowed
```

Similar to Enum fields, Number fields cannot have mixed text and variables.

```coffeescript
Number v:MyVariable
```

```coffeescript
Number "-\(v:MyVariable)" # Not Allowed
```

Actions shown: [Number](actions/number)

### Stepper Number Fields

Stepper number fields are like number fields but can only have positive integer numbers (no decimals)

```coffeescript
Repeat 5
  ShowResult "Hi"
End Repeat
```

```coffeescript
Repeat 5.5 # Not allowed
  ShowResult "Hi"
End Repeat
```

Actions shown: [Repeat](actions/repeat)

### Slider Number Fields

Slider number fields are like number fields but can only have numbers from 0 to 1

```coffeescript
SetBrightness 0.5
```

```coffeescript
SetBrightness 1.1 # Not Allowed
```

Actions shown: [SetBrightness](actions/setbrightness)

### Variable Picker Fields

Variable picker fields can have a variable.

```coffeescript
GetVariable v:MyVariable
```

```coffeescript
GetVariable "MyVariable" # Not Allowed
```

Actions shown: [getvariable](actions/getvariable)

###  Switch (or Expanding or Boolean) Fields

Switch fields can have a true or false value. True is on and false is off.

```coffeescript
SetWifi true
SetAirplaneMode false
```

```coffeescript
SetWifi yes # Not Allowed, must be true or false
SetAirplaneMode no # Not Allowed, must be true or false
```

Some switch fields allow variables

```coffeescript
SetWifi v:Wifi
```

Actions shown: [SetWifi](actions/setwifi) | [List](actions/setairplanemode)

### Dictionary Field

Dictionary fields are written like JSON

```coffeescript
Dictionary{
	"key": "value",
	"variable": v:myVariable,
	"list": ["item 1", "item 2"],
	"dictionary": {"key": "value"}
}
```

Quotes and commas are not required and `=` can be used instead of `:` if wanted

```coffeescript
Dictionary{
	key = value
	variable = v:myVariable
	list =  ["item 1", "item 2"]
	dictionary = {key = value}
}
```

Actions shown: [Dictionary](actions/dictionary)

### List Field

Lists can be made using json-like `[]` syntax.

```coffeescript
ChooseFromMenu "Pick an item" ["item 1", "item 2"]
case 1
case 2
end menu
```

Similar to dictionaries, lists do not require commas and can span over multiple lines

```coffeescript
ChooseFromMenu "Pick an item" [
	"MyFirstItem"
	"MySecondItem"
]
case First
case Second
end menu
```

Lists can also be made using barlists.

```javascript
List
| My First Item
| My Second Item
```

Actions shown: [ChooseFromMenu](actions/choosefrommenu) | [List](actions/list)

### Variable Field

(Different from Variable Picker Fields)

Variable fields is the field used in [SetVariable](actions/setvariable) to enter a variable name. They can be made using strings or v: variables.

```
SetVariable "MyNamedVariable"
SetVariable v:MyNamedVariable
```

### Other Fields

There are other fields, most are very similar to similar fields like the Storage Service Picker is very similar to the Enum field.

## Advanced Features

Shortcutslang has some more advanced features to make working on large shortcuts easier

### Actions inside actions

You can put an action inside of a text field or any other field that accepts variable

```coffeescript
Text "My number is \(Number "-2.5")"
```

This code is equivalent to

```coffeescript
Number "-2.5" -> mv:InsideParenthesis
Text "My number is \(mv:InsideParenthesis)"
```

None of these magic variables actually get a name, they just directly reference the action.

You can even use actions inside other actions this without disrupting the action input

```coffeescript
Text "Hello"
If Equals (Text "Goodbye")
	ShowResult "If the action input was disrupted, this would run"
Otherwise
	QuickLook
End If
```

is equivalent to writing out

```coffeescript
Text "Hello" -> mv:OriginalInput
Text "Goodbye" -> mv:ArgumentValue
GetVariable mv:OriginalInput
If Equals mv:ArgumentValue
	ShowResult "If the action input was disrupted, this would run"
Otherwise
	QuickLook # Shows "Hello"
End If
```

Actions shown: [Text](actions/text) | [GetVariable](actions/getvariable) | [If](actions/if) | [QuickLook](actions/quicklook) | [Number](actions/number)

### InputArg

Sometimes you want to disrupt the input, you can use an InputArg

```coffeescript
Text "Some text"
QuickLook ^(Text "Different text")
```

is the same as

```coffeescript
Text "Some text"
Text "Different text"
QuickLook
```

Actions shown:  [Text](actions/text) | [QuickLook](actions/quicklook)

### Variable Aggrandizements

When you tap a variable in Shortcuts, a menu pops up containing different actions. Those are called Aggrandizements.

```coffeescript
GetVariable v:MyVariable{as:Dictionary,key:myKey}
GetVariable v:MyContact{as:Contact,get:Notes}
```

Currently, 3 aggrandizements are supported:

- as/coerce
- key/forKey
- get/getProperty (partial)

Actions Shown: [GetVariable](actions/getvariable)

### Setting Variables

`->` can be used to set more than just magic variables, it can also automatically make SetVariable actions.

```coffeescript
Text "My Text" -> v:MyNamedVariable
```

is equivalent to writing

```coffeescript
Text "My Text"
SetVariable v:MyNamedVariable
```

If you prefer, you can set variables before an action instead of after

```coffeescript
mv:WowMagic = Text "My Text"
```

is exactly the same as using an arrow, except it's in the format `mv:variable = action`

```coffeescript
Text "My Text" -> mv:WowMagic
```

 Actions Shown: [Text](actions/text) |  | [GetVariable](actions/getvariable)

### ArgLists

Actions can usually only take up one line of text, unless you use a barlist. If you have many different arguments, it can be helpful to have actions span multiple lines. You can use an arglist for this.

```coffeescript
getfile a{
  service="iCloud Drive"
  showdocumentpicker=false
  filepath="/myfile.txt"
  errorifnotfound=false
}
```

 Actions shown: [GetFile](actions/getfile)

### Macros

Coming Soon!
