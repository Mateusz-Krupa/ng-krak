# angular-webpack

[![Dependency Status](https://david-dm.org/preboot/angular-webpack/status.svg)](https://david-dm.org/preboot/angular-webpack#info=dependencies) [![devDependency Status](https://david-dm.org/preboot/angular-webpack/dev-status.svg)](https://david-dm.org/preboot/angular-webpack#info=devDependencies)

A complete, yet simple, starter for Angular using Webpack.

This workflow serves as a starting point for building Angular 1.x applications using Webpack. Should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run unit tests and jasmine as the framework.
* Testing environment using protractor to run e2e tests in protractor.

> Warning: Make sure you're using the latest version of Node.js and NPM
> The code was tested on: 
> npm: 3.10.9 
> node: 7.0.0

### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/Mateusz-Krupa/ng-krak.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start

# start the API
$ npm run api

# run unit tests 
$ npm test 

# run e2e tests 
$ npm e2e 