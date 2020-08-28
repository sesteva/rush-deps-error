const genSvelte = require("./gen-svelte");
const genE2E = require("./gen-e2e");
const genSapper = require("./gen-sapper");
const genAngular = require("./gen-ng");
const genAngularLib = require("./gen-ng-lib");
const rush = require("./update-rush");
module.exports = {
  genSvelte,
  genE2E,
  genSapper,
  genAngular,
  genAngularLib,
  rushUpdate: rush.rushUpdate,
};
