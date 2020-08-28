## Setup

Prerequisites

- Node v 12-14
- NVM (nvm install --lts) https://github.com/nvm-sh/nvm#nvmrc
- Yarn or NPM or Pnpm

## Setup - Step 1

    git clone [url] repo
    cd frontend

## Setup - Step 2 - Global Dependencies

Setup the correct version of Node inside the project's folder

    nvm install --lts
    nvm use

If you want to set node LTS globaly

    nvm alias default 12.8

Install PNPM, RUSHJS and Angular-cli

    npm i -g add pnpm @microsfot/rush @angular/cli

Install deps

    rush update

## Things you should know

1. The project is setup to make sure all projects use the same version of the libraries.
   There is a way to provide exceptions via configuration.

2. Avoid using npm or yarn or pnpm directly. Instead using rush cli.

## Why pnpm over npm or yarn ?

Short answer:
• Fast. As fast as npm and Yarn.
• Efficient. One version of a package is saved only ever once on a disk.
• Great for monorepos.
• Strict. A package can access only dependencies that are specified in its package.json.
• Deterministic. Has a lockfile called pnpm-lock.yaml.
• Works everywhere. Works on Windows, Linux and OS X.
• Solves phantom dependencies problem

Long answer:

- https://rushjs.io/pages/advanced/phantom_deps/
- https://rushjs.io/pages/advanced/npm_doppelgangers/
- https://pnpm.js.org/en/motivation
- https://rushjs.io/pages/maintainer/package_managers/
- https://medium.com/better-programming/the-case-for-pnpm-over-npm-or-yarn-2b221607119

## Dev Workflows

## The Full TDD dev experience

I'm a dev working on App A, I want to:

- run my App locally,
- continously run my E2E tests
- continously build the reusable components library in case I want to change something,
- run Storybook locally to see all reusable components vriations.

Having our shared component rebuild automatically is a must have. This removes friction if we want to create a reusable component as there is not additional repo or cognitive change cost.

If we change or create a reusable component, we might want to have Storybook with live reload so we can visualize variations.

It would be fantastic if we know we have not broken any of the essentials flows of the app.
Having E2E tests continously running with Cypress console might come useful.

In order to do it, a single command at the root of the project is all we need:

        rush dev

If you would like to create additional flows, checkout the 'common/config/rush/command-line.json' and the documentation https://rushjs.io/pages/configs/command-line_json/

## The Focused fellow

I'm a dev working on App A, I just need to run my App.

    cd app/app-a
    rushx dev

I'm a dev working on reusable components only. You might want to continously build the package and run storybook with hot reload:

Terminal 1:

    cd tools/storybook
    rushx dev

Terminal 2:

    cd libs/ui-core
    rushx dev

You might have picked up the idea. Just go into the proper folder and run whatever command available in the package.json. Simply use "rushx" with it.

## The CI

    TBD

if you would like to create a flow, checkout the 'common/config/rush/command-line.json' and the documentation https://rushjs.io/pages/configs/command-line_json/

## Commons Tasks

### Add a depedency to an App

    cd app/app-a
    rush add --package xstate

If any other projects in the repo are using "xstate", you can update them all to "1.2.3" in bulk:

    cd app/app-a
    rush add -p xstate@1.2.3 --make-consistent

Note we have used the the shorthand -p instead of --package

If you need a devDep, add --dev flag

## Update a dependency

Same process as adding a dependency

## Create a new angular app

    rush gen-angular --name myapp

Behind the scenres:

- This will create a new app inside the app's folder using the ng cli.
- Then it will clean up unncessary files such as .gitignore.
- It will also generate an E2E project using Cypress
- It will update rush.json to include the new app and the E2E project.

Once it is done, please run `rush update` to install all deps.

Until we automate this, you need to make two small changes on your apps

In package.json

- update dev script adding `-p 5001` , choose a unique port per app
- update rollup config livereload to add new port per app `!production && livereload({ watch: "public", port: 35730 }),`

## Create a new shared component

## Potential Problems

### pnpm does not work with <LIB-NAME-HERE>?

Follow these solutions https://pnpm.js.org/en/faq#pnpm-does-not-work-with-your-project-here

### Linking of a new package doesnt work

Make sure you have defined the version number in both package.json files.

    rush update --full

### Weird unkown situation

    rush purge
    rush update --full

## Additional Info on the Monorepo tooling

https://rushjs.io
https://rushstack.io/pages/contributing/get_started/

## Suggestions ? Conventions ?

Use HSL insted of HEX to define colors

- More to come on the standards Atlassian wiki
