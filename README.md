[![codecov](https://codecov.io/gh/pfgithub/scpl/branch/master/graph/badge.svg)](https://codecov.io/gh/pfgithub/scpl) [![Build Status](https://travis-ci.org/pfgithub/scpl.png)](https://travis-ci.org/pfgithub/scpl)

# ScPL

ScPL is a text based language for creating shortcuts in the iOS shortcuts app.

[View Documentation](https://docs.scpl.dev)

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
