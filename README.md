# Node, Express and Webpack App, With Development and Production Builds

# An Express-Webpack application

Date: 15/07/2020
Working as of: 15/07/2020

I really struggled in the past when I was learning Node. How to get Node, Babel and Webpack working together. 
I have recently found this tutorial from Ben Grunfeld. 
Hope this helps you.

Either clone this project or create your own manually using the following steps.
Or use Bens tutorial. 
(https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334)

Thanks to Ben Grunfield for the setup: 
- LinkedIn (https://www.linkedin.com/in/bengrunfeld/)
- Twitter @bengrunfeld

## An Express-Webpack application with Hot Module Reloading, Linting, and Unit Testing with Jest.

### Modules: 
- Express — server
- Webpack 4 — bundling
- Jest — testing
- Babel — ES6+ transpilation
- ESlint — Linting

- Webpack Dev Middleware — Bundle code in memory instead of in a file
- Webpack Hot Middleware — Enables Hot Module Reloading (HMR)
- UglifyJS — uglifies code
- mini-css-extract-plugin — minifies CSS

### Installation

- mkdir express-webpack
- cd express-webpack

- npm init -y

### Note: -D = --save-dev

- npm i --save express
- npm i webpack webpack-cli webpack-node-externals -D 
- npm i @babel/core @babel/preset-env babel-loader -D
- npm i html-loader html-webpack-plugin -D
- npm i css-loader file-loader style-loader -D
- npm i mini-css-extract-plugin uglifyjs-webpack-plugin optimize-css-assets-webpack-plugin url-loader -D
- npm i webpack-dev-middleware -D
- npm i webpack-hot-middleware -D
- npm i eslint babel-eslint eslint-loader -Dl by
- npm i jest -D

### The scripts 

```
    "scripts": {
        "test": "jest",
        "coverage": "jest --coverage",
        "buildDev": "rm -rf dist && webpack --mode development --config webpack.server.config.js && webpack --mode development --config webpack.dev.config.js",
        "buildProd": "rm -rf dist && webpack --mode production --config webpack.server.config.js && webpack --mode production --config webpack.prod.config.js",
        "start": "node ./dist/server.js"
        },
        "jest": {
        "moduleNameMapper": {
            "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
            "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
        }
    }
```

- npm test - to run the tests
- npm coverage - for a coverage report

Works Great - many thanks to @bengrunfeld
