
## Run Script Over SSH / runscriptoverssh (internally `is.workflow.actions.runsshscript`)



## description
### summary
Runs a script on a remote computer over SSH.

### input
The input passed to the shell script (stdin)

### output
The output from the shell script (stdout)

### usage
`runscriptoverssh host=[string|text] port=[string|text] user=[string|text] password=[string|text] script=[string|text]`

### arguments
### Text Input: Host / host (internally `WFSSHHost`)
**Placeholder**: 192.168.1.100
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Port / port (internally `WFSSHPort`)
**Placeholder**: 22
**Default Value**: 22
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: User / user (internally `WFSSHUser`)
**Placeholder**: root
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Password / password (internally `WFSSHPassword`)
**Placeholder**: ••••••••
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Script / script (internally `WFSSHScript`)
**Placeholder**: Script
**Allows Variables**: true


Accepts a string 
or text
with the text.
