## Getting an updated Actions plist

(mac only, I haven't figured out how to mount an apfs dmg on linux)

-   Aquire an ipsw file for the latest iOS
-   Extract (by renaming to .zip) (you may need to use the unzip command if
    Archive Utility fails)
-   Mount the largest dmg
-   Open a terminal and cd to the mounted volume
-   Copy
    `./System/Library/PrivateFrameworks/WorkflowKit.framework/WFActions.plist`
    `./System/Library/PrivateFrameworks/WorkflowKit.framework/WorkflowGlyphs.ttf`
    `./System/Library/PrivateFrameworks/WorkflowKit.framework/Assets.car`

---

## Update thse types

Run `node gen.js` (cwd does not matter)

Recommendations for updating types:

-   Add
    `const a: {[key in ShortcutsActionIdentifier]: ShortcutsActionSpec} = ...json data here...`
    and work through errors one by one.

Check in ShortcutsParameterSpec that

```ts
declare const test: ShortcutsParameterSpec;
if(test.Class === "Valulfasln") {
test.__value;
} 
```

works. (You also have to add Valulfasln as |(base & {__value: string})), "Valulfasln"> in the type and add it to parameters thing. If it doesn't work, remove any unused parameter types.