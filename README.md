# Verstärker stylelint configuration

To ensure a high an consistent code quality for SCSS/CSS we use stylelint.

[https://stylelint.io/](https://stylelint.io/)

## Install

Use NPM to install the Stylelint config to your project.

### Install current version

Check this repo for the different configs and install the plugins accordingly. (Vue, TypeScript, etc.)

```shell
npm install 'git+ssh://git@github.com:verstaerker/stylelint-config-verstaerker.git' stylelint --save-dev
```

### Setup

In the root of your project add a `stylelint.config.js` file and add the following content to enable this config for your project.

```js
// stylelint.config.js

export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-verstaerker/index.js',
  ],
  rules: {
    // Project related rules
  }
}

```

### Create --fix config

It is recommended to have a separate `--fix` config, that uses some additional rules (e.g. for property order) to hide non-blocking issues from the user but auto apply them on git hooks.

1. Create an additional `stylelint.fix.js` file

```js
// stylelint.fix.js

export default {
  extends: [
    'stylelint-config-verstaerker/fix',
    './.stylelintrc.js'
  ],
};
```

**NOTE: using `--config` in the fix command will disable the auto-merging of nested stylelint configurations.** It therefore is recommended to move folder specific conigurations to the `overrides` section of the base configuration.

```js
export default {
  overrides: [
    {
      files: ['src/styleguide/routes/**/*.*'],
      rules: {
        'selector-class-pattern': null,
      }
    }
  ]
};
```

2. Add a `package.json` script, if you want to test manually.

```json
{
  "lint:stylelint": "stylelint --config stylelint.config.js 'resources/styles/**/*.?(scss|css|vue)'",
  "fix:stylelint": "stylelint --cache=false --config stylelint.fix.js --fix 'resources/styles/**/*.?(scss|css|vue)'"
}
```

## Use

Now you're ready to enable Stylelint in your editor or use it on the command line!

### PhpStorm

Go to `PhpStorm > Preferences` and search for Stylelint or navigate to `Languages & Frameworks > Stylesheets > Stylelint` and enable it.
