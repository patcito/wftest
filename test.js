const { execSync } = require("child_process");
let constants = ["test", "shoop"]
let x = execSync("git diff origin/main HEAD").toString()
console.log(x)
