# Introduction

This is a test client for using [Webapi-starter](https://github.com/angular-bbs/webapi-starter).

1. Angular version: Angular 2 RC5
1. Interface is made with: [ng-semantic](https://github.com/vladotesanovic/ngSemantic) and [semantic-ui](http://semantic-ui.com/).
   Note: ng-semantic does not support RC5's NgModule, so it is now temperarily declared in UserModule.
1. It has one key module: userModule, its sole purpose is to communicate and utilize the apis provided by [Webapi-starter](https://github.com/angular-bbs/webapi-starter).

Note: Replace the ClientId in the url for `Login with Github` with your own ClientId.

# Angular Cli Instructions

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.11-webpack.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
