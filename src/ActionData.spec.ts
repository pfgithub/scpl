import { getActionFromID } from "./ActionData";

const action = (id: string) => {
	const act = getActionFromID(id);
	if (!act) {
		throw new Error(`!act ${id}`);
	}
	return act;
};

test("autocomplete usage generation on a few actions", () => {
	expect(
		action("is.workflow.actions.gettext").genDocsAutocompleteUsage()
	).toBe('Text ${1:"string"}');
});
test("autocomplete usage if", () => {
	expect(action("is.workflow.actions.conditional").genDocsAutocompleteUsage())
		.toBe(`If input=\${1|"Equals","Contains","Is Greater Than","Is Less Than"|} number=\${2:number} value=\${3:"string"}
\t$0
otherwise
end`);
});
test("autocomplete usage get file", () => {
	expect(
		action(
			"is.workflow.actions.documentpicker.open"
		).genDocsAutocompleteUsage()
	).toBe(`GetFile (
\tservice=\${1|"iCloud Drive","Dropbox",variable|},
\tshowDocumentPicker=\${2:(true | false | variable):"true"},
\tselectMultiple=\${3:(true | false | variable)},
\tfilePath=\${4:"string"},
\tinitialPath=\${5:"string"},
\terrorIfNotFound=\${6:(true | false | variable):"true"}
)`);
});
