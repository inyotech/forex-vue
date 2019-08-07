# Foreign exchange rate viewing application

JavaScript SPA (Single Page Application) displaying historic foreign
exchange rates sourced via REST API.

## Implementation

The [Vue.js](https://vuejs.org/) JavaScript framework is used to
download and present foreign exchange rates.  The
[Chart.js](https://www.chartjs.org) library is used for graphical
display.  A CSV download link is also provided.

## Installation

This is a webpack built application.  Docker is used to simplify
nodejs installation.

1. Clone this repository

```
$ git clone https://github.com/inyotech/forex-vue.git
```

2. Excute the build script
```
$ cd forex-vue

$ ./build.sh
```

3. Webpack will compile the JavaScript and artifacts will be produced in the /dist/ directory.  The index.html file should be loadable directly into a browser.

