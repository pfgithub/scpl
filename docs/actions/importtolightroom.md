
## Import to Lightroom / importtolightroom (internally `is.workflow.actions.lightroom.import`)

> This action is not yet complete. Some arguments may be missing.


### usage
`importtolightroom applypreset=[string boolean|variable] presetgroup=[string <${strInfo}>] undefined=[???]`

### arguments
### Switch: Apply Preset / applypreset (internally `applyPreset`)
**Allows Variables**: true


Accepts a string with either true or false
or a variable.

---

### Enumeration: Preset Group / presetgroup (internally `presetGroup`)
**Default Value**: Color
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `B&W`
- `Color`
- `Creative`
- `Curve`
- `Grain`
- `Sharpening`
- `Vignetting`

---

This paramtype is not implemented. WFLightroomPresetPickerParameter
