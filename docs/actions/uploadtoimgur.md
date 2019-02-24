
## Upload to Imgur / uploadtoimgur (internally `is.workflow.actions.imgur.upload`)


> This action requires that Shortcuts has permission to use [object Object].

### usage
`uploadtoimgur uploadanonymously=[string|variable] directlink=[string|variable] createalbum=[string|variable] albumlayout=[string <${strInfo}>] albumprivacy=[string <${strInfo}>] title=[string|text] description=[string|text]`

### arguments
### Switch: Upload Anonymously / uploadanonymously (internally `WFImgurAnonymous`)
**Default Value**: true
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Switch: Direct Link / directlink (internally `WFImgurDirectLink`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Switch: Create Album / createalbum (internally `WFImgurAlbum`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Album Layout / albumlayout (internally `WFImgurAlbumLayout`)
**Default Value**: Blog
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Blog`
- `Grid`
- `Horizontal`
- `Vertical`

---

### Enumeration: Album Privacy / albumprivacy (internally `WFImgurAlbumPrivacy`)
**Default Value**: Hidden
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Public`
- `Hidden`
- `Secret`

---

### Text Input: Title / title (internally `WFImgurTitle`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or text
with the text.

---

### Text Input: Description / description (internally `WFImgurDescription`)
**Placeholder**: Description
**Allows Variables**: true


Accepts a string 
or text
with the text.
