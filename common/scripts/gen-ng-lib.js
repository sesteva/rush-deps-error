const { genAngularLib } = require("../../tools/schematics");
let args = process.argv.slice(2);
const appName = args[1];

async function generate() {
  await genAngularLib(appName);
  console.log("Please run `rush update` at the root of the project");
  console.log(
    "Please update storybook port number in your package.json to something not used across"
  );
  console.log("Thats it, happy coding!");
}

generate();
