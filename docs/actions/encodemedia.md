
## Encode Media / encodemedia (internally is.workflow.actions.encodemedia)

> This action is not yet complete. Some arguments may be missing.

### usage
`encodemedia [???][???][???][???][???][???][???][???][???][???][???][???]`

### arguments
### Switch: Audio Only / audioonly (internally WFMediaAudioOnly)
**Placeholder**: undefined
**Default Value**: false
**Allows Variables**: true


Accepts a string with either true or false
or a variable.
---
### Enumeration: Format / format (internally WFMediaAudioFormat)
**Placeholder**: undefined
**Default Value**: M4A
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `M4A`
- `AIFF`
---
### Enumeration: Size / size (internally WFMediaSize)
**Placeholder**: undefined
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
### Enumeration: Speed / speed (internally WFMediaSpeed)
**Placeholder**: undefined
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
### Number: Custom Speed / customspeed (internally WFMediaCustomSpeed)
**Placeholder**: 1.0
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or variable
with a number.
---
unknown parameter type This paramtype is not implemented. WFExpandingParameter
---
### Text Input: Title / title (internally WFMetadataTitle)
**Placeholder**: My Great Track
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
### Text Input: Artist / artist (internally WFMetadataArtist)
**Placeholder**: Nicholas Fryingpan
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
### Text Input: Album / album (internally WFMetadataAlbum)
**Placeholder**: Abbey Road
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
### Text Input: Genre / genre (internally WFMetadataGenre)
**Placeholder**: Indie
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
### Text Input: Year / year (internally WFMetadataYear)
**Placeholder**: 2001
**Default Value**: undefined
**Allows Variables**: true


Accepts a string 
or text
with the text.
---
### Variable Picker: Artwork / artwork (internally WFMetadataArtwork)
**Placeholder**: undefined
**Default Value**: undefined
**Allows Variables**: true


Accepts a variable.
