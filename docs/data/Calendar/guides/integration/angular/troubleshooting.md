# Troubleshooting Bryntum Calendar with Angular

## Installing, building or running

If you face any issues building or running examples or your application, such issues can be often resolved by the
project cleanup procedure.

Run these commands in application folder for package cache cleanup, removing installed packages and reinstalling all
project dependencies:

<div class="docs-tabs" data-name="cleanup">
<div>
    <a>MacOS/Linux</a>
    <a>Windows</a>
</div>
<div>

<strong>npm</strong>

```shell
$ npm cache clean --force
$ rm -rf node_modules
$ rm package-lock.json
$ npm install
```

<strong>yarn</strong>

```shell
$ yarn cache clean
$ rm -rf node_modules
$ rm package-lock.json
$ yarn install
```

</div>
<div>

<strong>npm</strong>

```shell
$ npm cache clean --force
$ rmdir node_modules /s /q
$ del package-lock.json
$ npm install
```

<strong>yarn</strong>

```shell
$ yarn cache clean
$ rmdir node_modules /s /q
$ del package-lock.json
$ yarn install
```
</div>
</div>

## The Bryntum Calendar bundle was loaded multiple times

```text
The Bryntum Calendar bundle was loaded multiple times by the application.
```

The error above usually means that somewhere you have imported both the module and UMD versions of the Bryntum Calendar 
package. Inspect the code and import from a single version of the Bryntum Calendar bundle. We recommend using the default
module of the `@bryntum/calendar` package (points to the module bundle):

```javascript
import { Calendar } from '@bryntum/calendar';
```

For more information on other causes of the error, please see
[this guide](#Calendar/guides/gettingstarted/es6bundle.md#troubleshooting).

When using Angular 9+ lazy-loading with dynamic imports you may also get runtime error, but with a different cause. The
solution for this issue is to change target from `ESNext` to `CommonJS` in the `compilerOptions` section of the
`tsconfig.json` file.

## A property added to calendarConfig has no effect

If you have added a new property, for example `listeners` to the configuration object, make sure that you also have
added it to the component template, for example:

```html
<bryntum-calendar>
    [listeners] = "calendarConfig.listeners"
</bryntum-calendar>
```

Angular does not process `calendarConfig` file as a whole but we need to use individual properties in the template.

## JavaScript heap out of memory

"JavaScript heap out of memory" error occurs on large projects where the default amount of memory allocated by node is
not sufficient to complete the command successfully.

You can increase this amount by running the following command:

**For Linux/macOS:**

```shell
export NODE_OPTIONS=--max-old-space-size=8192
```

**For Windows powershell:**

```shell
$env:NODE_OPTIONS="--max-old-space-size=8192"
```

Alternatively you can increase the amount of memory by adding the following
`NODE_OPTIONS='--max-old-space-size=8192'` config to `scripts` section in **package.json** file:

**For example change used build script:**

```json
{
  "scripts": {
    "build": "your-build-script"
  }
}
```

**to:**

```json
{
  "scripts": {
    "build": "cross-env NODE_OPTIONS='--max-old-space-size=8192' your-build-script"
  }
}
```

To apply this environment config you need `cross-env` npm library which can be installed to devDependencies with:

```shell
nmp install cross-env --save-dev
```

## Legacy peer dependencies

When you use **npm** v7 or above to install application, it checks that application dependencies have valid versions
compared to the other packages used.

If you want change some dependency version you may use
[npm-shrinkwrap](https://docs.npmjs.com/cli/v9/commands/npm-shrinkwrap) for this to set the valid version you want.

Another approach is to install other dependency packages for new **npm** versions above v7 with the
`--legacy-peer-deps` config flag enabled. Please read information in
[npm documentation](https://docs.npmjs.com/cli/v9/using-npm/config#legacy-peer-deps).

**Example:**

Create **.npmrc** in application folder with the following code:
```
legacy-peer-deps=true
```

This will allow using `npm install` without errors.

<div class="note">

We recommend upgrading your application to use a newer framework version instead of working around it. This will help to resolve issues with outdated
peer dependencies

</div>



<p class="last-modified">Last modified on 2023-05-26 9:24:35</p>