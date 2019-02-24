
## Get Item from List / getitemfromlist (internally `is.workflow.actions.getitemfromlist`)



## description
### summary
Returns one or more items from the list passed as input. You can get the first item, the last item, a random item, the item at a particular index, or items in a range of indexes.


### usage
`getitemfromlist get=[string <${strInfo}>] index=[string number] getitemsfromindex=[string number] toindex=[string number]`

### arguments
### Enumeration: Get / get (internally `WFItemSpecifier`)
**Default Value**: First Item
**Allows Variables**: true


Accepts a string 
or variable
containing one of the options:

- `First Item`
- `Last Item`
- `Random Item`
- `Item At Index`
- `Items in Range`

---

### Number: Index / index (internally `WFItemIndex`)
**Placeholder**: 1
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: Get Items From Index / getitemsfromindex (internally `WFItemRangeStart`)
**Placeholder**: optional
**Default Value**: 1
**Allows Variables**: true


Accepts a string 
or variable
with a number.

---

### Number: To Index / toindex (internally `WFItemRangeEnd`)
**Placeholder**: optional
**Allows Variables**: true


Accepts a string 
or variable
with a number.
