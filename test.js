const { execSync } = require("child_process");
let constants = ["test","shoop"];
let x = execSync("git diff origin/main HEAD").toString();
let found = {}
let currentFile = ""
x.split("\n").forEach((line) => {
    if(line.includes("diff --git a")){
        currentFile = line.split(" b/")[1]
    }
  constants.forEach((constant) => {
    if (line.includes(constant)) {
      console.log("line includes " + constant, currentFile);
      found[currentFile] = constant
    }
  });
});
Object.keys(found).forEach((key)=>{
    console.log(`Found ${found[key]} in file ${key}`)
})
console.log(found)
