
## Get Weather Forecast / getweatherforecast (internally is.workflow.actions.weather.forecast)

> This action is not yet complete. Some arguments may be missing.


> This action requires that Shortcuts has permission to use WFWeatherAttributionAccessResource,WFLocationAccessResource.

### usage
`getweatherforecast at=[string <${strInfo}>|variable] undefined=[???] type=[string <${strInfo}>]`

### arguments
### Enumeration: At / at (internally WFWeatherLocation)
**Default Value**: Current Location


Accepts a string 
containing one of the options:

- `Current Location`
- `Custom Location`
---
This paramtype is not implemented. WFLocationFieldParameter
---
### Enumeration: Type / type (internally WFWeatherForecastType)
**Default Value**: Daily
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `Hourly`
- `Daily`
