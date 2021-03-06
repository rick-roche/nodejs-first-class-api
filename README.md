# nodejs-first-class-api

My experiments in building a first class REST API with node.js.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Just [Node.JS](https://nodejs.org/); I generally use the LTS which is 8.11.3 at time of writing.

### Installing

Clone the repo and install dependencies

```sh
git clone https://github.com/rick-roche/nodejs-first-class-api.git
cd nodejs-first-class-api
npm i
```

### Running the API

While developing on the project run in dev mode

```sh
npm run start:dev
```

To build and serve the compiled output run

```sh
npm start
```

## Running the tests

Two types of tests are included; unit tests (testing the internals) and integrations tests (testing the exposed interfaces)

### Unit tests

Explain what these tests test and why

```
Give an example
```

### Integration tests

Explain what these tests test and why

```
Give an example
```

### Linting 

The repo makes use of `tslint` and you can lint your code by running

```sh
npm run lint
```

and to automatically fix linting errors for select rules run

```sh
npm run lint:fix
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Node.JS](https://nodejs.org/) - The runtime environment
* [Typescript](http://www.typescriptlang.org/) - JavaScript that scales

## Contributing

Please submit a pull request and get in touch! I use [semantic commits](https://seesparkbox.com/foundry/semantic_commit_messages) so please do the same.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/rick-roche/nodejs-first-class-api/tags). 

## Authors

* **[Rick Roché](https://github.com/rick-roche)** - *Initial work*

See also the list of [contributors](https://github.com/rick-roche/nodejs-first-class-api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* [TypeScript Node Starter](https://github.com/Microsoft/TypeScript-Node-Starter)
* [building-a-node-js-app-with-typescript-tutorial](https://blog.risingstack.com/building-a-node-js-app-with-typescript-tutorial/)
* [10-best-practices-for-writing-node-js-rest-apis](https://blog.risingstack.com/10-best-practices-for-writing-node-js-rest-apis/)
* [restify-project-seed-with-typescript-and-unit-test](http://www.sulhome.com/Blog/9/restify-project-seed-with-typescript-and-unit-test)
* [Start Building Web Apps with KoaJS and TypeScript!](https://medium.com/netscape/start-building-web-apps-with-koajs-and-typescript-366264dec608)
* [Building a RESTful API with Koa and Postgres](http://mherman.org/blog/2017/08/23/building-a-restful-api-with-koa-and-postgres/)
* [Node.js performance vs Hapi, Express, Restify, Koa & More](https://raygun.com/blog/nodejs-vs-hapi-express-restify-koa/)
