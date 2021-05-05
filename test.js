const { exec } = require("child_process");
let constants = ["test", "shoop"]
let x = []
exec("git diff origin/main HEAD", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
    x = "stdout"
});
console.log(x)
