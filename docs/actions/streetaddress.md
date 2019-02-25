
## Street Address / streetaddress (internally `is.workflow.actions.address`)

> This action is not yet complete. Some arguments may be missing.



## description
### summary
Passes the specified address to the next action.


### usage
`streetaddress a{line1=[string|text] line2=[string|text] city=[string|text] state=[string|text] postalcode=[string|text] undefined=[???]}`

### arguments
### Text: Line 1 / line1 (internally `WFAddressLine1`)
**Placeholder**:
```
One Apple Park Way
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text: Line 2 / line2 (internally `WFAddressLine2`)
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text: City / city (internally `WFCity`)
**Placeholder**:
```
Cupertino
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text: State / state (internally `WFState`)
**Placeholder**:
```
California
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Text: Postal Code / postalcode (internally `WFPostalCode`)
**Placeholder**:
```
95014
```
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

This paramtype is not implemented. WFCountryFieldParameter

### source json

```json
{
	"ActionClass": "WFAddressAction",
	"ActionKeywords": [
		"maps",
		"search",
		"query",
		"place",
		"location",
		"find"
	],
	"AppIdentifier": "com.apple.Maps",
	"Category": "Location",
	"Description": {
		"DescriptionSummary": "Passes the specified address to the next action."
	},
	"InputPassthrough": false,
	"Name": "Street Address",
	"Output": {
		"Multiple": false,
		"OutputName": "Street Address",
		"Types": [
			"WFStreetAddress"
		]
	},
	"Parameters": [
		{
			"AutocapitalizationType": "Words",
			"Class": "WFTextInputParameter",
			"Key": "WFAddressLine1",
			"Label": "Line 1",
			"Placeholder": "One Apple Park Way",
			"TextContentType": "StreetAddressLine1"
		},
		{
			"AutocapitalizationType": "Words",
			"Class": "WFTextInputParameter",
			"Key": "WFAddressLine2",
			"Label": "Line 2",
			"TextContentType": "StreetAddressLine2"
		},
		{
			"AutocapitalizationType": "Words",
			"Class": "WFTextInputParameter",
			"Key": "WFCity",
			"Label": "City",
			"Placeholder": "Cupertino",
			"TextContentType": "AddressCity"
		},
		{
			"AutocapitalizationType": "Words",
			"Class": "WFTextInputParameter",
			"Key": "WFState",
			"Label": "State",
			"Placeholder": "California",
			"TextContentType": "AddressState"
		},
		{
			"Class": "WFTextInputParameter",
			"Key": "WFPostalCode",
			"KeyboardType": "NumbersAndPunctuation",
			"Label": "Postal Code",
			"Placeholder": "95014",
			"TextContentType": "PostalCode"
		},
		{
			"AutocapitalizationType": "Words",
			"Class": "WFCountryFieldParameter",
			"Key": "WFCountry",
			"Label": "Country",
			"Placeholder": "United States"
		}
	]
}
```
