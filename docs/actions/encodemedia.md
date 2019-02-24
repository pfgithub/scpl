
## Encode Media / encodemedia (internally `is.workflow.actions.encodemedia`)


### usage
`encodemedia audioonly=[string boolean|variable] format=[string <${strInfo}>] size=[string <${strInfo}>] speed=[string <${strInfo}>] customspeed=[string number] metadata=[string boolean] title=[string|text] artist=[string|text] album=[string|text] genre=[string|text] year=[string|text] artwork=[variable]`

### arguments
### Switch: Audio Only / audioonly (internally `WFMediaAudioOnly`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Format / format (internally `WFMediaAudioFormat`)
**Default Value**: M4A
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `M4A`
- `AIFF`

---

### Enumeration: Size / size (internally `WFMediaSize`)
**Default Value**: Passthrough
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `640x480`
- `960x540`
- `1280x720`
- `1920x1080`
- `HEVC 1920x1080`
- `HEVC 3840x2160`
- `Passthrough`

---

### Enumeration: Speed / speed (internally `WFMediaSpeed`)
**Default Value**: Normal
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `0.5X`
- `Normal`
- `2X`
- `Custom`

---

### Number: Custom Speed / customspeed (internally `WFMediaCustomSpeed`)
**Placeholder**: 1.0
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Expand Arrow: Metadata / metadata (internally `Metadata`)


Accepts a string with either true or false for if this
parameter is expanded or not.

---

### Text Input: Title / title (internally `WFMetadataTitle`)
**Placeholder**: My Great Track
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Artist / artist (internally `WFMetadataArtist`)
**Placeholder**: Nicholas Fryingpan
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Album / album (internally `WFMetadataAlbum`)
**Placeholder**: Abbey Road
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Genre / genre (internally `WFMetadataGenre`)
**Placeholder**: Indie
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Year / year (internally `WFMetadataYear`)
**Placeholder**: 2001
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Variable Picker: Artwork / artwork (internally `WFMetadataArtwork`)
**Allows Variables**: true


Accepts a variable.
