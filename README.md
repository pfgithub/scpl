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

<p>
    ScPL is a programming language for Shortcuts that allows you
    to write shortcuts in text instead of dragging and dropping
    blocks. ScPL lets you work with large shortcuts easily by
    letting you copy and paste actions, view long shortcuts without
    scrolling, and type actions instead of dragging them in.
    <a href="https://docs.scpl.dev/gettingstarted">Get Started</a>
</p>

<pre><code class="scpleditor language-scpleditor">ShowResult "Hello ScPL"
ChooseFromMenu prompt="ScPL" items=["Getting Started", "View Documentation"]
Case "Getting Started"
    URL "https://docs.scpl.dev/gettingstarted"
Case "View Documentation"
    URL "https://docs.scpl.dev/"
End Menu
OpenURLs</code></pre>

<p>See what your shortcut looks like in ScPL by uploading it in the <a href="https://editor.scpl.dev/">ScPL Editor</a>.</p>

<h1 id="whatisscpl">What is ScPL</h1>

<p>
    ScPL lets you write shortcuts in text. Instead of dragging actions
    around on a small screen in a slow app, you can write text like
    <code>ShowResult "My shortcut"</code> to build long and complex
    shortcuts.
</p>

<h1 id="editors">Editors</h1>

<h2 id="webeditor">Web Editor</h2>

<p>
    The ScPL Web Editor (<a href="https://editor.scpl.dev">editor.scpl.dev</a>)
    is the easiest way to write ScPL.
</p>

<h2 id="visualstudiocode">Visual Studio Code</h2>

<p>
    ScPL has a plugin for Visual Studio Code with autocompletion, error messages,
    and hover documentation.
    <a href="https://marketplace.visualstudio.com/items?itemname=pfg.vscode-shortcutslang-extension">VSCode Extension</a>.
</p>

<p>
    To compile your ScPL code you can use the scpl-cli npm package.
    <code>npm install --global scpl-cli</code>. Then you can run
    <code>scpl &lt;filename.scpl&gt; -o &lt;outputfile.shortcut&gt;</code>
</p>

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
