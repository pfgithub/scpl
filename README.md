# shortcutslang

```bash
yarn install
yarn docs # generate documentation
```

### try it

```bash
# convert ./src/test.shorttxt to ./test.shortcut
node ./src/test.js
# copy ./src/test.shortcut to iCloud/Shortcuts/SHORTCUTBUILDER/test.shortcut
cp ./src/test.shortcut ~/Library/Mobile\ Documents/iCloud\~is\~workflow\~my\~workflows/Documents/SHORTCUTBUILDER
# convert ./src/test.shortcut to XML in ./src/test.xml for debugging
plutil -convert xml1 ./src/test.shortcut -o ./src/test.xml
```
