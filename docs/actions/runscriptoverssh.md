
## Run Script Over SSH / RunScriptOverSSH (internally `is.workflow.actions.runsshscript`)

> This action is not yet complete. Some arguments may be missing.


## description

### summary

Runs a script on a remote computer over SSH.


### input

The input passed to the shell script (stdin)


### output

The output from the shell script (stdout)

### usage
```
RunScriptOverSSH host="string" port="string" user="string" authentication=("Password" | "SSH Key" | variable) password="string" undefined=NotImplemented input=(v:myvar | mv:myvar | s:myvar) script="string"
```

### arguments

---

### host: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"192.168.1.100"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### port: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"22"`
**Default Value**: `"22"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### user: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"root"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Does not allow newlines.

---

### authentication: Enumeration [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#enum-select-field)
**Default Value**: `"Password"`


Accepts a string 
containing one of the options:

- `Password`
- `SSH Key`

---

### password: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"••••••••"`
**Allows Variables**: true

**Only enabled if**: argument WFSSHAuthenticationType == `Password`

Accepts a string 
or text
with the text. Does not allow newlines.

---

#### This parameter is not implemented yet.

The parameter type is WFSSHKeyParameter. If you need to use this parameter, you may
be able to use a raw value. Try converting a .shortcut to a .scpl containing
the values you want in this parameter.

---

### input: Variable Picker [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#variable-picker-fields)
**Placeholder**: ```
		Choose Variable
		```
**Allows Variables**: true



Accepts a variable.

---

### script: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Script"`
**Allows Variables**: true



Accepts a string 
or text
with the text. Allows newlines.

---

### source json (for developers)

```json
{
	"ActionClass": "WFRunSSHScriptAction",
	"ActionKeywords": [
		"unix",
		"shell",
		"script",
		"ssh",
		"terminal",
		"linux",
		"mac"
	],
	"Category": "Scripting",
	"Description": {
		"DescriptionInput": "The input passed to the shell script (stdin)",
		"DescriptionResult": "The output from the shell script (stdout)",
		"DescriptionSummary": "Runs a script on a remote computer over SSH."
	},
	"IconName": "Scripting.png",
	"Input": {
		"Multiple": false,
		"ParameterKey": "WFInput",
		"Required": false,
		"Types": [
			"public.data"
		]
	},
	"LastModifiedDate": "2015-01-11T06:00:00.000Z",
	"Name": "Run Script Over SSH",
	"Output": {
		"Multiple": false,
		"OutputName": "Shell Script Result",
		"Types": [
			"public.data"
		]
	},
	"ParameterSummary": "Run script over SSH",
	"Parameters": [
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFSSHHost",
			"KeyboardType": "URL",
			"Label": "Host",
			"Placeholder": "192.168.1.100",
			"TextAlignment": "Right",
			"TextContentType": "URL"
		},
		{
			"Class": "WFTextInputParameter",
			"DefaultValue": "22",
			"Key": "WFSSHPort",
			"KeyboardType": "NumberPad",
			"Label": "Port",
			"Placeholder": "22",
			"TextAlignment": "Right"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"DoNotLocalizeValues": true,
			"Key": "WFSSHUser",
			"Label": "User",
			"Placeholder": "root",
			"TextAlignment": "Right",
			"TextContentType": "Username"
		},
		{
			"Class": "WFEnumerationParameter",
			"DefaultValue": "Password",
			"DisallowedVariableTypes": [
				"Ask",
				"Variable"
			],
			"Items": [
				"Password",
				"SSH Key"
			],
			"Key": "WFSSHAuthenticationType",
			"Label": "Authentication",
			"RequiredResources": [
				{
					"WFRelation": "!=",
					"WFResourceClass": "WFWorkflowEnvironmentResource",
					"WFWorkflowEnvironment": "HomeResident"
				}
			]
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFSSHPassword",
			"Label": "Password",
			"Placeholder": "••••••••",
			"RequiredResources": [
				{
					"WFParameterKey": "WFSSHAuthenticationType",
					"WFParameterValue": "Password",
					"WFResourceClass": "WFParameterRelationResource"
				}
			],
			"SecureTextInput": true,
			"TextAlignment": "Right",
			"TextContentType": "Password"
		},
		{
			"Class": "WFSSHKeyParameter",
			"Key": "WFSSHKey",
			"Label": "SSH Key",
			"RequiredResources": [
				{
					"WFParameterKey": "WFSSHAuthenticationType",
					"WFParameterValue": "SSH Key",
					"WFResourceClass": "WFParameterRelationResource"
				},
				{
					"WFRelation": "!=",
					"WFResourceClass": "WFWorkflowEnvironmentResource",
					"WFWorkflowEnvironment": "HomeResident"
				}
			]
		},
		{
			"Class": "WFVariablePickerParameter",
			"Key": "WFInput",
			"Label": "Input",
			"Placeholder": "Choose Variable"
		},
		{
			"AutocapitalizationType": "None",
			"Class": "WFTextInputParameter",
			"DisableAutocorrection": true,
			"Key": "WFSSHScript",
			"Label": "Script",
			"Multiline": true,
			"Placeholder": "Script"
		}
	],
	"ResidentCompatible": true,
	"ShortName": "Run SSH Script",
	"Subcategory": "Shell",
	"SuggestedNever": true
}
```
