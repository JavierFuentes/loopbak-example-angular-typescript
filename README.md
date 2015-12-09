# loopback-example-angular-typescript

A simple todo list using AngularJS on the client-side and LoopBack on the
server-side.

```
$ git clone https://github.com/javierfuentes/loopback-example-angular-typescript.git
$ cd loopback-example-angular-typescript
$ npm install
$ node . # then browse to localhost:3000
```

This example is based on official _loopback-example-angular_ from:
```
https://github.com/strongloop/loopback-example-angular.git
```
This is exactly the same example but using Typescript to define the Angular `module` and `controller`

## Additional Prerequisites

```
$ npm install -g typescript
$ npm install -g tsd
```

## Modifications on original sources:

### Persist data
`datasources.json`

```
{
  "db": {
    "name": "db",
    "connector": "memory",
    "file" : "database.json"
  }
}
```

Included "file" parameter to persist data in `database.json`. This file is added in `.gitignore`

### Typescript definitions and transpilation
`tsd.json` added to project.
To compile this file:

```
$ tsd install
...## this generate tsd.d.ts and /typings
```

`client/tsconfig.json` added to project. To compile `.ts` files:

```
$ cd client
$ tsc
```

### Code files added to project


```
/
    tsd.json                    ## References for Typescript Definition files (tsd)
    /client
        tsconfig.json           ## Configuration for Typescript transpiler (tsc)
        /js
            all.ts              ## References for Typescript .ts files
              all.js
              all.js.map
            app.ts              ## Module Angular typescript file
              app.js
              app.js.map
            /controllers
                todo.ts         ## Controller Angular typescript file
                  todo.js
                  todo.js.map
```
