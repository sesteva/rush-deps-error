const util = require("util");
const exec = util.promisify(require("child_process").exec);
const fs = require("fs");
const path = require("path");
const { updateRushJsonForLib } = require("./update-rush");
const jsonc = require("jsonc");
const projectRoot = path.join(__dirname, "../..");

function updateLocalProjectName(appName) {
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

function updateLibName(appName) {
  return new Promise((resolve, reject) => {
    try {
      const packageJSON = jsonc.parse(
        fs.readFileSync(
          path.join(
            projectRoot,
            `/shared/${appName}/projects/my-lib/package.json`
          ),
          "utf8"
        )
      );

      const updatedPackageJSON = {
        ...packageJSON,
        name: `@scx/${appName}`,
      };

      fs.writeFileSync(
        path.join(
          projectRoot,
          `/shared/${appName}/projects/my-lib/package.json`
        ),
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
    await updateLocalProjectName(appName);
    console.log("updating package json was a success");
  } catch (error) {
    console.error({ error });
  }

  try {
    await updateLibName(appName);
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
