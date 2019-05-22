
## Street Address / StreetAddress (internally `is.workflow.actions.address`)


## description

### summary

Passes the specified address to the next action.


### usage
```
StreetAddress Line1="string" Line2="string" City="string" State="string" PostalCode="string" Region="string"
```

### arguments

---

### Line1: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"One Apple Park Way"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Line2: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### City: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"Cupertino"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### State: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"California"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### PostalCode: Text [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"95014"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### Region: Country [(Docs)](https://pfgithub.github.io/shortcutslang/gettingstarted#text-field)
**Placeholder**: `"United States"`
**Allows Variables**: true



Accepts a string 
or text
with the text.

---

### source json (for developers)

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
			"Label": "Region",
			"Placeholder": "United States"
		}
	]
}
```
