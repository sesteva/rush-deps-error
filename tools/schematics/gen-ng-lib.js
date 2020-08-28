const util = require("util");
const exec = util.promisify(require("child_process").exec);
const fs = require("fs");
const path = require("path");
const { updateRushJsonForLib } = require("./update-rush");
const jsonc = require("jsonc");
const projectRoot = path.join(__dirname, "../..");

function updateAppName(appName) {
  return new Promise((resolve, reject) => {
    try {
      const packageJSON = jsonc.parse(
        fs.readFileSync(
          path.join(projectRoot, `/shared/${appName}/package.json`),
          "utf8"
        )
      );

      const updatedPackageJSON = {
        ...packageJSON,
        name: `@scx/${appName}`,
      };

      fs.writeFileSync(
        path.join(projectRoot, `/shared/${appName}/package.json`),
        jsonc.stringify(updatedPackageJSON, null, "  ")
      );

      resolve();
    } catch (e) {
      throw new Error(e);
    }
  });
}

module.exports = async function genAngularLib(name) {
  const appName = name;
  const installApp = `cd shared && cp -r ../tools/templates/angular-shared-template ${appName}`;

  try {
    const { installStdout, installStderr } = await exec(installApp);
    console.log("creating the app was a success");
  } catch (installStderr) {
    console.error({ installStderr });
  }

  try {
    await updateAppName(appName);
    console.log("updating package json was a success");
  } catch (error) {
    console.error({ error });
  }

  try {
    await updateRushJsonForLib(appName, "shared");
    console.log("updating the monorepo was a success");
  } catch (updateStderr) {
    console.error({ updateStderr });
  }
};
