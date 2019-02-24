
## Play Music / playmusic (internally `is.workflow.actions.playmusic`)


> This action requires that Shortcuts has permission to use WFAppleMusicAccessResource,WFMainThreadResource.


## description
### summary
Plays music using the Music app.

### input
The music to be played


### usage
`playmusic shuffle=[string <${strInfo}>] repeat=[string <${strInfo}>]`

### arguments
### Enumeration: Shuffle / shuffle (internally `WFPlayMusicActionShuffle`)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Off`
- `Songs`

---

### Enumeration: Repeat / repeat (internally `WFPlayMusicActionRepeat`)
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `None`
- `One`
- `All`
