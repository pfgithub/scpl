# ScPL

ScPL is a text based language for creating shortcuts in the iOS shortcuts app.

[View Documentation](https://pfgithub.github.io/shortcutslang/)

[Getting Started Guide](https://pfgithub.github.io/shortcutslang/gettingstarted.html)

[Try Shortcutslang Online](https://editor.scpl.dev)

```javascript
const {parse, inverse} = require("scpl");

const {shortcutjson, shortcutplist} = parse("text 'hello scpl'", {make: ["shortcutjson", "shortcutplist"]});
// shortcutjson is a json object containing the shortcut file
// shortcutplist is a buffer plist containing the shortcut file

const inverted = inverse(shortcutplist);
// text "hello scpl"
```