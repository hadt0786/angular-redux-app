# Angular-Redux Example App

This is a sample project showing how the following packages work together to make a simple application.

redux Predictable state container for Javascript.
redux-observable Side-effect handling with Observables
@angular-redux/store Redux + Angular bindings
@angular-redux/router Time travel with the Angular router
@angular-redux/form Time travel with Angular forms

This project demonstartes the use of Redux along with angular 4. Data detched from the service is stored into a redux store in the front-end layer. This data from the redux store is then used for data bindings on HTML pages.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.3.

## Pre-requisites:
1. Install node
2. Install angular CLI

## Steps of use:
1. Clone the project
2. Run command 'npm install'
3. Run command 'npm serve' to serve the project
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.