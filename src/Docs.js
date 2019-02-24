const {actionsByName} = require("./ActionData.js");
const actionName = process.argv[2];

console.log(actionsByName[actionName].genDocs());
