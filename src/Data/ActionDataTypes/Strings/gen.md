jsonpath (plus) for:

-   ShortcutsActionAceCommandClass: `$.*.ACECommandClass`
-   ShortcutsActionCategory: `$.*.Category`
-   ShortcutsActionClass: `$.*.ActionClass`
-   ShortcutsActionEnvironments `$.*.UnsupportedEnvironments[*]`
-   ShortcutsActionIconName: `$.*.IconName`
-   ShortcutsActionIdentifier: `$.*~`
-   ShortcutsActionIODataType `$.*[Input,Output].Types[*]`
-   ShortcutsActionParameterClass `$.*.Parameters[*].Class`
-   ShortcutsActionSubcategory: `$.*.Subcategory`
-   ShortcutsActionSupportedUserInterface: `$.*.UserInterfaces[*]`
-   ShortcutsAppIdentifier: `$..AppIdentifier`
-   ShortcutsParameterTextContentType: `$.*.Parameters[*].TextContentType`
-   ShortcutsResourceClass `$..RequiredResources[*][WFResourceClass,@string()]`

Deduplicate and ts format with:
`console.log([...new Set( )].sort().map(c => JSON.stringify(c)).join(" | "))`

Recommendations for updating types:

-   Add `const a: {[key: string]: ShortcutsActionSpec} = ...json data here...`
    and work through errors one by one.
