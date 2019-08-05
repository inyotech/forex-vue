#!/bin/bash

docker build -t forex-vue .

rm -rf dist
mkdir dist
chmod 755 dist

docker run --rm -it -v $(pwd)/app:/node/app -v $(pwd)/dist:/node/dist forex-vue npm run build