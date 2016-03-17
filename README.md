# angular-starter-kit
A simple implementation of Angular to use as a playground or for demos.

Demonstrates:
- Installation and configuration of [AngularJS](https://github.com/angular/angular) alongside [Bootstrap](http://getbootstrap.com/) (without jQuery)
- Routing with [Angular-UI-Router](https://github.com/angular-ui/ui-router) [nested routes](https://github.com/angular-ui/ui-router/wiki/Nested-States-and-Nested-Views)
- Serving with [lite-server](https://github.com/johnpapa/lite-server) and [npm](https://github.com/npm/npm)

## Getting Started
```
npm install
bower install
npm start
```

## State Hierarchy
An abstract parent state `app` defines common HTML components such as layout and navigation.

- app
 - home
 - about
