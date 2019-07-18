<p align="center">
  <a href="" rel="noopener">
 <img height=200px src="https://i.imgur.com/vIVZPVg.png" alt="Project logo"></a>
</p>

<h3 align="center">ScPL</h3>

<div align="center">

[![Build Status](https://travis-ci.org/pfgithub/scpl.png)](https://travis-ci.org/pfgithub/scpl) [![codecov](https://codecov.io/gh/pfgithub/scpl/branch/master/graph/badge.svg)](https://codecov.io/gh/pfgithub/scpl) [![discord](https://img.shields.io/discord/581979006463639565.svg?logo=discord&color=blue)](https://discord.gg/2qqfFKc)

</div>

---

<p align="center"> ScPL is a programming language for writing iOS Shortcuts in text.
    <br> 
</p>

## About <a name="about"></a>
ScPL is a programming language that generates Shortcuts , allowing you to write long complex shortcuts in text instead of dragging and dropping blocks. ScPL lets you work with large shortcuts easily by letting you copy and paste actions, view long shortcuts without scrolling, and type actions instead of dragging them in.

## Getting Started
Get Started using ScPL to write shortcuts on the [getting started page](https://docs.scpl.dev/gettingstarted).

## Usage (in other Javascript projects) <a name="usage"></a>

`npm install --save scpl` or `yarn add scpl`

```typescript
const {parse, inverse} = require("scpl");
 
const {shortcutjson, shortcutplist} = parse("text 'hello scpl'", {make: ["shortcutjson", "shortcutplist"]});
// shortcutjson is a json object containing the shortcut file.
// shortcutplist is a buffer containing the shortcut file bplist.
 
const inverted = inverse(shortcutplist);
// text "hello scpl"
```

## Contributing <a name="contributing"></a>

### Prerequisites
ScPL uses yarn for package management. [Install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)

### Installing

```
git clone https://github.com/pfgithub/scpl.git
cd scpl
yarn install
```

The ScPL repository does not have any tools for converting ScPL code to .shortcut files. That can be found in the [scpl-editor](https://github.com/pfgithub/scpl-editor) or the [scpl-cli](https://github.com/pfgithub/scpl-cli) projects.

### Running tests <a name="tests"></a>

```
yarn test
```

ScPL tests using Jest and automatically generates coverage reports. You can use the coverage report lcov file in `coverage/lcov.info` to set your editor to show test coverage.

### Before making a pull request

```
yarn prepublishOnly
```

prepublishOnly will automatically format your code using prettier and make sure tests pass.

## Acknowledgements <a name="acknowledgement"></a>
- [xAlien95](https://github.com/xalien95/) for finding the actions plist file within the shortcuts ipa and manually making lists of all the variable types and aggrandizements.
- [Shortcuts JS](https://github.com/joshfarrant/shortcuts-js) for the complete shortcut glyph and color list.
