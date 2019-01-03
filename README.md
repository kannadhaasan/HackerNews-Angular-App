# HackerNews

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

I Developed this project using above latest angular version. In this project I am fetching the all the stories using Hacker News api and viewing at the front end. I have implemented following functionalities:
* Search: This feature helps to search the news using title, url, and published by
* Sort: By clicking new label on top of the page in navbar, it sorts out the latest news in the current loaded page. If we click on Story, it goes backs to original state.
* Pagination: To improve performance of appliction, I have implemented pagination so that  it populates specfic number of stories on page load and once we click next, next set of stories appear and it goes on till end the news.

## Deployment
* Download the project using following url: https://github.com/kannadhaasan/HackerNews-Angular-App.git
* Extract the zip at any folder in your local system
* Open the command prompt and direct to project extracted folder
* Run the following commands: npm install, ng serve
* Now you can able to access the project using following URL: http://localhost:4200/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
